import {
    useState,
  } from "react";
  
  import {
    useSearchParams,
    useNavigate,
  } from "react-router-dom";
  
  export default function ResetPassword() {
  
    const [searchParams] =
      useSearchParams();
  
    const navigate =
      useNavigate();
  
    const email =
      searchParams.get("email");
  
    const [password, setPassword] =
      useState("");
  
    const resetPassword =
      async () => {
  
        try {
  
          const response =
            await fetch(
              "http://localhost:5000/api/auth/reset-password",
              {
                method: "POST",
  
                headers: {
                  "Content-Type":
                    "application/json",
                },
  
                body: JSON.stringify({
                  email,
                  password,
                }),
              }
            );
  
          const data =
            await response.json();
  
          alert(data.message);
  
          navigate("/login");
  
        } catch (error) {
  
          alert(
            "Reset Failed"
          );
  
        }
  
      };
  
    return (
  
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
  
        <div className="bg-white rounded-3xl shadow-xl p-10 w-[400px]">
  
          <h1 className="text-4xl font-black mb-8">
            Reset Password
          </h1>
  
          <input
            type="password"
  
            placeholder="New Password"
  
            value={password}
  
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
  
            className="w-full border rounded-2xl p-4 mb-6"
          />
  
          <button
            onClick={resetPassword}
  
            className="w-full bg-emerald-600 text-white rounded-2xl p-4 font-bold"
          >
            Change Password
          </button>
  
        </div>
  
      </div>
  
    );
  }