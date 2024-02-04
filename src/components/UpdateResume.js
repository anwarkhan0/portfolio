import React, { useState, useEffect } from "react";

import resumeData from "../resumeData-bkp";

import UpdateNavbar from "./UpdateNavbar";
import "./updateResume.css";

const ResumeForm = () => {
  useEffect(() => {}, []);

  const [type, setType] = useState("p");
  const [formData, setFormData] = useState(resumeData);

  const [socialLinks, setSocialLinks] = useState(formData.socialLinks);

  const [education, setEducation] = useState(formData.education);

  const [work, setWork] = useState(formData.work);

  const [skills, setSkills] = useState(formData.skills);

  const [portfolio, setPortfolio] = useState(formData.portfolio);

  const [testimonials, setTestimonials] = useState(formData.testimonials);

  const handleDataChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSocialLinks = (e, i) => {
    setSocialLinks((prevArr) => {
      const updatedArr = [...prevArr];
      updatedArr[i][e.target.name] = e.target.value;
      return updatedArr;
    });
  };

  const handleEducation = (e, i) => {
    setEducation((prevArr) => {
      const updatedArr = [...prevArr];
      updatedArr[i][e.target.name] = e.target.value;
      return updatedArr;
    });
  };


  const handleWork = (e, i) => {
    setWork((prevArr) => {
      const updatedArr = [...prevArr];
      updatedArr[i][e.target.name] = e.target.value;
      return updatedArr;
    });
  };

  const handleSkills = (e, i) => {
    setSkills((prevArr) => {
      const updatedArr = [...prevArr];
      updatedArr[i][e.target.name] = e.target.value;
      return updatedArr;
    });
  };

  const handlePortfolio = (e, i) => {
    setPortfolio((prevArr) => {
      const updatedArr = [...prevArr];
      updatedArr[i][e.target.name] = e.target.value;
      return updatedArr;
    });
  };

  const handleTestimonials = (e, i) => {
    setTestimonials((prevArr) => {
      const updatedArr = [...prevArr];
      updatedArr[i][e.target.name] = e.target.value;
      return updatedArr;
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send data to the server
    console.log("Form submitted with data:", formData);
    const jsonStr = JSON.stringify(formData, null, 2); // Indent for readability
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "resumeData.json";
    link.click();
    alert('data submitted')
  };

  let socialLinksBlock = socialLinks.map((el, i) => {
    return (
      <label className="block mb-4">
        <span className="text-gray-700">Link No. {i + 1}:</span>
        <input
          type="text"
          value={el.name}
          name="name"
          onChange={(e) => handleSocialLinks(e, i)}
        />
        <input
          type="text"
          name="url"
          value={el.url}
          onChange={(e) => handleSocialLinks(e, i)}
        />
        <input
          type="text"
          value={el.className}
          name="className"
          onChange={(e) => handleSocialLinks(e, i)}
        />
        
      </label>
    );
  });

  let educationBlock = education.map((el, i) => {
    return (
      <label className="block mb-4">
        <span className="text-gray-700">{el.UniversityName}:</span>
        <input
          type="text"
          name="specialization"
          value={el.specialization}
          onChange={(e) => handleEducation(e, i)}
        />
        <input
          type="text"
          name="MonthOfPassing"
          value={el.MonthOfPassing}
          onChange={(e) => handleEducation(e, i)}
        />
        <input
          type="text"
          name="YearOfPassing"
          value={el.YearOfPassing}
          onChange={(e) => handleEducation(e, i)}
        />
      </label>
    );
  });

  let workBlock = work.map((el, i) => {
    return (
      <label className="block mb-4">
        <span className="text-gray-700">{el.CompanyName}:</span>
        <input
          type="text"
          name="specialization"
          value={el.specialization}
          onChange={(e) => handleWork(e, i)}
        />
        <input
          type="text"
          name="MonthOfLeaving"
          value={el.MonthOfLeaving}
          onChange={(e) => handleWork(e, i)}
        />
        <input
          type="text"
          name="YearOfLeaving"
          value={el.YearOfLeaving}
          onChange={(e) => handleWork(e, i)}
        />
        <textarea
          type="text"
          name="Achievements"
          value={el.Achievements}
          onChange={(e) => handleWork(e, i)}
        />
      </label>
    );
  });

  let skillsBlock = skills.map((el, i) => {
    return (
      <label className="block mb-4">
        <span className="text-gray-700">{el.skillname}:</span>
        <input type="text" value={el.skillname} name="skillname" onChange={(e) => handleSkills(e, i)} />
      </label>
    );
  });

  let portfolioBlock = portfolio.map((el, i) => {
    return (
      <label className="block mb-4">
        <span className="text-gray-700">{el.name}:</span>
        <input type="text" value={el.name} name="name" onChange={(e) => handlePortfolio(e, i)} />
        <input type="text" value={el.imgurl} name="imgurl" onChange={(e) => handlePortfolio(e, i)} />
        <textarea
          type="text"
          name="description"
          value={el.description}
          onChange={(e) => handlePortfolio(e, i)}
        />
      </label>
    );
  });

  let testmonialsBlock = testimonials.map((el, i) => {
    return (
      <label className="block mb-4">
        <span className="text-gray-700">{el.name}:</span>
        <input type="text" value={el.name} name="name" onChange={(e)=> handleTestimonials(e, i)} />
        <textarea
          type="text"
          name="description"
          value={el.description}
          onChange={(e)=> handleTestimonials(e, i)}
        />
      </label>
    );
  });

  

  if (type === "p") {
    return (
      <form onSubmit={handleSubmit} className="">
       <UpdateNavbar type={type} setType={setType} />
    
        <h4>Personal Info</h4>

        <label className="block mb-4">
          <span className="text-gray-700">Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleDataChange}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Role:</span>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleDataChange}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Role Description:</span>
          <textarea
            type="text"
            name="roleDescription"
            value={formData.roleDescription}
            onChange={handleDataChange}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Whatsapp:</span>
          <input
            type="text"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleDataChange}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Linkedin:</span>
          <input
            type="text"
            name="linkedinId"
            value={formData.linkedinId}
            onChange={handleDataChange}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Website:</span>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleDataChange}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Address:</span>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleDataChange}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Email:</span>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleDataChange}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">About Me:</span>
          <textarea
            type="text"
            name="aboutme"
            value={formData.aboutme}
            onChange={handleDataChange}
          />
        </label>

        {/* Add more fields as needed */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Update Resume
        </button>
      </form>
    );
  } else if (type === "sl") {
    return (
      <form onSubmit={handleSubmit} className="">
       <UpdateNavbar type={type} setType={setType} />

        <h4>Social Links</h4>

        {socialLinksBlock}

        {/* Add more fields as needed */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Update Resume
        </button>
      </form>
    );
  } else if (type === "e") {
    return (
      <form onSubmit={handleSubmit} className="">
            <UpdateNavbar type={type} setType={setType} />
        <h4>Education</h4>

        {educationBlock}

        {/* Add more fields as needed */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Update Resume
        </button>
      </form>
    );
  } else if (type === "w") {
    return (
      <form onSubmit={handleSubmit} className="">
           <UpdateNavbar type={type} setType={setType} />

        <h4>Work</h4>

        {workBlock}

        {/* Add more fields as needed */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Update Resume
        </button>
      </form>
    );
  } else if (type === "s") {
    return (
      <form onSubmit={handleSubmit} className="">
            <UpdateNavbar type={type} setType={setType} />

        <h4>Skills</h4>

        {skillsBlock}

        {/* Add more fields as needed */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Update Resume
        </button>
      </form>
    );
  } else if (type === "pf") {
    return (
      <form onSubmit={handleSubmit} className="">
            <UpdateNavbar type={type} setType={setType} />

        <h4>Portfolio</h4>

        {portfolioBlock}

        {/* Add more fields as needed */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Update Resume
        </button>
      </form>
    );
  } else if (type === "t") {
    return (
      <form onSubmit={handleSubmit} className="">
           <UpdateNavbar type={type} setType={setType} />

        <h4>Testimonials</h4>

        {testmonialsBlock}

        
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Update Resume
        </button>
      </form>
    );
  }
};

export default ResumeForm;
