const express = require("express");

const Razorpay = require("razorpay");

const crypto = require("crypto");

const router = express.Router();

const razorpay =
  new Razorpay({
    key_id:
      process.env.RAZORPAY_KEY_ID,

    key_secret:
      process.env.RAZORPAY_SECRET,
  });


// CREATE ORDER
router.post(
  "/create-order",
  async (req, res) => {
    try {
      const options = {
        amount:
          req.body.amount * 100,

        currency: "INR",
      };

      const order =
        await razorpay.orders.create(
          options
        );

      return res.json(order);
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        success: false,
      });
    }
  }
);


// VERIFY PAYMENT
router.post(
  "/verify-payment",
  async (req, res) => {
    try {
      const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      } = req.body;

      const generated_signature =
        crypto
          .createHmac(
            "sha256",
            process.env
              .RAZORPAY_SECRET
          )
          .update(
            razorpay_order_id +
              "|" +
              razorpay_payment_id
          )
          .digest("hex");

      if (
        generated_signature ===
        razorpay_signature
      ) {
        return res.json({
          success: true,
        });
      }

      return res.json({
        success: false,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        success: false,
      });
    }
  }
);

module.exports = router;