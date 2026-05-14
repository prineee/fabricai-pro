import {
  useState,
} from "react";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export default function ResetPassword() {

  const navigate =
    useNavigate();

  const [searchParams] =
    useSearchParams();

  const email =
    searchParams.get("email");



  const [password,
    setPassword,
  ] = useState("");



  const [confirmPassword,
    setConfirmPassword,
  ] = useState("");



  const resetPassword =
    () => {

      if (
        !password ||
        !confirmPassword
      ) {

        alert(
          "Fill all fields"
        );

        return;
      }



      if (
        password !==
        confirmPassword
      ) {

        alert(
          "Passwords do not match"
        );

        return;
      }



      const users =
        JSON.parse(
          localStorage.getItem(
            "users"
          ) || "[]"
        );



      const userIndex =
        users.findIndex(
          (u: any) =>
            u.email === email
        );



      if (
        userIndex === -1
      ) {

        alert(
          "User not found"
        );

        return;
      }



      users[userIndex].password =
        password;



      localStorage.setItem(

        "users",

        JSON.stringify(users)

      );



      alert(
        "Password Reset Successful"
      );



      navigate("/login");

    };



  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white w-[420px] p-10 rounded-3xl shadow-2xl">

        <h1 className="text-4xl font-black mb-2">
          Reset Password
        </h1>

        <p className="text-slate-500 mb-8">
          {email}
        </p>



        <input

          type="password"

          placeholder="New Password"

          value={password}

          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }

          className="w-full border p-4 rounded-2xl mb-5"
        />



        <input

          type="password"

          placeholder="Confirm Password"

          value={confirmPassword}

          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }

          className="w-full border p-4 rounded-2xl mb-8"
        />



        <button

          onClick={resetPassword}

          className="w-full bg-emerald-600 text-white p-4 rounded-2xl font-bold"
        >
          Change Password
        </button>

      </div>

    </div>

  );
}