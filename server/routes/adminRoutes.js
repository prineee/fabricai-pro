import express from "express";

import { protect } from "../middleware/authMiddleware.js";

import {
  getAdminStats,
  getAllUsers,
  upgradeUserPlan,
  resetUserUsage,
  deleteUser,
} from "../controllers/adminController.js";

const router = express.Router();

router.get(
  "/stats",
  protect,
  getAdminStats
);

router.get(
  "/users",
  protect,
  getAllUsers
);

router.put(
  "/upgrade/:id",
  protect,
  upgradeUserPlan
);

router.put(
  "/reset/:id",
  protect,
  resetUserUsage
);

router.delete(
  "/delete/:id",
  protect,
  deleteUser
);

export default router;