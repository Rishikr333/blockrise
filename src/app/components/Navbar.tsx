"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#1b4290] text-white px-8 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image src="/logo.png" alt="Blockrise Logo" width={40} height={40} />
        <span className="font-bold text-xl tracking-wide">Blockrise</span>
      </div>

      {/* Nav Links */}
      <div className="flex space-x-8">
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
    </nav>
  );
};

export default Navbar;
