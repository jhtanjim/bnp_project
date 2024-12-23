"use client";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const MyProfile = () => {
  const { user } = useAuth(); // Fetching user data from AuthContext
  console.log(user);

  // Initialize profileData state with user data from context
  const [profileData, setProfileData] = useState({
    name: "",
    id: "",
    email: "",
    phone: "",
    nid: "",
    birthDate: "",
    politicalPosition: "",
    ward: "",
    thana: "",
    mahanagar: "",
    PollingCenter: "",
    image: "",
  });

  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.full_name,
        id: user.id,
        email: user.email,
        phone: user.mobile,
        nid: user.nid,
        birthDate: "Not Provided", // Update if the field is available
        politicalPosition: user.role,
        ward: user.ward,
        thana: user.thana,
        mahanagar: user.mohanagar,
        PollingCenter: user.election_center,
        image: user.image,
      });
    }
  }, [user]);

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileData((prevData) => ({ ...prevData, image: imageUrl }));
    }
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
                src={profileData.image || "/default-profile.png"} // Fallback image
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold">{profileData.name}</h2>
          </div>

          <div className="space-y-2">
            <InfoRow label="আইডি" value={profileData.id} />
            <InfoRow label="ইমেইল" value={profileData.email} />
            <InfoRow label="ফোন নম্বর" value={profileData.phone} />
            <InfoRow label="এনআইডি নম্বর" value={profileData.nid} />
            <InfoRow label="জন্ম তারিখ" value={profileData.birthDate} />
            <InfoRow
              label="রাজনৈতিক পদবি"
              value={profileData.politicalPosition}
            />
            <InfoRow label="ওয়ার্ড" value={profileData.ward} />
            <InfoRow label="থানা" value={profileData.thana} />
            <InfoRow label="মহানগর" value={profileData.mahanagar} />
            <InfoRow
              label="নির্বাচনী কেন্দ্র"
              value={profileData.PollingCenter}
            />
          </div>
        </div>

        <div className="px-6 pb-4">
          <button
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium"
            onClick={() => setIsEditing(true)}
          >
            প্রোফাইল সম্পাদনা করুন
          </button>
        </div>

        {isEditing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md">
              <h3 className="text-xl font-bold mb-4">প্রোফাইল সম্পাদনা</h3>
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
                              key
                                .slice(1)
                                .replace(/([A-Z])/g, " $1")
                                .replace(/-/g, " ")}
                          </label>
                          {key === "image" ? (
                            <input
                              type="file"
                              id={key}
                              name={key}
                              accept="image/*"
                              onChange={handleImageChange}
                              className="border rounded-lg p-2"
                            />
                          ) : (
                            <input
                              id={key}
                              name={key}
                              value={value}
                              onChange={(e) =>
                                setProfileData((prevData) => ({
                                  ...prevData,
                                  [key]: e.target.value,
                                }))
                              }
                              className="border rounded-lg p-2"
                            />
                          )}
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
                    বাতিল
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                  >
                    পরিবর্তন সংরক্ষণ করুন
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

export default MyProfile;
