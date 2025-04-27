import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const isFormValid = username && email && dob && password;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", { username, email, dob, password });
    navigate("/login");
  };

  return (
    <div className="relative flex items-center bg-[rgba(234,250,237,1)] justify-center min-h-screen bg-cover bg-center">
      <div className="relative bg-transparent border-4 border-[rgba(28,94,85,255)] p-8 rounded-lg shadow-lg w-full max-w-md bg-opacity-80 z-20">
        <div className="flex justify-center mb-8">
          <img
            src="/logo.jpeg"
            alt="Gulahmed Logo"
            className=""
            width={300}
            height={300}
          />
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-[19px] text-[rgba(28,94,85,255)]">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full bg-transparent text-black px-4 py-2 border-2 border-[rgba(28,94,85,255)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(28,94,85,255)]"
            />
          </div>

          <div>
            <label className="block mb-1 text-[19px] text-[rgba(28,94,85,255)]">
              <b>Email</b>
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent text-black px-4 py-2 border-2 border-[rgba(28,94,85,255)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(28,94,85,255)]"
            />
          </div>

          <div>
            <label className="block mb-1 text-[19px] text-[rgba(28,94,85,255)]">
              <b>Date of Birth</b>
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              className="w-full bg-transparent text-black px-4 py-2 border-2 border-[rgba(28,94,85,255)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(28,94,85,255)]"
            />
          </div>

          <div>
            <label className="block mb-1 text-[19px] text-[rgba(28,94,85,255)]">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-transparent text-black px-4 py-2 border-2 border-[rgba(28,94,85,255)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgba(28,94,85,255)]"
            />
          </div>
          <a href="/Login">
            {" "}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full ${
                isFormValid
                  ? "bg-[rgba(28,94,85,255)] text-[rgba(234,250,237,1)]"
                  : "bg-gray-300 border-2 border-[rgba(28,94,85,255)] cursor-not-allowed"
              } mt-10 text-[rgba(234,250,237,1)] text-[20px] py-2 font-bold tracking-wide rounded-lg transition`}
            >
              Create Account
            </button>
          </a>
        </form>
        <div className="flex justify-center mt-6 text-sm">
          <p className="text-[rgba(28,94,85,255)] text-[19px] mb-3">
            Already have an account? &nbsp;{" "}
            <a
              href="/Login"
              className="text-[rgba(28,94,85,255)] hover:underline"
            >
              <b>Login</b>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
