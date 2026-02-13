import { Router } from "express";
import { authentication } from "../authentication/auth.js";
import { getMessage, sendMessage } from "../controllers/messageController.js";

const router = Router();

router.post("/send_message", authentication, sendMessage);
router.get("/message/:convoId", authentication, getMessage);

export default router;
