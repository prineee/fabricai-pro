import { useState } from "react";
import api from "../services/api";

export default function AI() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    try {
      const response = await api.post("/ai/chat", {
        message,
      });

      setReply(response.data.reply);
    } catch (error) {
      console.log(error);

      setReply("AI request failed");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        FabricAI Chat Assistant
      </h1>

      <div className="bg-zinc-900 p-8 rounded-3xl">
        <div className="space-y-6 mb-10">
          <div className="bg-blue-600 p-6 rounded-3xl">
            {message}
          </div>

          <div className="bg-zinc-700 p-6 rounded-3xl">
            {reply}
          </div>
        </div>

        <div className="flex gap-4">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask AI..."
            className="flex-1 p-6 rounded-2xl bg-zinc-800 outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 px-10 rounded-2xl"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}