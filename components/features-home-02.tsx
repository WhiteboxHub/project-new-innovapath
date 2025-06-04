// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import { Transition } from '@headlessui/react'
// import Image from 'next/image'
// // import FeaturesImage from '@/public/images/features-home-02.png';
// import Image01 from '@/public/images/logo/image-1.png'
// import Image02 from '@/public/images/logo/image-2.png'
// import Image03 from '@/public/images/logo/image-3.png'




// export default function FeaturesHome02() {

//   const [tab, setTab] = useState<number>(1)

//   return (
//     <section>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="py-12 md:py-20 border-t border-slate-200">

//           {/* Section header */}
//           <div className="max-w-5xl border mx-auto text-center pb-12 md:pb-15">
//             <h2 className="h2 font-playfair-display text-slate-800">Welcome to the Future with Agent-Led AI</h2>
//               <p className="mt-4 text-lg text-slate-600">
//                 At Innovapath, our intelligent AI agents are purpose-built to transform how businesses manage people, processes, and growth. Whether it’s automating tasks or delivering timely insights, our agents help your team focus on what truly matters—strategy, innovation, and impact.
//             </p>
//           </div>

//           {/* Section content */}
//           <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-start md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">

//             {/* Tabs items (images) */}
//             <div className="md:rtl md:w-5/12 lg:w-1/2 order-1 md:order-none">
//               <div className="transition-all">
//                 <div className="relative flex flex-col  mr-5" data-aos="fade-down">
//                   {/* Item 1 */}
//                   <Transition show={tab === 1}>
//                     <div className="w-full transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:-translate-y-16 data-closed:absolute data-leave:duration-300 data-leave:data-closed:translate-y-16">
//                       <div className="relative inline-flex flex-col ">
//                         <Image className=" md:max-w-none mx-auto rounded-sm  " src={Image01} width={540} height={620} alt="Features home 2 01" />
//                       </div>
//                     </div>
//                   </Transition>
//                   {/* Item 2 */}
//                   <Transition show={tab === 2}>
//                     <div className="w-full transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:-translate-y-16 data-closed:absolute data-leave:duration-300 data-leave:data-closed:translate-y-16">
//                       <div className="relative inline-flex flex-col">
//                         <Image className="md:max-w-none mx-auto rounded-sm" src={Image02} width={540} height={620} alt="Features home 2 02" />
//                       </div>
//                     </div>
//                   </Transition>
//                   {/* Item 3 */}
//                   <Transition show={tab === 3}>
//                     <div className="w-full transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:-translate-y-16 data-closed:absolute data-leave:duration-300 data-leave:data-closed:translate-y-16">
//                       <div className="relative inline-flex flex-col">
//                         <Image className="md:max-w-none mx-auto rounded-sm" src={Image03} width={540} height={620} alt="Features home 2 03" />
//                       </div>
//                     </div>
//                   </Transition>
//                 </div>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="md:w-7/12 lg:w-1/2" data-aos="fade-up">
//               <div className="mb-8 text-center md:text-left">
//                 <h3 className="h3 text-slate-800 font-playfair-display mb-3">Built exclusively for you</h3>
//                 <p className="text-xl text-slate-500">Innovapath's platform combines AI, hundreds of integrations, and expert teams to deliver scalable, high-quality outcomes on demand.</p>
//               </div>
//               {/* Tabs buttons */}
//               {/* <div className="mb-8 md:mb-0"> */}
//               <div className="mb-8 md:mb-0 flex flex-col items-center">

//                 <button
//                   className={`w-80 h-24 md:w-96 md:h-24 flex items-start text-left bg-white border-2 px-5 py-3 rounded-sm shadow-md transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'border-transparent opacity-50 hover:opacity-75' : 'border-2 border-blue-500 opacity-100'}`}
//                   onClick={(e) => { e.preventDefault(); setTab(1); }}
               
//                 >
//                   <svg className="w-4 h-4 fill-current text-blue-600 shrink-0 mt-1 mr-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M9.4 6.6c.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-5-7.8-5-7.8s7 4.2 7.8 5Z" /><path d="M8 16c-4.4 0-8-3.6-8-8 0-.6.4-1 1-1s1 .4 1 1c0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6c-.6 0-1-.4-1-1s.4-1 1-1c4.4 0 8 3.6 8 8s-3.6 8-8 8Z" />
//                   </svg>
//                   <div>
//                     <div className="text-slate-800 font-medium mb-1">Asset management</div>
//                     <div className="text-slate-500">Smart ops for smarter investments.</div>
//                   </div>
//                 </button>
//                 <button
//                   className={`w-80 h-24 md:w-96 md:h-24 flex items-start text-left bg-white border-2 px-5 py-3 rounded-sm shadow-md transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'border-transparent opacity-50 hover:opacity-75' : 'border-2 border-blue-500 opacity-100'}`}
//                   onClick={(e) => { e.preventDefault(); setTab(2); }}
         
//                 >
//                   <svg className="w-4 h-4 fill-current text-blue-600 shrink-0 mt-1 mr-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M4.019 15.276.034 1.329A1.058 1.058 0 0 1 1.33.034L15.276 4.02c.896.299.996 1.494.1 1.893L8.8 8.8l-2.79 6.574c-.498.897-1.693.797-1.992-.1ZM2.525 2.525l2.69 9.463 1.892-4.383c.1-.199.299-.398.498-.498l4.383-1.893-9.463-2.69Z" />
//                   </svg>
//                   <div>
//                     <div className="text-slate-800 font-medium mb-1">Market places</div>
//                     <div className="text-slate-500">Stay ahead in a fast-moving marketplace.</div>
//                   </div>
//                 </button>
//                 <button
//                   className={`w-80 h-24 md:w-96 md:h-24 flex items-start text-left bg-white border-2 px-5 py-3 rounded-sm shadow-md transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'border-transparent opacity-50 hover:opacity-75' : 'border-2 border-blue-500 opacity-100'}`}
//                   onClick={(e) => { e.preventDefault(); setTab(3); }}
//                 >
//                   <svg className="w-4 h-4 fill-current text-blue-600 shrink-0 mt-1 mr-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M15.686 5.71 10.291.3c-.4-.4-.999-.4-1.399 0a.97.97 0 0 0 0 1.403l.6.6L2.698 6.01l-1-1.002c-.4-.4-.999-.4-1.398 0a.97.97 0 0 0 0 1.403l1.498 1.502 2.398 2.404L.6 14.023 2 15.425l3.696-3.706 3.997 4.007c.5.5 1.199.2 1.398 0a.97.97 0 0 0 0-1.402l-.999-1.002 3.697-6.711.6.6c.599.602 1.199.201 1.398 0 .3-.4.3-1.1-.1-1.502Zm-7.193 6.11L4.196 7.511l6.695-3.706 1.298 1.302-3.696 6.711Z" />
//                   </svg>
//                   <div>
//                     <div className="text-slate-800 font-medium mb-1">Technology</div>
//                     <div className="text-slate-500">Operational agility for tech enterprises.</div>
//                   </div>
//                 </button>
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }




'use client'

import { useState } from 'react'
// import { Transition } from '@headlessui/react'
// import Image from 'next/image'
// import Image01 from '@/public/images/logo/image-1.png'
// import Image02 from '@/public/images/logo/image-2.png'
// import Image03 from '@/public/images/logo/image-3.png'
import { Bot, Users, BarChart3, Mic, GaugeCircle, PartyPopper } from 'lucide-react'

export default function FeaturesHome02() {
  const [tab, setTab] = useState<number>(1)

  const agents = [ 
    {
      title: 'Support Agent',
      desc: 'Answers employee or team member questions around policies, tools, and documentation—available 24/7 to reduce delays and boost productivity.',
      icon: <Bot className="w-8 h-8 text-blue-500 mb-3" />,
    },
    {
      title: 'Development Coach Agent',
      desc: 'Helps individuals create tailored learning and growth plans, encouraging continuous skill development and career advancement.',
      icon: <Users className="w-8 h-8 text-green-500 mb-3" />,
    },
    {
      title: 'Capability Framework Agent',
      desc: 'Assists in building structured role frameworks, skill libraries, and competency models—ensuring clarity in roles, expectations, and growth paths.',
      icon: <BarChart3 className="w-8 h-8 text-purple-500 mb-3" />,
    },
    {
      title: 'Meeting Companion Agent',
      desc: 'Captures and summarizes meetings, assigns follow-ups, and highlights key insights—turning discussions into clear, actionable outcomes.',
      icon: <Mic className="w-8 h-8 text-yellow-500 mb-3" />,
    },
    {
      title: 'Performance Booster Agent',
      desc: 'Notices when key milestones—like feedback, reviews, or recognition—are overdue, and sends smart reminders to keep performance on track.',
      icon: <GaugeCircle className="w-8 h-8 text-red-500 mb-3" />,
    },
    {
      title: 'Engagement & Culture Agent',
      desc: 'Shares updates, celebrates milestones, and responds to timely events—keeping your team connected, informed, and engaged.',
      icon: <PartyPopper className="w-8 h-8 text-pink-500 mb-3" />,
    },
  ]

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-6 md:pt-10 pb-12 md:pb-20 border-t border-slate-200">

          {/* Section header */}
          <div className="max-w-5xl mx-auto text-center pb-12 md:pb-15">
            <h2 className="h2 font-playfair-display text-slate-800">Welcome to the Future with Agent-Led AI</h2>
            <p className="mt-4 text-lg text-slate-600">
             At Innovapath, our AI agents automate everyday tasks and deliver smart insights to boost productivity. This lets your team focus on strategy, growth, and what truly matters.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {agents.map((agent, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white hover:from-white hover:to-blue-100 border border-slate-200 hover:border-blue-400 transform hover:scale-105 transition-all duration-300 ease-in-out rounded-2xl shadow p-6 cursor-pointer"
              >
                {agent.icon}
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{agent.title}</h3>
                <p className="text-slate-600">{agent.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}