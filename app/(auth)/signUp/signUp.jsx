"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const thanas = [
  { code: "AK", name: "Akbarshah Thana", wards: ["10"] },
  { code: "BA", name: "Bakoliya Thana", wards: ["17", "18", "19", "35"] },
  { code: "BD", name: "Bandar Thana", wards: ["36", "37", "38", "39"] },
  { code: "BY", name: "Bayazid Thana", wards: ["02"] },
  { code: "CH", name: "Chandgaon Thana", wards: ["04", "05", "06"] },
  { code: "CB", name: "Chawkbazar Thana", wards: ["15", "16"] },
  {
    code: "DM",
    name: "Double Mooring Thana",
    wards: ["12", "23", "24", "27", "28", "29", "30"],
  },
  { code: "EP", name: "EPZ Thana", wards: ["39", "40", "41"] },
  { code: "HA", name: "Halishahar Thana", wards: ["11", "24", "25", "26"] },
  { code: "KH", name: "Khulshi Thana", wards: ["08", "09", "13", "14"] },
  {
    code: "KT",
    name: "Kotwali Thana",
    wards: ["20", "21", "22", "30", "31", "32", "33", "34", "35", "15", "16"],
  },
  { code: "PA", name: "Pahartali Thana", wards: ["09", "11", "12"] },
  {
    code: "PC",
    name: "Panchlaish Thana",
    wards: ["01", "02", "03", "07", "08", "15", "16"],
  },
  { code: "PT", name: "Patenga Thana", wards: ["39", "40", "41"] },
  { code: "SD", name: "Sadarghat Thana", wards: ["30", "35"] },
];

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
    mohanagar: "",
    electionCenter: "",
    politicalPost: "",
    image: null,
  });

  const [wards, setWards] = useState([]); // State to store the wards of selected thana

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle thana selection and update wards
  const handleThanaChange = (e) => {
    const selectedThanaCode = e.target.value;
    const selectedThana = thanas.find(
      (thana) => thana.code === selectedThanaCode
    );
    setFormData({ ...formData, thana: selectedThanaCode, ward: "" });
    setWards(selectedThana ? selectedThana.wards : []);
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // mohanagar code
    if (!formData.mohanagar || formData.mohanagar === "") {
      alert("মহানগর নির্বাচন করুন!");
      return;
    }
    // Validation checks
    if (formData.password !== formData.confirmPassword) {
      alert("পাসওয়ার্ড মিলছে না!");
      return;
    }

    if (!formData.electionCenter) {
      alert("নির্বাচনী কেন্দ্র নির্বাচন করুন!");
      return;
    }

    // Validate userType (party)
    const validUserTypes = ["BNP", "CHATRODOL", "JUBODOL"];
    if (!validUserTypes.includes(formData.party)) {
      alert("বিএনপি, ছাত্রদল বা যুবদল নির্বাচন করুন!");
      return;
    }

    // Validate mohanagarCode (mohanagar should be a string and not empty)
    if (!formData.mohanagar || typeof formData.mohanagar !== "string") {
      alert("মহানগর নির্বাচন করুন!");
      return;
    }

    // Validate thanaCode (thana should be a string and not empty)
    if (!formData.thana || typeof formData.thana !== "string") {
      alert("থানা নির্বাচন করুন!");
      return;
    }

    // Validate wardCode (ward should be a string and not empty)
    if (!formData.ward || typeof formData.ward !== "string") {
      alert("ওয়ার্ড নির্বাচন করুন!");
      return;
    }

    try {
      // Construct FormData for API submission
      const submissionData = new FormData();
      submissionData.append("email", formData.email);
      submissionData.append("password", formData.password);
      submissionData.append("fullName", formData.fullName);
      submissionData.append("nid", formData.nid);
      submissionData.append("country", "Bangladesh");
      submissionData.append("mobile", formData.mobileNumber);
      submissionData.append("mohanagar", formData.mohanagar);
      submissionData.append("thanaCode", formData.thana);
      submissionData.append("wardCode", formData.ward);
      submissionData.append("electionCenter", formData.electionCenter);
      submissionData.append("userType", formData.party);
      if (formData.image) {
        submissionData.append("image", formData.image);
      }

      // API call to submit the form data
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
        localStorage.setItem("userData", JSON.stringify(result.user));

        // Redirect after successful signup
        router.push("/");

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
          mobileNumber: "",
          nid: "",
          ward: "",
          thana: "",
          mohanagar: "",
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
              পাসওয়ার্ড পুনরায় লিখুন
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

        {/* Mobile and NID */}
        <div className="lg:flex gap-4">
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">
              মোবাইল নাম্বার
            </label>
            <input
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="০১৭xxxxxxxx"
              type="text"
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">
              এনআইডি নাম্বার
            </label>
            <input
              name="nid"
              value={formData.nid}
              onChange={handleChange}
              placeholder="এনআইডি নাম্বার"
              type="text"
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            />
          </div>
        </div>

        <div className="mb-4 w-full">
          <label className="block text-sm font-semibold">
            মহানগর নির্বাচন করুন
          </label>
          <input
            name="mohanagar"
            value={formData.mohanagar}
            onChange={handleChange}
            placeholder="মহানগর নির্বাচন করুন"
            type="text"
            className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
            required
          />
        </div>

        {/* Party and Thana */}
        <div className="lg:flex gap-4">
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">পদবি</label>
            <select
              name="party"
              value={formData.party}
              onChange={handleChange}
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            >
              <option value="">পদবি নির্বাচন করুন</option>
              <option value="BNP">বিএনপি</option>
              <option value="CHATRODOL">ছাত্রদল</option>
              <option value="JUBODOL">যুবদল</option>
            </select>
          </div>

          {/* Select Thana */}
          <div className="mb-4 w-full">
            <label className="block text-sm font-semibold">
              থানা নির্বাচন করুন
            </label>
            <select
              name="thana"
              value={formData.thana}
              onChange={handleThanaChange}
              className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
              required
            >
              <option value="">থানা নির্বাচন করুন</option>
              {thanas.map((thana) => (
                <option key={thana.code} value={thana.code}>
                  {thana.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Select Ward */}
        <div className="mb-4 w-full">
          <label className="block text-sm font-semibold">
            ওয়ার্ড নির্বাচন করুন
          </label>
          <select
            name="ward"
            value={formData.ward}
            onChange={handleChange}
            className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
            required
          >
            <option value="">ওয়ার্ড নির্বাচন করুন</option>
            {wards.map((ward) => (
              <option key={ward} value={ward}>
                {ward}
              </option>
            ))}
          </select>
        </div>

        {/* Election Center */}
        <div className="mb-4 w-full">
          <label className="block text-sm font-semibold">
            নির্বাচনী কেন্দ্র
          </label>
          <input
            name="electionCenter"
            value={formData.electionCenter}
            onChange={handleChange}
            placeholder="নির্বাচনী কেন্দ্র"
            type="text"
            className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4 w-full">
          <label className="block text-sm font-semibold">প্রোফাইল ছবি</label>
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white text-lg font-bold rounded-2xl"
          >
            সাইন আপ করুন
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
