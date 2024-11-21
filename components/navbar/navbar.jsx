"use client";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 w-full bg-green-100 border-b border-gray-200 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Bangladesh_Nationalist_Party.svg"
            alt="Logo"
            className="h-10 w-10"
          />
          <span className="ml-2 text-lg font-bold text-green-800">
            BNP Chattogram
          </span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="text-green-800 md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex items-center space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-green-100 md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-10`}
        >
          <a
            href="#"
            className="block md:inline text-green-800 hover:text-green-900 font-medium transition duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="block md:inline text-green-800 hover:text-green-900 font-medium transition duration-200"
          >
            About us
          </a>
          <a
            href="#"
            className="block md:inline text-green-800 hover:text-green-900 font-medium transition duration-200"
          >
            Videos
          </a>
          <a
            href="#"
            className="block md:inline text-green-800 hover:text-green-900 font-medium transition duration-200"
          >
            Notice
          </a>
          <a
            href="#"
            className="block md:inline text-green-800 hover:text-green-900 font-medium transition duration-200"
          >
            Resources
          </a>
        </div>

        {/* Right Section: Buttons and Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-md transition duration-200"
          >
            <span className="mr-2">Sign in</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </a>
          <a
            href="#"
            className="text-green-800 hover:text-green-900 text-lg transition duration-200"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-green-800 hover:text-green-900 text-lg transition duration-200"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
