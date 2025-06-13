// "use client";

// import React, { useState } from "react";
// import { Dropdown, MultiSelect } from "@/components/ui/CustomFilters";
// // Add at the top of your file
// const matchesAvailability = (filter: string, candidateAvailability: string) => {
//     const avail = candidateAvailability.toLowerCase();
  
//     if (filter === "") return true;
  
//     if (filter === "Immediately") {
//       return avail.includes("immediate") || avail.includes("now") || avail.includes("available");
//     }
  
//     if (filter === "1 month") {
//       return (
//         avail.includes("week") ||
//         avail.includes("1 week") ||
//         avail.includes("2 weeks") ||
//         avail.includes("3 weeks") ||
//         avail.includes("4 weeks") ||
//         avail.includes("1 month")
//       );
//     }
  
//     if (filter === "3 months") {
//       return (
//         avail.includes("1 month") ||
//         avail.includes("2 months") ||
//         avail.includes("3 months")
//       );
//     }
  
//     return false;
//   };
  
// const candidateData = [
//   {
//     name: "A.K.",
//     role: "Senior Data Scientist",
//     experience: "6 years",
//     skills: ["Python", "NLP", "AWS", "Kubernetes"],
//     location: "Remote preferred",
//     availability: "2 weeks",
//     summary:
//       "Proven experience building and deploying NLP models in production. Worked across cross-functional teams to drive ML initiatives. Strong background in MLOps and cloud-based ML infrastructure.",
//   },
// ];

// const SearchCandidatesPage: React.FC = () => {
//   const [filters, setFilters] = useState({
//     role: "",
//     experience: "",
//     location: "",
//     availability: "",
//     skills: [] as string[],
//   });

//   const experienceRangeMatch = (experienceStr: string) => {
//     const years = parseInt(experienceStr);
//     if (filters.experience === "2–4 yrs") return years >= 2 && years <= 4;
//     if (filters.experience === "5–8 yrs") return years >= 5 && years <= 8;
//     if (filters.experience === "9+ yrs") return years >= 9;
//     return true;
//   };

//   const filteredCandidates = candidateData.filter((candidate) => {
//     return (
//         (filters.role === "" || candidate.role.toLowerCase().includes(filters.role.toLowerCase()))&&
//         (filters.location === "" || candidate.location.includes(filters.location)) &&
//         matchesAvailability(filters.availability, candidate.availability) &&
//         experienceRangeMatch(candidate.experience) &&
//         (filters.skills.length === 0 ||
//         filters.skills.every((skill) => candidate.skills.includes(skill)))
//     );
//   });

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Search Candidates</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
//         <Dropdown
//           label="Role"
//           options={["Data Scientist", "ML Engineer", "Backend Developer"]}
//           value={filters.role}
//           onChange={(value) => setFilters({ ...filters, role: value })}
//         />
//         <Dropdown
//           label="Experience Level"
//           options={["2–4 yrs", "5–8 yrs", "9+ yrs"]}
//           value={filters.experience}
//           onChange={(value) => setFilters({ ...filters, experience: value })}
//         />
//         <Dropdown
//           label="Location Preference"
//           options={["Remote", "Hybrid", "Onsite"]}
//           value={filters.location}
//           onChange={(value) => setFilters({ ...filters, location: value })}
//         />
//         <Dropdown
//           label="Availability"
//           options={["Immediately", "1 month", "3 months"]}
//           value={filters.availability}
//           onChange={(value) => setFilters({ ...filters, availability: value })}
//         />
//         <MultiSelect
//           label="Skills"
//           options={["Python", "TensorFlow", "Kubernetes", "SQL", "React", "NLP", "AWS"]}
//           selected={filters.skills}
//           onChange={(value) => setFilters({ ...filters, skills: value })}
//         />
//       </div>

//       <div className="grid grid-cols-1 gap-6">
//         {filteredCandidates.length === 0 ? (
//           <p className="text-gray-600">
//             No candidates matched your criteria. Try adjusting your filters or request specific talent.
//           </p>
//         ) : (
//           filteredCandidates.map((candidate, index) => (
//             <div
//               key={index}
//               className="border border-gray-300 rounded-lg p-4 shadow-sm"
//             >
//               <h2 className="text-xl font-semibold">{candidate.name}</h2>
//               <p className="text-sm text-gray-600">{candidate.role}</p>
//               <p className="text-sm">Experience: {candidate.experience}</p>
//               <p className="text-sm">Skills: {candidate.skills.join(", ")}</p>
//               <p className="text-sm">Location: {candidate.location}</p>
//               <p className="text-sm">Availability: {candidate.availability}</p>
//               <p className="text-sm mt-2">{candidate.summary}</p>
//               <div className="mt-4 flex gap-4">
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded">
//                   Request Full Profile
//                 </button>
//                 <button className="bg-green-500 text-white px-4 py-2 rounded">
//                   Schedule Interview
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchCandidatesPage;
'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/header'; // Update if path differs
import Footer from '@/components/ui/footer'; // Update if path differs

const dummyCandidates = [
  // {
  //   id: 1,
  //   name: 'John Doe',
  //   role: 'Data Scientist',
  //   experience: '5 years',
  //   location: 'Remote',
  //   availability: 'Immediately',
  //   skills: ['Python', 'TensorFlow'],
  // },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'ML Engineer',
    experience: '3 years',
    location: 'Hybrid',
    availability: '1 month',
    skills: ['Kubernetes', 'React'],
  },
];

export default function SearchCandidatesPage() {
  const [filters, setFilters] = useState({
    role: '',
    experience: '',
    location: '',
    availability: '',
    skills: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredCandidates = dummyCandidates.filter((candidate) => {
    return (
      (filters.role === '' || candidate.role === filters.role) &&
      (filters.experience === '' || candidate.experience.includes(filters.experience)) &&
      (filters.location === '' || candidate.location === filters.location) &&
      (filters.availability === '' || candidate.availability.includes(filters.availability)) &&
      (filters.skills === '' || candidate.skills.includes(filters.skills))
    );
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header at top */}
      <Header />

      {/* Main section centered */}
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-5xl w-full">
          <h2 className="text-3xl font-semibold mb-6 text-center">Search Candidates</h2>

          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <select name="role" value={filters.role} onChange={handleChange} className="p-2 border rounded">
              <option value="">Select Role</option>
              <option value="Data Scientist">Data Scientist</option>
              <option value="ML Engineer">ML Engineer</option>
              <option value="Backend Developer">Backend Developer</option>
            </select>

            <select name="experience" value={filters.experience} onChange={handleChange} className="p-2 border rounded">
              <option value="">Experience</option>
              <option value="2">2+ yrs</option>
              <option value="5">5+ yrs</option>
              <option value="9">9+ yrs</option>
            </select>

            <select name="location" value={filters.location} onChange={handleChange} className="p-2 border rounded">
              <option value="">Location</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Onsite">Onsite</option>
            </select>

            <select name="availability" value={filters.availability} onChange={handleChange} className="p-2 border rounded">
              <option value="">Availability</option>
              <option value="Immediately">Immediately</option>
              <option value="1 month">1 month</option>
              <option value="3 months">3 months</option>
            </select>

            <input
              type="text"
              name="skills"
              placeholder="Search Skill (e.g., Python)"
              value={filters.skills}
              onChange={handleChange}
              className="p-2 border rounded col-span-full sm:col-span-2"
            />
          </div>

          {/* Candidate Cards */}
          <div className="grid gap-6">
            {filteredCandidates.map((candidate) => (
              <div key={candidate.id} className="border rounded p-4 shadow-md">
                <h3 className="text-xl font-bold">{candidate.name}</h3>
                <p className="text-sm">Role: {candidate.role}</p>
                <p className="text-sm">Experience: {candidate.experience}</p>
                <p className="text-sm">Location: {candidate.location}</p>
                <p className="text-sm">Availability: {candidate.availability}</p>
                <p className="text-sm">Skills: {candidate.skills.join(', ')}</p>
                <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Contact</button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}
