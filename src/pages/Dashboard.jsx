import { useState } from "react";
import axios from "axios";

export default function Dashboard() {

  const [prompt, setPrompt] = useState("");

  const [result, setResult] = useState("");

  const [loading, setLoading] = useState(false);

  const history = [
    "Facebook Ads for Fitness Product",
    "AI Blog about Digital Marketing",
    "Email Campaign for SaaS Product",
    "Landing Page for AI Startup",
  ];

  // =====================================
  // GENERATE CONTENT
  // =====================================

  const generateContent = async (type) => {

    if (!prompt) {
      alert("Enter Prompt");
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

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("AI Generation Failed");
    }
  };

  // =====================================
  // COPY RESULT
  // =====================================

  const copyContent = () => {

    navigator.clipboard.writeText(result);

    alert("Copied Successfully");
  };

  // =====================================
  // DOWNLOAD RESULT
  // =====================================

  const downloadContent = () => {

    const blob = new Blob([result], {
      type: "text/plain",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "fabricai-content.txt";

    a.click();

    alert("Downloaded Successfully");
  };

  // =====================================
  // LOGOUT
  // =====================================

  const logout = () => {

    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  // =====================================
  // NAVIGATION
  // =====================================

  const goBilling = () => {
    window.location.href = "/billing";
  };

  const goSettings = () => {
    alert("Settings Coming Soon");
  };

  const goSaved = () => {
    alert("Saved Content Coming Soon");
  };

  // =====================================
  // UI
  // =====================================

  return (
    <div
      style={{
        display: "flex",
        background: "#020617",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
      }}
    >

      {/* SIDEBAR */}

      <div
        style={{
          width: "260px",
          background: "#081028",
          padding: "25px",
          borderRight: "1px solid #1e293b",
        }}
      >

        <h1
          style={{
            color: "#3b82f6",
            marginBottom: "40px",
          }}
        >
          FabricAI
        </h1>

        <SidebarButton text="Dashboard" />

        <SidebarButton
          text="AI Writer"
          onClick={() =>
            window.scrollTo({
              top: 300,
              behavior: "smooth",
            })
          }
        />

        <SidebarButton
          text="Blog Generator"
          onClick={() =>
            generateContent("blog")
          }
        />

        <SidebarButton
          text="Ad Generator"
          onClick={() =>
            generateContent("ads")
          }
        />

        <SidebarButton
          text="Email Generator"
          onClick={() =>
            generateContent("email")
          }
        />

        <SidebarButton
          text="Landing Pages"
          onClick={() =>
            generateContent("landing")
          }
        />

        <SidebarButton
          text="Saved Content"
          onClick={goSaved}
        />

        <SidebarButton
          text="Billing"
          onClick={goBilling}
        />

        <SidebarButton
          text="Settings"
          onClick={goSettings}
        />

        <SidebarButton
          text="Logout"
          onClick={logout}
        />

        {/* PRO CARD */}

        <div
          style={{
            background: "#2563eb",
            padding: "20px",
            borderRadius: "20px",
            marginTop: "40px",
          }}
        >
          <h3>PRO PLAN</h3>

          <p
            style={{
              fontSize: "14px",
              color: "#dbeafe",
            }}
          >
            Unlimited AI generations
          </p>

          <button
            onClick={goBilling}
            style={{
              marginTop: "15px",
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "10px",
              background: "white",
              color: "#2563eb",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Upgrade
          </button>
        </div>
      </div>

      {/* MAIN */}

      <div
        style={{
          flex: 1,
          padding: "40px",
        }}
      >

        {/* HEADER */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "42px",
                marginBottom: "10px",
              }}
            >
              Welcome Back 👋
            </h1>

            <p
              style={{
                color: "#94a3b8",
              }}
            >
              Generate high converting AI content instantly
            </p>
          </div>

          <div
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              background: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            N
          </div>
        </div>

        {/* STATS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <Card
            title="Total Generations"
            value="12,480"
          />

          <Card
            title="Saved Projects"
            value="348"
          />

          <Card
            title="Pro Plan"
            value="ACTIVE"
          />

          <Card
            title="Affiliate Earnings"
            value="₹24,500"
          />
        </div>

        {/* GENERATOR */}

        <div
          style={{
            background: "#081028",
            padding: "25px",
            borderRadius: "20px",
            marginTop: "30px",
          }}
        >

          <h2>AI Content Generator</h2>

          <textarea
            value={prompt}
            onChange={(e) =>
              setPrompt(e.target.value)
            }
            placeholder="Describe your business, product, or content idea..."
            style={{
              width: "100%",
              height: "120px",
              marginTop: "20px",
              background: "#020617",
              border: "1px solid #334155",
              borderRadius: "15px",
              padding: "20px",
              color: "white",
              fontSize: "16px",
            }}
          />

          {/* BUTTONS */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "15px",
              marginTop: "20px",
            }}
          >

            <ToolButton
              text="AI Blog Generator"
              onClick={() =>
                generateContent("blog")
              }
            />

            <ToolButton
              text="AI Ad Generator"
              onClick={() =>
                generateContent("ads")
              }
            />

            <ToolButton
              text="AI Email Generator"
              onClick={() =>
                generateContent("email")
              }
            />

            <ToolButton
              text="AI Script Generator"
              onClick={() =>
                generateContent("script")
              }
            />

            <ToolButton
              text="AI Product Description"
              onClick={() =>
                generateContent("product")
              }
            />

            <ToolButton
              text="AI Landing Page Generator"
              onClick={() =>
                generateContent("landing")
              }
            />
          </div>
        </div>

        {/* RESULT */}

        <div
          style={{
            background: "#081028",
            padding: "25px",
            borderRadius: "20px",
            marginTop: "30px",
          }}
        >

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>Generated Content</h2>

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <button
                onClick={copyContent}
                style={smallButton}
              >
                Copy
              </button>

              <button
                onClick={downloadContent}
                style={smallButton}
              >
                Download
              </button>
            </div>
          </div>

          <div
            style={{
              background: "#020617",
              borderRadius: "15px",
              padding: "20px",
              minHeight: "180px",
              marginTop: "20px",
              whiteSpace: "pre-wrap",
            }}
          >
            {loading
              ? "Generating AI Content..."
              : result ||
                "Your AI generated content will appear here."}
          </div>
        </div>

        {/* HISTORY */}

        <div
          style={{
            background: "#081028",
            padding: "25px",
            borderRadius: "20px",
            marginTop: "30px",
          }}
        >

          <h2>Recent AI History</h2>

          <div
            style={{
              marginTop: "20px",
            }}
          >
            {history.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#020617",
                  padding: "15px",
                  borderRadius: "12px",
                  marginBottom: "10px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// =====================================
// COMPONENTS
// =====================================

function SidebarButton({
  text,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        textAlign: "left",
        padding: "14px",
        background: "transparent",
        border: "none",
        color: "white",
        borderRadius: "10px",
        marginBottom: "10px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

function ToolButton({
  text,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "16px",
        border: "none",
        borderRadius: "12px",
        background: "#2563eb",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

function Card({
  title,
  value,
}) {
  return (
    <div
      style={{
        background: "#081028",
        padding: "25px",
        borderRadius: "20px",
      }}
    >
      <p
        style={{
          color: "#94a3b8",
          marginBottom: "10px",
        }}
      >
        {title}
      </p>

      <h1>{value}</h1>
    </div>
  );
}

const smallButton = {
  padding: "10px 18px",
  border: "none",
  borderRadius: "10px",
  background: "#2563eb",
  color: "white",
  cursor: "pointer",
};