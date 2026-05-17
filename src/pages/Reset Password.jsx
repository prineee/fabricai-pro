import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

const ResetPassword = () => {
  const { token } = useParams();

  const [password, setPassword] = useState("");

  const resetPassword = async () => {
    try {
      await api.post(`/auth/reset-password/${token}`, {
        password,
      });

      alert("Password Reset Successful");
    } catch (error) {
      console.error(error);
      alert("Reset Failed");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-zinc-900 p-8 rounded-xl w-[400px]">
        <h1 className="text-3xl text-white font-bold mb-6">
          Reset Password
        </h1>

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-lg bg-black text-white border border-zinc-700 mb-4"
        />

        <button
          onClick={resetPassword}
          className="w-full bg-green-600 p-4 rounded-lg text-white"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;