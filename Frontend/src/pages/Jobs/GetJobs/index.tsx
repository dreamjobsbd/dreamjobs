
import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../app/hook';
import { GetJobs as fetchJobs, setSearchTerm } from '../../../feauters/JobsSlice';
import { useSearchParams, Link } from 'react-router-dom';

const GetJobs: React.FC = () => {
  const { jobs, isLoading, error } = useAppSelector((state) => state.jobs);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';

  const params = useParams();

  console.log(params);
  

  useEffect(() => {
    if (!jobs) {
      dispatch(fetchJobs());
    }
    dispatch(setSearchTerm(searchTerm));
  }, [dispatch, jobs, searchTerm]);

  const filteredJobs = useMemo(() => {
    if (!jobs) return [];
    
    const search = searchTerm.toLowerCase();
    return jobs.filter(job => {
      const title = job.jobTitle.toLowerCase();
      
      // Check if the search term is at least 4 characters long
      if (search.length >= 4) {
        // Check if any 4-letter (or longer) substring of the search term matches the job title
        for (let i = 0; i <= search.length - 4; i++) {
          const substring = search.substr(i, 4);
          if (title.includes(substring)) {
            return true;
          }
        }
      }
      
      // If search term is less than 4 characters, fall back to simple inclusion check
      return title.includes(search);
    });
  }, [jobs, searchTerm]);

  if (isLoading) {
    return <div>Loading jobs...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!jobs) {
    return <div>No jobs available.</div>;
  }

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
          {filteredJobs.map((job) => {
            const { _id, companyName, jobTitle, salary, education, jobLocation } = job;
            return (
              <Link key={_id} to={`/job/${_id}`} className="">
                <li className="border p-4 rounded-md">
                  <h3 className="text-xl font-semibold">{jobTitle}</h3>
                  <p className="text-gray-600"><strong>{companyName}</strong></p>
                  <div className="flex">
                    <p className="me-5">Job Location: {jobLocation}</p>
                    <p>Salary: {salary}</p>
                  </div>
                  <p>Education: {education}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default GetJobs;

