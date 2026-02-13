import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
  school: {
    type: String,
    default: "",
  },
  degree: {
    type: String,
    default: "",
  },
  fieldOfStudy: {
    type: String,
    default: "",
  },
});

const PastWorkSchema = new mongoose.Schema({
  company: {
    type: String,
    default: "",
  },
  position: {
    type: String,
    default: "",
  },
  years: {
    type: String,
    default: "",
  },
  location: {
    type: String,
  },
});

const ProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    bio: {
      type: String,
      default: "",
    },
    currentPost: {
      type: String,
      default: "",
    },
    currentCompany: {
      type: String,
      default: "",
    },
    currentLocation: {
      type: String,
      default: "",
    },
    skills: {
      type: [String],
      default: [],
    },
    pastWork: {
      type: [PastWorkSchema],
      default: [],
    },
    education: {
      type: [EducationSchema],
      default: [],
    },
  },
  { timestamps: true },
);

const Profile = mongoose.model("Profile", ProfileSchema);
export default Profile;
