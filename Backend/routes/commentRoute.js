import { Router } from "express";
import { authentication } from "../authentication/auth.js";
import {
  commentPost,
  deleteComment,
  getCommentByPostId,
} from "../controllers/commentController.js";

const router = Router();

router.post("/", authentication, commentPost);
router.get("/comment/:postId", getCommentByPostId);
router.delete("/comment/:commentId", authentication, deleteComment);

export default router;
