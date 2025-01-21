"use client";
import React from "react";
import { FaIdCard, FaUser } from "react-icons/fa";
import { MdHowToVote, MdMessage, MdOutlineApproval } from "react-icons/md";
import { AiFillLike, AiOutlineMessage } from "react-icons/ai";
import { useUserData } from "../hooks/useUserData";
import Link from "next/link";

const DashBoard = () => {
  const { userData, loading, error, isVerifier } = useUserData();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Show waiting screen if user is not verified
  if (!userData?.isVerified) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Please wait for your local leader and admin approval...
        </h2>
      </div>
    );
  }

  // Show dashboard if user is verified
  return (
    <div className="my-40">
      <h1 className="text-center text-4xl font-bold mb-8">
        Welcome, {userData?.fullName || "User"}!
      </h1>
      <div className="grid lg:grid-cols-3">
        {/* card 1 */}
        <Link
          href="/myprofile"
          className="border bg-[#DCFCE7]/50 p-4 py-8 text-center"
        >
          <FaUser className="text-6xl mx-auto" />
          <h1 className="text-4xl font-bold">প্রোফাইল</h1>
        </Link>
        {/* card 2 */}
        <Link
          href="/profileCard"
          className="border bg-[#DCFCE7]/50 p-4 py-8 text-center"
        >
          <FaIdCard className="text-6xl mx-auto" />
          <h1 className="text-4xl font-bold">আইডি কার্ড</h1>
        </Link>
        {/* card 3 */}
        <Link
          href="/noticeBoard"
          className="border bg-[#DCFCE7]/50 p-4 py-8 text-center"
        >
          <MdMessage className="text-6xl mx-auto" />
          <h1 className="text-4xl font-bold">বিজ্ঞপ্তি দেখুন</h1>
        </Link>
        {/* card 4 */}
        <Link
          href="/messageSend"
          className="border bg-[#DCFCE7]/50 p-4 py-8 text-center"
        >
          <AiOutlineMessage className="text-6xl mx-auto" />
          <h1 className="text-4xl font-bold">বার্তা পাঠান</h1>
        </Link>
        {/* card 5 */}
        <Link
          href="/elections"
          className="border bg-[#DCFCE7]/50 p-4 py-8 text-center"
        >
          <AiFillLike className="text-6xl mx-auto" />
          <h1 className="text-4xl font-bold">ভোট দিন</h1>
        </Link>
        {/* card 6 */}
        <Link
          href="/candiDate"
          className="border bg-[#DCFCE7]/50 p-4 py-8 text-center"
        >
          <MdHowToVote className="text-6xl mx-auto" />
          <h1 className="text-4xl font-bold">প্রার্থী হন</h1>
        </Link>
        {/* card 7: Conditional Rendering */}
        {isVerifier && (
          <Link
            href="/approveList"
            className="border bg-[#DCFCE7]/50 p-4 py-8 text-center"
          >
            <MdOutlineApproval className="text-6xl mx-auto" />
            <h1 className="text-4xl font-bold">সদস্য অনুমোদন</h1>
          </Link>
        )}
      </div>
    </div>
  );
};

export default DashBoard;
