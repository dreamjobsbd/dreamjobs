
//packages
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppSelector } from "../../app/hook";


const Header = () => {

  const { user } = useAppSelector((state) => state.auth);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="text-black py-5 px-4" style={{ borderBottom: " 1px solid #e4e5e7" }}>
        <div className="container mx-auto" >
          <div className="flex flex-wrap justify-between items-center">
            {/* Logo column */}
            <div className="flex-1 md:flex-none">
              <Link
                to={`/`}
                className="text-3xl font-bold transition duration-300"
              >
                Flexywork
                <span className="text-primary-color text-[2rem]">.</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-[#0266FF] focus:outline-none"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Navigation links and buttons */}
            <div
              className={`w-full md:w-auto md:flex md:flex-grow md:items-center md:justify-between  ${isMenuOpen ? "block" : "hidden"
                }`}
            >
              <nav className="flex flex-col md:flex-row md:justify-center md:flex-grow md:items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
                <Link
                  to={`/features`}
                  className="hover:text-primary-color transition duration-300 font-semibold"
                >
                  Features
                </Link>

                {user !== null && user?.isAdmin === true &&
                  <Link
                    to={`/post-job`}
                    className="hover:text-primary-color transition duration-300 font-semibold"
                  >
                    Post Job
                  </Link>
                }

                <Link
                  to={`/about`}
                  className="hover:text-primary-color transition duration-300 font-semibold"
                >
                  About us
                </Link>
              </nav>
              <div className="flex flex-col md:flex-row md:items-center mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-2">
                <Link
                  onClick={toggleMenu}
                  to={user ? `/dashboard` : `/login`}
                  className="ring-1 ring-[#0266FF] text-black py-2 px-4 rounded-sm transition duration-300 text-center"
                >
                  {user ? `Dashboard` : `Login`}
                </Link>

               {!user && <Link
                  to={`/register`}
                  onClick={toggleMenu}
                  className="bg-[#0266FF] text-white py-2 px-4 rounded-sm transition duration-300 text-center"
                >
                  Register
                </Link>}

              </div>
            </div>
          </div>
        </div>
      </header>


    </>
  )
}

export default Header