"use client";
import Image from "next/image";

import React, { useState } from "react";

const MyProfile = () => {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    id: "444001",
    email: "info@gmail.com",
    phone: "+8801857373883",
    nid: "340 4747 38",
    birthDate: "01/02/1998",
    politicalPosition: "Example",
    ward: "07",
    thana: "Chandgaon",
    mahanagar: "Chattogram",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAGlcoNry_9VmU7efhCQnpCnNAqKL_tVVYw&s",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = {};
    for (const [key, value] of formData.entries()) {
      updatedData[key] = value;
    }
    setProfileData(updatedData);
    setIsEditing(false);
  };
  const InfoRow = ({ label, value }) => (
    <div className="flex justify-between items-center py-2 border-b border-gray-300">
      <span className="text-gray-600 font-bold">{label} :</span>
      <span className="text-gray-800">{value}</span>
    </div>
  );

  return (
    <div className="my-8 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#e6e6e6] rounded-3xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src={profileData.image}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold">{profileData.name}</h2>
          </div>

          <div className="space-y-2">
            <InfoRow className="" label="ID" value={profileData.id} />
            <InfoRow label="Email" value={profileData.email} />
            <InfoRow label="Phone Number" value={profileData.phone} />
            <InfoRow label="NID Number" value={profileData.nid} />
            <InfoRow label="Birth date" value={profileData.birthDate} />
            <InfoRow
              label="Political Position"
              value={profileData.politicalPosition}
            />
            <InfoRow label="Ward" value={profileData.ward} />
            <InfoRow label="Thana" value={profileData.thana} />
            <InfoRow label="Mahanagar" value={profileData.mahanagar} />
          </div>
        </div>

        <div className="px-6 pb-4">
          <button
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium"
            onClick={() => setIsEditing(true)}
          >
            Edit profile
          </button>
        </div>

        {isEditing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md">
              <h3 className="text-xl font-bold mb-4">Edit Profile</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {Object.entries(profileData)
                  .reduce((acc, [key, value], index) => {
                    const isEven = index % 2 === 0;
                    if (isEven) {
                      acc.push([[key, value]]);
                    } else {
                      acc[acc.length - 1].push([key, value]);
                    }
                    return acc;
                  }, [])
                  .map((pair, rowIndex) => (
                    <div key={rowIndex} className="grid grid-cols-2 gap-4">
                      {pair.map(([key, value]) => (
                        <div key={key} className="flex flex-col gap-2">
                          <label htmlFor={key} className="font-medium">
                            {key.charAt(0).toUpperCase() +
                              key.slice(1).replace(/([A-Z])/g, " $1")}
                          </label>
                          <input
                            id={key}
                            name={key}
                            defaultValue={value}
                            className="border rounded-lg p-2"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                <div className="flex justify-end gap-4 pt-4">
                  <button
                    type="button"
                    className="px-4 py-2 border rounded-lg"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-2 border-b border-gray-300">
    <span className="text-gray-600">{label} :</span>
    <span className="text-gray-800">{value}</span>
  </div>
);

export default MyProfile;
