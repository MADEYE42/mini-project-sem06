"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-500 to-red-300 space-y-6 p-4">
      <h1 className="text-4xl font-bold text-white">Welcome to Medical Emergency App</h1>
      <button
        onClick={() => router.push("/login")}
        className="bg-white text-red-600 px-8 py-3 rounded-lg shadow-lg hover:bg-red-100 transition duration-300"
      >
        Login / Register
      </button>
    </div>
  );
}

