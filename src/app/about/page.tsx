import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-[#1b4290] mb-6">About Blockrise</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Blockrise was built to simplify property management for investors and landlords.
          We help you keep track of rental income, property value, and portfolio growth in real time.
        </p>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          Our mission is to bring transparency, simplicity, and automation to the real estate world — 
          empowering users to make data-driven decisions about their assets.
        </p>
      </main>
      <Footer />
    </>
  )
}
