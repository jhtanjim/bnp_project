"use client";
import { cn } from "../lib/utils"; // Utility function for combining class names
import { AnimatePresence, motion } from "framer-motion"; // Animation library
import { useState } from "react";

// Main Dofa19 Component
export const Dofa19 = ({ className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to manage hover index

  // Define the items data
  const items = [
    {
      title: "১",
      description:
        "সর্বতোভাবে দেশের স্বাধীনতা, অখণ্ডতা এবং সার্বভৌমত্ব রক্ষা করা।",
    },
    {
      title: "২",
      description:
        "শাসন তন্ত্রের চারটি মূলনীতি অর্থাৎ সর্বশক্তিমান আল্লাহর প্রতি সর্বাত্মক বিশ্বাস ও আস্থা, গণতন্ত্র, জাতীয়তাবাদ, সামাজিক ও অর্থনৈতিক ন্যায়বিচার সমাজতন্ত্র জাতীয় জীবনে সর্বাত্মক প্রতিফলন।",
    },
    {
      title: "৩",
      description:
        "সর্ব উপায়ে নিজেদেরকে একটি আত্মনির্ভরশীল জাতি হিসাবে গঠন করা।",
    },
    {
      title: "৪",
      description:
        "প্রশাসনের সর্বস্তরে, উন্নয়ন কার্যক্রমে ও আইন-শৃঙ্খলা রক্ষার ব্যাপারে জনগণের অংশগ্রহণ নিশ্চিত করা।",
    },
    {
      title: "৫",
      description:
        "সর্বোচ্চ অগ্রাধিকারের ভিত্তিতে কৃষি উন্নয়নের মাধ্যমে গ্রামীণ তথা জাতীয় অর্থনীতিকে জোরদার করা।",
    },
    {
      title: "৬",
      description:
        "দেশকে খাদ্যে স্বয়ংসম্পূর্ণ করা এবং কেউ যেন ক্ষুধার্ত না থাকে তা নিশ্চিত করা।",
    },
    {
      title: "৭",
      description:
        "দেশে কাপড়ের উৎপাদন বাড়িয়ে সকলের জন্য অন্তত ন্যূনতম কাপড় নিশ্চিত করা।",
    },
    {
      title: "৮",
      description: "কোন নাগরিক যেন গৃহহীন না থাকে তার যথাসম্ভব ব্যবস্থা করা।",
    },
    {
      title: "৯",
      description: "দেশকে নিরক্ষরতার অভিশাপ থেকে মুক্ত করা।",
    },
    {
      title: "১০",
      description: "সকল দেশবাসীর জন্য ন্যূনতম চিকিৎসার ব্যবস্থা করা।",
    },
    {
      title: "১১",
      description:
        "সমাজে নারীর যথাযোগ্য মর্যাদা প্রতিষ্ঠা করা এবং যুবসমাজকে সুসংহত করে জাতি গঠনে উদ্বুদ্ধ করা।",
    },
    {
      title: "১২",
      description:
        "দেশের অর্থনৈতিক উন্নয়নে বেসরকারি খাতে প্রয়োজনীয় উৎসাহ দান।",
    },
    {
      title: "১৩",
      description:
        "শ্রমিকদের অবস্থার উন্নতি সাধন এবং উৎপাদন বৃদ্ধির স্বার্থে সুস্থ শ্রমিক-মালিক সম্পর্ক গড়ে তোলা।",
    },
    {
      title: "১৪",
      description:
        "সরকারি চাকুরিজীবীদের মধ্যে জনসেবা ও দেশ গঠনের মনোবৃত্তি উৎসাহিত করা এবং তাদের আর্থিক অবস্থার উন্নয়ন করা।",
    },
    {
      title: "১৫",
      description: "জনসংখ্যা বিস্ফোরণ রোধ করা।",
    },
    {
      title: "১৬",
      description:
        "সকল বিদেশি রাষ্ট্রের সাথে সমতার ভিত্তিতে বন্ধুত্ব গড়ে তোলা এবং মুসলিম দেশগুলোর সাথে সম্পর্ক জোরদার করা।",
    },
    {
      title: "১৭",
      description:
        "প্রশাসন এবং উন্নয়ন ব্যবস্থা বিকেন্দ্রীকরণ এবং স্থানীয় সরকারকে শক্তিশালী করা।",
    },
    {
      title: "১৮",
      description:
        "দুর্নীতিমুক্ত, ন্যায়নীতি ভিত্তিক সমাজ ব্যবস্থা কায়েম করা।",
    },
    {
      title: "১৯",
      description:
        "ধর্ম, গোত্র ও বর্ণ নির্বিশেষে সকল নাগরিকের অধিকার পূর্ণ সংরক্ষণ করা এবং জাতীয় ঐক্য ও সংহতি সুদৃঢ় করা।",
    },
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10", // Tailwind classes for layout
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
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-red-700/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
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
