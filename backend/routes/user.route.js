import express from "express"
import protect from "../middlewares/protectRoute.js"
import { getUsersForSidebar } from "../controllers/user.controller.js"
const router = express.Router()

router.get("/",protect,getUsersForSidebar)


export default router