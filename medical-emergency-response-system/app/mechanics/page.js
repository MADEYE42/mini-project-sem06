"use client";
import React from "react";
import { MapPin, PhoneCall } from "lucide-react";

export default function Mechanics() {
  const mechanics = [
    {
      name: "Mahinder Auto Store",
      address: "C-18/27, Chembur Camp, C.G Road, Opp. Golf Club, Chembur East, Mumbai - 400074",
      googleMapsUrl: "https://www.google.com/maps?q=C-18/27,+Chembur+Camp,+C.G+Road,+Opp.+Golf+Club,+Chembur+East,+Mumbai+400074",
      contacts: ["9322220293", "9833212598 (Siraj)", "8433554972 (Sameer)", "9004178598 (Vinod)", "7506837745 (Suraj)"]
    },
    {
      name: "Welcome Engineering Works",
      address: "Opp. Golf Club, Chembur Camp, C.G Road, Chembur East, Mumbai - 400074",
      googleMapsUrl: "https://www.google.com/maps?q=Opp.+Golf+Club,+Chembur+Camp,+C.G+Road,+Chembur+East,+Mumbai+400074",
      contacts: ["9867530826", "8108276378 (Akram)"]
    }
  ];

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber.split(" ")[0]}`; // Calls the first part of the number
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 p-6">
      <div className="w-full max-w-2xl p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg animate-fadeIn">
        <h2 className="text-3xl font-bold text-white text-center mb-6 flex items-center justify-center gap-2">
          🔧 Mechanics Contacts
        </h2>

        <div className="space-y-6">
          {mechanics.map((mechanic, index) => (
            <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-300">{mechanic.name}</h3>

              {/* Address */}
              <p className="mb-2 flex items-center gap-2 text-green-400 hover:text-green-300 cursor-pointer" 
                onClick={() => window.open(mechanic.googleMapsUrl, "_blank")}>
                <MapPin size={18} /> {mechanic.address}
              </p>

              {/* Contact Numbers */}
              <p className="font-medium text-white">📞 Contact No.:</p>
              <ul className="list-none">
                {mechanic.contacts.map((contact, idx) => (
                  <li key={idx} className="text-blue-400 hover:text-blue-300 cursor-pointer flex items-center gap-2 mt-1"
                    onClick={() => handleCall(contact)}>
                    <PhoneCall size={18} /> {contact}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Animations & Styling */}
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
