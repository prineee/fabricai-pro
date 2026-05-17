import React, { useState } from "react";
import axios from "axios";

function AIChat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message) return;

    const userMessage = {
      role: "user",
      text: message,
    };

    setChat((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await axios.post(
        "https://fabricai-backend.onrender.com/api/ai/chat",
        {
          message,
        }
      );

      const aiMessage = {
        role: "ai",
        text: response.data.reply,
      };

      setChat((prev) => [...prev, aiMessage]);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        {
          role: "ai",
          text: "AI request failed",
        },
      ]);
    }

    setMessage("");
    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        fontFamily: "Arial",
        padding: "30px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        FabricAI Workspace
      </h1>

      <div
        style={{
          background: "#111827",
          borderRadius: "20px",
          padding: "20px",
          height: "70vh",
          overflowY: "auto",
          marginBottom: "20px",
          border: "1px solid #1e293b",
        }}
      >
        {chat.length === 0 && (
          <div
            style={{
              color: "#94a3b8",
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            Start chatting with FabricAI...
          </div>
        )}

        {chat.map((msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                msg.role === "user"
                  ? "flex-end"
                  : "flex-start",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                background:
                  msg.role === "user"
                    ? "#2563eb"
                    : "#1e293b",
                padding: "16px",
                borderRadius: "16px",
                maxWidth: "70%",
                lineHeight: "1.6",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ color: "#94a3b8" }}>
            AI is thinking...
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Ask FabricAI anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            flex: 1,
            padding: "18px",
            borderRadius: "14px",
            border: "none",
            background: "#111827",
            color: "white",
            fontSize: "18px",
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "18px 30px",
            borderRadius: "14px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default AIChat;