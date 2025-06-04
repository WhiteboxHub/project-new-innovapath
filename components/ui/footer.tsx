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
// // }

// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Logo from './logo';
// // export default function Footer() {
// //   return (
//   export default function Footer() {
//     const [showScroll, setShowScroll] = useState(false);
  
//     useEffect(() => {
//       const handleScroll = () => {
//         if (window.scrollY > 300) {
//           setShowScroll(true);
//         } else {
//           setShowScroll(false);
//         }
//       };
  
//       window.addEventListener('scroll', handleScroll);
//       return () => window.removeEventListener('scroll', handleScroll);
//     }, []);
  
//     return (
//       <>
//         {/* Scroll to Top Button */}
//         {showScroll && (
//           <button
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//             className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition duration-300"
//             aria-label="Scroll to top"
//           >
//             ↑ 
//           </button>
//         )}
//     {/* <> */}
//       {/* New Content Block */}
//       <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto text-left">
//           <h2 className="text-3xl font-bold mb-4">Accelerate Your AI-Driven Transformation</h2>
//           <p className="text-lg mb-10">
//             Connect with our team to discover how AI and machine learning can unlock transformative efficiency, intelligent scalability, and new growth opportunities for your organization.
//           </p>
//           {/* Updated Link for Request a Demo */}
//           <Link
//             className="btn text-white bg-blue-600 hover:bg-blue-700  px-4 py-2 rounded-xl w-auto group mt-8" href="/request-demo">
//             Request Demo
//             <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
//               -&gt;
//             </span>
//           </Link>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer>
//         <div className="max-w-6xl mx-auto px-4 sm:px-6">
//           <div className="flex flex-col sm:flex-row justify-between gap-8 py-8 md:py-12">
//             {/* 1st block */}
//             <div className="flex-1 lg:max-w-xs flex flex-col  mb-2">
//               {/* Logo */}
//               {/* <Link href="/" className="inline-flex text-blue-600 transition duration-150 ease-in-out nt-0 mb-0" aria-label="Innovapath">
//                 <img src="/images/ip_log_.svg" alt="Innovapath Logo" className="w-150 h-35 mt-[-50px]" />
//               </Link> */}
//               {/* <Logo /> */}
//               <div className="mt-[-20px] mb-0 ml-[-60px] leading-none">
//             <Logo className="mb-0 pb-0" />
//           </div>
//               {/* Text */}
//               <div className="text-md font-bold text-slate-800 mb-40 mt-[-20] ml-[-1px]">
//                 Innovapath.Inc
//               </div>
//               {/* <div className="text-md  text-black mt-[-70] ml-[-10px] leading-none">
//                 Innovapath Inc
//           </div> */}
//             </div>

//             {/* 2nd block */}
//             {/* <div className="flex-1">
//               <h6 className="text-sm text-slate-800 font-semibold mb-2">AI Model Training</h6>
//               <ul className="text-sm font-medium space-y-2">
//                 <li>
//                   <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Expert LLM training</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Chain of thought & agentic AI training</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Custom evaluations</a>
//                 </li>
//               </ul>
//             </div> */}

//             {/* 3rd block */}
//             {/* <div className="flex-1">
//               <h6 className="text-sm text-slate-800 font-semibold mb-2">AI for Enterprises</h6>
//               <ul className="text-sm font-medium space-y-2">
//                 <li>
//                   <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Retail & ecommerce</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Marketplaces</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Insurance</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Asset management</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Public sector</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Technology</a>
//                 </li>
//               </ul>
//             </div> */}

//             {/* 4th block */}
//             {/* <div className="flex-1">
//               <h6 className="text-sm text-slate-800 font-semibold mb-2">Why Innovapath</h6>
//               <ul className="text-sm font-medium space-y-2">
//                 <li>
//                   <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Platform</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Case studies</a>
//                 </li>
//               </ul>
//             </div> */}

//             {/* 5th block */}
//             {/* <div className="flex-1">
//               <h6 className="text-sm text-slate-800 font-semibold mb-2">About</h6>
//               <ul className="text-sm font-medium space-y-2">
//                 <li>
//                   <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">About Innovapath</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Blog</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Press</a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Careers at Innovapath</a>
//                 </li>
//               </ul>
//             </div> */}

//             {/* 6th block */}
//             {/* <div className="flex-1">
//               <h6 className="text-sm text-slate-800 font-semibold mb-2">Become a Trainer</h6>
//               <ul className="text-sm font-medium space-y-2">
//                 <li>
//                   <a href="#" className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out">Training opportunities</a>
//                 </li>
//               </ul>
//             </div> */}
//           </div>

//           <div className="flex flex-col md:flex-row md:items-center md:justify-between py-6 md:py-8 border-t border-slate-200">
//             {/* Social links */}
//             <ul className="flex space-x-6 mb-4 md:order-1 md:ml-4 md:mb-0">
//               <li>
//                 <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="#0" aria-label="Website">
//                   <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                     {/* Globe icon SVG path */}
//                   </svg>
//                 </a>
//               </li>
//               <li>
//                 <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="#0" aria-label="Message">
//                   <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                     {/* Speech bubble icon SVG path */}
//                   </svg>
//                 </a>
//               </li>
//             </ul>
            
//             {/* Copyrights note */}
//             <div className="text-sm text-slate-500 mr-4">© 2025 Innovapath Technologies Inc. All rights reserved.</div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

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
              <div className="mb-1 -mt-20">
                <Logo />
              </div>
              <div className="text-md font-semibold text-white -mt-3 ml-6 mb-4">
                Innovapath Inc.
              </div>

              {/* Social Icons under Innovapath Inc. */}
              <div className="flex space-x-6 ml-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100076790355187"
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
                </a>
                <a
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
                </a>
                <a
                  href="https://www.linkedin.com/company/whitebox-learning/about/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-blue-700 transition duration-300"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 17 16"
                    className="fill-current p-1"
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
                6500 Dublin Blvd., Ste.214(B)<br />
                Dublin, CA, 94568<br />
                +1 925-557-1053<br />
                <a
                  href="mailto:info@whitebox-learning.com"
                  className="text-blue-300 hover:underline"
                >
                  info@whitebox-learning.com
                </a>
                <br />
                <a
                  href="mailto:recruiting@whitebox-learning.com"
                  className="text-blue-300 hover:underline"
                >
                  recruiting@whitebox-learning.com
                </a>
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
