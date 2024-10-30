

import { Link } from "react-router-dom";
//css
// import "../css/Footer.css";

//icons
import {FaFacebookF,FaYoutube,FaTwitter,FaGoogle} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai"
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <>
   
   <footer className="bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-20 px-4">
          {/* Brand details section */}
          <div className="text-center md:text-left">
            <Link to={``} className="text-2xl font-bold">Dreamjobs</Link>
            <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni modi quo nostrum dolorum quae ullam rerum amet quis odit adipisicing elit.</p>
            <div className="space-x-2">
              <button className="bg-white text-black rounded px-4 py-2 font-medium">Google Play</button>
              <button className="bg-white text-black rounded px-4 py-2 font-medium">App Store</button>
            </div>
          </div>

          {/* About section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About us</h3>
            <div className="space-y-2">
              {["Dreamjobs Blogs", "Contact with us", "Dreamjobs demo", "Privacy condition", "Contact with us", "Dreamjobs demo"].map((item, index) => (
                <Link key={index} to="/" className="block hover:underline">{item}</Link>
              ))}
            </div>
          </div>

          {/* Customer care section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Care</h3>
            <div className="space-y-2">
              {["Corporate order", "Refund and return policy", "Terms and condition", "Complain management", "Corporate order", "Refund and return policy"].map((item, index) => (
                <Link key={index} to="/" className="block hover:underline">{item}</Link>
              ))}
            </div>
          </div>

          {/* Contact information section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 opacity-90">
              <p>70 Mugda, Madina bag, Dhaka 1214, Bangladesh</p>
              <p>Phone: 0889202456</p>
              <p>Email: dremjobs@gmail.com</p>
            </div>
            <div className="mt-4 relative">
              <input type="text" className="w-full h-12 px-4 rounded-md outline-none text-black" />
              <button className="absolute right-1 top-1 bg-gray-900 w-10 h-10 flex items-center justify-center rounded">
                <SiMinutemailer className="text-white text-2xl" />
              </button>
            </div>
          </div>
        </div>

        <hr className="mx-4  border-white" />

        <div className="flex flex-col md:flex-row justify-between items-center py-4 px-4">
          <p>@ 2024 unishop. All rights reserved</p>
          <ul className="flex space-x-2 mt-4 md:mt-0">
            {[FaFacebookF, FaYoutube, FaGoogle, AiFillInstagram, FaTwitter].map((Icon, index) => (
              <li key={index} className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                <Link to="/">
                  <Icon className="text-black" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>

    </>
  )
}

export default Footer