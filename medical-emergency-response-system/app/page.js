"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <h1 className="text-3xl font-bold text-red-900">Welcome to Medical Emergency App</h1>
      <button
        onClick={() => router.push("/login")}
        className="bg-red-900 text-white px-6 py-2 rounded-lg hover:bg-red-700"
      >
        Login / Register
      </button>
    </div>
  );
}