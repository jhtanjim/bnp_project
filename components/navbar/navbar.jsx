"use client";

import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useUserData } from "@/app/hooks/useUserData";
import PrivateRoute from "../privateRoute/privateRoute ";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const { userData } = useUserData();
  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);

  useEffect(() => {
    if (userData) {
      setIsUserDataLoaded(true);
    }
  }, [userData]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 w-full bg-green-100 border-b border-gray-200 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <Link href="/">
          <div className="flex lg:block">
            <div className="flex justify-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Bangladesh_Nationalist_Party.svg"
                alt="Logo"
                width={40}
                height={40}
                className="h-16 lg:w-24 w-16"
              />
            </div>
            <span className="ml-2 lg:text-lg font-bold text-green-800 my-auto">
              চট্টগ্রাম মহানগর বিএনপি
            </span>
          </div>
        </Link>

        {/* Mobile Hamburger Icon */}
        <button
          className="text-green-800 md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-green-100 md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-10`}
        >
          <Link
            href="/"
            className="block w-full md:w-auto text-green-800 hover:text-green-900 font-medium transition duration-200"
          >
            হোম
          </Link>
          <Link
            href="#"
            className="block w-full md:w-auto text-green-800 hover:text-green-900 font-medium transition duration-200"
          >
            আমাদের সম্পর্কে
          </Link>
          <Link
            href="/video"
            className="block w-full md:w-auto text-green-800 hover:text-green-900 font-medium transition duration-200"
          >
            ভিডিও
          </Link>
          <Link
            href="/noticeBoard"
            className="block w-full md:w-auto text-green-800 hover:text-green-900 font-medium transition duration-200"
          >
            নোটিশ
          </Link>
          <Link
            href="#"
            className="block w-full md:w-auto text-green-800 hover:text-green-900 font-medium transition duration-200"
          >
            রিসোর্স
          </Link>
          <PrivateRoute>
            <Link
              href="/dashBoard"
              className="block w-full md:w-auto text-green-800 hover:text-green-900 font-medium transition duration-200"
            >
              ড্যাশবোর্ড
            </Link>
          </PrivateRoute>
          {isAuthenticated && isUserDataLoaded && (
            <button
              onClick={logout}
              className="block w-full md:w-auto text-center text-white p-2 rounded-xl bg-red-500 hover:text-green-900 font-medium transition duration-200 lg:hidden "
            >
              লগআউট
            </button>
          )}
          {!isAuthenticated && (
            <Link
              href="/signIn"
              className="block w-full text-center md:w-auto  hover:text-green-900 font-medium transition duration-200 lg:hidden bg-green-800 p-2 rounded-xl text-white"
            >
              সাইন ইন
            </Link>
          )}
        </div>

        {/* Desktop Sign-In/Logout Button */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated && isUserDataLoaded ? (
            <>
              <span className="text-green-800 font-medium">
                {userData.fullName}
              </span>
              <button
                onClick={logout}
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-md transition duration-200"
              >
                <span className="mr-2">LOGOUT</span>
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
              </button>
            </>
          ) : (
            <Link
              href="/signIn"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-md transition duration-200"
            >
              <span className="mr-2">সাইন ইন</span>
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
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
