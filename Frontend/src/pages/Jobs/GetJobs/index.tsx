
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hook';
import { GetJobs as fetchJobs, setSearchTerm } from '../../../feauters/JobsSlice'
import { useSearchParams, Link } from 'react-router-dom';

const GetJobs = () => {
  const { jobs, isLoading, error } = useAppSelector((state) => state.jobs);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

  
  
  useEffect(() => {
    if (!jobs) {
      dispatch(fetchJobs());
    }
    dispatch(setSearchTerm(searchTerm));
  }, [dispatch, jobs, searchTerm]);

  if (isLoading) {
    return <div>Loading jobs...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!jobs) {
    return <div>No jobs available.</div>;
  }

  const filteredJobs = jobs.filter(job => 
    job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
      {searchTerm && (
        <p className="mb-4">Showing results for: {searchTerm}</p>
      )}
      {filteredJobs.length === 0 ? (
        <p>No jobs found matching your search.</p>
      ) : (
        <ul className="space-y-4">
          {filteredJobs.map((job)=> {
            const {_id, companyName, jobTitle, salary, education,jobLocation} = job;
            
             return <Link key={_id} to={`/job/${_id}`} className=''> 
             <li key={_id} className="border p-4 rounded-md">
              <h3 className="text-xl font-semibold">{jobTitle}</h3>
              <p className="text-gray-600"><strong>{companyName}</strong> </p>
              <div className="flex">
              <p className='me-5'>Job Location: {jobLocation}</p>
              <p>salary : {salary}</p>
              </div>
              <p>Education: {education}</p>
            </li>
            </Link>
             
          })}

       
       
        </ul>
      )}
    </div>
  );
};

export default GetJobs;