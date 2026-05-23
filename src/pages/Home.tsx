import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
        }}
      >
        FabricAI Pro
      </h1>

      <Link
        to="/register"
        style={{
          background: "#2563eb",
          padding: "15px 30px",
          borderRadius: "12px",
          color: "white",
          textDecoration: "none",
          fontSize: "20px",
        }}
      >
        Get Started
      </Link>
    </div>
  );
}