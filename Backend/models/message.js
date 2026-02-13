import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    conversation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    message: {
      type: String,
    },
    picture: {
      type: String,
    },
  },
  { timestamps: true },
);

const Message = mongoose.model("Message", MessageSchema);
export default Message;
