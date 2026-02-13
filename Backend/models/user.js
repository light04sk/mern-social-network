import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "defaultProfile.jpg",
    },
    coverPicture: {
      type: String,
      default: "defaultCover.jpg",
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", UserSchema);
export default User;
