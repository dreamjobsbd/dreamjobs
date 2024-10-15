
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();


  const handleSearch = () => {
    if(inputValue.length <= 3){
      return alert("please type a valid job name")
    }
    navigate(`/jobs?search=${encodeURIComponent(inputValue)}`);
  };

  const handleKeyPress = (e : React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto mt-[2rem] px-4">
        <div className="text-center">
          <h2 className="text-[1.8rem] md:text-4xl font-bold text-gray-800 mb-8 font-googlefont">
            Find and become a <br /> <span className="text-primary-color">professional</span> with passion
          </h2>
          <div className="flex justify-center items-center max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row w-full">
              <input
                type="text"
                placeholder="search for jobs..."
                className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 sm:border-r-0 focus:outline-none text-md mb-2 sm:mb-0"
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
                onKeyUp={handleKeyPress}
              />
              <button 
                className="w-full sm:w-1/4 bg-primary-color text-white font-semibold py-2 px-6 hover:bg-blue-600 transition duration-300 text-md"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;