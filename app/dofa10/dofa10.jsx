"use client";
import { cn } from "../lib/utils"; // Utility function for combining class names
import { useState } from "react";

// Main Dofa10 Component
export const Dofa10 = ({ className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to manage hover index

  // Define the items data
  const items = [
    {
      title: "১",
      description: "জাতীয় সংসদ বিলুপ্ত করে সরকাররের পদত্যাগ।",
    },
    {
      title: "২",
      description:
        "১৯৯৬ সালে সংবিধানের ৫৮ অনুচ্ছেদের খ, গ এবং ঘ ধারা অনুসারে একটি নিরপেক্ষ তত্ত্বাবধায়ক সরকার/ অন্তর্বর্তীকালীন তত্ত্বাবধায়ক সরকার গঠন।",
    },
    {
      title: "৩",
      description:
        "তত্ত্বাবধায়ক সরকারকে অবশ্যই একটি নিরপেক্ষ নির্বাচন কমিশন গঠন করতে হবে, যা সব দলের জন্য লেভেল প্লেইং ফিল্ড নিশ্চিত করবে; স্থানীয় সরকার নির্বাচনে ইভিএম ও দলীয় প্রতীকের ব্যবহার বাতিল করা হবে।",
    },
    {
      title: "৪",
      description:
        "খালেদা জিয়াসহ বিরোধী দলের সব নেতা-কর্মী, সাংবাদিক ও ধর্মীয় আলেমদের সাজা বাতিল করতে হবে; ১০ দফা দাবি অনুযায়ী তাদের বিরুদ্ধে দায়ের করা সব ‘মিথ্যা মামলা’ প্রত্যাহার করতে হবে, বাকস্বাধীনতা নিশ্চিত করতে হবে, স্বৈরাচারীভাবে বিরোধী দলের নেতা-কর্মীদের গ্রেপ্তার বন্ধ করতে হবে।",
    },
    {
      title: "৫",
      description:
        "ডিজিটাল নিরাপত্তা আইন ২০১৮, সন্ত্রাসবিরোধী আইন ২০০৯ এবং বিশেষ ক্ষমতা আইন ১৯৭৪ সহ সমস্ত কালো আইন প্রত্যাহার করতে হবে।",
    },
    {
      title: "৬",
      description:
        "বিদ্যুৎ, জ্বালানি, গ্যাস, পানিসহ জনসেবার মূল্য বৃদ্ধির গণবিরোধী সিদ্ধান্ত বাতিল করতে হবে।",
    },
    {
      title: "৭",
      description:
        "নিত্যপ্রয়োজনীয় পণ্যের দাম সাধারণ মানুষের ক্রয়ক্ষমতার মধ্যে নিয়ে আসা এবং নিত্যপ্রয়োজনীয় পণ্যের বাজারকে ডি-সিন্ডিকেট করা।",
    },
    {
      title: "৮",
      description:
        "গত ১৫ বছরে গুমের শিকার সকল নাগরিকদের উদ্ধার এবং বিচারবহির্ভূত হত্যা ও রাষ্ট্রীয় নির্যাতনের প্রতিটি ঘটনার আইনানুগ বিচারের ব্যবস্থা ও শাস্তি নিশ্চিত করা এবং ধর্মীয় সংখ্যালঘুদের বাড়ি-ঘর, উপসানালয় ভাঙচুর ও সম্পত্তি দখলের জন্য দায়ীদের বিরুদ্ধে শাস্তি নিশ্চিত করা।",
    },
    {
      title: "৯",
      description:
        "গত ১৫ বছর বিদেশে অর্থ-পাচার, ব্যাংকিং ও আর্থিক খাত, বিদ্যুৎ-জ্বালানি খাত ও শেয়ার বাজারসহ রাষ্ট্রীয় সকল ক্ষেত্রে সংঘটিত দুর্নীতি চিহ্নিত করতে একটি কমিশন গঠন।",
    },
    {
      title: "১০",
      description:
        "আইন-শৃঙ্খলা রক্ষাকারী বাহিনী, প্রশাসন ও বিচার বিভাগকে প্রাতিষ্ঠানিক শৃঙ্খলা ও পেশাদারিত্বের সঙ্গে দায়িত্ব পালনের উপযোগী করতে সরকারি হস্তক্ষেপ বন্ধ করে স্বাধীনভাবে কাজ করার সুযোগ দেয়া।",
    },
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", // Tailwind classes for layout
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className={`absolute inset-0 h-full w-full ${
              hoveredIndex === idx
                ? "bg-neutral-200 dark:bg-red-700/[0.8]"
                : "bg-transparent"
            } block rounded-3xl transition-opacity duration-150`}
          />
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

// Card Component for each item
export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-[400px] w-full p-4 overflow-hidden bg-green-800 border border-transparent dark:border-yellow-300/[0.2] group-hover:border-yellow-300 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

// CardTitle Component for the title of each card
export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-red-500 font-bold tracking-wide mt-4 text-3xl bg-green-200 flex justify-center p-2 rounded-full",
        className
      )}
    >
      {children}
    </h4>
  );
};

// CardDescription Component for the description of each card
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-yellow-400 font-bold tracking-wide leading-relaxed text-lg",
        className
      )}
    >
      {children}
    </p>
  );
};
