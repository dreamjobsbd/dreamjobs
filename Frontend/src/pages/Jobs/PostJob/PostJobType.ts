

// Define the shape of our form data
export interface FormData {
    companyName: string;
    jobTitle: string;
    category : string;
    jobDescription: string;
    responsibilities: string;
    skills: string;
    education: string;
    experience: string;
    salary: string;
    locationType : string;
    jobLocation : string;
    employmentStatus: string;
    gender : string,
    age : string,
    applicationProcess: string;
  }
  
  // Define the shape of our form fields
 export interface FormField {
    name: keyof FormData;
    label: string;
  }