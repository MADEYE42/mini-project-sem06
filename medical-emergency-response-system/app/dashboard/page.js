"use client";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/hospital/available")
      .then((res) => res.json())
      .then((data) => setHospitals(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Hospitals</h2>
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital._id} className="p-4 bg-white shadow mb-4 rounded">
            <h3 className="text-xl font-bold">{hospital.name}</h3>
            <p>Location: {hospital.location}</p>
            <p>Beds Available: {hospital.bedAvailability}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}