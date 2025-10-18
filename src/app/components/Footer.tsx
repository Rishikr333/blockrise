"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="text-xl font-bold mb-2">Blockrise</h3>
          <p className="text-gray-400 text-sm">Doing real estate the real way.</p>
          <p className="text-gray-400 text-sm mt-2">123, Citadel, Palace Orchard, NIBM Road, Pune-411060</p>
          <p className="text-gray-400 text-sm">contact@blockrise.com</p>
          <p>Phone: +91 95521 79755</p>
        </div>

        <div className="flex gap-6 mt-6 md:mt-0">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link href="/login" className="hover:text-yellow-400 transition">Login</Link>
          <Link href="/signup" className="hover:text-yellow-400 transition">Signup</Link>
          <Link href="/dashboard" className="hover:text-yellow-400 transition">Dashboard</Link>
        </div>

        <div className="flex gap-4 mt-6 md:mt-0">
          <a href="https://www.instagram.com/blockrise.india?igsh=MTFudTk4bDBvZGh0ZA==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">Instagram</a>
          <a href="https://www.linkedin.com/company/blockrisein/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
          <a href="https://wa.me/919552179755" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
