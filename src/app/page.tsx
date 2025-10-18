import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center text-center px-6 py-16 bg-gray-50">
        <h1 className="text-5xl font-bold text-[#1b4290] mb-4">
          Welcome to Blockrise
        </h1>
        <p className="max-w-2xl text-gray-600 text-lg">
          Blockrise helps property owners track their real estate portfolio effortlessly.
          Manage properties, monitor rental income, and visualize your portfolio growth — all in one place.
        </p>
        <a
          href="/login"
          className="mt-8 bg-[#1b4290] text-white px-6 py-3 rounded-lg shadow hover:bg-[#16336e] transition"
        >
          Get Started
        </a>
      </main>
      <Footer />
    </>
  )
}
