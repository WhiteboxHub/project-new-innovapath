// // tidy-next\components\features-home.tsx
// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import { Transition } from '@headlessui/react'
// import FeaturesImage from '@/public/images/features-home-01.jpg'

// export default function FeaturesHome() {

//   const [tab, setTab] = useState<number>(1)

//   return (
//     <section className="relative">

//       <div className="absolute inset-0 bg-slate-100 pointer-events-none mb-64 md:mb-80" aria-hidden="true"></div>

//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="py-12 md:py-20">

//           {/* Section header */}
//           <div className="max-w-3xl mx-auto text-center pb-12">
//             <h2 className="h2 font-playfair-display text-slate-800 mb-4">Success stories with companies like yours</h2>
//             <p className="text-xl text-slate-768">Learn how Innovapath has saved millions of hours and hundreds of millions of dollars, driving growth and innovation for clients across a range of industries and use cases</p>
//           </div>

//           {/* Section content */}
//           <div className="max-w-3xl mx-auto">

//             {/* Tabs buttons */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-12">
//               <button
//                 className={`text-center transition-opacity ${tab !== 1 && 'opacity-50 hover:opacity-75'}`}
//                 onClick={(e) => { e.preventDefault(); setTab(1); }}
//               >
//                 <div>
//                   <div className="inline-flex bg-white rounded-full shadow-md mb-3">
//                     <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
//                       <path fill="#2174EA" d="M20 20h6v16h-6z" />
//                       <path fillOpacity=".64" fill="#5091EE" d="M29 20h3v16h-3zM35 20h1v16h-1z" />
//                     </svg>
//                   </div>
//                   <div className="md:text-lg leading-tight font-semibold text-slate-800">MARKET PLACES</div>
//                 </div>
            
            
            
//               </button>
//               <button
//                 className={`text-center transition-opacity ${tab !== 2 && 'opacity-50 hover:opacity-75'}`}
//                 onClick={(e) => { e.preventDefault(); setTab(2); }}
//               >
//                 <div>
//                   <div className="inline-flex bg-white rounded-full shadow-md mb-3">
//                     <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
//                       <path fillOpacity=".64" fill="#5091EE" d="M33 23v8h3V20H25v3z" />
//                       <path fill="#2174EA" d="M20 25h11v11H20z" />
//                     </svg>
//                   </div>
//                   <div className="md:text-lg leading-tight font-semibold text-slate-800">Internal </div>
//                 </div>
//               </button>
//               <button
//                 className={`text-center transition-opacity ${tab !== 3 && 'opacity-50 hover:opacity-75'}`}
//                 onClick={(e) => { e.preventDefault(); setTab(3); }}
//               >
//                 <div>
//                   <div className="inline-flex bg-white rounded-full shadow-md mb-3">
//                     <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
//                       <path fillOpacity=".64" fill="#5091EE" d="M20 27l7-7h-7z" />
//                       <path fill="#2174EA" d="M29 20l7 7v-7z" />
//                       <path fillOpacity=".64" fill="#5091EE" d="M36 29l-7 7h7z" />
//                       <path fill="#2174EA" d="M27 36l-7-7v7z" />
//                     </svg>
//                   </div>
//                   <div className="md:text-lg leading-tight font-semibold text-slate-800">Internal Feedback</div>
//                 </div>
//               </button>
//               <button
//                 className={`text-center transition-opacity ${tab !== 4 && 'opacity-50 hover:opacity-75'}`}
//                 onClick={(e) => { e.preventDefault(); setTab(4); }}
//               >
//                 <div>
//                   <div className="inline-flex bg-white rounded-full shadow-md mb-3">
//                     <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M24 28h-4v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2v-5z" fillOpacity=".64" fill="#5091EE" />
//                       <path d="M35 21h-8c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H33c1.7 0 3-1.3 3-3V22c0-.6-.4-1-1-1z" fill="#2174EA" />
//                     </svg>
//                   </div>
//                   <div className="md:text-lg leading-tight font-semibold text-slate-800">Internal Feedback</div>
//                 </div>
//               </button>
//             </div>

//             {/* Tabs items */}
//             <div className="transition-all">
//               <div className="relative flex flex-col" data-aos="fade-up">
//                 {/* Item 1 */}
//                 <Transition show={tab === 1}>
//                   <div className="w-full transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:-translate-y-16 data-closed:absolute data-leave:duration-300 data-leave:data-closed:translate-y-16">
//                     <Image className="mx-auto shadow-2xl" src={FeaturesImage} width={768} height={474} alt="Features home 01" />
//                   </div>
//                 </Transition>
//                 {/* Item 2 */}
//                 <Transition show={tab === 2}>
//                   <div className="w-full transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:-translate-y-16 data-closed:absolute data-leave:duration-300 data-leave:data-closed:translate-y-16">
//                     <Image className="mx-auto shadow-2xl" src={FeaturesImage} width={768} height={474} alt="Features home 02" />
//                   </div>
//                 </Transition>
//                 {/* Item 3 */}
//                 <Transition show={tab === 3}>
//                   <div className="w-full transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:-translate-y-16 data-closed:absolute data-leave:duration-300 data-leave:data-closed:translate-y-16">
//                     <Image className="mx-auto shadow-2xl" src={FeaturesImage} width={768} height={474} alt="Features home 03" />
//                   </div>
//                 </Transition>
//                 {/* Item 4 */}
//                 <Transition show={tab === 4}>
//                   <div className="w-full transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:-translate-y-16 data-closed:absolute data-leave:duration-300 data-leave:data-closed:translate-y-16">
//                     <Image className="mx-auto shadow-2xl" src={FeaturesImage} width={768} height={474} alt="Features home 04" />
//                   </div>
//                 </Transition>
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }




// ---------------------------------------------------------------------------------

'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import FeatureCard from '@/components/FeatureCard'
import featureData from '@/components/data/featureData'

export default function FeaturesHome() {
  const [tab, setTab] = useState<number>(1)

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-slate-100 pointer-events-none mb-64 md:mb-80" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-playfair-display text-slate-800 mb-4">
              Success stories with companies like yours
            </h2>
            <p className="text-xl text-slate-768">
              Learn how Innovapath has saved millions of hours and hundreds of millions of dollars, driving growth and innovation for clients across a range of industries and use cases.
            </p>
          </div>

          {/* Tabs buttons */}
          <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 pb-12">
            {featureData.map((feature, index) => (
              <button
                key={feature.id}
                className={`text-center transition-opacity ${tab !== index + 1 && 'opacity-50 hover:opacity-75'}`}
                onClick={() => setTab(index + 1)}
              >
                <div>
                  <div className="inline-flex bg-white rounded-full shadow-md mb-3 p-3">
                    {/* SVG icon */}
                    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="28" cy="28" r="20" fill="#2174EA" />
                      <text x="28" y="32" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle">
                        {index + 1}
                      </text>
                    </svg>
                  </div>
                  <div className="md:text-lg leading-tight font-semibold text-slate-800">
                    {feature.category}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Tabs items (Cards) */}
          <div className="transition-all">
            <div className="relative flex flex-col" data-aos="fade-up">
              {featureData.map((feature, index) => (
                <Transition
                  key={feature.id}
                  show={tab === index + 1}
                  enter="transition ease-out duration-500"
                  enterFrom="opacity-0 translate-y-5"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-300"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-5"
                >
                   <div>  
                  <FeatureCard 
                    category={feature.category}
                    title={feature.title}
                    description={feature.description}
                    bgColor={feature.bgColor}
                    width={feature.width}
                    />
                    
                   </div> 
                </Transition>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}



// ---------------------------------------------------------------------------------







// // tidy-next\components\features-home.tsx
// 'use client'

// import { useState } from 'react'
// import { Transition } from '@headlessui/react'
// import Marketplaces from '@/components/Success-stories-cards'

// export default function FeaturesHome() {
//   const [tab, setTab] = useState<number>(1)

//   return (
//     <section className="relative">
//       <div className="absolute inset-0 bg-slate-100 pointer-events-none mb-64 md:mb-80" aria-hidden="true"></div>

//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="py-12 md:py-20">
//           {/* Section header */}
//           <div className="max-w-3xl mx-auto text-center pb-12">
//             <h2 className="h2 font-playfair-display text-slate-800 mb-4">
//               Success stories with companies like yours
//             </h2>
//             <p className="text-xl text-slate-768">
//               Learn how Innovapath has saved millions of hours and hundreds of millions of dollars, driving growth and innovation for clients across a range of industries and use cases
//             </p>
//           </div>

//           {/* Section content */}
//           <div className="max-w-3xl mx-auto">
//             {/* Tabs buttons */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-12">
//               {[1, 2, 3, 4].map((num) => (
//                 <button
//                   key={num}
//                   className={`text-center transition-opacity ${tab !== num && 'opacity-50 hover:opacity-75'}`}
//                   onClick={(e) => { e.preventDefault(); setTab(num); }}
//                 >
//                   <div>
//                     <div className="inline-flex bg-white rounded-full shadow-md mb-3 w-14 h-14"></div>
//                     <div className="md:text-lg leading-tight font-semibold text-slate-800">
//                       {['MARKET PLACES', 'Internal', 'Internal Feedback', 'Another Tab'][num - 1]}
//                     </div>
//                   </div>
//                 </button>
//               ))}
//             </div>

//             {/* Tabs items */}
//             <div className="transition-all">
//               <div className="relative flex flex-col" data-aos="fade-up">
//                 <Transition show={tab === 1}>
//               <div>
                
//                   <Marketplaces />
//               </div>
//                 </Transition>
//                 <Transition show={tab === 2}>
//               <div>
                
//                   <Marketplaces />
//               </div>
//                 </Transition>
//                 <Transition show={tab === 3}>
//               <div>
                
//                   <Marketplaces />
//               </div>
//                 </Transition>
//                 <Transition show={tab === 4}>
//               <div>
                
//                   <Marketplaces />
//               </div>
//                 </Transition>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
