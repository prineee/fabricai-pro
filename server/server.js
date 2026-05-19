import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import Groq from "groq-sdk";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* =========================================
   GROQ AI
========================================= */

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

/* =========================================
   RAZORPAY
========================================= */

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/* =========================================
   TEST ROUTE
========================================= */

app.get("/", (req, res) => {
  res.send("FabricAI Backend Running");
});

/* =========================================
   AI GENERATOR ROUTE
========================================= */

    app.post("/api/ai/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        error: "Prompt required",
      });
    }

    console.log("AI Prompt:", prompt);

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    console.log(chatCompletion);

    res.json({
      result: chatCompletion.choices[0].message.content,
    });
  } catch (error) {
    console.log("FULL AI ERROR:");
    console.log(error);

    res.status(500).json({
      error: "AI generation failed",
    });
  }
});

/* =========================================
   PAYMENT ROUTE
========================================= */

app.post("/api/payment/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt_order_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    res.json(order);
  } catch (error) {
    console.log("PAYMENT ERROR:", error);

    res.status(500).json({
      error: "Payment backend error",
    });
  }
});

/* =========================================
   START SERVER
========================================= */

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});