// components/ui/header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './mobile-menu';

export default function Header({ mode = 'dark' }: { mode?: string }) {
  return (
    <header
      className={`absolute w-full z-30 ${mode !== 'light' && 'dark'
        } bg-slate-900`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between ml-10 h-16 md:h-20">

          {/* Logo */}
          <div className="flex items-center mb-2">
            <Link href="/" aria-label="Innovapath">
              <Image
                src="/images/logo/IP_logo.png"
                width={180}
                height={80}
                alt="Innovapath Logo"
                priority
                className="h-12 w-auto md:h-20"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center ml-auto space-x-4">

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2">
                <span className="text-white text-xl font-bold tracking-wide leading-relaxed font-times-new-roman transition-colors duration-200">
                  Solutions
                </span>

                {/* Down Arrow */}
                <svg
                  className="w-4 h-4 text-white mt-1 transition-transform duration-200 group-hover:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.24 4.38a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className="absolute left-0 mt-3 w-64 rounded-xl bg-white shadow-lg
                           border border-slate-200 opacity-0 invisible
                           group-hover:opacity-100 group-hover:visible
                           transition-all duration-200"
              >
                <ul className="py-2">

                  {/* Search Talent */}
                  <li>
                    <Link
                      href="/solutions/search-candidates"
                      className="block px-5 py-2.5 text-sm text-slate-700
                                 hover:bg-slate-100 hover:text-slate-900"
                    >
                      Search Talent
                    </Link>
                  </li>

                  {/* TalentConnect Direct */}
                  <li>
                    <Link
                      href="/solutions/talentconnect-direct"
                      className="block px-5 py-2.5 text-sm text-slate-700
                                 hover:bg-slate-100 hover:text-slate-900"
                    >
                      TalentConnect Direct
                    </Link>
                  </li>

                  {/* AI Talent Outreach */}
                  <li>
                    <Link
                      href="/solutions/ai-talent-outreach"
                      className="block px-5 py-2.5 text-sm text-slate-700
                                 hover:bg-slate-100 hover:text-slate-900"
                    >
                      AI Talent Outreach
                    </Link>
                  </li>

                  {/* Unsubscribe */}
                  <li>
                    <Link
                      href="/solutions/unsubscribe"
                      className="block px-5 py-2.5 text-sm text-slate-700
                                 hover:bg-slate-100 hover:text-slate-900"
                    >
                      Unsubscribe
                    </Link>
                  </li>

                </ul>
              </div>
            </div>

            {/* Request Demo */}
            <Link
              className="btn text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-xl
                         group transition duration-150 ease-in-out text-center"
              href="/request-demo"
            >
              Request Demo
              <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                →
              </span>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>

        </div>
      </div>
    </header>
  );
}
