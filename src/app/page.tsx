"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#1b4290] to-[#2d58b5] text-white overflow-hidden">
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center px-6 py-32 md:py-40"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
        >
          Doing Real Estate the{" "}
          <span className="text-yellow-300">Real Way</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl max-w-2xl mb-10"
        >
          Blockrise brings modern transparency and performance-driven strategy
          to Indian real estate. Explore opportunities that truly rise above.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition"
        >
          Explore Opportunities
        </motion.button>
      </section>

      {/* Verticals Section */}
      <section
        id="verticals"
        className="bg-white text-gray-900 rounded-t-3xl mt-10 px-6 py-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1b4290]">
          Our Verticals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Industrial */}
          <div className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition bg-gray-50">
            <Image
              src="/images/industrial.jpg"
              alt="Industrial Real Estate"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#1b4290] mb-2">
                Industrial Spaces
              </h3>
              <p>
                High-yield industrial assets built for long-term performance and
                stability.
              </p>
            </div>
          </div>

          {/* Warehousing */}
          <div className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition bg-gray-50">
            <Image
              src="/images/warehouse.jpg"
              alt="Warehousing"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#1b4290] mb-2">
                Warehousing
              </h3>
              <p>
                Strategically located warehouse assets designed for scale and
                modern logistics.
              </p>
            </div>
          </div>

          {/* Commercial */}
          <div className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition bg-gray-50">
            <Image
              src="/images/commercial.jpg"
              alt="Commercial Real Estate"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#1b4290] mb-2">
                Commercial
              </h3>
              <p>
                Premium commercial investments delivering consistent rental
                income and value growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Social Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <a
          href="https://www.instagram.com/blockrise.india?igsh=MTFudTk4bDBvZGh0ZA=="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 hover:bg-pink-500 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
        >
          <FaInstagram size={22} />
        </a>
        <a
          href="https://wa.me/919552179755"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-400 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
        >
          <FaWhatsapp size={22} />
        </a>
        <a
          href="https://www.linkedin.com/company/blockrisein/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
        >
          <FaLinkedin size={22} />
        </a>
      </div>
    </main>
  );
}
