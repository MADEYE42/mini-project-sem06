'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', { name, email, password });
      router.push('/login');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <form className="bg-gray-800 p-6 rounded shadow-lg w-full max-w-md" onSubmit={handleRegister}>
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 bg-gray-700 border border-gray-600 mb-2 rounded" />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 bg-gray-700 border border-gray-600 mb-2 rounded" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 bg-gray-700 border border-gray-600 mb-2 rounded" />
        <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-500 transition duration-300">Register</button>
      </form>
    </div>
  );
}
