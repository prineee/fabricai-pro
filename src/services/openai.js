import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const askAI = async (message) => {
  try {
    const response =
      await openai.chat.completions.create({
        model: "gpt-3.5-turbo",

        messages: [
          {
            role: "system",
            content:
              "You are FabricAI Pro business assistant.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      });

    return response.choices[0].message.content;
  } catch (error) {
    console.log(error);

    return "AI Error";
  }
};