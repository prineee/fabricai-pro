const express = require("express");

const Razorpay = require("razorpay");

const crypto = require("crypto");

const User =
  require("../models/User");

const Subscription =
  require("../models/Subscription");

const router = express.Router();


const razorpay =
  new Razorpay({
    key_id:
      process.env
        .RAZORPAY_KEY_ID,

    key_secret:
      process.env
        .RAZORPAY_SECRET,
  });



/* CREATE ORDER */
router.post(
  "/create-order",
  async (req, res) => {

    try {

      const { amount } =
        req.body;

      const options = {
        amount:
          amount * 100,

        currency: "INR",
      };

      const order =
        await razorpay.orders.create(
          options
        );

      res.json(order);

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Order Failed",
      });

    }

  }
);



/* VERIFY PAYMENT */
router.post(
  "/verify-payment",
  async (req, res) => {

    try {

      const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        userId,
        plan,
        amount,
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
        generated_signature !==
        razorpay_signature
      ) {
        return res.status(400).json({
          message:
            "Payment verification failed",
        });
      }


      // UPDATE USER PLAN
      await User.findByIdAndUpdate(
        userId,
        {
          plan,
        }
      );


      // CREATE SUBSCRIPTION
      const expiryDate =
        new Date();

      expiryDate.setMonth(
        expiryDate.getMonth() + 1
      );

      await Subscription.create({
        userId,
        plan,
        amount,
        expiryDate,
      });


      res.json({
        success: true,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Verification Failed",
      });

    }

  }
);

module.exports = router;