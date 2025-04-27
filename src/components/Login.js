import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isFormValid = email && password;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="flex justify-center items-center bg-[rgba(234,250,237,1)] h-screen bg-cover bg-center">
      <div className="relative bg-transparent  max-w-sm  shadow-lg border-4 border-[rgba(28,94,85,255)] p-8 rounded-lg  w-full  bg-opacity-80 z-20">
        <div className="flex justify-center mb-4">
          <img
            src="/logo.jpeg"
            alt="Gulahmed Logo"
            className=""
            width={300}
            height={300}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm text-[20px] text-[rgba(28,94,85,255)] font-medium "
            >
              <b>Email</b>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 bg-[rgba(234,250,237,1)] text-[18px] text-black border-2 border-[rgba(28,94,85,255)] rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(28,94,85,255)]"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm text-[20px] text-[rgba(28,94,85,255)] font-medium "
            >
              <b>Password</b>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border bg-[rgba(234,250,237,1)] border-[rgba(28,94,85,255)]  text-[18px] text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(28,94,85,255)]"
              placeholder="Enter your password"
            />
          </div>

          <Link to="/Dashboard">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-2 mt-4 text-[20px]  text-white rounded-md focus:outline-none ${
                isFormValid
                  ? "bg-[rgba(28,94,85,255)]"
                  : "bg-gray-300 border-2 text-[rgba(28,94,85,255)] text-[20px] py-2 font-bold tracking-wide border-[rgba(28,94,85,255)] cursor-not-allowed"
              }`}
            >
              Login
            </button>
          </Link>
        </form>
        <div className="mt-6 text-sm text-center">
          <p className="text-[18px] text-[rgba(28,94,85,255)] mb-3 ">
            If you don't have an account, &nbsp;
            <a
              href="/signup"
              className="text-[rgba(28,94,85,255)] mt-1 hover:underline"
            >
              <b>SignUp</b>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
