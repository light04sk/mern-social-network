import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    body: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: {
      type: Number,
      default: 0,
    },
    media: {
      type: String,
      default: "",
    },
    active: {
      type: Boolean,
      default: true,
    },
    filetype: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

const Post = mongoose.model("Post", PostSchema);
export default Post;
