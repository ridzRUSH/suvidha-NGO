import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import SuvidhaLogo from "../assets/SuvidhaLogo.png";

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 h-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-full">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                // Icon when menu is open
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* Logo */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-white">
                <img
                  className="md:hidden h-[80px] border border-green-900"
                  src={Logo}
                  alt=""
                />
                <img
                  className=" hidden md:flex w-[350px] h-[90px] "
                  src={SuvidhaLogo}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {/* Navigation links */}
              <Link
                to="/"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-800"
              >
                Home
              </Link>
              <Link
                to="/events"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-800"
              >
                Events
              </Link>
              <Link
                to="/gallery"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-800"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-800"
              >
                Contact
              </Link>
              <Link
                to="/apply-for-internship"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-800"
              >
                Apply for Internship
              </Link>
              <Link
                to="/help-now"
                className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-800"
              >
                Help Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, toggle classes based on menu state */}
      <div className={isOpen ? "block sm:hidden" : "hidden"} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Navigation links */}
          <Link
            to="/"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-800"
          >
            Home
          </Link>
          <Link
            to="/events"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-800"
          >
            Events
          </Link>
          <Link
            to="/gallery"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-800"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-800"
          >
            Contact
          </Link>
          <Link
            to="/apply-for-internship"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-800"
          >
            Apply for Internship
          </Link>
          <Link
            to="/help-now"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-800"
          >
            Help Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
