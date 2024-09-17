import express from "express"
const router  = express.Router()
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import protect from "../middlewares/protectRoute.js"


router.get("/:id", protect ,getMessages)
router.post("/send/:id", protect ,sendMessage)

export default router