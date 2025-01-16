import React from "react";
import { FaIdCard, FaUser } from "react-icons/fa";
import { MdHowToVote, MdMessage, MdOutlineApproval } from "react-icons/md";
import { AiFillLike, AiOutlineMessage } from "react-icons/ai";
import Link from "next/link";

const DashBoard = () => {
  return (
    <div className="my-40">
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
        {/* card */}
        <Link href="/approveList">
          <div className="border bg-[#DCFCE7]/50 p-4 py-8 text-center">
            <MdOutlineApproval className="text-6xl mx-auto" />
            <h1 className="text-4xl font-bold">সদস্য অনুমোদন</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashBoard;
