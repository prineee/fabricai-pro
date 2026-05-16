import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Payment route working",
  });
});

export default router;