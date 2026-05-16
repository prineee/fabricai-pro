// src/pages/Register.tsx

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="bg-emerald-600 text-white flex flex-col justify-center px-20">
        <h1 className="text-7xl font-black leading-tight">
          AI Apparel ERP
        </h1>

        <p className="text-2xl mt-8 leading-10">
          AI-powered garment
          costing, BOM, SMV,
          production planning and
          consumption engine.
        </p>
      </div>

      <div className="bg-white flex items-center justify-center p-10">
        <div className="w-full max-w-xl">
          <h2 className="text-5xl font-black mb-4">
            Create Account
          </h2>

          <p className="text-slate-500 text-xl mb-10">
            Start your AI ERP
            journey.
          </p>

          <div className="space-y-6">
            <input
              placeholder="Company Name"
              className="w-full border rounded-2xl p-5 text-xl"
            />

            <input
              placeholder="Full Name"
              className="w-full border rounded-2xl p-5 text-xl"
            />

            <input
              placeholder="Business Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border rounded-2xl p-5 text-xl"
            />

            <button
              onClick={() =>
                navigate("/set-password")
              }
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white p-5 rounded-2xl font-black text-xl"
            >
              Send Verification Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}