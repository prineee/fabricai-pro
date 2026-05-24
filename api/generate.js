module.exports = async (req, res) => {

  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, OPTIONS"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {

    return res.status(405).json({
      output: "Method not allowed",
    });
  }

  try {

    const { prompt, type } = req.body;

    let systemPrompt = "";

    if (type === "blog") {

      systemPrompt =
        "Write a professional SEO optimized blog article.";
    }

    else if (type === "email") {

      systemPrompt =
        "Write a professional marketing email.";
    }

    else {

      systemPrompt =
        "Write a high converting advertisement.";
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",

        headers: {

          "Content-Type": "application/json",

          Authorization:
            `Bearer ${process.env.GROQ_API_KEY}`,
        },

        body: JSON.stringify({

          model: "llama3-70b-8192",

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
        }),
      }
    );

    const data =
      await response.json();

    return res.status(200).json({

      output:
        data?.choices?.[0]?.message?.content
        ||
        "No AI response",
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({

      output: "AI generation failed",
    });
  }
};