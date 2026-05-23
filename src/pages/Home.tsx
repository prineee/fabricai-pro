import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          marginBottom: "20px",
        }}
      >
        FabricAI Pro
      </h1>

      <p
        style={{
          fontSize: "22px",
          marginBottom: "40px",
          color: "#94a3b8",
        }}
      >
        AI SaaS Platform For Content,
        Fashion & Marketing
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link
          to="/register"
          style={{
            padding: "16px 30px",
            background: "#2563eb",
            color: "white",
            borderRadius: "12px",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Get Started
        </Link>

        <Link
          to="/login"
          style={{
            padding: "16px 30px",
            background: "#0f172a",
            color: "white",
            borderRadius: "12px",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
            border:
              "1px solid #334155",
          }}
        >
          Login
        </Link>
      </div>
    </div>
  );
}