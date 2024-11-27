"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SignUp = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
    nid: "",
    ward: "",
    thana: "",
    mohanagar: "Chattogram", // Default value for Mohanagar
    politicalPost: "",
    document: null,
    image: null,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form submitted:", formData);

    // Clear the form (optional)
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobileNumber: "",
      nid: "",
      ward: "",
      thana: "",
      mohanagar: "Chattogram",
      politicalPost: "",
      document: null,
      image: null,
    });
  };

  return (
    <div className="max-w-screen-2xl lg:mx-auto p-4 my-12">
      <div className="flex gap-4 items-center justify-center mb-6">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Bangladesh_Nationalist_Party.svg"
          alt="Logo"
          width={96} // Adjust as needed
          height={96} // Adjust as needed
          priority // For critical images
        />
        <h1 className="font-bold text-xl">BNP Chattogram</h1>
      </div>

      <form className="max-w-xl mx-auto my-4" onSubmit={handleSubmit}>
        {/* Full Name and Email */}
        <div className="lg:flex gap-4">
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">Full Name</label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              type="text"
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">Email Address</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="abc@gmail.com"
              type="email"
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            />
          </div>
        </div>

        {/* Passwords */}
        <div className="lg:flex gap-4">
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              type="password"
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              type="password"
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            />
          </div>
        </div>

        {/* Mobile Number and NID */}
        <div className="lg:flex gap-4">
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">Mobile Number</label>
            <input
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="+8801"
              type="text"
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">NID</label>
            <input
              name="nid"
              value={formData.nid}
              onChange={handleChange}
              placeholder="NID Number"
              type="text"
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            />
          </div>
        </div>
        {/* bnp/ zubodol */}
        {/* Dropdowns */}

        <div className="lg:flex gap-4">
          {/*  */}

          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">BNP/JUBODOL</label>
            <select
              name="mohanagar"
              value={formData.mohanagar}
              onChange={handleChange}
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            >
              <option value="Chattogram">BNP</option>
              <option value="Dhaka">JUBODOL</option>
            </select>
          </div>
          {/*  */}
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">
              Mohanagar/Jela
            </label>
            <select
              name="mohanagar"
              value={formData.mohanagar}
              onChange={handleChange}
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            >
              <option value="Chattogram">Chattogram Mohanogor</option>
              <option value="Dhaka">Chattogram Uttor jela</option>
              <option value="Sylhet">Chattogram Dokkhin jela</option>
            </select>
          </div>
        </div>

        <div className="lg:flex gap-4">
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">Thana</label>
            <select
              name="thana"
              value={formData.thana}
              onChange={handleChange}
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            >
              <option value="">Select Thana</option>
              <option value="Thana 1">Thana 1</option>
              <option value="Thana 2">Thana 2</option>
              <option value="Thana 3">Thana 3</option>
            </select>
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">Ward/union</label>
            <select
              name="ward"
              value={formData.ward}
              onChange={handleChange}
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            >
              <option value="">Select Ward</option>
              <option value="Ward 1">Ward 1</option>
              <option value="Ward 2">Ward 2</option>
              <option value="Ward 3">Ward 3</option>
            </select>
          </div>
        </div>
        {/* nitbachoni kendro */}
        <div className="mb-4 w-full">
          <label className="block text-sm font-semibold">
            Nirbachoni Kendro
          </label>
          <select
            name="mohanagar"
            value={formData.mohanagar}
            onChange={handleChange}
            className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
            required
          >
            <option value="Chattogram">Nirbachoni Kendro</option>
            <option value="Dhaka">Nirbachoni Kendro </option>
            <option value="Sylhet">Nirbachoni Kendro </option>
          </select>
        </div>
        {/* File Uploads */}
        <div className="lg:flex gap-4">
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">
              Upload Document
            </label>
            <input
              name="document"
              onChange={handleFileUpload}
              type="file"
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">Upload Image</label>
            <input
              name="image"
              onChange={handleFileUpload}
              type="file"
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="bg-[#16A34A] text-white p-2 w-full rounded hover:bg-[#F5CF0D] hover:text-red-500 font-bold"
          type="submit"
        >
          Sign up &rarr;
        </button>

        <p className="py-4 text-center">
          Already have an account?{" "}
          <Link href="/signIn">
            <span className="text-blue-800 font-semibold">Sign in</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
