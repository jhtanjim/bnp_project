"use client";
import React, { useEffect, useState } from "react";
import { FaIdCard, FaUser } from "react-icons/fa";
import { MdHowToVote, MdMessage, MdOutlineApproval } from "react-icons/md";
import { AiFillLike, AiOutlineMessage } from "react-icons/ai";
import Link from "next/link";

const DashBoard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVerifier, setIsVerifier] = useState();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://bnp-api-9oht.onrender.com/user/me",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        console.log(data);
        setUserData(data);
        setIsVerifier(data?.roles.includes("VERIFIER"));
        console.log(isVerifier);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);
  console.log(isVerifier);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="my-40">
      <h1 className="text-center text-4xl font-bold mb-8">
        Welcome, {userData?.fullName || "User"}!
      </h1>
      <div className="grid lg:grid-cols-3">
        {/* card 1 */}
        <Link href="/myprofile">
          <div className="border bg-[#DCFCE7]/50 p-4 py-8 text-center">
            <FaUser className="text-6xl mx-auto" />
            <h1 className="text-4xl font-bold">প্রোফাইল</h1>
          </div>
        </Link>
        {/* card 2 */}
        <Link href="/profileCard">
          <div className="border bg-[#DCFCE7]/50 p-4 py-8 text-center">
            <FaIdCard className="text-6xl mx-auto" />
            <h1 className="text-4xl font-bold">আইডি কার্ড</h1>
          </div>
        </Link>
        {/* card 3 */}
        <Link href="/noticeBoard">
          <div className="border bg-[#DCFCE7]/50 p-4 py-8 text-center">
            <MdMessage className="text-6xl mx-auto" />
            <h1 className="text-4xl font-bold">বিজ্ঞপ্তি দেখুন</h1>
          </div>
        </Link>
        {/* card 4 */}
        <Link href="/messageSend">
          <div className="border bg-[#DCFCE7]/50 p-4 py-8 text-center">
            <AiOutlineMessage className="text-6xl mx-auto" />
            <h1 className="text-4xl font-bold">বার্তা পাঠান</h1>
          </div>
        </Link>
        {/* card 5 */}
        <Link href="/elections">
          <div className="border bg-[#DCFCE7]/50 p-4 py-8 text-center">
            <AiFillLike className="text-6xl mx-auto" />
            <h1 className="text-4xl font-bold">ভোট দিন</h1>
          </div>
        </Link>
        {/* card 6 */}
        <Link href="/candiDate">
          <div className="border bg-[#DCFCE7]/50 p-4 py-8 text-center">
            <MdHowToVote className="text-6xl mx-auto" />
            <h1 className="text-4xl font-bold">প্রার্থী হন</h1>
          </div>
        </Link>
        {/* card 7: Conditional Rendering */}
        {isVerifier && (
          <Link href="/approveList">
            <div className="border bg-[#DCFCE7]/50 p-4 py-8 text-center">
              <MdOutlineApproval className="text-6xl mx-auto" />
              <h1 className="text-4xl font-bold">সদস্য অনুমোদন</h1>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default DashBoard;
