import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { auth } from "../firebase";

import { createUserProfile } from "../services/userService";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const handleSignup = async () => {
    try {
      setLoading(true);

      if (
        !email ||
        !password ||
        !confirmPassword
      ) {
        setMessage(
          "Please fill all fields"
        );

        setLoading(false);

        return;
      }

      if (
        password !== confirmPassword
      ) {
        setMessage(
          "Passwords do not match"
        );

        setLoading(false);

        return;
      }

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      await sendEmailVerification(
        userCredential.user
      );

      await createUserProfile(
        userCredential.user.uid,
        {
          email,
          plan: "FREE",
          country: "india",
          dailyUsage: 0,
          verified: false,
          createdAt: new Date(),
        }
      );

      setMessage(
        "Verification email sent successfully"
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
          border:
            "1px solid #1e293b",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            color: "white",
            marginBottom: "20px",
          }}
        >
          Register
        </h1>

        {message && (
          <div
            style={{
              color: "#38bdf8",
              marginBottom: "20px",
            }}
          >
            {message}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
          style={inputStyle}
        />

        <button
          onClick={handleSignup}
          style={buttonStyle}
        >
          {loading
            ? "Creating..."
            : "Register"}
        </button>

        <p
          style={{
            color: "white",
            marginTop: "20px",
          }}
        >
          Already have account?{" "}
          <Link
            to="/login"
            style={{
              color: "#3b82f6",
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px",
  marginBottom: "20px",
  borderRadius: "12px",
  border: "1px solid #334155",
  background: "#ffffff",
  color: "#000000",
  fontSize: "18px",
  outline: "none",
  boxSizing: "border-box" as const,
};

const buttonStyle = {
  width: "100%",
  padding: "18px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "12px",
  fontSize: "20px",
  fontWeight: "bold",
  cursor: "pointer",
};