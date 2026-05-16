import { useEffect, useState } from "react";

import axios from "axios";

const AIChat = () => {
  const [prompt, setPrompt] =
    useState("");

  const [messages, setMessages] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const token =
        localStorage.getItem(
          "fabricaiToken"
        );

      const { data } = await axios.get(
        "http://localhost:5000/api/ai/history",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const formatted =
        data.chats.reverse().flatMap(
          (chat) => [
            {
              type: "user",
              text: chat.prompt,
            },
            {
              type: "ai",
              text: chat.response,
            },
          ]
        );

      setMessages(formatted);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async () => {
    if (!prompt) return;

    const userMessage = {
      type: "user",
      text: prompt,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setLoading(true);

    try {
      const token =
        localStorage.getItem(
          "fabricaiToken"
        );

      const { data } = await axios.post(
        "http://localhost:5000/api/ai/chat",
        {
          prompt,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const aiMessage = {
        type: "ai",
        text: data.response,
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

      setPrompt("");
    } catch (error) {
      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "AI request failed",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        FabricAI Chat Assistant
      </h1>

      <div className="bg-zinc-900 rounded-3xl p-6 h-[70vh] overflow-y-auto">

        <div className="space-y-6">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-4xl p-6 rounded-2xl ${
                msg.type === "user"
                  ? "bg-blue-600 ml-auto"
                  : "bg-zinc-700"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {loading && (
            <div className="bg-zinc-700 p-6 rounded-2xl">
              Thinking...
            </div>
          )}

        </div>
      </div>

      <div className="flex gap-4 mt-6">

        <input
          type="text"
          placeholder="Ask AI anything..."
          value={prompt}
          onChange={(e) =>
            setPrompt(e.target.value)
          }
          className="flex-1 bg-zinc-800 text-white p-5 rounded-2xl outline-none"
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 px-10 rounded-2xl font-bold"
        >
          Send
        </button>

      </div>
    </div>
  );
};

export default AIChat;