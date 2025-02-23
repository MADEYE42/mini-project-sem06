'use client';
import { useState } from 'react';
import axios from 'axios';

export default function EmergencyRequest() {
  const [issue, setIssue] = useState('');
  const [hospitalId, setHospitalId] = useState('');

  const handleRequest = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/emergency/request', { issue, hospitalId });
      alert('Emergency request submitted');
    } catch (error) {
      alert('Failed to submit request');
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold">Request Emergency Assistance</h2>
      <form onSubmit={handleRequest}>
        <textarea placeholder="Describe your emergency" value={issue} onChange={(e) => setIssue(e.target.value)} className="w-full p-2 border mb-2" />
        <input type="text" placeholder="Nearest Hospital ID" value={hospitalId} onChange={(e) => setHospitalId(e.target.value)} className="w-full p-2 border mb-2" />
        <button type="submit" className="w-full bg-red-600 text-white p-2 rounded">Submit Request</button>
      </form>
    </div>
  );
}
