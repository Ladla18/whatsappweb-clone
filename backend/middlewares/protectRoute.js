import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const protect = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
        return res
        .status(401)
        .json({ success: false, message: "Please login to access this route" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
    const user = await User.findById(decoded.userId)
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }
    req.user = user;
    next()
  } catch (error) {
    console.error("protectRoute.js", " :: Error ❌ : ", error);
  }
};

export default protect;
