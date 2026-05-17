const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;

/* =========================================
   ROOT
========================================= */

app.get("/", (req, res) => {
  res.send("FabricAI Backend Running");
});

/* =========================================
   AI CHAT
========================================= */

app.post("/api/ai/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama3-8b-8192",
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const reply =
      response.data.choices[0].message.content;

    res.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.log("AI ERROR:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      error: "AI request failed",
    });
  }
});

/* =========================================
   PAYMENT TEST
========================================= */

app.post("/api/payment/create-order", async (req, res) => {
  try {
    res.json({
      success: true,
      orderId: "FABRICAI_ORDER_001",
      amount: 499,
      currency: "INR",
    });
  } catch (error) {
    console.log("PAYMENT ERROR:", error);

    res.status(500).json({
      success: false,
      error: "Payment failed",
    });
  }
});

/* =========================================
   START SERVER
========================================= */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});