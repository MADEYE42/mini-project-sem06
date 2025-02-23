'use client';
import React from 'react';

export default function Mechanics() {
  const mechanics = [
    {
      name: "Mahinder Auto Store",
      address: "C-18/27, Chembur Camp, C.G Road, Opp. Golf Club, Chembur East, Mumbai - 400074",
      contacts: [
        "9322220293",
        "9833212598 (Siraj)",
        "8433554972 (Sameer)",
        "9004178598 (Vinod)",
        "7506837745 (Suraj)"
      ]
    },
    {
      name: "Welcome Engineering Works",
      address: "Opp. Golf Club, Chembur Camp, C.G Road, Chembur East, Mumbai - 400074",
      contacts: [
        "9867530826",
        "8108276378 (Akram)"
      ]
    }
  ];

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4 text-center">Mechanics Contacts</h2>
      <div className="space-y-6">
        {mechanics.map((mechanic, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded shadow-md">
            <h3 className="text-xl font-semibold">{mechanic.name}</h3>
            <p className="mb-2">Address: {mechanic.address}</p>
            <p className="font-medium">Contact No.:</p>
            <ul className="list-disc list-inside">
              {mechanic.contacts.map((contact, idx) => (
                <li key={idx}>{contact}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 