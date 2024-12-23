"use client";
import React from "react";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";

const ProfileCard = () => {
  const { user } = useAuth();

  // Check if user exists to prevent errors during loading
  if (!user) {
    return <div>Loading...</div>;
  }

  const InfoRow = ({ label, value }) => (
    <div className="flex gap-4">
      <span className="text-gray-800 font-bold">{label}:</span>
      <span className="text-gray-700">{value}</span>
    </div>
  );

  return (
    <div className="my-20 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-[#e8f5e9] rounded-3xl p-6 relative">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white">
              {/* Display user image dynamically */}
              <Image
                src={user.image} // Use user image from API
                alt="Profile"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div>
              {/* Display user full name dynamically */}
              <h2 className="text-2xl font-bold">{user.full_name}</h2>
              {/* Display user id dynamically */}
              <p className="text-gray-600">আইডি : {user.id}</p>
            </div>
          </div>

          <div className="items-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Bangladesh_Nationalist_Party.svg"
              alt="লোগো"
              width={40} // Match 10 * 4 (tailwind rem unit)
              height={40} // Match 10 * 4 (tailwind rem unit)
              className="h-10 w-10"
            />
            <span className="font-bold text-green-800">
              চট্টগ্রাম মহানগর বিএনপি
            </span>
          </div>
        </div>

        <div className="space-y-3  mb-6">
          <InfoRow label="রাজনৈতিক পদবি" value={user.role} />
          <InfoRow label="ইমেইল" value={user.email} />
          <InfoRow label="ফোন নম্বর" value={user.mobile} />
          <InfoRow label="এনআইডি নম্বর" value={user.nid} />
          <InfoRow label="জন্ম তারিখ" value="Not Provided" />{" "}
          {/* You can adjust this if you have the date */}
          <div className="flex gap-8">
            <InfoRow label="ওয়ার্ড" value={user.ward} />
            <InfoRow label="থানা" value={user.thana} />
            <InfoRow label="নির্বাচনী কেন্দ্র" value={user.election_center} />
          </div>
          <InfoRow label="মহানগর" value={user.mohanagar} />
        </div>

        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 px-4 rounded-lg font-medium flex items-center justify-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          আইডি কার্ড ডাউনলোড করুন
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
