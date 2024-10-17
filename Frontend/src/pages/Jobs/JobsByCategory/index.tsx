
//packages
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

//icons
import { Briefcase, MapPin, Clock , Banknote } from 'lucide-react';

//api 
import { api } from '../../../services/apiService';

const JobsByCategory = () => {

  const [categoryJobs, setCategoryJobs] = useState([]);
  const { slug } = useParams();

  const FetchJobsByCategory = async () => {
    try {
      const res = await api.get(`/job/category/${slug}`);
      if (res.status === 200) setCategoryJobs(res.data.payload.jobsByCategory);
    } catch (error : any) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchJobsByCategory();
  }, []);

  if (!categoryJobs?.length) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-gray-600 text-2xl">
        <h2>No jobs available under this category</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="mx-auto px-4 max-w-5xl">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Available Jobs 
        </h1>
        
        <div className="space-y-4">
          {categoryJobs.map((job) => {
            const { _id, jobTitle, companyName, jobLocation, salary } = job;
            return (
              <Link 
                key={_id} 
                to={`/job/${_id}`}
                className="block"
              >
                <div className="bg-white rounded-lg p-6 border border-gray-200 transition-all duration-300 hover:shadow-lg">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-600 mb-1 hover:text-blue-700">
                        {jobTitle}
                      </h3>
                      <div className="flex items-center text-gray-700">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span className="font-medium">{companyName}</span>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
                      <div className="flex flex-wrap gap-4">
                        {jobLocation && (
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{jobLocation}</span>
                          </div>
                        )}
                        
                        {salary && (
                          <div className="flex items-center text-gray-600">
                            <Banknote className="w-4 h-4 mr-2" />
                            <span>{salary}</span>
                          </div>
                        )}
                        
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>Deadline: 25 Oct 2024</span>
                        </div>
                      </div>
                      <span className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 md:ml-4">
                        View Details
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobsByCategory;