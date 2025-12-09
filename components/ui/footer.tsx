// components\ui\footer.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition duration-300"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

      {/* Footer Section */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-12 gap-8">

            {/* Left: Logo + Name + Social Icons */}
            <div className="flex flex-col items-start">
              <div className="mb-1 -mt-10 -ml-3.5">
                <Logo />
              </div>
              <div className="text-md font-semibold text-white -mt-3 ml-3 mb-4">
                Innovapath Inc.
              </div>

              {/* Social Icons under Innovapath Inc. */}
              <div className="flex space-x-4 ">
                {/* <a
                  href="https://www.facebook.com/innovapathitconsulting"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-blue-600 transition duration-300"
                >
                  <svg 
                    width="30"
                    height="30"
                    className="fill-current p-1"
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 6h3V0h-3c-3.3 0-6 2.7-6 6v4h-4v6h4v16h6V16h4l1-6h-5V6c0-0.6 0.4-1 1-1z" />
                  </svg>
                </a> */}
                {/* <a
                  href="https://www.youtube.com/channel/UCslSigBnOPXZE2ZFMA6N44g"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="text-gray-400 hover:text-red-600 transition duration-300"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 18 14"
                    className="fill-current p-1"
                  >
                    <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                  </svg>
                </a> */}
                <a
                  href="https://www.linkedin.com/company/innovapath-inc-/?trk=company_name"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-blue-700 transition duration-300"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 17 16"
                    className="fill-current p-1 ml-2"
                  >
                    <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Contact Us */}
            <div className="text-left md:text-left">
              <h6 className="text-xl font-bold mb-2">Contact us</h6>
              <p className="text-sm mb-4">
                6500 Dublin Blvd., Ste.218<br />
                Dublin, CA, 94568<br />
                {/* +1 408-409-7900<br /> */}
                 <a className="text-md text-white duration-500 hover:text-blue-600 dark:text-white dark:hover:text-blue-600" href="tel:+19255571053">
                  +1 408-409-7900
                </a><br/>
                <a
                  href="mailto:contact@innova-path.com"
                  className="text-blue-300 hover:underline"
                >
                  info@innova-path.com
                </a>
                <br />
                {/* <a
                  href="mailto:recruiting@whitebox-learning.com"
                  className="text-blue-300 hover:underline"
                >
                  recruiting@whitebox-learning.com
                </a> */}
              </p>
            </div>
          </div>

          {/* Bottom: Copyright */}
          <div className="border-t border-slate-700 pt-6 pb-8 text-center text-sm text-slate-400">
            © 2025 Innovapath Technologies Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
