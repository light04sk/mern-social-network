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
      default: "default_profile.jpg",
    },
    coverPicture: {
      type: String,
      default: "default_banner.jpg",
    },
    profileId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", UserSchema);
export default User;
