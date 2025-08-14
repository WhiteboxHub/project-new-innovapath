// new_Innova-path\app\talent-showcase\request-talent\page.tsx
'use client';

import React, { useState } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const roles = ['ML Engineer', 'AI/ML Engineer', 'Deep Learning Engineer', 'MLOps Engineer'];
const experience = ['2–4 yrs', '5–8 yrs', '9+ yrs'];
const locations = ['Remote', 'Hybrid', 'Onsite'];
const availability = ['Immediately', '1 month', '3 months'];
const allSkills = ['Python', 'TensorFlow', 'Kubernetes', 'NLP', 'Generative AI', 'Rag & Agent'];

export default function RequestTalentPage() {
  const [formData, setFormData] = useState({
    role: '',
    experience: '',
    location: '',
    availability: '',
    skills: [] as string[],
  });

  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/request-talent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Server response:', result);
      alert(result.message);
      setFormData({ role: '', experience: '', location: '', availability: '', skills: [] });
    } catch (error) {
      console.error('Error submitting request:', error);
      alert('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow px-4 py-20 max-w-3xl mx-auto w-full mt-9">
        <h2 className="text-3xl font-semibold mb-6 text-center">Request Talent</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Select Role</option>
            {roles.map((role) => <option key={role}>{role}</option>)}
          </select>

          <select name="experience" value={formData.experience} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Experience Level</option>
            {experience.map((exp) => <option key={exp}>{exp}</option>)}
          </select>

          <select name="location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Location Preference</option>
            {locations.map((loc) => <option key={loc}>{loc}</option>)}
          </select>

          <select name="availability" value={formData.availability} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Availability</option>
            {availability.map((av) => <option key={av}>{av}</option>)}
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

          <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full px-6 py-2 rounded-xl text-white ${loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {loading ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
