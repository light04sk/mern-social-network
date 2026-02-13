import { Router } from "express";
import { authentication } from "../authentication/auth.js";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  getUserAllPosts,
  toggleLikePost,
} from "../controllers/postController.js";
import multer from "multer";

const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/post", authentication, upload.single("media"), createPost);
router.get("/posts", getAllPosts);
router.get("/getPost/:postId", getPostById);
router.get("/getUserPosts/:userId", getUserAllPosts);
router.delete("/delete_post/:postId", authentication, deletePost);
router.put("/post/:postId/like", authentication, toggleLikePost);

export default router;
