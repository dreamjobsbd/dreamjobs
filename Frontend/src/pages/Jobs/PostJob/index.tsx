import React, { useState, ChangeEvent, FormEvent } from "react";
import { api } from "../../../services/apiService";

//types
import { FormData, FormField } from "./PostJobType";

const PostJob: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    jobTitle: "",
    jobDescription: "",
    responsibilities: "",
    skills: "",
    education: "",
    experience: "",
    salary: "",
    employmentStatus: "",
    applicationProcess: ""
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const formFields: FormField[] = [
    { name: "companyName", label: "Company Name" },
    { name: "jobTitle", label: "Job Title" },
    { name: "jobDescription", label: "Job Description" },
    { name: "responsibilities", label: "Responsibilities" },
    { name: "skills", label: "Skills" },
    { name: "education", label: "Education" },
    { name: "experience", label: "Experience" },
    { name: "salary", label: "Salary" },
    { name: "employmentStatus", label: "Employment Status" },
    { name: "applicationProcess", label: "Application Process" }
  ];


  const PostAJob = async (e: FormEvent) => {
    e.preventDefault();
    const res = await api.post("/job/post-job", { ...formData })
    if (res.status === 200) alert("job post successfully")
  }

  return (
    <>
      <div className="flex justify-center items-center h-auto my-6">
        <form onSubmit={PostAJob} className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Post A Job</h2>
          {formFields.map((field) => (
            <div className="mb-3" key={field.name}>
              <label htmlFor={field.name}  className="block text-gray-700 font-medium mb-2" >{field.label}: </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                placeholder={`Enter ${field.label.toLowerCase()}`}
                required
              />
            </div>
          ))}
          <button type="submit" className="mt-6 w-full bg-[#0266FF] text-white font-semibold py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color">post job</button>
        </form>
      </div>
    </>

  );
};

export default PostJob;