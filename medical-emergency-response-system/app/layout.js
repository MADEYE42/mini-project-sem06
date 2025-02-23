import React from "react";
import './globals.css';
export default function Layout({ children }) {
    return (
      <html lang="en">
        <body className="min-h-screen bg-gray-100 flex flex-col">
          <header className="bg-red-900 text-white p-4 text-center text-xl font-bold">
            Medical Emergency App
          </header>
          <main className="flex-1 p-6">{children}</main>
          <footer className="bg-gray-800 text-white text-center p-3">
            &copy; 2024 Medical Emergency App
          </footer>
        </body>
      </html>
    );
  }