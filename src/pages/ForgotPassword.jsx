import { useState } from "react";
import api from "../services/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const submit = async () => {
    try {
      await api.post("/auth/forgot-password", {
        email,
      });

      alert("Reset link sent");
    } catch (error) {
      console.error(error);
      alert("Failed");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-xl w-[400px]">
        <h1 className="text-3xl text-white font-bold mb-6">
          Forgot Password
        </h1>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-lg bg-black text-white border border-zinc-700 mb-4"
        />

        <button
          onClick={submit}
          className="w-full bg-blue-600 p-4 rounded-lg text-white"
        >
          Send Reset Link
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;