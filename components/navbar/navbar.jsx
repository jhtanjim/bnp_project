"use client";
import Image from "next/image";
import Link from "next/link";
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
        {/* লোগো সেকশন */}
        <div className="flex items-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Bangladesh_Nationalist_Party.svg"
            alt="লোগো"
            width={40} // Match 10 * 4 (tailwind rem unit)
            height={40} // Match 10 * 4 (tailwind rem unit)
            className="h-10 w-10"
          />
          <span className="ml-2 text-lg font-bold text-green-800">
            চট্টগ্রাম মহানগর বিএনপি
          </span>
        </div>

        {/* মোবাইলের জন্য হ্যামবার্গার আইকন */}
        <button
          className="text-green-800 md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* নেভিগেশন লিঙ্ক */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex items-center space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-green-100 md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-10`}
        >
          <Link
            href="/"
            className="block md:inline text-green-800 hover:text-green-900 font-medium transition duration-200"
          >
            হোম
          </Link>
          <Link
            href="#"
            className="block md:inline text-green-800 hover:text-green-900 font-medium transition duration-200"
          >
            আমাদের সম্পর্কে
          </Link>
          <Link
            href="/video"
            className="block md:inline text-green-800 hover:text-green-900 font-medium transition duration-200"
          >
            ভিডিও
          </Link>
          <Link
            href="/noticeBoard"
            className="block md:inline text-green-800 hover:text-green-900 font-medium transition duration-200"
          >
            নোটিশ
          </Link>
          <Link
            href="#"
            className="block md:inline text-green-800 hover:text-green-900 font-medium transition duration-200"
          >
            রিসোর্স
          </Link>
          <Link
            href="/dashBoard"
            className="block md:inline text-green-800 hover:text-green-900 font-medium transition duration-200"
          >
            ড্যাশবোর্ড
          </Link>
        </div>

        {/* ডান পাশ: বাটন ও আইকন */}
        <div className="hidden md:flex items-center space-x-4">
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
          <Link
            href="#"
            className="text-green-800 hover:text-green-900 text-lg transition duration-200"
          >
            <FaFacebook />
          </Link>
          <Link
            href="#"
            className="text-green-800 hover:text-green-900 text-lg transition duration-200"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
