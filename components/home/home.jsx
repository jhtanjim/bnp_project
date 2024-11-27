"use client";
import SignIn from "@/app/(auth)/signIn/signIn";
import { BnpDofa } from "@/app/bnpDofa/bnpDofa";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles

const Home = () => {
  return (
    <div>
      {/* ব্যানার */}
      <div className="max-w-screen-2xl mx-4 my-4 rounded-2xl lg:mx-auto overflow-hidden">
        {/* ক্যারাউসেল */}
        <Carousel
          autoPlay
          infiniteLoop
          interval={7000}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <Image
              src="https://images.news18.com/ibnlive/uploads/2024/08/khaleda-zia-2024-08-304c0e136b37c71332f548fe2c8d89f6.png"
              alt="খালেদা জিয়া"
              className="w-full lg:h-[650px] object-cover"
              width={1200}
              height={650}
              priority
            />
          </div>
          <div>
            <Image
              src="https://images.news18.com/ibnlive/uploads/2024/08/khaleda-zia-2024-08-304c0e136b37c71332f548fe2c8d89f6.png"
              alt="খালেদা জিয়া"
              className="w-full lg:h-[650px] object-cover"
              width={1200}
              height={650}
              priority
            />
          </div>
        </Carousel>
      </div>
      {/* search */}
      <div className="max-w-screen-xl lg:mx-auto mx-4 ">
        <div className="flex justify-center items-center space-x-4 my-10">
          <div className="w-full md:w-[90%]">
            <label
              htmlFor="search"
              className="block text-lg font-semibold text-green-600 mb-2"
            >
              সদস্য খুঁজুন
            </label>
            <input
              id="search"
              placeholder="সদস্য খুঁজুন"
              type="text"
              className="border-2 border-green-500 shadow-xl rounded-2xl w-full px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div className="my-auto mt-10 lg:w-[10%]">
            <button className="bg-green-600 text-white p-4 rounded-full hover:bg-red-700  transition duration-300 hover:text-yellow-500">
              <FaSearch size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* নেতা বিভাগ */}

      <div className="max-w-screen-2xl lg:mx-auto mx-4">
        <div className="lg:flex gap-4">
          <div className="w-full">
            <BnpDofa />
          </div>
          <div className="w-full my-auto">
            <SignIn />
          </div>
        </div>
      </div>

      {/* ভিডিও */}
      <div className="mx-4 aspect-w-16 aspect-h-10">
        <iframe
          src="https://www.youtube.com/embed/2tWPVCVSoaQ"
          title="ভিডিও"
          className="w-full h-[500px]"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* উক্তি */}
      <div className="mt-6 text-center bg-[#DCFCE7] py-20">
        <blockquote className="italic text-2xl font-bold">
          “আমাদের মধ্যে শক্তি আছে এবং আমরা কাজ করতে পারি। আমরা নিজেরাই নিজেদের
          টেনে তুলতে পারি। খালি হাতে আমরা বড় কিছু অর্জন করতে পারি।”
        </blockquote>
        <p className="mt-2 font-semibold text-xl">
          শহীদ প্রেসিডেন্ট <span className="text-green-600">জিয়াউর রহমান</span>
        </p>
      </div>

      {/* ভিডিও বিভাগ */}
      <div className="max-w-screen-2xl mx-auto my-8 p-6 rounded-lg bg-white">
        <div className="mt-10">
          <h3 className="text-2xl text-center font-bold">ভিডিও</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/OsbiW19Mpio"
                  title="ভিডিও ১"
                  className="w-full h-80"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="p-4 text-gray-700">
                ভিডিওতে আলোচিত বিষয়ের বিস্তারিত।
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/2tWPVCVSoaQ"
                  title="ভিডিও ২"
                  className="w-full h-80"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="p-4 text-gray-700">আকর্ষণীয় তথ্য এবং বিশ্লেষণ।</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/2tWPVCVSoaQ"
                  title="ভিডিও ২"
                  className="w-full h-80"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="p-4 text-gray-700">আকর্ষণীয় তথ্য এবং বিশ্লেষণ।</p>
            </div>
          </div>
        </div>

        {/* প্রেস রিলিজ বিভাগ */}
        <div className="mt-10">
          <h3 className="text-2xl text-center font-bold">প্রেস রিলিজ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="h-52">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJMpghZFZykt2PzKqdu9azQhEP9n_wQnIIOQ&s"
                  alt="প্রেস রিলিজ ১"
                  className="w-full h-full object-cover"
                  width={500}
                  height={300}
                />
              </div>
              <p className="p-4 text-gray-700">সর্বশেষ আপডেট এবং খবর।</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="h-52">
                <Image
                  src="https://api.bnpbd.org/api/upload/images/mohan-8--8f9e.jpg"
                  alt="প্রেস রিলিজ ২"
                  className="w-full h-full object-cover"
                  width={500}
                  height={300}
                />
              </div>
              <p className="p-4 text-gray-700">
                গুরুত্বপূর্ণ ঘোষণা এবং বিশদ বিবরণ।
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="h-52">
                <Image
                  src="https://api.bnpbd.org/api/upload/images/mohan-8--8f9e.jpg"
                  alt="প্রেস রিলিজ ২"
                  className="w-full h-full object-cover"
                  width={500}
                  height={300}
                />
              </div>
              <p className="p-4 text-gray-700">
                গুরুত্বপূর্ণ ঘোষণা এবং বিশদ বিবরণ।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
