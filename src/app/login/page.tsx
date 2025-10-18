'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function LoginPage() {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) router.push('/dashboard')
    })
  }, [router])

  const handleAuth = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) alert(error.message)
      else router.push('/dashboard')
    } else {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) alert(error.message)
      else alert('Signup successful! Check your email for confirmation.')
    }

    setLoading(false)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
        <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md border border-gray-100">
          <h1 className="text-3xl font-bold text-center text-[#1b4290] mb-2">
            {isLogin ? 'Welcome Back' : 'Create Your Account'}
          </h1>
          <p className="text-gray-600 text-center mb-8">
            {isLogin
              ? 'Sign in to access your Blockrise dashboard.'
              : 'Join Blockrise and start tracking your properties today.'}
          </p>

          <form onSubmit={handleAuth} className="space-y-5">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b4290]"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
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
              {loading ? 'Please wait...' : isLogin ? 'Log In' : 'Sign Up'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            {isLogin ? "Don’t have an account?" : 'Already registered?'}{' '}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#1b4290] font-semibold cursor-pointer hover:underline"
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </span>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
