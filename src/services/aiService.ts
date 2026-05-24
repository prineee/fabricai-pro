const GROQ_API_KEY =
  import.meta.env.VITE_GROQ_API_KEY;

export async function generateAI(
  prompt: string,
  type: string
) {

  if (!GROQ_API_KEY) {

    return "Groq API key missing";
  }

  try {

    let systemPrompt = "";

    if (type === "blog") {

      systemPrompt =
        "Write a professional SEO optimized blog article.";
    }

    else if (type === "email") {

      systemPrompt =
        "Write a professional marketing email.";
    }

    else if (type === "ad") {

      systemPrompt =
        "Write a high converting Facebook advertisement copy.";
    }

    else {

      systemPrompt =
        "You are an AI assistant.";
    }

    const response =
      await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",

          headers: {

            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${GROQ_API_KEY}`,
          },

          body: JSON.stringify({

            model:
              "llama3-70b-8192",

            messages: [

              {
                role: "system",
                content: systemPrompt,
              },

              {
                role: "user",
                content: prompt,
              },
            ],

            temperature: 0.7,
          }),
        }
      );

    const data =
      await response.json();

    console.log(data);

    return (
      data?.choices?.[0]?.message?.content
      ||
      "No AI response"
    );

  } catch (error) {

    console.log(error);

    return "AI generation failed";
  }
}