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
    { name: "companyName", label: "Company Name"},
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


  const PostAJob = async (e : FormEvent) => {
    e.preventDefault();
    const res = await api.post("/job/post-job",{...formData})
    if(res.status === 200) alert("job post successfully")
  }

  return (
    <form style={{textAlign:"center"}} onSubmit={PostAJob}>
      {formFields.map((field) => (
        <div className="mb-3" key={field.name}>
          <label htmlFor={field.name}>{field.label}: </label>
          <input
            type="text"
            className="form-control"
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleInputChange}
            placeholder={`Enter ${field.label.toLowerCase()}`}
            required
          />
        </div>
      ))}
      <button type="submit">post a job</button>
    </form>
  );
};

export default PostJob;