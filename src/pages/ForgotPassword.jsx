import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );

      alert(data.message);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl w-[400px]"
      >
        <h1 className="text-3xl font-bold mb-6">
          Forgot Password
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 mb-4 rounded bg-zinc-800"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <button className="w-full bg-blue-600 p-3 rounded">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;