import Razorpay from "razorpay";

import crypto from "crypto";

import User from "../models/User.js";

const razorpay = new Razorpay({
  key_id:
    process.env.RAZORPAY_KEY_ID,

  key_secret:
    process.env.RAZORPAY_SECRET,
});

export const createOrder =
  async (req, res) => {
    try {
      const options = {
        amount: 499 * 100,
        currency: "INR",
        receipt:
          "fabricai_receipt",
      };

      const order =
        await razorpay.orders.create(
          options
        );

      res.json({
        success: true,
        order,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message:
          "Order creation failed",
      });
    }
  };

export const verifyPayment =
  async (req, res) => {
    try {
      const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      } = req.body;

      const body =
        razorpay_order_id +
        "|" +
        razorpay_payment_id;

      const expectedSignature =
        crypto
          .createHmac(
            "sha256",
            process.env
              .RAZORPAY_SECRET
          )
          .update(body.toString())
          .digest("hex");

      const isAuthentic =
        expectedSignature ===
        razorpay_signature;

      if (!isAuthentic) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid Signature",
        });
      }

      const user =
        await User.findById(
          req.user.id
        );

      user.plan = "pro";

      user.subscriptionStatus =
        "active";

      user.aiLimit = 999999;

      await user.save();

      res.json({
        success: true,
        message:
          "Payment Verified",
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message:
          "Verification Failed",
      });
    }
  };