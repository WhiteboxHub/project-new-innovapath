'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './logo';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700
                     text-white px-4 py-2 rounded-full shadow-lg transition"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

      {/* Footer */}
      <footer className="w-full bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between
                          items-start md:items-center py-14 gap-10">

            {/* Left: Logo + Company */}
            <div className="flex flex-col items-start">
              <div className="mb-2">
                <Logo />
              </div>

              <p className="text-base font-semibold mb-4">
                Innovapath Inc.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/innovapath-inc-/?trk=company_name"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-blue-600 transition"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 17 16"
                    className="fill-current"
                  >
                    <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Contact */}
            <div className="text-left">
              <h6 className="text-xl font-bold mb-3">Contact us</h6>

              <p className="text-sm leading-relaxed text-slate-300">
                6500 Dublin Blvd., Ste. 218<br />
                Dublin, CA 94568<br />

                <a
                  href="tel:+14084097900"
                  className="block mt-2 text-white hover:text-blue-400 transition"
                >
                  +1 408-409-7900
                </a>

                <a
                  href="mailto:info@innova-path.com"
                  className="block mt-1 text-blue-300 hover:underline"
                >
                  info@innova-path.com
                </a>
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-slate-700 py-6 text-center
                          text-sm text-slate-400">
            © 2025 Innovapath Technologies Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
