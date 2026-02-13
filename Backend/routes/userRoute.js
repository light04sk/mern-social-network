import { Router } from "express";
import {
  downloadProfile,
  getAllUserProfile,
  getUserAndProfile,
  getUserProfileById,
  login,
  logout,
  register,
  updateProfileData,
  updateUserProfile,
  uploadPictures,
} from "../controllers/userController.js";
import { authentication } from "../authentication/auth.js";
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

router.post("/register", register);
router.post("/login", login);
router.post("/logout", authentication, logout);
router.put(
  "/update_pictures",
  authentication,
  upload.fields([
    { name: "profile_picture", maxCount: 1 },
    { name: "cover_picture", maxCount: 1 },
  ]),
  uploadPictures,
);
router.post("/user_update", authentication, updateUserProfile);
router.get("/get_user_and_profile", authentication, getUserAndProfile);
router.post("/update_profile_data", authentication, updateProfileData);
router.get("/user/get_all_users", getAllUserProfile);
router.get("/user/:id", getUserProfileById);
router.get("/user/download_resume", downloadProfile);

router.get("/self", authentication, (req, res) => {
  return res.status(200).json({
    user: req.user,
  });
});

export default router;
