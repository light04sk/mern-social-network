import { Router } from "express";
import { authentication } from "../authentication/auth.js";
import {
  addConversation,
  getConversation,
} from "../controllers/conversationController.js";

const router = Router();

router.post("/add_conversation", authentication, addConversation);
router.get("/get_conversation", authentication, getConversation);

export default router;
