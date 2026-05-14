import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");



  const register = () => {

    if (
      !name ||
      !email ||
      !password
    ) {

      alert(
        "Please fill all fields"
      );

      return;
    }



    const users =
      JSON.parse(
        localStorage.getItem(
          "users"
        ) || "[]"
      );



    const alreadyExists =
      users.find(
        (u: any) =>
          u.email === email
      );



    if (alreadyExists) {

      alert(
        "User already exists"
      );

      return;
    }



    const newUser = {

      name,
      email,
      password,
      plan: "Demo",

    };



    users.push(newUser);



    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );



    localStorage.setItem(
      "user",
      JSON.stringify(newUser)
    );



    localStorage.setItem(
      "token",
      "fabricai_token"
    );



    alert(
      "Account Created Successfully"
    );



    navigate("/");

  };



  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[420px]">

        <h1 className="text-4xl font-black mb-8">
          Create Account
        </h1>



        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          className="w-full border p-4 rounded-2xl mb-5"
        />



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
          onClick={register}
          className="w-full bg-emerald-600 text-white p-4 rounded-2xl font-bold"
        >
          Create Account
        </button>



        <Link to="/login">

          <button
            className="w-full border p-4 rounded-2xl mt-5"
          >
            Back To Login
          </button>

        </Link>

      </div>

    </div>

  );
}