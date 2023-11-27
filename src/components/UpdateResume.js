import React, { useState } from "react";

import resumeData from "../resumeData";

import "./updateResume.css";

const ResumeForm = () => {
  const [type, setType] = useState("p");
  const [formData, setFormData] = useState(resumeData);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send data to the server
    console.log("Form submitted with data:", formData);
  };

  let socialLinks = resumeData.socialLinks.map((el) => {
    return <label className="block mb-4">
        <span className="text-gray-700">{el.name}:</span>
        <input type="hidden" value={el.name} name={el.name} />
        <input type="text" name="url" value={el.url} onChange={handleChange} />
      </label>;
  });

  let education = resumeData.education.map((el) => {
    return <label className="block mb-4">
        <span className="text-gray-700">{el.UniversityName}:</span>
        <input type="hidden" value={el.UniversityName} name={el.UniversityName} />
        <input type="text" name="specializatoin" value={el.specialization} onChange={handleChange} />
        <input type="text" name="MonthOfPassing" value={el.MonthOfPassing} onChange={handleChange} />
        <input type="text" name="YearOfPassing" value={el.YearOfPassing} onChange={handleChange} />
      </label>;
  });

  let work = resumeData.work.map((el) => {
    return <label className="block mb-4">
        <span className="text-gray-700">{el.CompanyName}:</span>
        <input type="hidden" value={el.CompanyName} name={el.CompanyName} />
        <input type="text" name="specializatoin" value={el.specialization} onChange={handleChange} />
        <input type="text" name="MonthOfLeaving" value={el.MonthOfLeaving} onChange={handleChange} />
        <input type="text" name="YearOfLeaving" value={el.YearOfLeaving} onChange={handleChange} />
        <textarea type="text" name="Achievements" value={el.Achievements} onChange={handleChange} />
      </label>;
  });

  let skills = resumeData.skills.map( el => {
    return <label className="block mb-4">
        <span className="text-gray-700">{el.skillname}:</span>
        <input type="text" value={el.skillname} name={el.skillname} />
      </label>;
  })

  let testmonials = resumeData.testimonials.map((el) => {
    return <label className="block mb-4">
        <span className="text-gray-700">{el.name}:</span>
        <input type="hidden" value={el.name} name={el.name} />
        <input type="text" value={el.name} name={el.name} />
        <textarea type="text" name="description" value={el.description} onChange={handleChange} />
      </label>;
  });



  if (type === "p") {
    return (
      <form onSubmit={handleSubmit} className="">
        <button onClick={() => setType("p")}>Personal Info</button>
        <button onClick={() => setType("sl")}>Social Links</button>
        <button onClick={() => setType("e")}>Education</button>
        <button onClick={() => setType("w")}>Work</button>
        <button onClick={() => setType("s")}>Skills</button>
        <button onClick={() => setType("pf")}>Portfolio</button>
        <button onClick={() => setType("t")}>Testimonials</button>
       
        <h4>Personal Info</h4>
        
        <label className="block mb-4">
          <span className="text-gray-700">Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Role:</span>
          <input
            type="text"
            name="name"
            value={formData.role}
            onChange={handleChange}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Whatsapp:</span>
          <input
            type="text"
            name="name"
            value={formData.whatsapp}
            onChange={handleChange}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Linkedin:</span>
          <input
            type="text"
            name="name"
            value={formData.linkedinId}
            onChange={handleChange}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Website:</span>
          <input
            type="text"
            name="name"
            value={formData.website}
            onChange={handleChange}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">About Me:</span>
          <textarea
            type="text"
            name="name"
            value={formData.aboutme}
            onChange={handleChange}
          />
        </label>

        {/* Add more fields as needed */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    );
  } else if(type === 'sl') {
    return (
      <form onSubmit={handleSubmit} className="">
        <button onClick={() => setType("p")}>Personal Info</button>
        <button onClick={() => setType("sl")}>Social Links</button>
        <button onClick={() => setType("e")}>Education</button>
        <button onClick={() => setType("w")}>Work</button>
        <button onClick={() => setType("s")}>Skills</button>
        <button onClick={() => setType("pf")}>Portfolio</button>
        <button onClick={() => setType("t")}>Testimonials</button>

        <h4>Social Links</h4>

        {socialLinks}
        

        {/* Add more fields as needed */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    );
  } else if(type === 'e') {
    return (
      <form onSubmit={handleSubmit} className="">
        <button onClick={() => setType("p")}>Personal Info</button>
        <button onClick={() => setType("sl")}>Social Links</button>
        <button onClick={() => setType("e")}>Education</button>
        <button onClick={() => setType("w")}>Work</button>
        <button onClick={() => setType("s")}>Skills</button>
        <button onClick={() => setType("pf")}>Portfolio</button>
        <button onClick={() => setType("t")}>Testimonials</button>

        <h4>Education</h4>
        
        {education}

        {/* Add more fields as needed */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    );
  } else if(type === 'w') {
    return (
      <form onSubmit={handleSubmit} className="">
        <button onClick={() => setType("p")}>Personal Info</button>
        <button onClick={() => setType("sl")}>Social Links</button>
        <button onClick={() => setType("e")}>Education</button>
        <button onClick={() => setType("w")}>Work</button>
        <button onClick={() => setType("s")}>Skills</button>
        <button onClick={() => setType("pf")}>Portfolio</button>
        <button onClick={() => setType("t")}>Testimonials</button>

        <h4>Work</h4>
        
        {work}

        {/* Add more fields as needed */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    );
  } else if(type === 's') {
    return (
      <form onSubmit={handleSubmit} className="">
        <button onClick={() => setType("p")}>Personal Info</button>
        <button onClick={() => setType("sl")}>Social Links</button>
        <button onClick={() => setType("e")}>Education</button>
        <button onClick={() => setType("w")}>Work</button>
        <button onClick={() => setType("s")}>Skills</button>
        <button onClick={() => setType("pf")}>Portfolio</button>
        <button onClick={() => setType("t")}>Testimonials</button>

        <h4>Skills</h4>
        

        {skills}

        {/* Add more fields as needed */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    );
  } else if(type === 'pf') {
    return (
      <form onSubmit={handleSubmit} className="">
        <button onClick={() => setType("p")}>Personal Info</button>
        <button onClick={() => setType("sl")}>Social Links</button>
        <button onClick={() => setType("e")}>Education</button>
        <button onClick={() => setType("w")}>Work</button>
        <button onClick={() => setType("s")}>Skills</button>
        <button onClick={() => setType("pf")}>Portfolio</button>
        <button onClick={() => setType("t")}>Testimonials</button>

        <h4>Portfolio</h4>
        

        {/* Add more fields as needed */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    );
  } else if(type === 't') {
    return (
      <form onSubmit={handleSubmit} className="">
        <button onClick={() => setType("p")}>Personal Info</button>
        <button onClick={() => setType("sl")}>Social Links</button>
        <button onClick={() => setType("e")}>Education</button>
        <button onClick={() => setType("w")}>Work</button>
        <button onClick={() => setType("s")}>Skills</button>
        <button onClick={() => setType("pf")}>Portfolio</button>
        <button onClick={() => setType("t")}>Testimonials</button>

        <h4>Testimonials</h4>
        

        { testmonials }

        {/* Add more fields as needed */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    );
  }
};

export default ResumeForm;
