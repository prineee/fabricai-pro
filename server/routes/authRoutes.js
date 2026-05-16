import express from "express";

import {
  register,
  login,
  forgotPassword,
  resetPassword,
  getProfile,
  updateProfile,
} from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Auth route working",
  });
});

router.post("/register", register);

router.post("/login", login);

router.post(
  "/forgot-password",
  forgotPassword
);

router.post(
  "/reset-password/:token",
  resetPassword
);

router.get("/profile", protect, getProfile);

router.put(
  "/profile",
  protect,
  updateProfile
);

export default router;