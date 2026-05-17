import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          background: "#0f0f0f",
          borderBottom: "1px solid #222",
        }}
      >
        <h2>FabricAI Pro</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/login" style={{ color: "white" }}>
            Login
          </Link>

          <Link to="/register" style={{ color: "white" }}>
            Register
          </Link>

          <Link to="/billing" style={{ color: "white" }}>
            Upgrade
          </Link>
        </div>
}