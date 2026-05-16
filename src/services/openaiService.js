import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.log("OPENAI_API_KEY Missing");
}

const openai = new OpenAI({
  apiKey,
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
              "You are FabricAI Pro AI Assistant",
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