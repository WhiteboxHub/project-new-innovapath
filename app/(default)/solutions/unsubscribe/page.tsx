'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function UnsubscribePage() {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 🔜 Later you can call API here with `email`
    // await fetch('/api/unsubscribe', { ... })

    // Redirect to success page
    router.push('/solutions/unsubscribe-success')
  }

  return (
    <main className="w-full min-h-screen bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold">
            Unsubscribe
          </h1>
          <p className="text-lg text-slate-300">
            Manage your communication preferences with Innovapath.
          </p>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-xl mx-auto text-center space-y-8">

          <h2 className="text-2xl font-semibold">
            Opt Out of Candidate Introductions
          </h2>

          <p className="text-slate-600 text-lg">
            Enter your business email address below to stop receiving future
            outreach from candidates using our platform.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              required
              placeholder="Business email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg border border-slate-300 px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-slate-800"
            />

            <button
              type="submit"
              className="rounded-lg bg-slate-900 px-6 py-3
                         text-white font-medium hover:bg-slate-800 transition"
            >
              Unsubscribe
            </button>
          </form>

        </div>
      </section>

    </main>
  )
}
