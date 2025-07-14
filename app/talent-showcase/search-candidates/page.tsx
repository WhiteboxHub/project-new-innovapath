
// // 'use client';

// // import React, { useState } from 'react';
// // import Header from '@/components/ui/header';
// // import Footer from '@/components/ui/footer';
// // interface Candidate {
// //   id: number;
// //   full_name: string;
// //   email: string;
// //   phone: string;
// //   instructor_id?: string;
// //   marketing_start_date?: string;
// //   marketing_manager?: string;
// //   status?: string;
// //   notes?: string;
// //   role: string;
// //   experience: number;
// //   location: string;
// //   availability: string;
// //   skills: string;
// // }
// // export default function SearchCandidatesPage() {
// //   const [filters, setFilters] = useState({
// //     role: '',
// //     experience: '',
// //     location: '',
// //     availability: '',
// //     skills: '',
// //   });

// //   const [candidates, setCandidates] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [showResults, setShowResults] = useState(false);
// //   const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

 
// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
// //     const { name, value } = e.target;
// //     setFilters((prev) => ({ ...prev, [name]: value }));
// //   };
  
// //   const handleRequestProfiles = async () => {
// //     setLoading(true);
// //     setShowResults(true);
// //     setSelectedCandidate(null);

// //     const queryParams = new URLSearchParams();
// //     for (const [key, value] of Object.entries(filters)) {
// //       if (value.trim() !== '') {
// //         queryParams.append(key === 'skills' ? 'skill' : key, value);
// //       }
// //     }

// //     try {
// //       const res = await fetch(`/talent-showcase?${queryParams.toString()}`);
// //       const data = await res.json();
// //       setCandidates(data);
// //     } catch (error) {
// //       console.error('Error fetching candidates:', error);
// //       setCandidates([]);
// //     }

// //     setLoading(false);
// //   };

 
// //   const handleProfileRequest = (candidate: Candidate) => {
// //     setSelectedCandidate(candidate);
// //   };
  

// //   return (
// //     <div className="flex flex-col min-h-screen">
// //       <div className="bg-slate-900">
// //         <Header />
// //       </div>

// //       <main className="flex-grow flex items-center justify-center px-4 py-12 mt-10">
// //         <div className="max-w-5xl w-full">
// //           <h2 className="text-3xl font-semibold mb-6 text-center">Search Talent</h2>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
// //             <select name="role" value={filters.role} onChange={handleChange} className="p-2 border rounded">
// //               {/* <option value="">Select Role</option> */}
// //               <option value="" disabled hidden>Select Role</option>
// //               <option value="ML Engineer">ML Engineer</option>
// //               <option value="MLOps Engineer">MLOps Engineer</option>
// //               <option value="Machine Learning Engineer">Machine Learning Engineer</option>
// //               <option value="Frontend Developer">Frontend Developer</option>
// //               <option value="Deep Learning Engineer">Deep Learning Engineer</option>
// //               <option value="AI/ML Engineer">AI/ML Engineer</option>
// //             </select>

// //             <select name="experience" value={filters.experience} onChange={handleChange} className="p-2 border rounded">
// //               {/* <option value="">Experience</option> */}
// //               <option value="" disabled hidden>Select Role</option>
// //               <option value="2">2+ yrs</option>
// //               <option value="5">5+ yrs</option>
// //               <option value="9">9+ yrs</option>
// //               <option value="1">1 yr</option>
// //             </select>

// //             <select name="location" value={filters.location} onChange={handleChange} className="p-2 border rounded">
// //               {/* <option value="">Location</option> */}
// //               <option value="" disabled hidden>Select Role</option>
// //               <option value="Remote">Remote</option>
// //               <option value="Hybrid">Hybrid</option>
// //               <option value="Onsite">Onsite</option>
// //             </select>

// //             <select name="availability" value={filters.availability} onChange={handleChange} className="p-2 border rounded">
// //               {/* <option value="">Availability</option> */}
// //               <option value="" disabled hidden>Select Role</option>
// //               <option value="Immediately">Immediately</option>
// //               <option value="2 weeks">2 weeks</option>
// //               <option value="3 weeks">3 weeks</option>
// //               <option value="1 month">1 month</option>
// //               <option value="3 months">3 months</option>
// //             </select>

// //             <input
// //               type="text"
// //               name="skills"
// //               placeholder="Search Skill (e.g., Python, React)"
// //               value={filters.skills}
// //               onChange={handleChange}
// //               className="p-2 border rounded col-span-full sm:col-span-2"
// //             />
// //           </div>

// //           <div className="flex justify-center mb-8">
// //             <button
// //               className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
// //               onClick={handleRequestProfiles}
// //             >
// //               Request Profiles
// //             </button>
// //           </div>

// //           {showResults && (
// //             <div className="grid gap-6">
// //               {loading ? (
// //                 <p className="text-center text-gray-500">Loading...</p>
// //               ) : candidates.length > 0 ? (
// //                 candidates.map((candidate) => (
// //                   <div key={candidate["id"]} className="border rounded p-4 shadow-md">
// //                     <h3 className="text-xl font-bold">{candidate["full_name"]}</h3>
// //                     <p className="text-sm">Role: {candidate["role"]}</p>
// //                     <p className="text-sm">Experience: {candidate["experience"]} years</p>
// //                     <p className="text-sm">Location: {candidate["location"]}</p>
// //                     <p className="text-sm">Availability: {candidate["availability"]}</p>
// //                     <p className="text-sm">Skills: {candidate["skills"]}</p>
// //                     <button
// //                       onClick={() => handleProfileRequest(candidate)}
// //                       className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
// //                     >
// //                       Request Full Profile
// //                     </button>
// //                   </div>
// //                 ))
// //               ) : (
// //                 <p className="text-center text-gray-400">Please fill out these fields..</p>
// //               )}
// //             </div>
// //           )}


// //               {selectedCandidate && (
// //                   <div className="mt-6 p-6 border rounded shadow-lg bg-white">
// //                     <h2 className="text-2xl font-bold mb-2">{selectedCandidate["full_name"]}</h2>
// //                     <p><strong>Email:</strong> {selectedCandidate["email"]}</p>
// //                     <p><strong>Phone:</strong> {selectedCandidate["phone"]}</p>
// //                     <p><strong>Instructor ID:</strong> {selectedCandidate["instructor_id"] ?? "N/A"}</p>
// //                     <p><strong>Marketing Start Date:</strong> {selectedCandidate["marketing_start_date"]}</p>
// //                     <p><strong>Manager:</strong> {selectedCandidate["marketing_manager"]}</p>
// //                     <p><strong>Status:</strong> {selectedCandidate["status"]}</p>
// //                     <p><strong>Notes:</strong> {selectedCandidate["notes"]}</p>
// //                     <p><strong>Role:</strong> {selectedCandidate["role"]}</p>
// //                     <p><strong>Experience:</strong> {selectedCandidate["experience"]} years</p>
// //                     <p><strong>Location:</strong> {selectedCandidate["location"]}</p>
// //                     <p><strong>Availability:</strong> {selectedCandidate["availability"]}</p>
// //                     <p><strong>Skills:</strong> {selectedCandidate["skills"]}</p>
// //                     <button
// //                       onClick={() => setSelectedCandidate(null)}
// //                       className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
// //                     >
// //                       Close Profile
// //                     </button>
// //             </div>
// //           )}
// //         </div>
// //       </main>

// //       <Footer />
// //     </div>
// //   );
// // }


// 'use client';

// import React, { useState } from 'react';
// import Header from '@/components/ui/header';
// import Footer from '@/components/ui/footer';

// interface Candidate {
//   id: number;
//   full_name: string;
//   email: string;
//   phone: string;
//   instructor_id?: string;
//   marketing_start_date?: string;
//   marketing_manager?: string;
//   status?: string;
//   notes?: string;
//   role: string;
//   experience: number;
//   location: string;
//   availability: string;
//   skills: string;
// }

// export default function SearchCandidatesPage() {
//   const [filters, setFilters] = useState({
//     role: '',
//     experience: '',
//     location: '',
//     availability: '',
//     skills: '',
//   });

//   const [candidates, setCandidates] = useState<Candidate[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [showResults, setShowResults] = useState(false);
//   const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   const validateInputs = () => {
//     const { role, experience, location, availability, skills } = filters;

//     if (!role || !experience || !location || !availability || !skills) {
//       setErrorMessage('Please fill out all the fields.');
//       return false;
//     }

//     const expNum = parseInt(experience);
//     if (isNaN(expNum) || expNum < 0) {
//       setErrorMessage('Experience must be a valid non-negative number.');
//       return false;
//     }

//     setErrorMessage('');
//     return true;
//   };

//   const handleRequestProfiles = async () => {
//     setShowResults(true);
//     setSelectedCandidate(null);

//     if (!validateInputs()) {
//       setCandidates([]);
//       return;
//     }

//     setLoading(true);

//     const queryParams = new URLSearchParams();
//     for (const [key, value] of Object.entries(filters)) {
//       if (value.trim() !== '') {
//         queryParams.append(key === 'skills' ? 'skill' : key, value);
//       }
//     }

//     const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

//     try {
//       const res = await fetch(`${apiBaseUrl}/candidates?${queryParams.toString()}`);
//       const data = await res.json();
//       setCandidates(data);
//     } catch (error) {
//       console.error('Error fetching candidates:', error);
//       setCandidates([]);
//     }

//     setLoading(false);
//   };

//   const handleProfileRequest = (candidate: Candidate) => {
//     setSelectedCandidate(candidate);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="bg-slate-900">
//         <Header />
//       </div>

//       <main className="flex-grow flex items-center justify-center px-4 py-12 mt-10">
//         <div className="max-w-5xl w-full">
//           <h2 className="text-3xl font-semibold mb-6 text-center">Search Talent</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
//             <select name="role" value={filters.role} onChange={handleChange} className="p-2 border rounded">
//               <option value="" disabled hidden>Select Role</option>
//               <option value="ML Engineer">ML Engineer</option>
//               <option value="MLOps Engineer">MLOps Engineer</option>
//               <option value="Machine Learning Engineer">Machine Learning Engineer</option>
//               <option value="Frontend Developer">Frontend Developer</option>
//               <option value="Deep Learning Engineer">Deep Learning Engineer</option>
//               <option value="AI/ML Engineer">AI/ML Engineer</option>
//             </select>

//             <select name="experience" value={filters.experience} onChange={handleChange} className="p-2 border rounded">
//               <option value="" disabled hidden>Select Experience</option>
//               <option value="2">2+ yrs</option>
//               <option value="5">5+ yrs</option>
//               <option value="9">9+ yrs</option>
//               <option value="1">1 yr</option>
//             </select>

//             <select name="location" value={filters.location} onChange={handleChange} className="p-2 border rounded">
//               <option value="" disabled hidden>Select Location</option>
//               <option value="Remote">Remote</option>
//               <option value="Hybrid">Hybrid</option>
//               <option value="Onsite">Onsite</option>
//             </select>

//             <select name="availability" value={filters.availability} onChange={handleChange} className="p-2 border rounded">
//               <option value="" disabled hidden>Select Availability</option>
//               <option value="Immediately">Immediately</option>
//               <option value="2 weeks">2 weeks</option>
//               <option value="3 weeks">3 weeks</option>
//               <option value="1 month">1 month</option>
//               <option value="3 months">3 months</option>
//             </select>

//             <input
//               type="text"
//               name="skills"
//               placeholder="Search Skill (e.g., Python, React)"
//               value={filters.skills}
//               onChange={handleChange}
//               className="p-2 border rounded col-span-full sm:col-span-2"
//             />
//           </div>

//           <div className="flex justify-center mb-8">
//             <button
//               className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//               onClick={handleRequestProfiles}
//             >
//               Request Profiles
//             </button>
//           </div>

//           {showResults && (
//             <div className="grid gap-6">
//               {errorMessage ? (
//                 <p className="text-center text-red-500">{errorMessage}</p>
//               ) : loading ? (
//                 <p className="text-center text-gray-500">Loading...</p>
//               ) : candidates.length > 0 ? (
//                 candidates.map((candidate) => (
//                   <div key={candidate.id} className="border rounded p-4 shadow-md">
//                     <h3 className="text-xl font-bold">{candidate.full_name}</h3>
//                     <p className="text-sm">Role: {candidate.role}</p>
//                     <p className="text-sm">Experience: {candidate.experience} years</p>
//                     <p className="text-sm">Location: {candidate.location}</p>
//                     <p className="text-sm">Availability: {candidate.availability}</p>
//                     <p className="text-sm">Skills: {candidate.skills}</p>
//                     <button
//                       onClick={() => handleProfileRequest(candidate)}
//                       className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//                     >
//                       Request Full Profile
//                     </button>
//                   </div>
//                 ))
//               ) : (
//                 // <p className="text-center text-gray-400">No matching talent found. Please update your search filters.</p>
//                 <p className="text-center text-red-400">Invalid input.</p>
//               )}
//             </div>
//           )}

//           {selectedCandidate && (
//             <div className="mt-6 p-6 border rounded shadow-lg bg-white">
//               <h2 className="text-2xl font-bold mb-2">{selectedCandidate.full_name}</h2>
//               <p><strong>Email:</strong> {selectedCandidate.email}</p>
//               <p><strong>Phone:</strong> {selectedCandidate.phone}</p>
//               <p><strong>Instructor ID:</strong> {selectedCandidate.instructor_id ?? "N/A"}</p>
//               <p><strong>Marketing Start Date:</strong> {selectedCandidate.marketing_start_date}</p>
//               <p><strong>Manager:</strong> {selectedCandidate.marketing_manager}</p>
//               <p><strong>Status:</strong> {selectedCandidate.status}</p>
//               <p><strong>Notes:</strong> {selectedCandidate.notes}</p>
//               <p><strong>Role:</strong> {selectedCandidate.role}</p>
//               <p><strong>Experience:</strong> {selectedCandidate.experience} years</p>
//               <p><strong>Location:</strong> {selectedCandidate.location}</p>
//               <p><strong>Availability:</strong> {selectedCandidate.availability}</p>
//               <p><strong>Skills:</strong> {selectedCandidate.skills}</p>
//               <button
//                 onClick={() => setSelectedCandidate(null)}
//                 className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//               >
//                 Close Profile
//               </button>
//             </div>
//           )}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }








// ***************************************************************************************************

// import React, { useState } from 'react';
// import Header from '@/components/ui/header';
// import Footer from '@/components/ui/footer';

// export default function SearchCandidatesPage() {
//   const [filters, setFilters] = useState({
//     role: '',
//     experience: '',
//     location: '',
//     availability: '',
//     skills: '',
//   });

//   const [candidates, setCandidates] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showResults, setShowResults] = useState(false);
//   const [selectedCandidate, setSelectedCandidate] = useState(null);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   const validateInputs = () => {
//     const { role, experience, location, availability, skills } = filters;

//     if (!role || !experience || !location || !availability || !skills) {
//       setErrorMessage('Please fill out all the fields.');
//       return false;
//     }

//     const expNum = parseInt(experience, 10);
//     if (isNaN(expNum) || expNum < 0) {
//       setErrorMessage('Experience must be a valid non-negative number.');
//       return false;
//     }

//     setErrorMessage('');
//     return true;
//   };

//   const handleRequestProfiles = async () => {
//     setShowResults(true);
//     setSelectedCandidate(null);

//     if (!validateInputs()) {
//       setCandidates([]);
//       return;
//     }

//     setLoading(true);

//     const queryParams = new URLSearchParams(filters).toString();

//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/candidate_marketing/?${queryParams}`);
//       // console.log("Hitting URL:", `${process.env.NEXT_PUBLIC_API_URL}/candidate_marketing/?${queryParams}`);

//      if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setCandidates(data);
//     } catch (error) {
//       console.error('Error fetching candidates:', error);
//       setCandidates([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleProfileRequest = (candidate: React.SetStateAction<null>) => {
//     setSelectedCandidate(candidate);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="bg-slate-900">
//         <Header />
//       </div>

//       <main className="flex-grow flex items-center justify-center px-4 py-12 mt-10">
//         <div className="max-w-5xl w-full">
//           <h2 className="text-3xl font-semibold mb-6 text-center">Search Talent</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
//             <select name="role" value={filters.role} onChange={handleChange} className="p-2 border rounded">
//               <option value="" disabled hidden>Select Role</option>
//               <option value="Data Analyst">Data Analyst</option>
//               <option value="Frontend Developer">Frontend Developer</option>
//               <option value="Business Analyst">Business Analyst</option>
//               <option value="DevOps Engineer">DevOps Engineer</option>
//               <option value="Machine Learning Engineer">Machine Learning Engineer</option>
//             </select>

//             <select name="experience" value={filters.experience} onChange={handleChange} className="p-2 border rounded">
//               <option value="" disabled hidden>Select Experience</option>
//               <option value="1">1 yr</option>
//               <option value="2">2+ yrs</option>
//               <option value="3">3+ yrs</option>
//               <option value="4">4+ yrs</option>
//               <option value="5">5+ yrs</option>
//             </select>

//             <select name="location" value={filters.location} onChange={handleChange} className="p-2 border rounded">
//               <option value="" disabled hidden>Select Location</option>
//               <option value="Remote">Remote</option>
//               <option value="Hybrid">Hybrid</option>
//               <option value="Onsite">Onsite</option>
//             </select>

//             <select name="availability" value={filters.availability} onChange={handleChange} className="p-2 border rounded">
//               <option value="" disabled hidden>Select Availability</option>
//               <option value="Immediate">Immediate</option>
//               <option value="2 Weeks">2 Weeks</option>
//               <option value="3 Weeks">3 Weeks</option>
//               <option value="1 Month">1 Month</option>
//             </select>

//             <input
//               type="text"
//               name="skills"
//               placeholder="Search Skill (e.g., Python, React)"
//               value={filters.skills}
//               onChange={handleChange}
//               className="p-2 border rounded col-span-full sm:col-span-2"
//             />
//           </div>

//           <div className="flex justify-center mb-8">
//             <button
//               className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//               onClick={handleRequestProfiles}
//             >
//               Request Profiles
//             </button>
//           </div>

//           {showResults && (
//             <div className="grid gap-6">
//               {errorMessage ? (
//                 <p className="text-center text-red-500">{errorMessage}</p>
//               ) : loading ? (
//                 <p className="text-center text-gray-500">Loading...</p>
//               ) : candidates.length > 0 ? (
//                 <div>
//                   {candidates.map((candidate) => (
//                     <div key={candidate.id} className="border rounded p-4 shadow-md mb-4">
//                       <h3 className="text-xl font-bold">{candidate.full_name}</h3>
//                       <p className="text-sm">Role: {candidate.role}</p>
//                       <p className="text-sm">Experience: {candidate.experience} years</p>
//                       <p className="text-sm">Location: {candidate.location}</p>
//                       <p className="text-sm">Availability: {candidate.availability}</p>
//                       <p className="text-sm">Skills: {candidate.skills}</p>
//                       <button
//                         onClick={() => handleProfileRequest(candidate)}
//                         className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//                       >
//                         Request Full Profile
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-center text-gray-400">No matching talent found. Please update your search filters.</p>
//               )}
//             </div>
//           )}

//           {selectedCandidate && (
//             <div className="mt-6 p-6 border rounded shadow-lg bg-white">
//               <h2 className="text-2xl font-bold mb-2">{selectedCandidate.full_name}</h2>
//               <p><strong>Email:</strong> {selectedCandidate[email]}</p>
//               <p><strong>Phone:</strong> {selectedCandidate.phone}</p>
//               <p><strong>Role:</strong> {selectedCandidate.role}</p>
//               <p><strong>Experience:</strong> {selectedCandidate.experience} years</p>
//               <p><strong>Location:</strong> {selectedCandidate.location}</p>
//               <p><strong>Availability:</strong> {selectedCandidate.availability}</p>
//               <p><strong>Skills:</strong> {selectedCandidate.skills}</p>
//               <button
//                 onClick={() => setSelectedCandidate(null)}
//                 className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//               >
//                 Close Profile
//               </button>
//             </div>
//           )}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }


// .....................................................................

'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

export default function SearchCandidatesPage() {
  const [filters, setFilters] = useState({
    role: '',
    experience: '',
    location: '',
    availability: '',
    skills: '',
  });

  const [candidates, setCandidates] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Validate inputs before making API call
  const validateInputs = () => {
    const { role, experience, location, availability, skills } = filters;

    if (!role || !experience || !location || !availability || !skills) {
      setErrorMessage('Please fill out these fields..');
      return false;
    }

    const expNum = parseInt(experience, 10);
    if (isNaN(expNum) || expNum < 0) {
      setErrorMessage('Experience must be a valid non-negative number.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  // Request candidates from backend
  const handleRequestProfiles = async () => {
    setShowResults(true);
    setSelectedCandidate(null);

    if (!validateInputs()) {
      setCandidates([]);
      return;
    }

    setLoading(true);

    const queryParams = new URLSearchParams(filters).toString();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/candidate_marketing?${queryParams}`);
      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      setCandidates(data);
    } catch (error) {
      console.error('Error fetching candidates:', error);
      setCandidates([]);
      setErrorMessage('Failed to fetch candidates.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-slate-900">
        <Header />
      </div>

      <main className="flex-grow flex items-center justify-center px-4 py-12 mt-10">
        <div className="max-w-5xl w-full">
          <h2 className="text-3xl font-semibold mb-6 text-center">Search Talent</h2>

          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <select name="role" value={filters.role} onChange={handleChange} className="p-2 border rounded">
              <option value="" disabled hidden>Select Role</option>
              <option value="MLOps Engineer">MLOps Engineer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Deep Learning Engineer">Deep Learning Engineer</option>
              <option value="AI/ML Engineer">AI/ML Engineer</option>
              <option value="Machine Learning Engineer">Machine Learning Engineer</option>
            </select>

            <select name="experience" value={filters.experience} onChange={handleChange} className="p-2 border rounded">
              <option value="" disabled hidden>Select Experience</option>
              <option value="1">1 yr</option>
              <option value="2">2+ yrs</option>
              <option value="3">3+ yrs</option>
              <option value="4">4+ yrs</option>
              <option value="5">5+ yrs</option>
            </select>

            <select name="location" value={filters.location} onChange={handleChange} className="p-2 border rounded">
              <option value="" disabled hidden>Select Location</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Onsite">Onsite</option>
            </select>

            <select name="availability" value={filters.availability} onChange={handleChange} className="p-2 border rounded">
              <option value="" disabled hidden>Select Availability</option>
              <option value="Immediate">Immediate</option>
              <option value="2 Weeks">2 Weeks</option>
              <option value="3 Weeks">3 Weeks</option>
              <option value="1 Month">1 Month</option>
            </select>

            <input
              type="text"
              name="skills"
              placeholder="Search Skill (e.g., Python, React)"
              value={filters.skills}
              onChange={handleChange}
              className="p-2 border rounded col-span-full sm:col-span-2"
            />
          </div>

          <div className="flex justify-center mb-8">
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
              onClick={handleRequestProfiles}
            >
              Request Profiles
            </button>
          </div>

          {/* Candidate results */}
          {showResults && (
            <div className="grid gap-6">
              {errorMessage ? (
                <p className="text-center text-red-500">{errorMessage}</p>
              ) : loading ? (
                <p className="text-center text-gray-500">Loading...</p>
              ) : candidates.length > 0 ? (
                <div>
                  {candidates.map((candidate) => (
                    <div key={candidate.id} className="border rounded p-4 shadow-md mb-4">
                      <h3 className="text-xl font-bold">{candidate.full_name}</h3>
                      <p className="text-sm">Role: {candidate.role}</p>
                      <p className="text-sm">Experience: {candidate.experience} years</p>
                      <p className="text-sm">Location: {candidate.location}</p>
                      <p className="text-sm">Availability: {candidate.availability}</p>
                      <p className="text-sm">Skills: {candidate.skills}</p>
                      <button
                        onClick={() => setSelectedCandidate(candidate)}
                        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
                      >
                        Request Full Profile
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-red-400">Invalid Input.</p>
                // <p className="text-center text-red-400">Invalid input.</p>
              )}
            </div>
          )}

          {/* Detailed profile */}
          {selectedCandidate && (
            <div className="mt-6 p-6 border rounded shadow-lg bg-white">
              <h2 className="text-2xl font-bold mb-2">{selectedCandidate.full_name}</h2>
              <p><strong>Email:</strong> {selectedCandidate.email}</p>
              <p><strong>Phone:</strong> {selectedCandidate.phone}</p>
              <p><strong>Role:</strong> {selectedCandidate.role}</p>
              <p><strong>Experience:</strong> {selectedCandidate.experience} years</p>
              <p><strong>Location:</strong> {selectedCandidate.location}</p>
              <p><strong>Availability:</strong> {selectedCandidate.availability}</p>
              <p><strong>Skills:</strong> {selectedCandidate.skills}</p>
              <button
                onClick={() => setSelectedCandidate(null)}
                className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Close Profile
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
