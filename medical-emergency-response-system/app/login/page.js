"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, LogIn } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      router.push("/dashboard");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-green-700">
      <div className="w-full max-w-md p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg animate-fadeIn">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-6 flex items-center justify-center gap-2">
          👋 Welcome Back
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-300" size={18} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-10 py-2 bg-transparent border border-gray-300 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-300" size={18} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-10 py-2 bg-transparent border border-gray-300 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 flex items-center justify-center gap-2 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md hover:scale-105"
          >
            <LogIn size={18} /> Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-gray-300 text-center mt-4">
          Don't have an account?{" "}
          <span
            className="text-green-400 cursor-pointer hover:text-green-300 transition duration-300"
            onClick={() => router.push("/register")}
          >
            Register here
          </span>
        </p>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
