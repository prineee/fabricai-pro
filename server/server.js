import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 10000;

// ==========================================
// TEST ROUTE
// ==========================================

app.get("/", (req, res) => {
  res.send("FabricAI Backend Running");
});

// ==========================================
// AI GENERATE ROUTE
// ==========================================

app.post("/api/generate", async (req, res) => {

  try {

    const { prompt, type } = req.body;

    if (!prompt) {
      return res.status(400).json({
        error: "Prompt Required",
      });
    }

    let finalPrompt = "";

    // ======================================
    // PROMPT TYPES
    // ======================================

    switch (type) {

      case "blog":
        finalPrompt =
          `Write a professional SEO blog about: ${prompt}`;
        break;

      case "ads":
        finalPrompt =
          `Write high converting Facebook ads about: ${prompt}`;
        break;

      case "email":
        finalPrompt =
          `Write a marketing email about: ${prompt}`;
        break;

      case "script":
        finalPrompt =
          `Write a YouTube script about: ${prompt}`;
        break;

      case "product":
        finalPrompt =
          `Write product description about: ${prompt}`;
        break;

      case "landing":
        finalPrompt =
          `Write a landing page copy about: ${prompt}`;
        break;

      default:
        finalPrompt =
          `Write professional content about: ${prompt}`;
    }

    // ======================================
    // GROQ API
    // ======================================

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",

      {
        model: "llama3-70b-8192",

        messages: [
          {
            role: "user",
            content: finalPrompt,
          },
        ],

        temperature: 0.7,
      },

      {
        headers: {
          Authorization:
            `Bearer ${process.env.GROQ_API_KEY}`,

          "Content-Type":
            "application/json",
        },
      }
    );

    const result =
      response.data.choices[0].message.content;

    res.json({
      success: true,
      result,
    });

  } catch (error) {

    console.log(
      error.response?.data || error.message
    );

    res.status(500).json({
      success: false,
      error: "AI Generation Failed",
    });
  }
});

// ==========================================
// SERVER
// ==========================================

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});