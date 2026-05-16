// src/pages/SetPassword.tsx

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SetPassword() {
  const navigate = useNavigate();

  const [password, setPassword] =
    useState("");

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-10">
      <div className="bg-white rounded-3xl border shadow-sm p-12 w-full max-w-2xl">
        <h1 className="text-5xl font-black mb-4">
          Set Password
        </h1>

        <p className="text-slate-500 text-xl mb-10">
          Your email has been
          verified successfully.
        </p>

        <div className="space-y-6">
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full border rounded-2xl p-5 text-xl"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-2xl p-5 text-xl"
          />

          <button
            onClick={() =>
              navigate("/dashboard")
            }
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white p-5 rounded-2xl font-black text-xl"
          >
            Activate AI ERP
          </button>
        </div>
      </div>
    </div>
  );
}