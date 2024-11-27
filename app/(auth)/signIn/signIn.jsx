"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SignIn = () => {
  // ফর্ম ইনপুটের মান পরিচালনার জন্য স্টেট
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ফর্ম সাবমিট করার হ্যান্ডলার
  const handleSubmit = (e) => {
    e.preventDefault();

    // ফর্ম ডেটা কনসোলে লগ করা
    console.log("ফর্ম জমা দেওয়া হয়েছে নিম্নলিখিত ডেটার সাথে:");
    console.log("ইমেইল:", email);
    console.log("পাসওয়ার্ড:", password);

    // ফর্ম সাবমিশনের লজিক এখানে যোগ করুন (যেমন API রিকোয়েস্ট)
    console.log("লগইন প্রচেষ্টা সফল!");

    // ফর্ম ক্লিয়ার করা বা সফল বার্তা দেখানো (ঐচ্ছিক)
    setEmail("");
    setPassword("");
  };

  return (
    <div className="max-w-screen-xl lg:mx-auto p-4 my-12">
      <div className="flex gap-4 items-center justify-center mb-6">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Bangladesh_Nationalist_Party.svg"
          alt="লোগো"
          width={96} // প্রয়োজন অনুযায়ী সামঞ্জস্য করুন
          height={96} // প্রয়োজন অনুযায়ী সামঞ্জস্য করুন
          priority // গুরুত্বপূর্ণ ইমেজ লোডের জন্য
        />
        <h1 className="font-bold text-xl">চট্টগ্রাম মহানগর বিএনপি</h1>
      </div>

      {/* ফর্ম */}
      <form className="max-w-md mx-auto my-4" onSubmit={handleSubmit}>
        {/* ইমেইল ইনপুট */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">
            ইমেইল ঠিকানা
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // ইমেইল ইনপুটকে স্টেটে সংযুক্ত করুন
            placeholder="আপনার ইমেইল লিখুন"
            type="email"
            className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
            required
          />
        </div>

        {/* পাসওয়ার্ড ইনপুট */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold">
            পাসওয়ার্ড
          </label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // পাসওয়ার্ড ইনপুটকে স্টেটে সংযুক্ত করুন
            placeholder="••••••••"
            type="password"
            className="border shadow-lg rounded-2xl w-full px-4 py-3 mt-2"
            required
          />
        </div>

        {/* সাবমিট বোতাম */}
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
        {/* সাইন আপ লিঙ্ক */}
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
