import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const router = express.Router();

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message required",
      });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent(message);

    const response = result.response.text();

    res.json({
      reply: response,
    });
  } catch (error) {
    console.log("AI ERROR:", error);

    res.status(500).json({
      error: "AI request failed",
    });
  }
});

export default router;