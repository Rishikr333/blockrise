"use client";

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* COLUMN 1: Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
            BLOCKRISE
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Doing real estate the real way — merging high-value property and
            sustainable energy investments for long-term growth.
          </p>
        </div>

        {/* COLUMN 2: Quick Links */}
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <div className="flex flex-col space-y-2 text-sm">
            <Link href="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-yellow-400 transition">
              About
            </Link>
            <Link href="/login" className="hover:text-yellow-400 transition">
              Login
            </Link>
            <Link href="/signup" className="hover:text-yellow-400 transition">
              Sign Up
            </Link>
            <Link href="/dashboard" className="hover:text-yellow-400 transition">
              Dashboard
            </Link>
            <Link href="/solar-farm" className="hover:text-yellow-400 transition">
              Solar Farm
            </Link>
          </div>
        </div>

        {/* COLUMN 3: Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <p className="text-gray-400 text-sm">
            Blockrise
          </p>
          <p className="text-gray-400 text-sm">123, Citadel, Palace Orchard, Nibm Road</p>
          <p className="text-gray-400 text-sm">Pune, Maharashtra</p>
          <p className="text-gray-400 text-sm mt-2">
            contact@blockrise.com
          </p>
          <p className="text-gray-400 text-sm">+91 95521 79755</p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-5">
            <a
              href="https://www.instagram.com/blockrise.india?igsh=MTFudTk4bDBvZGh0ZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://www.linkedin.com/company/blockrisein/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://wa.me/919552179755"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* SEPARATOR */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Blockrise — All Rights Reserved.
      </div>
    </footer>
  );
}

