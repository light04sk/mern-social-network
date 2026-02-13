import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import postRoutes from "./routes/postRoute.js";
import userRoutes from "./routes/userRoute.js";
import notificationRoutes from "./routes/notificationRoute.js";
import commentRoutes from "./routes/commentRoute.js";
import connectionRoutes from "./routes/connectionRoute.js";
import conversationRoutes from "./routes/conversationRoute.js";
import messageRoutes from "./routes/messageRoute.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.static("uploads"));
app.use(postRoutes);
app.use(userRoutes);
app.use(notificationRoutes);
app.use(commentRoutes);
app.use(connectionRoutes);
app.use(conversationRoutes);
app.use(messageRoutes);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
};

start();
