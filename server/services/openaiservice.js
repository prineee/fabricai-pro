import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export const generateAIResponse = async (prompt) => {
  try {
    const completion =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "system",
            content:
              "You are FabricAI Pro business assistant.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      });

    return completion.choices[0].message.content;

  } catch (error) {
    console.log("GROQ ERROR:", error);

    return "Groq AI Failed";
  }
};