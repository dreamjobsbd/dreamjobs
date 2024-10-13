

export interface JobType {
  _id : string,
  companyName : string,
  jobTitle : string,
  jobDescription : string,
  responsibilities : string,
  skills : string,
  Education : string,
  experience : string,
  salary : string,
  employmentStatus : string,
  category : string,
  applicationProcessType : string,
  applicationProcess : string,
  
}

// Updated interface for the state
export interface JobsState {
  isLoading: boolean;
  jobs: JobType[] | null;
  error: string | null;
  searchTerm: string;
}
