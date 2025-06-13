// 'use client';
// import { useState } from 'react';

// const roles = ['Data Scientist', 'ML Engineer', 'Backend Developer'];
// const experience = ['2–4 yrs', '5–8 yrs', '9+ yrs'];
// const locations = ['Remote', 'Hybrid', 'Onsite'];
// const availability = ['Immediately', '1 month', '3 months'];
// const allSkills = ['Python', 'TensorFlow', 'Kubernetes', 'SQL', 'React'];

// export default function RequestTalentPage() {
//   const [formData, setFormData] = useState({
//     role: '',
//     experience: '',
//     location: '',
//     availability: '',
//     skills: [] as string[],
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSkillToggle = (skill: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       skills: prev.skills.includes(skill)
//         ? prev.skills.filter((s) => s !== skill)
//         : [...prev.skills, skill],
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Request Talent Submitted:', formData);
//     // You can POST this data to your FastAPI backend here
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">Request Talent</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded">
//           <option value="">Select Role</option>
//           {roles.map((role) => (
//             <option key={role}>{role}</option>
//           ))}
//         </select>

//         <select name="experience" value={formData.experience} onChange={handleChange} className="w-full p-2 border rounded">
//           <option value="">Experience Level</option>
//           {experience.map((exp) => (
//             <option key={exp}>{exp}</option>
//           ))}
//         </select>

//         <select name="location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded">
//           <option value="">Location Preference</option>
//           {locations.map((loc) => (
//             <option key={loc}>{loc}</option>
//           ))}
//         </select>

//         <select name="availability" value={formData.availability} onChange={handleChange} className="w-full p-2 border rounded">
//           <option value="">Availability</option>
//           {availability.map((av) => (
//             <option key={av}>{av}</option>
//           ))}
//         </select>

//         <div>
//           <p className="font-medium">Select Skills:</p>
//           <div className="flex flex-wrap gap-2 mt-2">
//             {allSkills.map((skill) => (
//               <label key={skill} className="flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   checked={formData.skills.includes(skill)}
//                   onChange={() => handleSkillToggle(skill)}
//                 />
//                 <span>{skill}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           Submit Request
//         </button>
//       </form>
//     </div>
//   );
// }
'use client';

import React, { useState } from "react";
import Header from "@/components/ui/header"; // Adjust path as needed
import Footer from "@/components/ui/footer"; // Adjust path as needed

const roles = ['Data Scientist', 'ML Engineer', 'Backend Developer'];
const experience = ['2–4 yrs', '5–8 yrs', '9+ yrs'];
const locations = ['Remote', 'Hybrid', 'Onsite'];
const availability = ['Immediately', '1 month', '3 months'];
const allSkills = ['Python', 'TensorFlow', 'Kubernetes', 'SQL', 'React'];

export default function RequestTalentPage() {
  const [formData, setFormData] = useState({
    role: '',
    experience: '',
    location: '',
    availability: '',
    skills: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillToggle = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Request Talent Submitted:', formData);
    // You can POST this data to your backend
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Header */}
      <Header />

      {/* Main content in the center */}
      <main className="flex-grow px-4 py-12 max-w-3xl mx-auto w-full">
        <h2 className="text-3xl font-semibold mb-6 text-center">Request Talent</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Select Role</option>
            {roles.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>

          <select name="experience" value={formData.experience} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Experience Level</option>
            {experience.map((exp) => (
              <option key={exp}>{exp}</option>
            ))}
          </select>

          <select name="location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Location Preference</option>
            {locations.map((loc) => (
              <option key={loc}>{loc}</option>
            ))}
          </select>

          <select name="availability" value={formData.availability} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Availability</option>
            {availability.map((av) => (
              <option key={av}>{av}</option>
            ))}
          </select>

          <div>
            <p className="font-medium mb-2">Select Skills:</p>
            <div className="flex flex-wrap gap-4">
              {allSkills.map((skill) => (
                <label key={skill} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.skills.includes(skill)}
                    onChange={() => handleSkillToggle(skill)}
                  />
                  <span>{skill}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Submit Request
          </button>
        </form>
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}
