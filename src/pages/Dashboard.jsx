import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateContent = async (type) => {
    if (!prompt) {
      alert("Please enter your topic");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://fabricai-backend.onrender.com/api/ai/generate",
        {
          prompt: `Create a professional ${type} for: ${prompt}`,
        }
      );

      setResult(response.data.result);
    } catch (error) {
      console.log(error);
      alert("AI Generation Failed");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "55px",
          marginBottom: "20px",
        }}
      >
        FabricAI Pro Dashboard
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#cbd5e1",
          marginBottom: "50px",
          fontSize: "20px",
        }}
      >
        Generate business content instantly using AI
      </p>

      {/* INPUT BOX */}

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          marginBottom: "40px",
        }}
      >
        <textarea
          placeholder="Enter your business topic..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{
            width: "100%",
            minHeight: "180px",
            borderRadius: "20px",
            padding: "25px",
            fontSize: "20px",
            background: "#0f172a",
            color: "white",
            border: "1px solid #1e293b",
            outline: "none",
          }}
        />
      </div>

      {/* TOOLS */}

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
          marginBottom: "60px",
        }}
      >
        <button style={buttonStyle} onClick={() => generateContent("Blog Article")}>
          AI Blog Generator
        </button>

        <button style={buttonStyle} onClick={() => generateContent("Facebook Ad Copy")}>
          AI Ad Generator
        </button>

        <button style={buttonStyle} onClick={() => generateContent("Marketing Email")}>
          AI Email Generator
        </button>

        <button style={buttonStyle} onClick={() => generateContent("YouTube Script")}>
          AI Script Generator
        </button>

        <button
          style={buttonStyle}
          onClick={() => generateContent("Product Description")}
        >
          AI Product Description
        </button>

        <button
          style={buttonStyle}
          onClick={() => generateContent("Landing Page Copy")}
        >
          AI Landing Page Generator
        </button>
      </div>

      {/* LOADING */}

      {loading && (
        <div
          style={{
            textAlign: "center",
            fontSize: "25px",
            marginBottom: "30px",
          }}
        >
          Generating AI Content...
        </div>
      )}

      {/* RESULT */}

      {result && (
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            background: "#0f172a",
            padding: "40px",
            borderRadius: "25px",
            lineHeight: "35px",
            fontSize: "18px",
            whiteSpace: "pre-wrap",
            border: "1px solid #1e293b",
          }}
        >
          <h2
            style={{
              marginBottom: "30px",
              fontSize: "40px",
            }}
          >
            AI Generated Content
          </h2>

          {result}
        </div>
      )}
    </div>
  );
}

const buttonStyle = {
  padding: "22px",
  borderRadius: "16px",
  border: "none",
  background: "#2563eb",
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
};