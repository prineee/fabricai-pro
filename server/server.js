const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();



/* MIDDLEWARE */

app.use(cors());

app.use(express.json());



/* TEMP DATABASE */

let users = [

  {
    email: "prineee@gmail.com",
    password: "12345678",
  },

];



/* SERVER */

app.listen(5000, () => {

  console.log(
    "FabricAI Server Running On Port 5000"
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



/* CREATE PAYMENT ORDER */

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
          "fabricai_receipt",

      };

      const order =
        await razorpay.orders.create(
          options
        );

      res.json(order);

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

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

            process.env
              .RAZORPAY_SECRET

          )
          .update(sign.toString())
          .digest("hex");



      if (

        razorpay_signature ===
        expectedSign

      ) {

        return res.json({

          success: true,

          message:
            "Payment Verified",

        });

      }



      return res.status(400).json({

        success: false,

        message:
          "Payment Verification Failed",

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          "Verification Failed",

      });

    }

  }
);



/* REGISTER */

app.post(
  "/api/auth/register",
  async (req, res) => {

    try {

      const {

        email,

        password,

      } = req.body;



      const existingUser =
        users.find(
          (u) =>
            u.email === email
        );



      if (existingUser) {

        return res.status(400).json({

          success: false,

          message:
            "User already exists",

        });

      }



      users.push({

        email,

        password,

      });



      console.log(
        "REGISTERED USERS:",
        users
      );



      res.json({

        success: true,

        message:
          "Registration Successful",

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          "Registration Failed",

      });

    }

  }
);



/* LOGIN */

app.post(
  "/api/auth/login",
  async (req, res) => {

    try {

      const {

        email,

        password,

      } = req.body;



      const user =
        users.find(
          (u) =>
            u.email === email
        );



      if (!user) {

        return res.status(400).json({

          success: false,

          message:
            "User not found",

        });

      }



      if (
        user.password !==
        password
      ) {

        return res.status(400).json({

          success: false,

          message:
            "Invalid password",

        });

      }



      res.json({

        success: true,

        message:
          "Login Success",

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          "Login Failed",

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



      console.log(
        "RESET REQUEST:",
        email
      );



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



      const info =
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
              padding:40px;
              background:#f1f5f9;
            "
          >

            <div
              style="
                max-width:500px;
                margin:auto;
                background:white;
                padding:40px;
                border-radius:20px;
                box-shadow:0 10px 40px rgba(0,0,0,0.1);
              "
            >

              <h1
                style="
                  font-size:34px;
                  margin-bottom:20px;
                  color:#0f172a;
                "
              >
                Reset Password
              </h1>

              <p
                style="
                  color:#64748b;
                  margin-bottom:30px;
                  line-height:1.7;
                "
              >
                Click button below to reset your password.
              </p>

              <a

                href="https://fabricai-pro-92aq.vercel.app/reset-password?email=${email}"

                style="
                  display:inline-block;
                  background:#059669;
                  color:white;
                  padding:16px 30px;
                  border-radius:14px;
                  text-decoration:none;
                  font-weight:bold;
                  font-size:16px;
                "
              >
                Reset Password
              </a>

            </div>

          </div>

          `,

        });



      console.log(
        "MAIL RESPONSE:",
        info
      );



      res.json({

        success: true,

        message:
          "Reset email sent successfully",

      });

    } catch (error) {

      console.log(
        "EMAIL ERROR:",
        error
      );

      res.status(500).json({

        success: false,

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



      const user =
        users.find(
          (u) =>
            u.email === email
        );



      if (!user) {

        return res.status(400).json({

          success: false,

          message:
            "User not found",

        });

      }



      user.password =
        password;



      console.log(
        "UPDATED USER:",
        user
      );



      res.json({

        success: true,

        message:
          "Password changed successfully",

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          "Reset Failed",

      });

    }

  }
);