// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import { Transition } from '@headlessui/react'
// import Link from 'next/link'

// export default function MobileMenu() {
//   const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

//   const trigger = useRef<HTMLButtonElement>(null)
//   const mobileNav = useRef<HTMLDivElement>(null)

//   // close the mobile menu on click outside
//   useEffect(() => {
//     const clickHandler = ({ target }: { target: EventTarget | null }): void => {
//       if (!mobileNav.current || !trigger.current) return;
//       if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
//       setMobileNavOpen(false)
//     };
//     document.addEventListener('click', clickHandler)
//     return () => document.removeEventListener('click', clickHandler)
//   })

//   // close the mobile menu if the esc key is pressed
//   useEffect(() => {
//     const keyHandler = ({ keyCode }: { keyCode: number }): void => {
//       if (!mobileNavOpen || keyCode !== 27) return;
//       setMobileNavOpen(false)
//     };
//     document.addEventListener('keydown', keyHandler)
//     return () => document.removeEventListener('keydown', keyHandler)
//   })

//   return (
//     <div className="flex md:hidden">
//       {/* Hamburger button */}
//       <button
//         ref={trigger}
//         className={`hamburger ${mobileNavOpen && 'active'}`}
//         aria-controls="mobile-nav"
//         aria-expanded={mobileNavOpen}
//         onClick={() => setMobileNavOpen(!mobileNavOpen)}
//       >
//         <span className="sr-only">Menu</span>
//         <svg className="w-6 h-6 fill-current text-slate-900 dark:text-slate-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <rect y="4" width="24" height="2" />
//           <rect y="11" width="24" height="2" />
//           <rect y="18" width="24" height="2" />
//         </svg>
//       </button>

//       {/*Mobile navigation */}
//       <div
//         ref={mobileNav}
//       >
//         <Transition
//           show={mobileNavOpen}
//           as="nav"
//           id="mobile-nav"
//           className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white transform transition ease-out duration-200 data-enter:data-closed:-translate-y-2 data-closed:opacity-0"
//         >        
//           <ul className="px-5 py-2">
//             <li>
//               <Link href="/pricing" className="flex font-medium text-slate-800 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Pricing</Link>
//             </li>
//             <li>
//               <Link href="/about" className="flex font-medium text-slate-800 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>About</Link>
//             </li>
//             <li>
//               <Link href="/blog" className="flex font-medium text-slate-800 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Blog</Link>
//             </li>
//             <li>
//               <Link href="/wall-of-love" className="flex font-medium text-slate-800 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Wall of Love</Link>
//             </li>
//             <li className="py-2 my-2 border-t border-b border-gray-200">
//               <span className="flex font-medium text-slate-800 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Resources</span>
//               <ul className="pl-4">
//                 <li>
//                   <Link href="/404" className="text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>404</Link>
//                 </li>
//                 <li>
//                   <Link href="/support" className="text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Support</Link>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <Link href="/signin" className="flex font-medium w-full text-slate-800 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Sign in</Link>
//             </li>
//             <li>
//               <Link href="/request-demo" className="flex font-medium text-blue-600 py-2 group" onClick={() => setMobileNavOpen(false)}>
//                 Request Demo <span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
//               </Link>
//             </li>
//           </ul>
//         </Transition>
//       </div>
//     </div>
//   )
// }

// ----------------------------------------///////////////////////////////////////////////////-------------------------------------


// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { Menu, X } from 'lucide-react';

// export default function MobileMenu() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="relative">
//       <button 
//         className="text-gray-800 dark:text-white focus:outline-none"
//         onClick={() => setOpen(!open)}
//       >
//         {open ? <X size={28} /> : <Menu size={28} />}
//       </button>

//       {open && (
//         <div className="absolute right-0 mt-4 w-56 bg-white shadow-xl rounded-lg py-4 px-4 z-50 flex flex-col space-y-5 transition duration-300 ease-in-out">
//         <Link href="/pricing" className="text-m font-medium text-gray-800 hover:text-blue-600">
//           For foundation models
//         </Link>
//         <Link href="/blog" className="text-m font-medium text-gray-800 hover:text-blue-600">
//           For enterprises
//         </Link>
//         <Link href="/404" className="text-m font-medium text-gray-800 hover:text-blue-600">
//           404
//         </Link>
//         <Link href="/support" className="text-m font-medium text-gray-800 hover:text-blue-600">
//           Support
//         </Link>
//         <Link href="/about" className="text-m font-medium text-gray-800 hover:text-blue-600">
//           About
//         </Link>
//         <Link href="/signin" className="text-m font-medium text-gray-800 hover:text-blue-600">
//           Become a trainer
//         </Link>
//         <Link href="/request-demo" className="text-m font-medium text-white bg-blue-600 hover:bg-blue-700 text-center px-4 py-2 rounded-xl">
//           Request Demo
//         </Link>
//       </div>
      
//       )}
//     </div>
//   );
// }




'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Transition } from '@headlessui/react';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        !open ||
        menuRef.current?.contains(e.target as Node) ||
        triggerRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      setOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [open]);

  // Close menu on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="relative md:hidden z-50">
      <button
        ref={triggerRef}
        className="text-gray-800 dark:text-white focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      <Transition
        show={open}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition duration-150 ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <div
          ref={menuRef}
          className="absolute right-0 mt-4 w-64 bg-white shadow-xl rounded-xl py-6 px-5 z-50 flex flex-col space-y-4"
        >
          <Link href="/pricing" className="font-medium text-gray-800 hover:text-blue-600">
            For foundation models
          </Link>
          <Link href="/blog" className="font-medium text-gray-800 hover:text-blue-600">
            For enterprises
          </Link>
          <Link href="/404" className="font-medium text-gray-800 hover:text-blue-600">
            404
          </Link>
          <Link href="/support" className="font-medium text-gray-800 hover:text-blue-600">
            Support
          </Link>
          <Link href="/about" className="font-medium text-gray-800 hover:text-blue-600">
            About
          </Link>
          <Link href="/signin" className="font-medium text-gray-800 hover:text-blue-600">
            Become a trainer
          </Link>
          <Link
            href="/request-demo"
            className="text-white bg-blue-600 hover:bg-blue-700 text-center px-4 py-2 rounded-xl font-medium"
          >
            Request Demo
          </Link>
        </div>
      </Transition>
    </div>
  );
}
