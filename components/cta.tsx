// import Link from 'next/link'

// export default function Cta() {
//   return (
//     <section className="bg-slate-100">
//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="py-12 md:py-20">

//           <div className="relative max-w-3xl mx-auto text-center">

//             <div className="absolute right-0 -mt-4 -mr-1 fill-slate-300 hidden lg:block" aria-hidden="true">
//               <svg className="fill-slate-300" width="56" height="43">
//                 <path d="M4.532 30.45C15.785 23.25 24.457 12.204 29.766.199c.034-.074-.246-.247-.3-.186-4.227 5.033-9.298 9.282-14.372 13.162C10 17.07 4.919 20.61.21 24.639c-1.173 1.005 2.889 6.733 4.322 5.81M18.96 42.198c12.145-4.05 24.12-8.556 36.631-12.365.076-.024.025-.349-.055-.347-6.542.087-13.277.083-19.982.827-6.69.74-13.349 2.24-19.373 5.197-1.53.75 1.252 7.196 2.778 6.688" />
//               </svg>
//             </div>

//             <div className="relative">
//               <h2 className="h2 font-playfair-display text-slate-800 mb-4">Say goodbye to long queues, big updates, and <span className="text-emerald-500">confusion</span>.</h2>
//               <p className="text-xl text-slate-500 mb-8">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</p>
//               <div>
//                 <Link className="btn px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-xl w-auto group" href="/request-demo">
//                   Request Demo <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
//                 </Link>
//               </div>


//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

import Link from 'next/link'

export default function Cta() {
  return (
    <section className="bg-sky-50">
      <div className="relative max-w-10xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-15">

          <div className="relative max-w-3xl mx-auto text-center">

            {/* Decorative SVG */}
            <div className="absolute right-0 -mt-4 -mr-1 fill-slate-300 hidden lg:block" aria-hidden="true">
              <svg className="fill-slate-300" width="80" height="43" viewBox="0 0 56 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.532 30.45C15.785 23.25 24.457 12.204 29.766.199c.034-.074-.246-.247-.3-.186-4.227 5.033-9.298 9.282-14.372 13.162C10 17.07 4.919 20.61.21 24.639c-1.173 1.005 2.889 6.733 4.322 5.81M18.96 42.198c12.145-4.05 24.12-8.556 36.631-12.365.076-.024.025-.349-.055-.347-6.542.087-13.277.083-19.982.827-6.69.74-13.349 2.24-19.373 5.197-1.53.75 1.252 7.196 2.778 6.688" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative">
              <h3 className="text-3xl font-semibold text-black-800 mb-4 font-playfair-display">Powering the Future of Talent with AI</h3>
              <h4 className="text-xl mb-6 font-medium">
                <span className="text-emerald-600">Innovapath’s AI:</span>{' '}
                <span className="text-black-600">Designed to Enhance Human Potential</span>
              </h4>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We transform talent management through a powerful AI platform that combines Retrieval-Augmented Generation (RAG), intelligent AI agents, and conversational chatbots. Our solution automates workflows, delivers actionable insights, and fosters meaningful engagement—helping your teams work smarter and grow faster.
              </p>

              <div>
                <Link
                  className="btn px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-xl w-auto group inline-flex items-center justify-center"
                  href="/request-demo"
                >
                  Request Demo
                  <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}


