"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard"); // ✅ Redirect to dashboard
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`, // ✅ Redirect to deployed dashboard
      },
    });

    if (error) setError(error.message);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#1b4290] to-[#2d58b5] text-white px-6">
      <div className="bg-white text-gray-900 rounded-3xl shadow-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#1b4290]">
          Log In / Sign Up
        </h2>

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b4290]"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b4290]"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#1b4290] text-white py-2 rounded-lg font-semibold hover:bg-[#2d58b5] transition"
          >
            Log In
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-3 font-semibold hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
      </div>
    </main>
  );
}
