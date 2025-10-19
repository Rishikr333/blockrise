"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1b4290] text-white px-6 md:px-12 py-3 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Blockrise Logo"
            width={35}
            height={35}
            className="rounded-md"
          />
          <span className="font-bold text-lg md:text-xl tracking-wide">
            Blockrise
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
          <Link href="/solar-farm" className="hover:text-yellow-400 transition">
            Solar Farm
          </Link>
          <Link href="/login" className="hover:text-yellow-400 transition">
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1b4290]/95 backdrop-blur-md shadow-lg mt-3 rounded-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400 transition"
            >
              About
            </Link>
            <Link
              href="/solar-farm"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400 transition"
            >
              Solar Farm
            </Link>
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400 transition"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
