import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <div className="py-8 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Job Search Section */}
          <div className="flex flex-col md:flex-row items-center space-x-6 bg-white shadow-md rounded-lg p-6">
            <img src="jobsearch.webp" alt="Job search illustration" className="w-full md:w-[25rem] rounded-md mb-6 md:mb-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Explore Diverse Job Categories</h2>
              <p className="text-gray-600">
                Discover opportunities across 50+ job categories. We update daily, posting 10 jobs per category to keep you connected with the latest openings.
              </p>
              <Link to={`/`}>
                <button className="mt-4 px-4 py-2 bg-primary-color text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                  Search your dream jobs
                </button>
              </Link>
            </div>
          </div>
          {/* Portfolio Section */}
          <div className="flex flex-col md:flex-row items-center space-x-6 bg-white shadow-md rounded-lg p-6">
            <img src="portfolio.jpg" alt="Portfolio showcase" className="w-full md:w-[25rem] rounded-md mb-6 md:mb-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Build Your Portfolio</h2>
              <p className="text-gray-600">
                In today's competitive market, a professional portfolio is essential. Secure your portfolio website with us, completely free of charge.
              </p>
                <button onClick={()=>alert("this feauter will be come soon")} className="mt-4 px-4 py-2 bg-primary-color text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                  Get Portfolio website for Free
                </button>
            </div>
          </div>
          {/* Job Posting Section */}
          <div className="flex flex-col md:flex-row items-center space-x-6 bg-white shadow-md rounded-lg p-6">
            <img src="jobpost.webp" alt="Job posting illustration" className="w-full md:w-[25rem] rounded-md mb-6 md:mb-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Daily Job Postings</h2>
              <p className="text-gray-600">
                Our platform offers a wide range of job postings, updated every day. Stay connected with over 50 categories to find your ideal role.
              </p>
                <button  onClick={()=>alert("this feauter will be come soon")} className="mt-4 px-4 py-2 bg-primary-color text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                  Post A Job
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;