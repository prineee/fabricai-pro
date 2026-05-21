import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function Register() {
  const navigate = useNavigate();

  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      setLoading(true);
      setError("");

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Account Created Successfully");

      navigate("/dashboard");
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
          maxWidth: "600px",
          background: "#0f172a",
          padding: "50px",
          borderRadius: "20px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "60px",
            marginBottom: "30px",
          }}
        >
          Create Account
        </h1>

        {error && (
          <p
            style={{
              color: "red",
              marginBottom: "20px",
            }}
          >
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "none",
            fontSize: "20px",
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "20px",
            marginBottom: "30px",
            borderRadius: "10px",
            border: "none",
            fontSize: "20px",
          }}
        />

        <button
          onClick={handleRegister}
          disabled={loading}
          style={{
            width: "100%",
            padding: "20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "22px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {loading ? "Creating..." : "Register"}
        </button>

        <p
          style={{
            color: "white",
            marginTop: "30px",
            fontSize: "20px",
          }}
        >
          Already have account?{" "}
          <Link
            to="/login"
            style={{
              color: "#9333ea",
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}