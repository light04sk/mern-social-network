import mongoose from "mongoose";

const ConnectionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    connectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: Boolean,
      default: null,
    },
  },
  { timestamps: true },
);

const Connection = mongoose.model("Connection", ConnectionSchema);
export default Connection;
