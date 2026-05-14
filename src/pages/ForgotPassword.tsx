import { useState } from "react";

export default function ForgotPassword() {

  const [email, setEmail] =
    useState("");



  const sendResetEmail =
    async () => {

      const users =
        JSON.parse(
          localStorage.getItem(
            "users"
          ) || "[]"
        );



      const user =
        users.find(
          (u: any) =>
            u.email === email
        );



      if (!user) {

        alert(
          "User not found"
        );

        return;
      }



      try {

        const response =
          await fetch(

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



        alert(
          data.message
        );

      } catch (error) {

        alert(
          "Email sending failed"
        );

      }

    };



  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[420px]">

        <h1 className="text-4xl font-black mb-8">
          Forgot Password
        </h1>



        <input

          type="email"

          placeholder="Enter Email"

          value={email}

          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }

          className="w-full border p-4 rounded-2xl mb-8"
        />



        <button

          onClick={sendResetEmail}

          className="w-full bg-emerald-600 text-white p-4 rounded-2xl font-bold"
        >
          Send Reset Link
        </button>

      </div>

    </div>

  );
}