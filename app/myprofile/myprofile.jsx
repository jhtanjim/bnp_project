"use client";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import React, { useState } from "react";

const MyProfile = () => {
  const { user } = useAuth();
  console.log(user);
  const [profileData, setProfileData] = useState({
    name: "জন ডো",
    id: "444001",
    email: "info@gmail.com",
    phone: "+8801857373883",
    nid: "340 4747 38",
    birthDate: "01/02/1998",
    politicalPosition: "যুবদল",
    ward: "ওয়ার্ড ১",
    thana: "বন্দর",
    mahanagar: "চট্টগ্রাম মহানগর",
    PollingCenter: "কেন্দ্র ১",
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
                src={profileData.image}
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
                          <label htmlFor="{key} " className="font-medium">
                            {key.charAt(0).toUpperCase() +
                              key
                                .slice(1)
                                .replace(/([A-Z])/g, " $1")
                                .replace(/-/g, " ")}
                          </label>
                          {key === "politicalPosition" ? (
                            <select
                              id={key}
                              name="{key}"
                              defaultValue={value}
                              className="border rounded-lg p-2"
                            >
                              <option value="যুবদল">যুবদল</option>
                              <option value="বিএনপি">বিএনপি</option>
                              <option value="ছাত্রদল">ছাত্রদল</option>
                            </select>
                          ) : key === "ward" ? (
                            <select
                              id={key}
                              name={key}
                              defaultValue={value}
                              className="border rounded-lg p-2"
                            >
                              <option value="ওয়ার্ড ১">ওয়ার্ড ১</option>
                              <option value="ওয়ার্ড ২">ওয়ার্ড ২</option>
                              <option value="ওয়ার্ড ৩">ওয়ার্ড ৩</option>
                            </select>
                          ) : key === "thana" ? (
                            <select
                              id={key}
                              name={key}
                              defaultValue={value}
                              className="border rounded-lg p-2"
                            >
                              <option value="বন্দর">বন্দর</option>
                              <option value="কোতোয়ালী">কোতোয়ালী</option>
                              <option value="কুলশী">কুলশী</option>
                            </select>
                          ) : key === "mahanagar" ? (
                            <select
                              id={key}
                              name={key}
                              defaultValue={value}
                              className="border rounded-lg p-2"
                            >
                              <option value="চট্টগ্রাম মহানগর">
                                চট্টগ্রাম মহানগর
                              </option>
                              <option value="চট্টগ্রাম উত্তর জেলা">
                                চট্টগ্রাম উত্তর জেলা
                              </option>
                              <option value="চট্টগ্রাম দক্ষিণ জেলা">
                                চট্টগ্রাম দক্ষিণ জেলা
                              </option>
                            </select>
                          ) : key === "PollingCenter" ? (
                            <select
                              id={key}
                              name={key}
                              defaultValue={value}
                              className="border rounded-lg p-2"
                            >
                              <option value="কেন্দ্র ১">কেন্দ্র ১</option>
                              <option value="কেন্দ্র ২">কেন্দ্র ২</option>
                              <option value="কেন্দ্র ৩">কেন্দ্র ৩</option>
                            </select>
                          ) : key === "image" ? (
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
                              defaultValue={value}
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
