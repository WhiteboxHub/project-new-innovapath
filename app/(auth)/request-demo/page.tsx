export const metadata = {
  title: 'Request Demo - Innovapath',
  description: 'Page description',
}

import Link from 'next/link'
import Image from 'next/image'
// import PageBg from '@/public/images/request-demo-bg.jpg'
// import CustomerAvatar from '@/public/images/customer-avatar-04.jpg'

export default function RequestDemo() {
  return (
    <>

      {/* Content */}
      <div className="w-full md:w-1/2 border ">

        <div className="min-h-screen borderh-full flex flex-col justify-center">
    {/* <Header/> */}

          <div className="px-5 sm:px-6 py-4">
            <div className="w-full max-w-md mx-auto">

              {/* Site branding */}
              <div className="mb-2 ">
                {/* Logo */}
                <Link href="/" className=" block text-blue-600 transition duration-150 ease-in-out" aria-label="IP">
                <Image 
                  src="/images/logo/IP_logo.png" 
                  width={200}  
                  height={100} 
                  alt="Innovapath Logo"
                />
              </Link>
              </div>

              {/* <h1 className="h2 font-playfair-display text-slate-800 mb-8">Request your demo</h1> */}

              {/* Form */}
              <div className=" mb-10 rounded-xl p-8 shadow-lg bg-gray-200">

              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email <span className="text-rose-500">*</span></label>
                    <input id="email" className=" rounded-md form-input py-2 w-full" type="email" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Contact Name <span className="text-rose-500">*</span></label>
                    <input id="name" className="rounded-md form-input py-2 w-full" type="text" required />
                  </div>
                  <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <div className="sm:w-1/2">
                      <label className="block text-sm font-medium mb-1" htmlFor="city">City <span className="text-rose-500">*</span></label>
                      <input id="city" className="rounded-md form-input py-2 w-full" type="text" required />
                    </div>
                    <div className="sm:w-1/2">
                      <label className="block text-sm font-medium mb-1" htmlFor="pcode">Postal Code <span className="text-rose-500">*</span></label>
                      <input id="pcode" className="rounded-md form-input py-2 w-full" type="text" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="address">Street Address <span className="text-rose-500">*</span></label>
                    <input id="address" className="rounded-md form-input py-2 w-full" type="text" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="country">Country <span className="text-rose-500">*</span></label>
                    <select id="country" className="rounded-md form-select py-2 w-full" required>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <button className=" rounded-md  btn-sm w-full text-sm text-white bg-blue-600 hover:bg-blue-700 group">
                    Submit <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </button>
                </div>
                <div className="mt-5">
                  <label className="flex items-start">
                    <input type="checkbox" className="form-checkbox mt-0.5" defaultChecked />
                    <span className="text-sm text-slate-500 ml-3">By filling out this form, I consent to the collection and use of my personal data.</span>
                  </label>
                </div>
              </form>

            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div   className="relative hidden md:block md:w-1/2 bg-gradient-to-br from-slate-900 via-slate-700 to-slate-950"aria-hidden="true">
        <div className="min-h-screen h-full flex flex-col justify-center px-6 sm:px-10">
          <div className="max-w-lg mx-auto text-slate-100 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair-display">Request a demo</h2>
            <p className="text-slate-100">
              Fill out the form to schedule a personalized demo that shows you how Innovapath Agentic AI SOC Analyst transforms alert triage and investigation.
            </p>
            <p className="text-slate-200">
              During your demo, you’ll see:
            </p>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">✓</span>
                <p>A step-by-step walkthrough of how Innovapath AI investigates alerts.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">✓</span>
                <p>How Innovapath AI integrates into your environment with an easy 3-step API setup to drive rapid time-to-value.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">✓</span>
                <p>A demonstration of its explainable AI framework that prioritizes transparency and explainability.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">✓</span>
                <p>How Innovapath AI incorporates feedback to continuously refine its investigative process and accuracy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
