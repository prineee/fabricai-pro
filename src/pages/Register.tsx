import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../firebase";

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
      setMessage("");

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

      await setDoc(
        doc(
          db,
          "users",
          userCredential.user.uid
        ),
        {
          email,
          plan: "FREE",
          country: "india",
          verified: false,
          dailyUsage: 0,
          createdAt:
            serverTimestamp(),
        }
      );

      setMessage(
        "Verification email sent. Please check inbox/spam."
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
          maxWidth: "500px",
          background: "#0f172a",
          padding: "40px",
          borderRadius: "20px",
          boxShadow:
            "0 0 40px rgba(0,0,0,0.5)",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "48px",
            marginBottom: "30px",
          }}
        >
          Create Account
        </h1>

        {message && (
          <p
            style={{
              color: "#38bdf8",
              marginBottom: "20px",
              fontSize: "16px",
            }}
          >
            {message}
          </p>
        )}

        <input
          type="email"
          placeholder="Email Address"
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
          placeholder="Create Password"
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
  border: "none",
  outline: "none",
  fontSize: "18px",
  background: "#e2e8f0",
  color: "#000000",
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