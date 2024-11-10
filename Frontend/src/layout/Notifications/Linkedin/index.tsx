
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { X } from "lucide-react";

const LinkedinNotification = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show notification after 1 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`fixed bottom-20 right-6 transition-all duration-500 transform ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[200%] opacity-0'} z-10`}>
        
      <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-3 max-w-xs">
        <div className="flex items-center gap-3 pr-6">
          {/* LinkedIn Icon */}
          <div className="flex-shrink-0">
            <FaLinkedin className="text-blue-600 text-2xl" />
          </div>
          
          {/* Content */}
          <Link 
            to="https://www.linkedin.com/company/dreamjobsbd/"
            target="_blank"
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
          >
            Follow us on LinkedIn for updates
          </Link>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkedinNotification;