const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());



/* SERVER */

app.listen(5000, () => {

  console.log(
    "Server Running on Port 5000"
  );

});



/* RAZORPAY */

const razorpay =
  new Razorpay({

    key_id:
      process.env.RAZORPAY_KEY_ID,

    key_secret:
      process.env.RAZORPAY_SECRET,

  });



/* CREATE ORDER */

app.post(
  "/api/payment/create-order",
  async (req, res) => {

    try {

      const { amount } =
        req.body;

      const options = {

        amount:
          amount * 100,

        currency:
          "INR",

        receipt:
          "receipt_order",

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
          "Order creation failed",
      });

    }

  }
);



/* VERIFY PAYMENT */

app.post(
  "/api/payment/verify-payment",
  async (req, res) => {

    try {

      const {

        razorpay_order_id,

        razorpay_payment_id,

        razorpay_signature,

      } = req.body;

      const sign =
        razorpay_order_id +
        "|" +
        razorpay_payment_id;

      const expectedSign =
        crypto
          .createHmac(
            "sha256",
            process.env.RAZORPAY_SECRET
          )
          .update(sign.toString())
          .digest("hex");

      if (
        razorpay_signature ===
        expectedSign
      ) {

        return res.json({
          success: true,
        });

      } else {

        return res.json({
          success: false,
        });

      }

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
      });

    }

  }
);



/* FORGOT PASSWORD */

app.post(
  "/api/auth/forgot-password",
  async (req, res) => {

    try {

      const { email } =
        req.body;

      const transporter =
        nodemailer.createTransport({

          host:
            "smtp.gmail.com",

          port: 465,

          secure: true,

          auth: {

            user:
              process.env.EMAIL_USER,

            pass:
              process.env.EMAIL_PASS,

          },

        });

      await transporter.sendMail({

        from:
          process.env.EMAIL_USER,

        to: email,

        subject:
          "FabricAI Reset Password",

        html: `

          <div
            style="
              font-family:sans-serif;
              padding:30px;
            "
          >

            <h1>
              FabricAI Password Reset
            </h1>

            <p>
              Click button below to reset password.
            </p>

            <a
              href="http://localhost:5173/reset-password?email=${email}"

              style="
                display:inline-block;
                background:#059669;
                color:white;
                padding:14px 24px;
                border-radius:10px;
                text-decoration:none;
                margin-top:20px;
                font-weight:bold;
              "
            >
              Reset Password
            </a>

          </div>

        `,

      });

      res.json({
        message:
          "Reset email sent successfully",
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Email sending failed",
      });

    }

  }
);



/* RESET PASSWORD */

app.post(
  "/api/auth/reset-password",
  async (req, res) => {

    try {

      const {
        email,
        password,
      } = req.body;

      console.log(
        "RESET:",
        email,
        password
      );

      res.json({
        message:
          "Password changed successfully",
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Reset failed",
      });

    }

  }
);