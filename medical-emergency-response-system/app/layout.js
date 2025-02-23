import React from "react";
import { HeartPulse, ShieldCheck, AlertTriangle } from "lucide-react";
import "./globals.css";

export default function Layout({ children }) {
    return (
        <html lang="en" className="h-full w-full">
            <head>
                <link 
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" 
                    rel="stylesheet" 
                />
            </head>
            <body className="min-h-screen min-w-screen flex flex-col  font-poppins bg-gradient-to-br from-green-900 to-green-700 text-white">
                {/* Header */}
                <header className="bg-green-800 text-white text-center text-2xl font-bold py-6 shadow-lg md:text-4xl tracking-wider uppercase relative">
                    <span className="bg-green-600 px-6 py-2 rounded-lg shadow-md flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        🚑 Medical Emergency App
                    </span>
                </header>
                
                {/* Main Content - Full height between header and footer */}
                <main className="w-full flex-1 flex items-center justify-center p-6 bg-green-700 animate-fadeIn">
                    <div className="bg-opacity-30 p-8 rounded-lg shadow-lg w-full max-w-5xl animate-slideUp">
                        {children}
                    </div>
                </main>
                
                {/* Footer */}
                <footer className="bg-green-900 text-white text-center py-4 text-sm md:text-base shadow-md tracking-wide">
                    <div className="flex justify-center items-center gap-4">
                        <span className="flex items-center gap-2">
                            &copy; 2024 Medical Emergency App <HeartPulse className="text-red-500 animate-pulse" size={18} />
                        </span>
                        <span className="px-3 py-1 bg-green-600 rounded-lg text-xs md:text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-green-700">
                            <ShieldCheck size={16} /> Stay Safe, Stay Healthy ❤️
                        </span>
                    </div>
                </footer>

                {/* Animations */}
                <style>
                    {`
                        @keyframes fadeIn {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }
                        .animate-fadeIn {
                            animation: fadeIn 1s ease-in-out;
                        }
                        
                        @keyframes slideUp {
                            from { transform: translateY(20px); opacity: 0; }
                            to { transform: translateY(0); opacity: 1; }
                        }
                        .animate-slideUp {
                            animation: slideUp 0.8s ease-in-out;
                        }
                    `}
                </style>
            </body>
        </html>
    );
}
