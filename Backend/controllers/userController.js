import User from "../models/user.js";
import Profile from "../models/profile.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import PDFDocument from "pdfkit";
import crypto from "crypto";
import fs from "fs";

const cookieOptions = {
  httpOnly: true,
  secure: false,
  sameSite: "Lax",
  maxAge: 24 * 60 * 60 * 1000,
};

const ConvertUserDataToPdf = async (userData) => {
  const doc = new PDFDocument();

  const outputPath = crypto.randomBytes(32).toString("hex") + ".pdf";
  const stream = fs.createWriteStream("uploads/" + outputPath);

  doc.pipe(stream);
  doc.image(`uploads/${userData.userId.profilePicture}`, {
    align: "center",
    width: 100,
  });
  doc.fontSize(14).text(`Name: ${userData.userId.name}`);
  doc.fontSize(14).text(`Username: ${userData.userId.username}`);
  doc.fontSize(14).text(`Email: ${userData.userId.email}`);
  doc.fontSize(14).text(`Bio: ${userData.bio}`);
  doc.fontSize(14).text(`Current Position: ${userData.currentPost}`);

  doc.fontSize(14).text("Past Work:");
  userData.pastWork.forEach((work, index) => {
    doc.fontSize(14).text(`Company Name: ${work.companyName}`);
    doc.fontSize(14).text(`Position : ${work.position}`);
    doc.fontSize(14).text(`Years: ${work.years}`);
    doc.fontSize(14).text(`Location: ${work.location}`);
  });

  doc.end();

  return outputPath;
};

export const register = async (req, res) => {
  try {
    const { name, email, password, username } = req.body;

    if (!name || !email || !password || !username)
      return res.status(400).json({ message: "All fields are required" });

    const user = await User.findOne({
      email,
    });

    if (user) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      username,
    });

    await newUser.save();

    const profile = new Profile({ userId: newUser._id });

    await profile.save();

    return res.json({ message: "User created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: "server error", message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "All fields are required" });

    const user = await User.findOne({
      email,
    });

    if (!user) return res.status(404).json({ message: "User does not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });

    let token = jwt.sign({ userId: user._id }, process.env.JWT_PRIVATE_KEY);
    res.cookie("token", token, cookieOptions);
    return res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: "server error", message: error.message });
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("token", cookieOptions)
    .json({ message: "logged out successfully" });
};

export const uploadPictures = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update profile picture if uploaded
    if (req.files.profile_picture) {
      user.profilePicture = req.files.profile_picture[0].filename;
    }

    // Update cover picture if uploaded
    if (req.files.cover_picture) {
      user.coverPicture = req.files.cover_picture[0].filename;
    }

    await user.save();

    return res.json({
      message: "Profile and/or cover picture updated",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error", message: error.message });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const { ...newUserData } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const { username, email } = newUserData;

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser && String(existingUser._id) !== String(user._id)) {
      return res.status(400).json({ message: "User already exists" });
    }

    Object.assign(user, newUserData);

    await user.save();

    return res.json({ message: "User updated" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getUserAndProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const userProfile = await Profile.findOne({ userId: user._id }).populate(
      "userId",
      "name email username profilePicture coverPicture",
    );

    return res.json(userProfile);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const updateProfileData = async (req, res) => {
  try {
    const { ...newProfileData } = req.body;

    const userProfile = await User.findById(req.user._id);

    if (!userProfile) {
      return res.status(404).json({ error: "User not found" });
    }

    const profileToUpdate = await Profile.findOne({ userId: userProfile._id });

    Object.assign(profileToUpdate, newProfileData);

    await profileToUpdate.save();

    return res.json({ message: "Profile Updated" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getAllUserProfile = async (req, res) => {
  try {
    const profiles = await Profile.find().populate(
      "userId",
      "name username email profilePicture coverPicture",
    );

    return res.json({ profiles });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const downloadProfile = async (req, res) => {
  try {
    const user_id = req.query.id;

    const userProfile = await Profile.findOne({ userId: user_id }).populate(
      "userId",
      "name username email profilePicture coverPicture",
    );

    let outputPath = await ConvertUserDataToPdf(userProfile);

    return res.json({ message: outputPath });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getUserProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({
      user: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
