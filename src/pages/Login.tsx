import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");



  const login = () => {

    if (!email || !password) {

      alert(
        "Please enter email and password"
      );

      return;
    }



    localStorage.setItem(
      "token",
      "fabricai_token"
    );



    localStorage.setItem(
      "user",
      JSON.stringify({

        name: "Naveen",

        email,

        plan: "Demo",

      })
    );



    alert(
      "Login Successful"
    );



    navigate("/");

  };



  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[420px]">

        <h1 className="text-4xl font-black mb-8">
          Login
        </h1>



        <input

          type="email"

          placeholder="Email"

          value={email}

          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }

          className="w-full border p-4 rounded-2xl mb-5"
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

          className="w-full border p-4 rounded-2xl mb-8"
        />



        <button

          type="button"

          onClick={login}

          className="w-full bg-emerald-600 text-white p-4 rounded-2xl font-bold"
        >
          Login
        </button>



        <Link to="/forgot-password">

          <button

            type="button"

            className="w-full mt-4 text-emerald-700 font-semibold"
          >
            Forgot Password?
          </button>

        </Link>



        <Link to="/signup">

          <button

            type="button"

            className="w-full border p-4 rounded-2xl mt-5"
          >
            Create Account
          </button>

        </Link>

      </div>

    </div>

  );
}