"use client";
import { useState, useEffect } from "react";
import { MapPin, Bed, CheckCircle, XCircle } from "lucide-react";

export default function Dashboard() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/hospital/available")
      .then((res) => res.json())
      .then((data) => setHospitals(data));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-green-700 p-6">
      <div className="w-full max-w-3xl p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg animate-fadeIn">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          🏥 Available Hospitals
        </h2>

        <ul className="space-y-4">
          {hospitals.map((hospital) => (
            <li
              key={hospital._id}
              className="p-4 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-white">{hospital.name}</h3>

              {/* Location with Google Maps Link */}
              <p className="flex items-center text-gray-200 mt-2">
                <MapPin size={18} className="mr-2 text-green-400" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    hospital.location
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-green-300 transition duration-300"
                >
                  {hospital.location}
                </a>
              </p>

              {/* Bed Availability Indicator */}
              <p className="flex items-center text-gray-200 mt-2">
                <Bed size={18} className="mr-2 text-yellow-300" />
                Beds Available: {hospital.bedAvailability}{" "}
                {hospital.bedAvailability > 0 ? (
                  <CheckCircle className="ml-2 text-green-400" size={18} />
                ) : (
                  <XCircle className="ml-2 text-red-400" size={18} />
                )}
              </p>
            </li>
          ))}
        </ul>
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
