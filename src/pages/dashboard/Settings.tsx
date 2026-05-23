import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

export default function Settings() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  return (
    <DashboardLayout>

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        Account Settings
      </h1>

      <div
        style={{
          background: "#0f172a",
          padding: "35px",
          borderRadius: "20px",
          border: "1px solid #1e293b",
          maxWidth: "700px",
        }}
      >

        <label>
          Full Name
        </label>

        <input
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          placeholder="Name"
          style={inputStyle}
        />

        <label>
          Email Address
        </label>

        <input
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="Email"
          style={inputStyle}
        />

        <label>
          New Password
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          placeholder="New Password"
          style={inputStyle}
        />

        <button
          style={{
            marginTop: "20px",
            padding: "16px 30px",
            borderRadius: "12px",
            border: "none",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Save Changes
        </button>

      </div>

    </DashboardLayout>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px",
  marginTop: "10px",
  marginBottom: "25px",
  borderRadius: "12px",
  border: "1px solid #334155",
  background: "#ffffff",
  color: "#000000",
  fontSize: "16px",
  outline: "none",
};