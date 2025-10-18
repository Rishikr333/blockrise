'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#1b4290] text-white shadow">
      <div className="flex items-center gap-3">
        {/* Replace src with your actual logo later */}
        <Image src="/logo.png" alt="Blockrise Logo" width={40} height={40} />
        <Link href="/" className="text-xl font-bold tracking-wide">
          Blockrise
        </Link>
      </div>
      <div className="flex gap-6">
        <Link href="/" className="hover:text-gray-200">Home</Link>
        <Link href="/about" className="hover:text-gray-200">About</Link>
        <Link href="/login" className="hover:text-gray-200">Login</Link>
      </div>
    </nav>
  )
}
