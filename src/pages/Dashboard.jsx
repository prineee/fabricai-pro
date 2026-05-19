import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateContent = async (type) => {
    if (!prompt) {
      alert("Please enter a prompt");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "https://fabricai-backend.onrender.com/api/generate",
        {
          prompt,
          type,
        }
      );

      setResult(response.data.result);
    } catch (error) {
      console.log(error);
      alert("AI Generation Failed");
    } finally {
      setLoading(false);
    }
  };

  const tools = [
    "AI Blog Generator",
    "AI Ad Generator",
    "AI Email Generator",
    "AI Script Generator",
    "AI Product Description",
    "AI Landing Page Generator",
  ];

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* SIDEBAR */}
      <div
        style={{
          width: "260px",
          background: "#0d1325",
          padding: "30px 20px",
          borderRight: "1px solid #1f2b46",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            marginBottom: "40px",
            color: "#3b82f6",
          }}
        >
          FabricAI
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {[
            "Dashboard",
            "AI Writer",
            "Blog Generator",
            "Ad Generator",
            "Email Generator",
            "Landing Pages",
            "Saved Content",
            "Billing",
            "Settings",
            "Logout",
          ].map((item, index) => (
            <button
              key={index}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "18px",
                textAlign: "left",
                padding: "12px",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#1d4ed8";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* PLAN CARD */}
        <div
          style={{
            marginTop: "50px",
            background: "#1d4ed8",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <h3>PRO PLAN</h3>

          <p style={{ marginTop: "10px", color: "#dbeafe" }}>
            Unlimited AI generations
          </p>

          <button
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "10px",
              background: "white",
              color: "#1d4ed8",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Upgrade
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, padding: "40px" }}>
        {/* TOP BAR */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "40px",
          }}
        >
          <div>
            <h1 style={{ fontSize: "45px", marginBottom: "10px" }}>
              Welcome Back 👋
            </h1>

            <p style={{ color: "#94a3b8", fontSize: "18px" }}>
              Generate high-converting AI content instantly
            </p>
          </div>

          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "#1d4ed8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            N
          </div>
        </div>

        {/* STATS CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {[
            {
              title: "Total Generations",
              value: "12,480",
            },
            {
              title: "Saved Projects",
              value: "348",
            },
            {
              title: "Pro Plan",
              value: "ACTIVE",
            },
            {
              title: "Affiliate Earnings",
              value: "₹24,500",
            },
          ].map((card, index) => (
            <div
              key={index}
              style={{
                background: "#0f172a",
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid #1e293b",
              }}
            >
              <p style={{ color: "#94a3b8", marginBottom: "10px" }}>
                {card.title}
              </p>

              <h2 style={{ fontSize: "34px" }}>{card.value}</h2>
            </div>
          ))}
        </div>

        {/* AI INPUT */}
        <div
          style={{
            background: "#0f172a",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid #1e293b",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ marginBottom: "20px", fontSize: "30px" }}>
            AI Content Generator
          </h2>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your business, product, or content idea..."
            style={{
              width: "100%",
              height: "180px",
              background: "#020617",
              color: "white",
              border: "1px solid #334155",
              borderRadius: "15px",
              padding: "20px",
              fontSize: "18px",
              marginBottom: "30px",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
            }}
          >
            {tools.map((tool, index) => (
              <button
                key={index}
                onClick={() => generateContent(tool)}
                style={{
                  padding: "18px",
                  border: "none",
                  borderRadius: "15px",
                  background: "#2563eb",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        {/* OUTPUT */}
        <div
          style={{
            background: "#0f172a",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid #1e293b",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <h2 style={{ fontSize: "28px" }}>Generated Content</h2>

            <div style={{ display: "flex", gap: "15px" }}>
              <button
                onClick={() => navigator.clipboard.writeText(result)}
                style={{
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "10px",
                  background: "#1d4ed8",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Copy
              </button>

              <button
                style={{
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "10px",
                  background: "#0ea5e9",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Download
              </button>
            </div>
          </div>

          <div
            style={{
              background: "#020617",
              minHeight: "300px",
              borderRadius: "15px",
              padding: "25px",
              color: "#e2e8f0",
              lineHeight: "1.8",
              whiteSpace: "pre-wrap",
              fontSize: "17px",
            }}
          >
            {loading
              ? "Generating AI content..."
              : result || "Your AI-generated content will appear here."}
          </div>
        </div>

        {/* HISTORY */}
        <div
          style={{
            marginTop: "40px",
            background: "#0f172a",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid #1e293b",
          }}
        >
          <h2 style={{ marginBottom: "20px", fontSize: "28px" }}>
            Recent AI History
          </h2>

          {[
            "Facebook Ads for Fitness Product",
            "AI Blog about Digital Marketing",
            "Email Campaign for SaaS Product",
            "Landing Page for AI Startup",
          ].map((history, index) => (
            <div
              key={index}
              style={{
                padding: "18px",
                background: "#020617",
                borderRadius: "12px",
                marginBottom: "15px",
                border: "1px solid #1e293b",
              }}
            >
              {history}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}