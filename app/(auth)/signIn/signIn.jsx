"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const SignIn = () => {
  const { login } = useAuth();
  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the email or password is empty
    if (!email || !password) {
      alert("ইমেইল অথবা পাসওয়ার্ড ফাঁকা থাকতে পারে না!");
      return;
    }

    try {
      const response = await fetch(
        "https://bnp-api-9oht.onrender.com/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("লগইন সফল হয়েছে!");
        login(result.token, result.user);
        router.push("/");
      } else {
        alert(result.message || "লগইন ব্যর্থ হয়েছে!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("লগইন করতে সমস্যা হয়েছে, আবার চেষ্টা করুন।");
    }
  };

  return (
    <div className="max-w-screen-xl lg:mx-auto p-4 my-12">
      <div className="flex gap-4 items-center justify-center mb-6">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Bangladesh_Nationalist_Party.svg"
          alt="লোগো"
          width={96} // Adjust as necessary
          height={96} // Adjust as necessary
          priority // Important image loading
        />
        <h1 className="font-bold text-xl">চট্টগ্রাম মহানগর বিএনপি</h1>
      </div>

      {/* Form */}
      <form className="max-w-md mx-auto my-4" onSubmit={handleSubmit}>
        {/* Email input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">
            ইমেইল ঠিকানা
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Bind email to state
            placeholder="আপনার ইমেইল লিখুন"
            type="email"
            className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
            required
          />
        </div>

        {/* Password input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold">
            পাসওয়ার্ড
          </label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Bind password to state
            placeholder="••••••••"
            type="password"
            className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
            required
          />
        </div>

        {/* Submit button */}
        <button
          className="bg-[#16A34A] text-white p-2 w-full rounded hover:bg-[#F5CF0D] hover:text-red-500 font-bold"
          type="submit"
        >
          লগইন করুন &rarr;
        </button>
        <p className="py-1 ">
          <Link href="">
            <span className="text-green-800 font-semibold">
              পাসওয়ার্ড ভুলে গেছেন?
            </span>
          </Link>
        </p>
        {/* Sign-up link */}
        <p className="py-4 text-center">
          অ্যাকাউন্ট নেই?
          <Link href="/signUp">
            <span className="text-blue-800 font-semibold">সাইন আপ করুন</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
