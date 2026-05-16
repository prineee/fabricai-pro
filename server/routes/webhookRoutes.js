import express from "express";

const router = express.Router();

router.post(
  "/stripe",
  (req, res) => {
    console.log(
      "Stripe Webhook Received"
    );

    res.json({
      received: true,
    });
  }
);

export default router;