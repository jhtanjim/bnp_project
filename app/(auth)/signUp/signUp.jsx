"use client"; // Marks this component as a Client Component

import React, { useState } from "react";
import Link from "next/link"; // Make sure to import Link from Next.js if you're using it for navigation

const SignUp = () => {
  // State to manage form input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data to the console
    console.log("Form Submitted with the following data:");
    console.log("Email:", email);
    console.log("Password:", password);

    // Add your form submission logic here (e.g., make an API request for login)
    console.log("Login attempt successful!");

    // Clear the form or show success message (optional)
    setEmail("");
    setPassword("");
  };

  return (
    <div className="max-w-screen-2xl  lg:mx-auto p-4 my-12">
      <div className="flex gap-4 items-center justify-center mb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Bangladesh_Nationalist_Party.svg"
          alt="Logo"
          className="h-24 w-24"
        />
        <h1 className="font-bold text-xl">BNP Chattogram</h1>
      </div>

      {/* Form */}
      <form className=" max-w-xl mx-auto my-4" onSubmit={handleSubmit}>
        {/* Email and full name Input */}
        <div className="lg:flex gap-4">
          <div className="mb-4 w-full">
            <label htmlFor="email" className="block text-sm font-semibold">
              Full Name
            </label>
            <input
              id="email"
              value={email}
              placeholder="John Doe"
              type="name"
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            />
          </div>
          {/* email */}
          <div className="mb-4 w-full">
            <label htmlFor="email" className="block text-sm font-semibold">
              Email Address
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Bind the email input to state
              placeholder="abc@gmail.com"
              type="email"
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="lg:flex gap-4">
          <div className="mb-4 w-full">
            <label htmlFor="password" className="block text-sm font-semibold">
              Password
            </label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Bind the password input to state
              placeholder="••••••••"
              type="password"
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            />
          </div>
          {/* confirm pass */}
          <div className="mb-4 w-full">
            <label htmlFor="password" className="block text-sm font-semibold">
              Confirm Password
            </label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Bind the password input to state
              placeholder="••••••••"
              type="confirm password"
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            />
          </div>
        </div>
        {/* Mobile Number and nid Input */}
        <div className="lg:flex gap-4">
          <div className="mb-4 w-full">
            <label htmlFor="Number" className="block text-sm font-semibold">
              Mobile Number
            </label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Bind the password input to state
              placeholder="+8801"
              type="number"
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            />
          </div>
          {/* confirm pass */}
          <div className="mb-4 w-full">
            <label htmlFor="password" className="block text-sm font-semibold">
              NID
            </label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Bind the password input to state
              placeholder="nid"
              type="confirm password"
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            />
          </div>
        </div>
        {/* Submit Button */}
        <button
          className="bg-[#16A34A] text-white p-2 w-full rounded hover:bg-[#F5CF0D] hover:text-red-500 font-bold"
          type="submit"
        >
          Sig up &rarr;
        </button>

        {/* Sign Up Link */}
        <p className="py-4 text-center">
          Already have Account?{" "}
          <Link href="/signIn">
            <span className="text-blue-800 font-semibold">Sign in</span>
          </Link>
        </p>

        {/* Divider */}
      </form>
    </div>
  );
};

export default SignUp;
