'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSignup = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    setLoading(false)

    if (error) setMessage(error.message)
    else {
      setMessage('Signup successful! Check your email to confirm your account.')
      setEmail('')
      setPassword('')
      setTimeout(() => router.push('/login'), 3000)
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1b4290] to-[#233b73] py-12 px-4">
        <div className="bg-white/90 backdrop-blur-lg shadow-lg rounded-2xl w-full max-w-md p-8">
          <h1 className="text-3xl font-bold text-center text-[#1b4290] mb-2">Create Account</h1>
          <p className="text-gray-600 text-center mb-8">Join Blockrise to track your property portfolio.</p>

          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="text-gray-700 font-medium text-sm">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b4290]"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium text-sm">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b4290]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1b4290] text-white py-2 rounded-lg font-semibold hover:bg-[#16336e] transition"
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>

          {message && <p className="text-center text-sm text-gray-600 mt-4">{message}</p>}

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <span
              onClick={() => router.push('/login')}
              className="text-[#1b4290] font-semibold cursor-pointer hover:underline"
            >
              Log in
            </span>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
