import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

import API from "../services/api";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const { data } = await API.post(
        "/auth/register",
        formData
      );

      toast.success("Registration successful");

      localStorage.setItem(
        "fabricaiUser",
        JSON.stringify(data.user)
      );

      localStorage.setItem(
        "fabricaiToken",
        data.token
      );

      navigate("/dashboard");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Registration failed"
      );

    }

  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-10 rounded-2xl w-[400px] flex flex-col gap-5"
      >

        <h1 className="text-4xl text-white font-bold">
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="bg-black text-white p-4 rounded-xl outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="bg-black text-white p-4 rounded-xl outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="bg-black text-white p-4 rounded-xl outline-none"
        />

        <button className="bg-white text-black p-4 rounded-xl font-bold">
          Create Account
        </button>

        <Link
          to="/login"
          className="text-zinc-400 text-center"
        >
          Already have account?
        </Link>

      </form>

    </div>
  );
};

export default Register;