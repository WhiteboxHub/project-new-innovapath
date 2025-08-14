// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Header from '@/components/ui/header';
// import Footer from '@/components/ui/footer';

// export default function RequestDemo() {
//   const [formData, setFormData] = useState({
//     email: '',
//     full_name: '',
//     phone_number: '',
//     city: '',
//     postalcode: '',
//     address: '',
//     country: '',
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vendor/request-demo`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       console.log(response);
      
//       if (response.ok) {
//         setMessage('Demo request submitted successfully!');
//         setFormData({
//           email: '',
//           full_name: '',
//           phone_number: '',
//           city: '',
//           postalcode: '',
//           address: '',
//           country: '',
//         });
//       } else {
//         const error = await response.json();
//         setMessage(`Error: ${error.detail || 'Failed to submit demo request'}`);
//       }
//     } catch (err) {
//       setMessage('Network error. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
    
//     <>  
//     <div className="bg-slate-900">
//             <Header />
//           </div>
//     {/* Content */} 
    
//     <div className="w-full md:w-1/2 border">
//       <div className="min-h-screen h-full flex flex-col justify-center">
//         <div className="px-5 sm:px-6 py-4">
//           <div className="w-full max-w-md mx-auto">

//             <div className="mb-2">
//               <Link href="/" className="block text-blue-600" aria-label="IP">
//                 <Image src="/images/logo/IP_logo.png" width={200} height={100} alt="Innovapath Logo" />
//               </Link>
//             </div>

//             <div className="mb-10 rounded-xl p-8 shadow-lg bg-gray-200">
//               <form onSubmit={handleSubmit}>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-1" htmlFor="email">
//                       Email <span className="text-rose-500">*</span>
//                     </label>
//                     <input id="email" type="email" required value={formData.email} onChange={handleChange} className="rounded-md form-input py-2 w-full" />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1" htmlFor="full_name">
//                       Full Name <span className="text-rose-500">*</span>
//                     </label>
//                     <input id="full_name" type="text" required value={formData.full_name} onChange={handleChange} className="rounded-md form-input py-2 w-full" />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1" htmlFor="phone_number">
//                       Phone Number <span className="text-rose-500">*</span>
//                     </label>
//                     <input id="phone_number" type="tel" required value={formData.phone_number} onChange={handleChange} className="rounded-md form-input py-2 w-full" />
//                   </div>

//                   <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
//                     <div className="sm:w-1/2">
//                       <label className="block text-sm font-medium mb-1" htmlFor="city">
//                         City <span className="text-rose-500">*</span>
//                       </label>
//                       <input id="city" type="text" required value={formData.city} onChange={handleChange} className="rounded-md form-input py-2 w-full" />
//                     </div>
//                     <div className="sm:w-1/2">
//                       <label className="block text-sm font-medium mb-1" htmlFor="postalcode">
//                         Postal Code <span className="text-rose-500">*</span>
//                       </label>
//                       <input id="postalcode" type="text" required value={formData.postalcode} onChange={handleChange} className="rounded-md form-input py-2 w-full" />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1" htmlFor="address">
//                       Address <span className="text-rose-500">*</span>
//                     </label>
//                     <input id="address" type="text" required value={formData.address} onChange={handleChange} className="rounded-md form-input py-2 w-full" />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1" htmlFor="country">
//                       Country <span className="text-rose-500">*</span>
//                     </label>
//                     <select id="country" required value={formData.country} onChange={handleChange} className="rounded-md form-select py-2 w-full">
//                       <option value="" disabled>Select your country</option>
//                       <option>United States</option>
//                       <option>United Kingdom</option>
//                       <option>Germany</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="mt-6">
//                   <button type="submit" className="rounded-md btn-sm w-full text-sm text-white bg-blue-600 hover:bg-blue-700 group" disabled={loading}>
//                     {loading ? 'Submitting...' : 'Submit'} <span className="ml-1 text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out">-&gt;</span>
//                   </button>
//                 </div>

//                 <div className="mt-5">
//                   <label className="flex items-start">
//                     <input type="checkbox" className="form-checkbox mt-0.5" required />
//                     <span className="text-sm text-slate-500 ml-3">By filling out this form, I consent to the collection and use of my personal data.</span>
//                   </label>
//                 </div>

//                 {message && <p className="mt-4 text-sm text-center text-blue-600">{message}</p>}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//       {/* Right Side */}
//       <div className="relative hidden md:block md:w-1/2 bg-slate-950" aria-hidden="true">
//         <div className="min-h-screen h-full flex flex-col justify-center px-6 sm:px-10">
//           <div className="max-w-lg mx-auto text-slate-100 space-y-8">
//             <h2 className="text-3xl md:text-4xl font-bold font-playfair-display">Request a demo</h2>
//             <p className="text-slate-100">
//               Fill out the form to schedule a personalized demo that shows you how Innovapath Agentic AI SOC Analyst transforms alert triage and investigation.
//             </p>
//             <p className="text-slate-200">
//               During your demo, you’ll see:
//             </p>
//             <div className="space-y-4 text-slate-300">
//               <div className="flex items-start gap-3">
//                 <span className="text-blue-500 mt-1">✓</span>
//                 <p>A step-by-step walkthrough of how Innovapath AI investigates alerts.</p>
//               </div>
//               <div className="flex items-start gap-3">
//                 <span className="text-blue-500 mt-1">✓</span>
//                 <p>How Innovapath AI integrates into your environment with an easy 3-step API setup to drive rapid time-to-value.</p>
//               </div>
//               <div className="flex items-start gap-3">
//                 <span className="text-blue-500 mt-1">✓</span>
//                 <p>A demonstration of its explainable AI framework that prioritizes transparency and explainability.</p>
//               </div>
//               <div className="flex items-start gap-3">
//                 <span className="text-blue-500 mt-1">✓</span>
//                 <p>How Innovapath AI incorporates feedback to continuously refine its investigative process and accuracy.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//      </>
     

//   );
// }



// **************************************************************************************************


// // app\(auth)\request-demo\page.tsx
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function RequestDemo() {
//   const [formData, setFormData] = useState({
//     email: '',
//     full_name: '',
//     phone_number: '',
//     city: '',
//     postalcode: '',
//     address: '',
//     country: '',
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vendor/request-demo`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       console.log(response);
      
//       if (response.ok) {
//         setMessage('Demo request submitted successfully!');
//         setFormData({
//           email: '',
//           full_name: '',
//           phone_number: '',
//           city: '',
//           postalcode: '',
//           address: '',
//           country: '',
//         });
//       } else {
//         const error = await response.json();
//         setMessage(`Error: ${error.detail || 'Failed to submit demo request'}`);
//       }
//     } catch (err) {
//       setMessage('Network error. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };
// return (
//   <>
//     {/* Prevent page scrolling */}
//     <style jsx global>{`
//       html,
//       body {
//         height: 100%;
//         overflow: hidden;
//       }
//     `}</style>

//     {/* Content */}
//     <div className="w-full md:w-1/2 border">
//       <div className="min-h-screen h-full flex flex-col justify-center overflow-hidden">
//         <div className="px-5 sm:px-6 py-4 overflow-hidden">
//           <div className="w-full max-w-md mx-auto">
//             <div className="mb-2">
//               <Link href="/" className="block text-blue-600" aria-label="IP">
//                 <Image src="/images/logo/IP_logo.png" width={200} height={100} alt="Innovapath Logo" />
//               </Link>
//             </div>

//             <div className="mb-10 rounded-xl p-8 shadow-lg bg-gray-200 overflow-hidden">
//               <form onSubmit={handleSubmit}>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-1" htmlFor="email">
//                       Email <span className="text-rose-500">*</span>
//                     </label>
//                     <input
//                       id="email"
//                       type="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="rounded-md form-input py-2 w-full"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1" htmlFor="full_name">
//                       Full Name <span className="text-rose-500">*</span>
//                     </label>
//                     <input
//                       id="full_name"
//                       type="text"
//                       required
//                       value={formData.full_name}
//                       onChange={handleChange}
//                       className="rounded-md form-input py-2 w-full"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1" htmlFor="phone_number">
//                       Phone Number <span className="text-rose-500">*</span>
//                     </label>
//                     <input
//                       id="phone_number"
//                       type="tel"
//                       required
//                       value={formData.phone_number}
//                       onChange={handleChange}
//                       className="rounded-md form-input py-2 w-full"
//                     />
//                   </div>

//                   <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
//                     <div className="sm:w-1/2">
//                       <label className="block text-sm font-medium mb-1" htmlFor="city">
//                         City <span className="text-rose-500">*</span>
//                       </label>
//                       <input
//                         id="city"
//                         type="text"
//                         required
//                         value={formData.city}
//                         onChange={handleChange}
//                         className="rounded-md form-input py-2 w-full"
//                       />
//                     </div>
//                     <div className="sm:w-1/2">
//                       <label className="block text-sm font-medium mb-1" htmlFor="postalcode">
//                         Postal Code <span className="text-rose-500">*</span>
//                       </label>
//                       <input
//                         id="postalcode"
//                         type="text"
//                         required
//                         value={formData.postalcode}
//                         onChange={handleChange}
//                         className="rounded-md form-input py-2 w-full"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1" htmlFor="address">
//                       Address <span className="text-rose-500">*</span>
//                     </label>
//                     <input
//                       id="address"
//                       type="text"
//                       required
//                       value={formData.address}
//                       onChange={handleChange}
//                       className="rounded-md form-input py-2 w-full"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-1" htmlFor="country">
//                       Country <span className="text-rose-500">*</span>
//                     </label>
//                     <select
//                       id="country"
//                       required
//                       value={formData.country}
//                       onChange={handleChange}
//                       className="rounded-md form-select py-2 w-full"
//                     >
//                       <option value="" disabled>
//                         Select your country
//                       </option>
//                       <option>United States</option>
//                       <option>United Kingdom</option>
//                       <option>Germany</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="mt-6">
//                   <button
//                     type="submit"
//                     className="rounded-md btn-sm w-full text-sm text-white bg-blue-600 hover:bg-blue-700 group"
//                     disabled={loading}
//                   >
//                     {loading ? 'Submitting...' : 'Submit'}{' '}
//                     <span className="ml-1 text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out">
//                       -&gt;
//                     </span>
//                   </button>
//                 </div>

//                 <div className="mt-5">
//                   <label className="flex items-start">
//                     <input type="checkbox" className="form-checkbox mt-0.5" required />
//                     <span className="text-sm text-slate-500 ml-3">
//                       By filling out this form, I consent to the collection and use of my personal data.
//                     </span>
//                   </label>
//                 </div>

//                 {message && (
//                   <p className="mt-4 text-sm text-center text-blue-600">{message}</p>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Right Side */}
    
//    <div className="relative hidden md:block md:w-1/2 bg-slate-950" aria-hidden="true">
//         <div className="min-h-screen h-full flex flex-col justify-center px-6 sm:px-10">
//           <div className="max-w-lg mx-auto text-slate-100 space-y-8">
//             <h2 className="text-3xl md:text-4xl font-bold font-playfair-display">Request a demo</h2>
//             <p className="text-slate-100">
//               Fill out the form to schedule a personalized demo that shows you how Innovapath Agentic AI SOC Analyst transforms alert triage and investigation.
//             </p>
//             <p className="text-slate-200">
//               During your demo, you’ll see:
//             </p>
//             <div className="space-y-4 text-slate-300">
//               <div className="flex items-start gap-3">
//                 <span className="text-blue-500 mt-1">✓</span>
//                 <p>A step-by-step walkthrough of how Innovapath AI investigates alerts.</p>
//               </div>
//               <div className="flex items-start gap-3">
//                 <span className="text-blue-500 mt-1">✓</span>
//                 <p>How Innovapath AI integrates into your environment with an easy 3-step API setup to drive rapid time-to-value.</p>
//               </div>
//               <div className="flex items-start gap-3">
//                 <span className="text-blue-500 mt-1">✓</span>
//                 <p>A demonstration of its explainable AI framework that prioritizes transparency and explainability.</p>
//               </div>
//               <div className="flex items-start gap-3">
//                 <span className="text-blue-500 mt-1">✓</span>
//                 <p>How Innovapath AI incorporates feedback to continuously refine its investigative process and accuracy.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//   </>
// );
// }




'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

export default function RequestDemoPage() {
  const [formData, setFormData] = useState({
    email: '',
    full_name: '',
    phone_number: '',
    city: '',
    postalcode: '',
    address: '',
    country: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/request-demo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Demo request submitted successfully!');
        setFormData({
          email: '',
          full_name: '',
          phone_number: '',
          city: '',
          postalcode: '',
          address: '',
          country: '',
        });
      } else {
        const error = await response.json();
        setMessage(`Error: ${error.detail || 'Failed to submit demo request'}`);
      }
    } catch (err) {
      setMessage('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden bg-slate-950 text-white">
      {/* Header */}
      <div className="bg-slate-900">
        <Header />
      </div>

      {/* Main Section */}
      <main className="flex flex-col md:flex-row flex-grow w-full">
        {/* Form Section */}
        <div className="w-full md:w-1/2 border bg-white text-black">
          {/* <div className="flex flex-col justify-center min-h-full h-full px-5 sm:px-6 py-5"> */}
          <div className="flex flex-col justify-start min-h-full h-full px-5 sm:px-6 py-5 mt-26">

            <div className="w-full max-w-md mx-auto">
              <div className="mb-2">
                {/* <Link href="/" className="block text-blue-600" aria-label="IP">
                  <Image src="/images/logo/IP_logo.png" width={200} height={100} alt="Innovapath Logo" />
                </Link> */}
              </div>

              <div className="mb-10 rounded-xl p-8 shadow-lg  bg-gray-200">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    {[
                      ['email', 'Email', 'email'],
                      ['full_name', 'Full Name', 'text'],
                      ['phone_number', 'Phone Number', 'tel'],
                      ['city', 'City', 'text'],
                      ['postalcode', 'Postal Code', 'text'],
                      ['address', 'Address', 'text'],
                    ].map(([id, label, type]) => (
                      <div key={id}>
                        <label className="block text-sm font-medium mb-1" htmlFor={id}>
                          {label} <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id={id}
                          type={type}
                          required
                          value={formData[id as keyof typeof formData]}
                          onChange={handleChange}
                          className="rounded-md form-input py-2 w-full"
                        />
                      </div>
                    ))}

                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="country">
                        Country <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="rounded-md form-select py-2 w-full"
                      >
                        <option value="" disabled>Select your country</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Germany</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="rounded-md btn-sm w-full text-sm text-white bg-blue-600 hover:bg-blue-700 group"
                      disabled={loading}
                    >
                      {loading ? 'Submitting...' : 'Submit'}
                      {/* <span className="ml-1 text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out">
                        -&gt;
                      </span> */}
                    </button>
                  </div>

                  <div className="mt-5">
                    <label className="flex items-start">
                      <input type="checkbox" className="form-checkbox mt-0.5" required />
                      <span className="text-sm text-slate-500 ml-3">
                        By filling out this form, I consent to the collection and use of my personal data.
                      </span>
                    </label>
                  </div>

                  {message && <p className="mt-4 text-sm text-center text-blue-600">{message}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Right Info Section */}
        <div className="relative w-full md:w-1/2 bg-slate-950 text-white flex items-center justify-center px-6 sm:px-10">
          <div className="max-w-lg space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold  font-times-new-roman">Request a demo</h2>
            <p>
              Fill out the form to schedule a personalized demo that shows you how Innovapath Agentic AI SOC Analyst transforms alert triage and investigation.
            </p>
            <p>During your demo, you’ll see:</p>
            <div className="space-y-4 text-slate-300">
              {[
                'A step-by-step walkthrough of how Innovapath AI investigates alerts.',
                'How Innovapath AI integrates into your environment with an easy 3-step API setup.',
                'A demonstration of its explainable AI framework for transparency.',
                'How Innovapath AI incorporates feedback to refine its process.',
              ].map((text, i) => (
                <div className="flex items-start gap-3" key={i}>
                  <span className="text-blue-500 mt-1">✓</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
