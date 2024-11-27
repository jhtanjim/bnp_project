import React from "react";
import { Dofa19 } from "./dofa19";

const page = () => {
  return (
    <div className=" bg-[rgb(179,221,196)]">
      <div className="max-w-screen-xl lg:mx-auto mx-4 bg-[rgb(179,221,196)]">
        <h1 className="text-center text-2xl font-bold tracking-wider py-12 text-red-700">
          শহীদ প্রেসিডেন্ট জিয়াউর রহমান দেশের আর্থ-সামাজিক মুক্তির লক্ষে ১৯ দফা
          কর্মসূচি প্রনয়ন করেছিলেন।
        </h1>
        <Dofa19 />
      </div>
    </div>
  );
};

export default page;
