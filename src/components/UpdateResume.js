import React, { useState } from 'react';

import resumeData from '../resumeData';

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    name: resumeData.name,
    role: resumeData.role,
    linkedinId: resumeData.linkedinId,
    email: resumeData.email,
    whatsapp: resumeData.whatsapp,
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send data to the server
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="d-flex justify-content">
      <form onSubmit={handleSubmit} className="">
        <label className="block mb-4">
          <span className="text-gray-700">Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input mt-1 block w-full"
          />
        </label>

        {/* Add more fields as needed */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default ResumeForm;

