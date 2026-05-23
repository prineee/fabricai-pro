import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { auth } from "../firebase";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      setLoading(true);
      setMessage("");

      if (!email || !password || !confirmPassword) {
        setMessage("Please fill all fields");
        setLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        setMessage("Passwords do not match");
        setLoading(false);
        return;
      }

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      await sendEmailVerification(userCredential.user);

      setMessage(
        "Verification email sent successfully. Please check inbox."
      );

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "550px",
          background: "#0f172a",
          padding: "50px",
          borderRadius: "24px",
          border: "1px solid #1e293b",
          boxShadow: "0 0 40px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            color: "white",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Create Account
        </h1>

        {message && (
          <div
            style={{
              marginBottom: "25px",
              color: "#38bdf8",
              fontSize: "18px",
              lineHeight: "1.6",
            }}
          >
            {message}
          </div>
        )}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
          style={inputStyle}
        />

        <button
          onClick={handleRegister}
          style={buttonStyle}
        >
          {loading ? "Creating..." : "Register"}
        </button>

        <div
          style={{
            marginTop: "25px",
            color: "white",
            fontSize: "18px",
          }}
        >
          Already have account?{" "}
          <Link
            to="/login"
            style={{
              color: "#3b82f6",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "20px",
  marginBottom: "22px",
  borderRadius: "14px",
  border: "1px solid #475569",
  fontSize: "18px",
  background: "#f1f5f9",
  color: "#000000",
  outline: "none",
  boxSizing: "border-box" as const,
  fontWeight: "500",
};

const buttonStyle = {
  width: "100%",
  padding: "20px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "14px",
  fontSize: "22px",
  fontWeight: "bold",
  cursor: "pointer",
};