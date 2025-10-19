"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function SolarFarmPage() {
  return (
    <main className="bg-gradient-to-b from-[#1b4290] to-[#2d58b5] text-white min-h-screen overflow-x-hidden">
      {/* HERO */}
      <section className="relative text-center py-32 px-6 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          Powering the <span className="text-yellow-400">Future of Real Estate</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200"
        >
          Introducing Blockrise Solar Farms — where sustainability meets profitability. 
          Own a share in a 1 MW solar plant and earn long-term passive income through renewable energy production.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition"
          >
            Get Investment Brochure
          </Link>
        </motion.div>

        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/solar-hero.jpg"
            alt="Solar Panels Field"
            fill
            className="object-cover opacity-25"
          />
        </div>
      </section>

      {/* OUR VISION */}
      <section className="bg-white text-gray-900 py-20 px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-[#1b4290] mb-10"
        >
          Our Vision: Energy-Backed Real Estate
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/solar-vision.jpg"
              alt="Solar Vision"
              width={600}
              height={400}
              className="rounded-3xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed mb-4">
              Blockrise Solar Farm bridges the gap between real estate ownership and green energy.
              We create investment-grade assets that generate tangible income while supporting 
              India’s transition to clean, renewable power.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✅ Diversify your real estate portfolio with renewable assets</li>
              <li>✅ 25-year secured lease agreements with energy buyers</li>
              <li>✅ Zero operational hassle – managed end-to-end by Blockrise</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* TECHNICAL DETAILS */}
      <section className="bg-gray-100 text-gray-900 py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center text-[#1b4290] mb-12">
          Project Highlights
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { label: "Capacity", value: "1 MW" },
            { label: "Land Requirement", value: "4 Acres" },
            { label: "Life Span", value: "25+ Years" },
            { label: "Technology", value: "Polycrystalline Solar Panels" },
            { label: "O&M Partner", value: "MNRE Approved Vendor" },
            { label: "Location", value: "Maharashtra, India" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold text-[#1b4290]">{item.value}</h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ENVIRONMENTAL IMPACT */}
      <section className="bg-[#1b4290] text-white py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Environmental Impact
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          {[
            { value: "1,200,000", label: "Units of Clean Energy per Year" },
            { value: "800", label: "Tons of CO₂ Offset Annually" },
            { value: "1,000+", label: "Households Powered" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="rounded-3xl bg-white text-gray-900 p-10 shadow-xl hover:scale-105 transition"
            >
              <h3 className="text-3xl font-bold text-[#1b4290] mb-2">
                {item.value}
              </h3>
              <p className="text-gray-700">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INVESTMENT BENEFITS */}
      <section className="bg-white text-gray-900 py-20 px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-[#1b4290] mb-10"
        >
          Why Invest with Blockrise?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ul className="space-y-4 text-lg leading-relaxed">
              <li>✅ Earn 12–15% annualized returns through power sales</li>
              <li>✅ Ownership-backed model: Real land, real energy asset</li>
              <li>✅ Inflation-protected monthly cash flows</li>
              <li>✅ Long-term wealth creation with sustainability</li>
              <li>✅ Asset managed by energy & real estate professionals</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/solar-investment.jpg"
              alt="Investment Growth"
              width={600}
              height={400}
              className="rounded-3xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 text-center bg-yellow-400 text-black">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Be Part of India’s Energy Revolution
        </motion.h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Join Blockrise in building a sustainable future. Invest in solar, earn 
          reliable income, and make your real estate work smarter.
        </p>
        <Link
          href="/contact"
          className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Connect with Our Team
        </Link>
      </section>

      {/* FLOATING CONTACT BUTTONS */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/919552179755"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="https://www.linkedin.com/company/blockrisein/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.instagram.com/blockrise.india?igsh=MTFudTk4bDBvZGh0ZA=="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </main>
  );
}
