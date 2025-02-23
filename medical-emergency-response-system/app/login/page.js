"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full max-w-md p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-900"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-900"
          />
          <button
            type="submit"
            className="w-full py-2 bg-red-900 text-white font-semibold rounded-lg hover:bg-red-800 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-gray-300 text-center mt-4">
          Don't have an account?{" "}
          <span
            className="text-red-400 cursor-pointer hover:text-red-300 transition duration-300"
            onClick={() => router.push("/register")}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}
