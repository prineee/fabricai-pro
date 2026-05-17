import { useState } from "react";
import api from "../services/api";

const AIChatBox = () => {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message) return;

    try {
      setLoading(true);

      const res = await api.post("/ai/chat", {
        message,
      });

      setReply(res.data.reply);
    } catch (error) {
      console.error(error);
      alert("AI request failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900 p-6 rounded-xl text-white">
      <h2 className="text-2xl font-bold mb-4">
        AI Chat
      </h2>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-4 rounded-lg bg-black border border-zinc-700"
        rows="4"
        placeholder="Ask AI anything..."
      />

      <button
        onClick={sendMessage}
        className="mt-4 bg-blue-600 px-6 py-3 rounded-lg"
      >
        {loading ? "Thinking..." : "Send"}
      </button>

      {reply && (
        <div className="mt-6 bg-black p-4 rounded-lg">
          {reply}
        </div>
      )}
    </div>
  );
};

export default AIChatBox;