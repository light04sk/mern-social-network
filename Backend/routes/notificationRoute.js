import { Router } from "express";
import { authentication } from "../authentication/auth.js";
import {
  activeNotify,
  getNotification,
  updateRead,
} from "../controllers/notificationController.js";

const router = Router();

router.get("/notification", authentication, getNotification);
router.put("/:notificationId/read", authentication, updateRead);
router.get("/activeNotification", authentication, activeNotify);

export default router;
