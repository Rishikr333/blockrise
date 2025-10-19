'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [properties, setProperties] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadUser() {
      const { data, error } = await supabase.auth.getUser()
      if (error || !data.user) {
        router.push('/login')
        return
      }
      setUser(data.user)
      fetchProperties(data.user.id)
    }
    loadUser()
  }, [router])

  async function fetchProperties(userId: string) {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) console.error('Error fetching properties:', error)
    else setProperties(data || [])
    setLoading(false)
  }

  async function logout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (loading)
    return (
      <main className="flex items-center justify-center h-screen text-[#1b4290] font-semibold">
        Loading your dashboard...
      </main>
    )

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-[#1b4290]">Welcome, {user?.email}</h1>
          <button
            onClick={logout}
            className="bg-[#1b4290] text-white px-4 py-2 rounded-lg hover:bg-[#16336e] transition"
          >
            Log out
          </button>
        </div>

        <h2 className="text-2xl font-semibold text-[#1b4290] mb-4">Your Properties</h2>

        {properties.length === 0 ? (
          <div className="text-center bg-white p-10 rounded-xl shadow-md">
            <p className="text-gray-600 mb-4">You don’t have any properties yet.</p>
            <button
              onClick={() => alert('Add Property modal coming soon!')}
              className="bg-[#1b4290] text-white px-5 py-2 rounded-lg hover:bg-[#16336e]"
            >
              + Add Property
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((p) => (
              <div key={p.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-5 border border-gray-100">
                {p.image_url && (
                  <img
                    src={p.image_url}
                    alt={p.property_name}
                    className="rounded-lg w-full h-40 object-cover mb-4"
                  />
                )}
                <h3 className="text-xl font-bold text-[#1b4290]">{p.property_name}</h3>
                <p className="text-gray-600">{p.location}</p>
                <p className="text-gray-800 font-semibold mt-2">
                  Value: ₹{p.value?.toLocaleString()}
                </p>
                <p className="text-gray-600">Rental: ₹{p.rental_income?.toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
