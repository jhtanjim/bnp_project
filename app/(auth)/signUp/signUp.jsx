"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
    nid: "",
    ward: "",
    thana: "",
    mohanagar: "চট্টগ্রাম", // Default value for Mohanagar
    electionCenter: "",
    politicalPost: "",
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("পাসওয়ার্ড মিলছে না!");
      return;
    }
    if (!formData.electionCenter) {
      alert("নির্বাচনী কেন্দ্র নির্বাচন করুন!");
      return;
    }

    try {
      // Construct FormData
      const submissionData = new FormData();
      submissionData.append("email", formData.email);
      submissionData.append("password", formData.password);
      submissionData.append("fullName", formData.fullName);
      submissionData.append("nid", formData.nid);
      submissionData.append("country", "Bangladesh");
      submissionData.append("mobile", formData.mobileNumber);
      submissionData.append("mohanagar", formData.mohanagar);
      submissionData.append("thana", formData.thana);
      submissionData.append("ward", formData.ward);
      submissionData.append("electionCenter", formData.electionCenter);
      submissionData.append("role", formData.party);
      if (formData.image) {
        submissionData.append("image", formData.image);
      }

      // API call
      const response = await fetch(
        "https://bnp-api-9oht.onrender.com/auth/signup",
        {
          method: "POST",
          body: submissionData,
        }
      );

      const result = await response.json();
      console.log(result);
      if (response.ok) {
        alert("সাইন আপ সফল হয়েছে!");
        setIsLoggedIn(true);

        // Store user data in localStorage
        localStorage.setItem("userData", JSON.stringify(result.user)); // Adjust result.user based on your API response

        // Redirect after successful signup
        router.push("/");

        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
          mobileNumber: "",
          nid: "",
          ward: "",
          thana: "",
          mohanagar: "চট্টগ্রাম",
          electionCenter: "",
          politicalPost: "",
          image: null,
        });
      } else {
        alert(result.message || "সাইন আপ ব্যর্থ হয়েছে!");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("সাইন আপের সময় ত্রুটি ঘটেছে। পরে আবার চেষ্টা করুন।");
    }
  };

  return (
    <div className="max-w-screen-2xl lg:mx-auto p-4 my-12">
      <div className="flex gap-4 items-center justify-center mb-6">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Bangladesh_Nationalist_Party.svg"
          alt="লোগো"
          width={96}
          height={96}
          priority
        />
        <h1 className="font-bold text-xl">চট্টগ্রাম মহানগর বিএনপি</h1>
      </div>

      <form className="max-w-xl mx-auto my-4" onSubmit={handleSubmit}>
        {/* Full Name and Email */}
        <div className="lg:flex gap-4">
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">পূর্ণ নাম</label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="জন ডো"
              type="text"
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">ইমেইল এড্রেস</label>
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
            <label className="block text-sm font-semibold">পাসওয়ার্ড</label>
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
              কনফার্ম পাসওয়ার্ড
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
            <label className="block text-sm font-semibold">মোবাইল নম্বর</label>
            <input
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="+৮৮০১"
              type="text"
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">এনআইডি</label>
            <input
              name="nid"
              value={formData.nid}
              onChange={handleChange}
              placeholder="এনআইডি নম্বর"
              type="text"
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            />
          </div>
        </div>

        {/* Dropdowns */}
        <div className="lg:flex gap-4">
          {/* Radio buttons for বিএনপি/যুবদল */}
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold mb-2">
              বিএনপি/যুবদল
            </label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="party"
                  value="BNP"
                  checked={formData.party === "BNP"}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                বিএনপি
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="party"
                  value="JUBODOL"
                  checked={formData.party === "JUBODOL"}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                যুবদল
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="party"
                  value="CHATRODOL"
                  checked={formData.party === "CHATRODOL"}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                ছাত্রদল
              </label>
            </div>
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">মহানগর/জেলা</label>
            <select
              name="mohanagar"
              value={formData.mohanagar}
              onChange={handleChange}
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            >
              <option value="চট্টগ্রাম">চট্টগ্রাম মহানগর</option>
              <option value="ঢাকা">চট্টগ্রাম উত্তর জেলা</option>
              <option value="সিলেট">চট্টগ্রাম দক্ষিণ জেলা</option>
            </select>
          </div>
        </div>

        {/* থানা এবং ওয়ার্ড */}
        <div className="lg:flex gap-4">
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">থানা</label>
            <select
              name="thana"
              value={formData.thana}
              onChange={handleChange}
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            >
              <option value="">থানা নির্বাচন করুন</option>
              <option value="বন্দর">বন্দর</option>
              <option value="কোতোয়ালী">কোতোয়ালী</option>
              <option value="কুলশী">কুলশী</option>
            </select>
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">ওয়ার্ড/ইউনিয়ন</label>
            <select
              name="ward"
              value={formData.ward}
              onChange={handleChange}
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            >
              <option value="">ওয়ার্ড নির্বাচন করুন</option>
              <option value="Ward 1">ওয়ার্ড ১</option>
              <option value="Ward 2">ওয়ার্ড ২</option>
              <option value="Ward 3">ওয়ার্ড ৩</option>
            </select>
          </div>
        </div>
        {/* নির্বাচনী কেন্দ্র */}
        <div className="mb-4 w-full">
          <label className="block text-sm font-semibold">
            নির্বাচনী কেন্দ্র
          </label>
          <select
            name="electionCenter"
            value={formData.electionCenter}
            onChange={handleChange}
            className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
            required
          >
            <option value="">নির্বাচনী কেন্দ্র নির্বাচন করুন</option>
            <option value="Center 1">কেন্দ্র ১</option>
            <option value="Center 2">কেন্দ্র ২</option>
            <option value="Center 3">কেন্দ্র ৩</option>
          </select>
        </div>

        {/* File Upload */}
        <div className="mb-4 w-full">
          <label className="block text-sm font-semibold">ছবি আপলোড করুন</label>
          <input
            name="image"
            onChange={handleFileUpload}
            type="file"
            className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
            accept="image/*"
          />
        </div>

        {/* Submit Button */}
        <button
          className="bg-[#16A34A] text-white p-2 w-full rounded hover:bg-[#F5CF0D] hover:text-red-500 font-bold"
          type="submit"
        >
          সাইন আপ &rarr;
        </button>

        <p className="py-4 text-center">
          ইতোমধ্যে একটি অ্যাকাউন্ট আছে?{" "}
          <Link href="/signIn">
            <span className="text-blue-800 font-semibold">সাইন ইন</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
