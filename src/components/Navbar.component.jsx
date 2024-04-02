import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import SuvidhaLogo from "../assets/SuvidhaLogo.png";

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-green-700 h-20 relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="text-white">
              <img
                className="md:hidden h-12 border border-green-900"
                src={Logo}
                alt="Logo"
              />
              <img
                className="hidden md:block h-16"
                src={SuvidhaLogo}
                alt="Suvidha Logo"
              />
            </Link>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* Navigation links */}
                <Link
                  to="/"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-800"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/events"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-800"
                  onClick={() => setIsOpen(false)}
                >
                  Events
                </Link>
                <Link
                  to="/gallery"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-800"
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  to="/contact"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-800"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/apply-for-internship"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-800"
                  onClick={() => setIsOpen(false)}
                >
                  Apply for Internship
                </Link>
                <Link
                  to="/help-now"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-800"
                  onClick={() => setIsOpen(false)}
                >
                  Help Now
                </Link>
              </div>
            </div>
          </div>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
      </div>
      {/* Mobile menu, toggle classes based on menu state */}
      <div
        className={isOpen ? "absolute top-20 w-full bg-green-700" : "hidden"}
        ref={menuRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-col space-y-4">
            {/* Navigation links */}
            <Link
              to="/"
              className="text-white text-lg font-medium hover:bg-green-800 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/events"
              className="text-white text-lg font-medium hover:bg-green-800 py-2"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/gallery"
              className="text-white text-lg font-medium hover:bg-green-800 py-2"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-white text-lg font-medium hover:bg-green-800 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/apply-for-internship"
              className="text-white text-lg font-medium hover:bg-green-800 py-2"
              onClick={() => setIsOpen(false)}
            >
              Apply for Internship
            </Link>
            <Link
              to="/help-now"
              className="text-white text-lg font-medium hover:bg-green-800 py-2"
              onClick={() => setIsOpen(false)}
            >
              Help Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
