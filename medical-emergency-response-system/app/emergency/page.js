"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { MapPin, PhoneCall, AlertTriangle } from "lucide-react";

export default function EmergencyRequest() {
  const [issue, setIssue] = useState("");
  const [hospitalId, setHospitalId] = useState("");

  // Get Nearest Hospital (Dummy for now, but can be enhanced with API)
  useEffect(() => {
    setHospitalId("HOSP-12345"); // Replace with dynamic location-based hospital ID
  }, []);

  const handleRequest = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/emergency/request", { issue, hospitalId });
      alert("🚨 Emergency request submitted!");
    } catch (error) {
      alert("⚠️ Failed to submit request");
    }
  };

  const handleSOS = () => {
    window.location.href = "tel:112"; // Calls emergency services
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-green-700 p-6">
      <div className="w-full max-w-lg p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg animate-fadeIn">
        <h2 className="text-3xl font-bold text-white text-center mb-6 flex items-center justify-center gap-2">
          🚑 Request Emergency Assistance
        </h2>

        <form onSubmit={handleRequest} className="space-y-4">
          {/* Emergency Issue */}
          <textarea
            placeholder="Describe your emergency"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            className="w-full p-3 bg-transparent border border-gray-300 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Hospital ID */}
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-300" size={18} />
            <input
              type="text"
              placeholder="Nearest Hospital ID"
              value={hospitalId}
              onChange={(e) => setHospitalId(e.target.value)}
              className="w-full pl-10 py-2 bg-transparent border border-gray-300 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 flex items-center justify-center gap-2 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md hover:scale-105"
          >
            📩 Submit Request
          </button>

          {/* Emergency Call Button */}
          <button
            type="button"
            onClick={handleSOS}
            className="w-full py-2 flex items-center justify-center gap-2 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-md hover:scale-105"
          >
            <PhoneCall size={18} /> Call Emergency (112)
          </button>
        </form>
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
