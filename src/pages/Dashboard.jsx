import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #1e293b",
          background: "#111827",
        }}
      >
        <h2>FabricAI Pro</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>

          <Link to="/billing" style={linkStyle}>
            Billing
          </Link>

          <Link to="/login" style={linkStyle}>
            Logout
          </Link>
        </div>
      </div>

      {/* Main */}
      <div style={{ padding: "40px" }}>
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          Dashboard
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "40px",
          }}
        >
          Welcome to your AI business control center.
        </p>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          <div style={cardStyle}>
            <h2>Users</h2>
            <h1>124</h1>
            <p>Active platform users</p>
          </div>

          <div style={cardStyle}>
            <h2>Revenue</h2>
            <h1>₹48,920</h1>
            <p>This month earnings</p>
          </div>

          <div style={cardStyle}>
            <h2>Orders</h2>
            <h1>312</h1>
            <p>Total product sales</p>
          </div>

          <div style={cardStyle}>
            <h2>AI Requests</h2>
            <h1>18K</h1>
            <p>Processed AI prompts</p>
          </div>
        </div>

        {/* Sections */}
        <div
          style={{
            marginTop: "50px",
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "30px",
          }}
        >
          {/* Activity */}
          <div
            style={{
              background: "#111827",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2 style={{ marginBottom: "25px" }}>Recent Activity</h2>

            <div style={activityStyle}>
              <span>New payment received</span>
              <span>₹499</span>
            </div>

            <div style={activityStyle}>
              <span>New customer signup</span>
              <span>+1 User</span>
            </div>

            <div style={activityStyle}>
              <span>AI usage increased</span>
              <span>+320 prompts</span>
            </div>

            <div style={activityStyle}>
              <span>Affiliate sale generated</span>
              <span>₹199</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div
            style={{
              background: "#111827",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2 style={{ marginBottom: "25px" }}>Quick Actions</h2>

            <button style={buttonStyle}>
              Launch AI Chat
            </button>

            <button style={buttonStyle}>
              Create Campaign
            </button>

            <button style={buttonStyle}>
              Manage Billing
            </button>

            <button style={buttonStyle}>
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "17px",
};

const cardStyle = {
  background: "#111827",
  padding: "30px",
  borderRadius: "20px",
  border: "1px solid #1e293b",
};

const activityStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "15px 0",
  borderBottom: "1px solid #1e293b",
};

const buttonStyle = {
  width: "100%",
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "15px",
  borderRadius: "12px",
  marginBottom: "15px",
  cursor: "pointer",
  fontSize: "16px",
};

export default Dashboard;