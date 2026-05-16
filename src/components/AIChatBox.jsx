import { useState } from "react";
import axios from "axios";

const AIChatBox = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    try {
      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:5000/api/ai/chat",
        {
          prompt,
        }
      );

      setResponse(data.response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask FabricAI anything..."
        className="w-full h-[140px] bg-black border border-zinc-700 rounded-xl p-4 outline-none"
      />

      <button
        onClick={askAI}
        className="bg-blue-600 px-6 py-3 rounded-xl mt-4 hover:bg-blue-700 transition"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      <div className="mt-6 bg-black rounded-xl p-5 min-h-[120px] border border-zinc-800">
        {response}
      </div>
    </div>
  );
};

export default AIChatBox;