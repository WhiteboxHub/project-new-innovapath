'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function UnsubscribePage() {
  const [email, setEmail] = useState('')
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Attempt to get email or token from the URL if coming from an email link
    const searchParams = new URLSearchParams(window.location.search)
    const emailParam = searchParams.get('email')
    const tokenParam = searchParams.get('token')

    if (emailParam) setEmail(emailParam)
    if (tokenParam) setToken(tokenParam)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const { apiFetch } = await import('@/utils/api')

      // We use the new outreach-feedback / outreach-unsubscribe logic we just set up
      // It supports both email or token
      let endpoint = '/api/outreach-unsubscribe?format=json'
      if (token) {
        endpoint += `&token=${encodeURIComponent(token)}`
      } else {
        endpoint += `&email=${encodeURIComponent(email)}`
      }

      await apiFetch(endpoint, { method: 'GET' })

      // Redirect to success page
      router.push('/solutions/unsubscribe-success')
    } catch (err: any) {
      console.error('Unsubscribe failed:', err)
      setError('Could not process your request. Please try again or contact support.')
    } finally {
      setIsLoading(false)
    }
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

          {error && (
            <p className="text-red-500 font-medium">{error}</p>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              required
              disabled={isLoading}
              placeholder="Business email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg border border-slate-300 px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-slate-800 disabled:opacity-50"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="rounded-lg bg-slate-900 px-6 py-3
                         text-white font-medium hover:bg-slate-800 transition disabled:opacity-50 flex items-center justify-center min-w-[120px]"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'Unsubscribe'
              )}
            </button>
          </form>

        </div>
      </section>

    </main>
  )
}
