'use client';

import { useState } from 'react';

export default function AiTalentOutreachPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="w-full min-h-screen bg-white text-slate-900">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-slate-900 text-white py-28 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get Discovered by Companies Hiring in AI
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Submit your profile once and let Innovapath connect you with hiring
            managers and recruiters building AI teams.
          </p>
          <a
            href="#submission-form"
            className="inline-block bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
          >
            Submit Your Profile
          </a>
        </div>
      </section>

      {/* ================= FORM / CONFIRMATION ================= */}
      <section
        id="submission-form"
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          {!submitted ? (
            <>
              <h2 className="text-3xl font-semibold mb-8">
                AI Talent Outreach Program
              </h2>

              <form onSubmit={handleSubmit} className="space-y-10">
                {/* ===== Personal Information ===== */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input required placeholder="Full Name" className="input" />
                    <input required type="email" placeholder="Email Address" className="input" />
                    <input required placeholder="Phone Number" className="input" />
                    <input required placeholder="Current City" className="input" />
                    <input required placeholder="Country" className="input md:col-span-2" />
                  </div>
                </div>

                {/* ===== Professional Profiles ===== */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Professional Profiles
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="file" accept=".pdf,.doc,.docx" className="input md:col-span-2" />
                    <input placeholder="LinkedIn Profile URL" className="input" />
                    <input placeholder="GitHub Profile URL" className="input" />
                  </div>
                </div>

                {/* ===== Role Preferences ===== */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Role Preferences
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input placeholder="Primary Role of Interest" className="input" />
                    <input placeholder="Years of Experience" className="input" />
                    <input placeholder="Employment Type Preference" className="input" />
                    <input placeholder="Availability Timeline" className="input" />
                  </div>
                </div>

                {/* ===== Skills ===== */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Skills
                  </h3>
                  <div className="grid gap-4">
                    <input placeholder="Core AI Skills (e.g., ML, NLP, CV)" className="input" />
                    <input placeholder="AI Domains of Interest" className="input" />
                  </div>
                </div>

                {/* ===== Optional Fields ===== */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Optional Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input placeholder="Portfolio Website" className="input" />
                    <input placeholder="Preferred Locations or Remote" className="input" />
                    <input placeholder="Compensation Range" className="input" />
                    <textarea
                      placeholder="Notes for Recruiters"
                      className="input md:col-span-2 h-28"
                    />
                  </div>
                </div>

                {/* ===== Consent ===== */}
                <div className="flex items-start gap-3">
                  <input required type="checkbox" className="mt-1" />
                  <p className="text-sm text-slate-600">
                    By submitting this form, I consent to Innovapath sharing my
                    profile with hiring managers and recruiters for relevant AI
                    opportunities.
                  </p>
                </div>

                {/* ===== Submit ===== */}
                <button
                  type="submit"
                  className="bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition"
                >
                  Join the Outreach Program
                </button>
              </form>
            </>
          ) : (
            <div className="text-center max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-semibold">
                Submission Successful
              </h2>
              <p className="text-lg text-slate-600">
                Thank you for submitting your profile. Our system will review
                your information and begin matching you with relevant AI hiring
                needs.
              </p>
              <p className="text-sm text-slate-500">
                You will receive a confirmation email shortly. You may be able
                to update your profile in the future.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ===== Input styling helper ===== */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          outline: none;
        }
        .input:focus {
          border-color: #0f172a;
        }
      `}</style>
    </main>
  );
}
