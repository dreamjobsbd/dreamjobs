

export interface JobType {
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

// Updated interface for the state
export interface JobsState {
  isLoading: boolean;
  jobs: JobType[] | null;
  error: string | null;
  searchTerm: string;
}
