import express from "express";

import {
  createWorkspace,
  inviteMember,
} from "../controllers/workspaceController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/create",
  protect,
  createWorkspace
);

router.post(
  "/invite",
  protect,
  inviteMember
);

export default router;