const API_URL =
  "https://your-backend-url.vercel.app/api/generate";

export async function generateAI(
  prompt: string,
  type: string
) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        prompt,
        type,
      }),
    });

    const data = await response.json();

    return data.result;
  } catch (error) {
    console.log(error);

    return "AI generation failed";
  }
}