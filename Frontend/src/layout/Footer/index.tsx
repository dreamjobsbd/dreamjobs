import { Link } from "react-router-dom";

//icons
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-20 px-4">
            {/* Brand details section */}
            <div className="text-center md:text-left">
              <Link to={`/`} className="text-2xl font-bold">
                Dreamjobs
              </Link>
              <p className="my-4">
                DreamJobs connects people with careers that match their passions
                and aspirations. Our mission is to make finding your dream job
                accessible and inspiring. Start your journey with us, where work
                meets ambition!
              </p>
              <div className="space-x-2">
                <button className="bg-white text-black rounded px-4 py-2 font-medium">
                  Google Play
                </button>
                <button className="bg-white text-black rounded px-4 py-2 font-medium">
                  App Store
                </button>
              </div>
            </div>

            {/* Job Seekers section */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-4">Job Seekers</h3>
              <div className="space-y-2">
                {[
                  {
                    title: "Create Acccount",
                    link: "https://dreamjobs.vercel.app/register",
                  },
                  { title: "List of Features", link: "/" },
                  { title: "Message Us", link: "/" },
                  { title: "Motivation Words", link: "/" },
                  { title: "FAQ", link: "/" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block hover:underline"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Recruiters section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">Recruiters</h3>
              <div className="space-y-2">
                {[
                  { title: "Create Account", link: "/" },
                  { title: "Post A Job", link: "/" },
                  { title: "Services", link: "/" },
                  { title: "Refund and return policy", link: "/" },
                  { title: "FAQ", link: "/" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block hover:underline"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact us section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p>Block A, House A6-A7, Main Road, Bansree, Dhaka 1229</p>
                <p>Email: dremjobs@gmail.com</p>
              </div>
              <div className="mt-4 relative">
                <input
                  type="text"
                  className="w-full h-12 px-4 rounded-md outline-none text-black"
                />
                <button className="absolute right-1 top-1 bg-gray-900 w-10 h-10 flex items-center justify-center rounded">
                  <SiMinutemailer className="text-white text-2xl" />
                </button>
              </div>
            </div>
          </div>

          <hr className="mx-4  border-white" />

          <div className="flex flex-col md:flex-row justify-between items-center py-4 px-4">
            <p>@2024 dreamjobs. All rights reserved</p>
            <ul className="flex space-x-2 mt-4 md:mt-0">
              <li className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                <Link
                  to="https://www.linkedin.com/company/dreamjobsbd"
                  target="blank"
                >
                  <FaLinkedin className="text-[#0A66C2]" />
                </Link>
              </li>

              <li className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                <Link to="https://www.facebook.com/bd.dreamjob" target="blank">
                  <FaFacebookF className="text-[#0866FF]" />
                </Link>
              </li>

              <li className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                <Link
                  to="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRvwLsKntnJmHNsPPPjvMZWxrqdhFvGLWxQRqBNsRSFWDVSwsMGBJTDDsPXKJJfSHVpHzZQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdOutlineMail className="text-[#C5221F]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
