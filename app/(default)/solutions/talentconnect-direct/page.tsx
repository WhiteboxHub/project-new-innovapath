'use client';

import { useState } from 'react';

export default function TalentConnectDirectPage() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleUnsubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend API
    setSuccess(true);
  };

  return (
    <main className="w-full min-h-screen text-slate-900 bg-white">

      {/* ================= HERO ================= */}
      <section className="w-full bg-slate-900 text-white py-28 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Connecting Top Talent with Hiring Leaders—Without the Noise.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto">
            You are viewing this page because a candidate on our AI platform
            identified you as a key hiring stakeholder and sent a one-time
            professional introduction.
          </p>
        </div>
      </section>

      {/* ================= SECTION 1 ================= */}
      <section className="w-full py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold">
            What is this program?
          </h2>

          <p className="text-lg">
            <strong>TalentConnect Direct</strong> is a feature within our AI Talent
            Management ecosystem. We empower verified candidates to proactively
            reach out to hiring managers and recruiters in their specific industry.
          </p>

          <p className="text-lg">
            Unlike mass marketing lists or automated spam bots, this program is
            strictly limited:
          </p>

          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li>
              <strong>One-Time Contact:</strong> Candidates are restricted to
              sending a single introductory email to a specific contact.
            </li>
            <li>
              <strong>AI-Matched:</strong> Contacts are suggested based on
              professional relevance.
            </li>
            <li>
              <strong>Professional Intent:</strong> Designed for serious
              professional networking—not spam.
            </li>
          </ul>
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="w-full py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold">
            For Hiring Managers & Recruiters
          </h2>

          <p className="text-lg">
            <strong>Why did I receive an email?</strong> We aggregate publicly
            available business contact information (LinkedIn, company directories,
            and professional networks) to help candidates identify the right people
            to speak with.
          </p>

          <p className="text-lg">
            You received an email because a candidate reviewed your professional
            profile and believed their skills were relevant to your team.
          </p>

          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li>We do not sell your email address.</li>
            <li>We actively monitor candidates to prevent abuse.</li>
            <li>You may permanently opt out below.</li>
          </ul>
        </div>
      </section>

    
      {/* ================= TERMS ================= */}
      <section className="w-full py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-slate-600 text-sm">
          <h2 className="text-2xl font-semibold text-slate-800">
            Terms of Use & Disclaimer
          </h2>

          <p>
            <strong>For Candidates:</strong> By using TalentConnect Direct, you
            agree that all outreach will be professional and relevant. Abuse,
            harassment, or misuse will result in immediate removal from the
            platform.
          </p>

          <p>
            You authorize <strong>Innovapath</strong> to transmit your profile
            and message on your behalf. Contact information is aggregated from
            public sources and accuracy cannot be guaranteed.
          </p>

          <p>
            <strong>For Recipients:</strong> Messages are initiated by individual
            users. Innovapath acts solely as a technical facilitator and is not
            responsible for candidate content or suitability.
          </p>
        </div>
      </section>

    </main>
  );
}
