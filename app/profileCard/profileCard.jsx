import React from "react";
import Image from "next/image";

const ProfileCard = () => {
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
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO17hg6KvLlweeZWN0LCEdi-OXM9qGpbQ9w&s"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-gray-600">ID : 444001</p>
            </div>
          </div>

          <div className=" items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Bangladesh_Nationalist_Party.svg"
              alt="Logo"
              className="h-12 w-12 mx-auto"
            />
            <span className=" font-bold text-green-800">BNP Chattogram</span>
          </div>
        </div>

        <div className="space-y-3  mb-6">
          <InfoRow label="Political Position" value="Example" />
          <InfoRow label="Phone Number" value="+8801857373883" />
          <InfoRow label="NID Number" value="340 4747 38" />
          <InfoRow label="Birth date" value="01/02/1998" />
          <div className="flex gap-8">
            <InfoRow label="Ward" value="07" />
            <InfoRow label="Thana" value="Chandgaon" />
          </div>
          <InfoRow label="Mahanagar" value="Chattogram" />
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
          Download ID card
        </button>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex items-center">
    <span className="text-gray-700">{label} : </span>
    <span className="ml-2 text-gray-900">{value}</span>
  </div>
);

export default ProfileCard;
