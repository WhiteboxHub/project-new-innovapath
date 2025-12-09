
// components\ui\header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import Dropdown from '@/components/utils/dropdown';
import MobileMenu from './mobile-menu';

export default function Header({ mode = 'dark' }: { mode?: string }) {
  return (
    <header className={`absolute w-full z-30 ${mode !== 'light' && 'dark'} bg-slate-900`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between ml-10 h-16 md:h-20">

          {/*  Site branding with logo image */}
          <div className="flex items-center mb-2">
            <Link href="/" className="block transition duration-150 ease-in-out" aria-label="IP">
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

          {/*Talent Showcase Dropdown + Request Demo */}
          <div className="hidden  md:flex items-center ml-auto space-x-4">

            <Dropdown
              title={
                // 
                <span className=" text-white text-xl font-bold tracking-wide leading-relaxed font-times-new-roman transition-colors duration-200">
                  Talent Showcase
                </span>
              }
            >
              <Link
                href="/talent-showcase/search-candidates"
                className="text-sm text-gray-800 hover:text-blue-600 font-medium flex py-2 px-5 leading-tight"
              >
                Search Talent
              </Link>
              {/* <Link
                href="/talent-showcase/request-talent"
                className="text-sm text-gray-800 hover:text-blue-600 font-medium flex py-2 px-5 leading-tight"
              >
                Request Talent
              </Link> */}
            </Dropdown>

            <Link
              className="btn text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-xl w-full sm:w-auto group transition duration-150 ease-in-out text-center"
              href="/request-demo"
            >
              Request Demo
              <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                -&gt;
              </span>
            </Link>
          </div>

          {/* Mobile menu for smaller screens */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
