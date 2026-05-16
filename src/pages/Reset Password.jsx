import { useState } from "react";

import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] =
    useState("");

  const { token } = useParams();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        { password }
      );

      alert(data.message);

      navigate("/");
    } catch (error) {
      console.log(error);

      alert("Reset failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl w-[400px]"
      >
        <h1 className="text-3xl font-bold mb-6">
          Reset Password
        </h1>

        <input
          type="password"
          placeholder="New Password"
          className="w-full p-3 mb-4 rounded bg-zinc-800"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button className="w-full bg-green-600 p-3 rounded">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;