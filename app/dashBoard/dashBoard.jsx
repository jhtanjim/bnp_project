import React from "react";
import { FaIdCard, FaUser } from "react-icons/fa";
import { MdHowToVote, MdMessage, MdOutlineApproval } from "react-icons/md";
import { AiFillLike, AiOutlineMessage } from "react-icons/ai";

const DashBoard = () => {
  return (
    <div className="my-40">
      <div className="grid lg:grid-cols-3">
        {/* card 1*/}
        <a href="">
          {" "}
          <div className="border bg-[#DCFCE7]/50 p-4 py-8 text-center">
            <FaUser className="text-6xl mx-auto" />

            <h1 className="text-4xl font-bold">Profile</h1>
          </div>
        </a>
        {/* card 2*/}
        <a href="">
          {" "}
          <div className="border bg-[#DCFCE7]/50 p-4 py-8 text-center">
            <FaIdCard className="text-6xl mx-auto" />

            <h1 className="text-4xl font-bold">Id Card</h1>
          </div>
        </a>
        {/* card 3*/}
        <a href="">
          {" "}
          <div className="border bg-[#DCFCE7]/50 p-4 py-8 text-center">
            <MdMessage className="text-6xl mx-auto" />

            <h1 className="text-4xl font-bold">View Notice</h1>
          </div>
        </a>
        {/* card 4*/}
        <a href="">
          {" "}
          <div className="border bg-[#DCFCE7]/50 p-4 py-8 text-center">
            <AiOutlineMessage className="text-6xl mx-auto" />

            <h1 className="text-4xl font-bold">Send Message</h1>
          </div>
        </a>
        {/* card 5*/}
        <a href="">
          {" "}
          <div className="border bg-[#DCFCE7]/50 p-4 py-8 text-center">
            <AiFillLike className="text-6xl mx-auto" />

            <h1 className="text-4xl font-bold">Vote</h1>
          </div>
        </a>
        {/* card 6*/}
        <a href="">
          {" "}
          <div className="border bg-[#DCFCE7]/50 p-4 py-8 text-center">
            <MdHowToVote className="text-6xl mx-auto" />

            <h1 className="text-4xl font-bold">Be a Candidate</h1>
          </div>
        </a>
        {/* card */}
        <a href="">
          {" "}
          <div className="border bg-[#DCFCE7]/50 p-4 py-8 text-center">
            <MdOutlineApproval className="text-6xl mx-auto" />

            <h1 className="text-4xl font-bold">Member Approval</h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default DashBoard;
