import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin =
    async () => {

      try {

        const response =
          await fetch(
            "http://localhost:5000/api/auth/login",
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

        if (data.token) {

          localStorage.setItem(
            "token",
            data.token
          );

          localStorage.setItem(
            "user",
            JSON.stringify(
              data.user
            )
          );

          alert(
            "Login Successful"
          );

          navigate("/");

        } else {

          alert(
            data.message
          );

        }

      } catch (error) {

        console.log(error);

        alert(
          "Login Failed"
        );

      }

    };

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-4xl font-black mb-8 text-center">
          Login
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full border rounded-2xl p-4"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full border rounded-2xl p-4"
          />

          <button
            onClick={
              handleLogin
            }
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl p-4 font-bold"
          >
            Login
          </button>
          <button
  onClick={async () => {

    const email = prompt(
      "Enter your registered email"
    );

    if (!email) return;

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/forgot-password",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email,
          }),
        }
      );

      const data =
        await response.json();

      alert(data.message);

    } catch (error) {

      alert(
        "Server Error"
      );

    }

  }}
  className="w-full mt-4 text-emerald-600 font-semibold"
>
  Forgot Password?
</button>

          <button
            onClick={() =>
              navigate("/signup")
            }
            className="w-full border rounded-2xl p-4 font-semibold"
          >
            Create Account
          </button>

        </div>

      </div>

    </div>

  );
}