// import Link from 'next/link'
// import Image from 'next/image'

// export default function Footer() {
//   return (
//     <footer>
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">

//         {/* Top area: Blocks */}
//         <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">

//           {/* 1st block */}
//           <div className="sm:col-span-12 lg:col-span-4 lg:max-w-xs">
//             <div className="mb-2">
//               {/* Logo */}
//               <Link href="/" className=" block text-blue-600 transition duration-150 ease-in-out" aria-label="IP">
//                 <Image
//                   src="/images/logo/IP_logo.png"
//                   alt="IP Logo"
//                   width={200}
//                   height={200}
//                   className=" "
//                 />
//               </Link>
//             </div>
//             <div className="text-lg font-bold text-slate-800">The smarter way to start your next idea.</div>
//           </div>

//           {/* 2nd block */}
//           <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
//             <h6 className="text-sm text-slate-800 font-semibold mb-2">How it works</h6>
//             <ul className="text-sm font-medium space-y-2">
//               <li>
//                 <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Overview</a>
//               </li>
//               <li>
//                 <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Pricing</a>
//               </li>
//               <li>
//                 <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Service Areas</a>
//               </li>
//             </ul>
//           </div>

//           {/* 3rd block */}
//           <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
//             <h6 className="text-sm text-slate-800 font-semibold mb-2">Resources</h6>
//             <ul className="text-sm font-medium space-y-2">
//               <li>
//                 <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Customer Stories</a>
//               </li>
//               <li>
//                 <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Knowledge Base</a>
//               </li>
//               <li>
//                 <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Contact Us</a>
//               </li>
//             </ul>
//           </div>

//           {/* 4th block */}
//           <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
//             <h6 className="text-sm text-slate-800 font-semibold mb-2">Products</h6>
//             <ul className="text-sm font-medium space-y-2">
//               <li>
//                 <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Corporate Partners</a>
//               </li>
//               <li>
//                 <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Secure Identity</a>
//               </li>
//               <li>
//                 <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Legal Help</a>
//               </li>
//               <li>
//                 <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">First Capital</a>
//               </li>
//             </ul>
//           </div>

//           {/* 5th block */}
//           <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
//             <h6 className="text-sm text-slate-800 font-semibold mb-2">Company</h6>
//             <ul className="text-sm font-medium space-y-2">
//               <li>
//                 <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">About Us</a>
//               </li>
//               <li>
//                 <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Careers</a>
//               </li>
//               <li>
//                 <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Terms of Use</a>
//               </li>
//             </ul>
//           </div>

//         </div>

//         {/* Bottom area */}
//         <div className="md:flex md:items-center md:justify-between py-6 md:py-8 border-t border-slate-200">

//           {/* Social links */}
//           <ul className="flex space-x-6 mb-4 md:order-1 md:ml-4 md:mb-0">
//             <li>
//               <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="#0" aria-label="Twitter">
//                 <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path d="m6.329 1 4.369 5.594L15.75 1h3.068L12.12 8.414 20 18.5h-6.172l-4.833-6.116L3.464 18.5H.395l7.169-7.928L0 1h6.329Zm-.925 1.684H3.583l11.093 14.04h1.7L5.404 2.684Z" />
//                 </svg>
//               </a>
//             </li>
//             <li>
//               <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="#0" aria-label="Facebook">
//                 <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M20 10.025C20 4.491 15.52 0 10 0S0 4.491 0 10.025c0 4.852 3.44 8.892 8 9.825v-6.817H6v-3.008h2V7.52a3.508 3.508 0 0 1 3.5-3.509H14v3.008h-2c-.55 0-1 .45-1 1.002v2.005h3v3.008h-3V20c5.05-.501 9-4.772 9-9.975Z" />
//                 </svg>
//               </a>
//             </li>
//             <li>
//               <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="#0" aria-label="Telegram">
//                 <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M19.96 2.336a.421.421 0 0 0-.291-.308 1.543 1.543 0 0 0-.788.054S1.358 8.194.358 8.87c-.215.145-.288.23-.324.33-.173.485.366.694.366.694l4.517 1.428a.506.506 0 0 0 .229-.013c1.026-.63 10.332-6.335 10.873-6.527.083-.024.148 0 .131.061-.215.732-8.257 7.664-8.301 7.706a.16.16 0 0 0-.06.143l-.422 4.28s-.176 1.331 1.196 0a38.082 38.082 0 0 1 2.374-2.11c1.553 1.041 3.224 2.192 3.945 2.794.245.23.576.354.916.342.426-.05.774-.35.876-.754 0 0 3.192-12.471 3.298-14.142.011-.162.025-.268.027-.38.005-.13-.008-.26-.04-.387Z" />
//                 </svg>
//               </a>
//             </li>
//             <li>
//               <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="#0" aria-label="Github">
//                 <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M10.041 0C4.52 0 0 4.612 0 10.25c0 4.526 2.845 8.37 6.862 9.737.502.085.669-.257.669-.513v-1.708c-2.761.598-3.347-1.367-3.347-1.367-.419-1.196-1.088-1.537-1.088-1.537-1.004-.598 0-.598 0-.598 1.004.085 1.506 1.025 1.506 1.025.92 1.537 2.343 1.11 2.929.854.084-.683.335-1.11.67-1.367-2.26-.256-4.603-1.11-4.603-5.039 0-1.11.419-2.05 1.004-2.733 0-.342-.418-1.367.168-2.733 0 0 .836-.257 2.76 1.025.838-.257 1.674-.342 2.511-.342.837 0 1.674.085 2.51.342 1.925-1.367 2.762-1.025 2.762-1.025.586 1.452.167 2.477.084 2.733.669.683 1.004 1.623 1.004 2.733 0 3.93-2.343 4.783-4.603 5.04.335.341.67.939.67 1.879v2.818c0 .256.167.598.67.513 4.016-1.367 6.86-5.21 6.86-9.737C20.084 4.612 15.565 0 10.042 0Z" />
//                 </svg>
//               </a>
//             </li>
//           </ul>

//           {/* Copyrights note */}
//           <div className="text-sm text-slate-500 mr-4">© 2025 Innovapath,Inc.All rights reserved.
// </div>

//         </div>

//       </div>
//     </footer>
//   )
// }

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './logo';
// export default function Footer() {
//   return (
  const currentYear = new Date().getFullYear();

  export default function Footer() {
    const [showScroll, setShowScroll] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowScroll(true);
        } else {
          setShowScroll(false);
        }
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
            className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition duration-300"
            aria-label="Scroll to top"
          >
            ↑ 
          </button>
        )}
    {/* <> */}
      {/* New Content Block */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto text-left">
          <h2 className="text-3xl font-bold mb-4">Accelerate Your AI-Driven Transformation</h2>
          <p className="text-lg mb-10">
            Connect with our team to discover how AI and machine learning can unlock transformative efficiency, intelligent scalability, and new growth opportunities for your organization.

          </p>
          {/* Updated Link for Request a Demo */}
          {/* <Link
            href="/request-demo"
            className="font-medium text-blue-600 dark:text-slate-300 dark:hover:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out group"
          >
            Request Demo
            <span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
              -&gt;
            </span>
          </Link> */}
          {/* <div>
            <Link
              className="btn text-white bg-blue-600 hover:bg-blue-700 w-full group"
              href="/request-demo"
            >
              Request Demo{" "}
              <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                -&gt;
              </span>
            </Link>
          </div> */}
          <div>
          <Link
            className="inline-flex rounded-xl w-auto items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded group"
            href="/request-demo"
          >
            Request Demo{" "}
            <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
              -&gt;
            </span>
          </Link>
        </div>

        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between gap-8 py-8 md:py-12">
            {/* 1st block */}
            <div className="flex-1 lg:max-w-xs flex flex-col items-start mb-2">
          {/* Logo + Text Row */}

          <div className="flex-1 lg:max-w-xs flex flex-col items-start mb-2">
          {/* Logo */}
          <div className=" mb-0  pb-0 ml-[-60px] leading-none">
            <Logo />
          </div>

          {/* Text */}
          <div className="text-md  text-black  ml-[-10px] leading-none">
            Innovapath Inc
          </div>
        </div>



        </div>


            {/* 2nd block */}
            <div className="flex-1">
              <h6 className="text-sm text-slate-800 font-semibold mb-2">
                AI Model Training
              </h6>
              <ul className="text-sm font-medium space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  >
                    Expert LLM training
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  >
                    Chain of thought & agentic AI training
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  >
                    Custom evaluations
                  </a>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="flex-1">
              <h6 className="text-sm text-slate-800 font-semibold mb-2">
                AI for Enterprises
              </h6>
              <ul className="text-sm font-medium space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  >
                    Retail & ecommerce
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  >
                    Marketplaces
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  >
                    Insurance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  >
                    Asset management
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  >
                    Public sector
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  >
                    Technology
                  </a>
                </li>
              </ul>
            </div>

            {/* 4th block */}
            <div className="flex-1">
              <h6 className="text-sm text-slate-800 font-semibold mb-2">
                Why Innovapath
              </h6>
              <ul className="text-sm font-medium space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  >
                    Platform
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  >
                    Case studies
                  </a>
                </li>
              </ul>
            </div>

            {/* 5th block */}
            <div className="flex-1">
              <h6 className="text-sm text-slate-800 font-semibold mb-2">
                About
              </h6>
              <ul className="text-sm font-medium space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  >
                    About Innovapath
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  >
                    Careers at Innovapath
                  </a>
                </li>
              </ul>
            </div>

            {/* 6th block */}
            <div className="flex-1">
              <h6 className="text-sm text-slate-800 font-semibold mb-2">
                Become a Trainer
              </h6>
              <ul className="text-sm font-medium space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  >
                    Training opportunities
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between py-6 md:py-8 border-t border-slate-200">
            {/* Social links */}
            <ul className="flex space-x-6 mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <a
                  className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  href="https://x.com/innovapath1"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m6.329 1 4.369 5.594L15.75 1h3.068L12.12 8.414 20 18.5h-6.172l-4.833-6.116L3.464 18.5H.395l7.169-7.928L0 1h6.329Zm-.925 1.684H3.583l11.093 14.04h1.7L5.404 2.684Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  href="https://www.facebook.com/innovapathitconsulting"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 10.025C20 4.491 15.52 0 10 0S0 4.491 0 10.025c0 4.852 3.44 8.892 8 9.825v-6.817H6v-3.008h2V7.52a3.508 3.508 0 0 1 3.5-3.509H14v3.008h-2c-.55 0-1 .45-1 1.002v2.005h3v3.008h-3V20c5.05-.501 9-4.772 9-9.975Z" />
                  </svg>
                </a>
              </li>           
              <li>
                <a
                  className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out "
                  href="https://www.linkedin.com/company/innovapath-inc-/?trk=company_name"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    xmlns="https://www.linkedin.com/company/whitebox-learning/about/"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  href="https://github.com/WhiteboxHub"
                  aria-label="Github"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.041 0C4.52 0 0 4.612 0 10.25c0 4.526 2.845 8.37 6.862 9.737.502.085.669-.257.669-.513v-1.708c-2.761.598-3.347-1.367-3.347-1.367-.419-1.196-1.088-1.537-1.088-1.537-1.004-.598 0-.598 0-.598 1.004.085 1.506 1.025 1.506 1.025.92 1.537 2.343 1.11 2.929.854.084-.683.335-1.11.67-1.367-2.26-.256-4.603-1.11-4.603-5.039 0-1.11.419-2.05 1.004-2.733 0-.342-.418-1.367.168-2.733 0 0 .836-.257 2.76 1.025.838-.257 1.674-.342 2.511-.342.837 0 1.674.085 2.51.342 1.925-1.367 2.762-1.025 2.762-1.025.586 1.452.167 2.477.084 2.733.669.683 1.004 1.623 1.004 2.733 0 3.93-2.343 4.783-4.603 5.04.335.341.67.939.67 1.879v2.818c0 .256.167.598.67.513 4.016-1.367 6.86-5.21 6.86-9.737C20.084 4.612 15.565 0 10.042 0Z" />
                  </svg>
                </a>
              </li>
            </ul>

            
            

            {/* Copyrights note */}
            <div className="text-sm text-slate-500 mr-4">
               &copy; {currentYear} Innovapath Inc. All
              rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
