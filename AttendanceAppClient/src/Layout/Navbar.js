import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-bold text-xl">
              My App
            </a>
          </div>
          <div className="flex">
            {/* Navigation links */}
            <div className="hidden md:flex space-x-4 mr-5">
                <a href="/" className="text-gray-300 hover:text-white">
                  Home
                </a>
                <a href="/Student" className="text-gray-300 hover:text-white">
                  Student
                </a>
              </div>
              {/* Avatar dropdown */}
              <div className="relative">
                <button
                  type="button"
                  className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                  aria-label="User menu"
                  onClick={toggleDropdown}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C7.03 2 3 6.03 3 11C3 14.36 5.29 17.32 8.34 18.52C5.29 19.72 3 22.68 3 26H21C21 22.68 18.71 19.72 15.66 18.52C18.71 17.32 21 14.36 21 11C21 6.03 16.97 2 12 2ZM12 20C9.79 20 8 18.21 8 16C8 13.79 9.79 12 12 12C14.21 12 16 13.79 16 16C16 18.21 14.21 20 12 20ZM12 4C8.13 4 5 7.13 5 11C5 14.52 7.5 17.33 10.53 18.65C10.83 17.79 11.49 17.14 12 16.88C12.51 17.14 13.17 17.79 13.47 18.65C16.5 17.33 19 14.52 19 11C19 7.13 15.87 4 12 4Z"
                    />
                  </svg>
                </button>
                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <a href="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Login
                    </a>
                    <a href="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Sign up
                    </a>
                  </div>
                )}
              </div>
            </div>
          
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
