

// Define the shape of our form data
export interface FormData {
  companyName: string;
  jobTitle: string;
  salary: string;
  category : string;
  applicationProcess: string;
  jobDescription: string;
  education: string;
  skills: string;
  responsibilities: string;
  experience: string;
  benefits: string;
  employmentStatus: string;
  locationType : string;
  jobLocation : string;
  gender : string,
  age : string,
  vacancy: string;
  source : string;
  deadline : string,
  optionalInfo : string

  }
  
  // Define the shape of our form fields
 export interface FormField {
    name: keyof FormData;
    label: string;
  }