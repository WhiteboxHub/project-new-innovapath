'use client';
import { useState, useEffect } from 'react';

export default function UnsubscribeSuccessPage() {
  const [status, setStatus] = useState<'processing' | 'success' | 'error'>('success'); // default to success simple view

  // Use a specific effect for handling auto-unsubscribe if params are present
  useEffect(() => {
    const processUnsubscribe = async () => {
      if (typeof window === 'undefined') return;

      const searchParams = new URLSearchParams(window.location.search);
      const email = searchParams.get('email');
      const token = searchParams.get('token');

      // If no params, just show the static success message (legacy behavior)
      if (!email && !token) return;

      setStatus('processing');
      try {
        const { apiFetch } = await import('@/utils/api');

        // Exact logic from unsubscribe page
        let endpoint = '/api/outreach-unsubscribe?format=json';
        if (token) {
          endpoint += `&token=${encodeURIComponent(token)}`;
        } else {
          endpoint += `&email=${encodeURIComponent(email || '')}`;
        }

        await apiFetch(endpoint, { method: 'GET' });
        setStatus('success');
      } catch (err) {
        console.error("Auto-unsubscribe failed", err);
        setStatus('error');
      }
    };

    processUnsubscribe();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-xl w-full text-center">

        {status === 'processing' && (
          <div className="space-y-4">
            <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto"></div>
            <p className="text-lg text-slate-600">Processing your unsubscribe request...</p>
          </div>
        )}

        {status === 'error' && (
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-red-600">Something went wrong</h1>
            <p className="text-slate-600">We couldn't process your automatic unsubscribe request. Please contact support or try again later.</p>
          </div>
        )}

        {status === 'success' && (
          <>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              You’re Unsubscribed
            </h1>
            <p className="text-lg text-slate-600">
              You will not receive any more emails from us.
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Changes may take up to 24 hours to reflect.
            </p>
          </>
        )}

      </div>
    </main>
  );
}
