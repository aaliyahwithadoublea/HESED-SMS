import React, { useState } from 'react';
import logo from '../../assets/HESED-LOGO.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        
        <div className="flex items-center">
          <img src={logo} alt="HESED" className="h-14 w-auto" />
        </div>

       
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

       
        <ul className="hidden md:flex space-x-6 text-sm">
          <li className="text-blue-500">Home</li>
          <li className="text-gray-700">Solutions</li>
          <li className="text-gray-700">About Us</li>
          <li className="text-gray-700">Blog</li>
        </ul>

        
        <div className="hidden md:flex space-x-4">
          <button className="text-gray-700">Log In</button>
          <button className=" text-white px-4 py-2 rounded-full" style={{backgroundColor: "#3070B6"}}>Book a Demo</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="space-y-4">
            <li className="text-blue-500">Home</li>
            <li className="text-gray-700">Solutions</li>
            <li className="text-gray-700">About Us</li>
            <li className="text-gray-700">Blog</li>
          </ul>
          <div className="mt-4 space-y-2">
            <button className="text-gray-700 block w-full text-left">Log In</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full block w-full text-center">Book a Demo</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
