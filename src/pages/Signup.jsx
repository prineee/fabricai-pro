import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

export default function Signup() {
  const navigate = useNavigate();

  const auth = getAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      setLoading(true);

      setError("");

      if (
        !email ||
        !password ||
        !confirmPassword
      ) {
        setError("Please fill all fields");
        setLoading(false);
        return;
      }

      if (password.length < 6) {
        setError(
          "Password must be at least 6 characters"
        );
        setLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match");
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

      alert(
        "Verification email sent successfully. Please verify your email before login."
      );

      navigate("/login");
    } catch (err) {
      setError(err.message);
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
          maxWidth: "650px",
          background: "#0f172a",
          padding: "50px",
          borderRadius: "25px",
          boxShadow:
            "0px 0px 40px rgba(37,99,235,0.3)",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "55px",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          Create Account
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "35px",
            fontSize: "18px",
          }}
        >
          Join FabricAI Pro and start generating
          AI business content instantly
        </p>

        {error && (
          <div
            style={{
              background: "#7f1d1d",
              color: "white",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
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
          disabled={loading}
          style={{
            width: "100%",
            padding: "18px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "22px",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          {loading
            ? "Creating Account..."
            : "Register"}
        </button>

        <p
          style={{
            color: "white",
            marginTop: "30px",
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          Already have an account?{" "}
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
  border: "1px solid #1e293b",
  background: "#020617",
  color: "white",
  fontSize: "18px",
  outline: "none",
};