import React from "react";

const Vote = () => {
  return (
    <div className="font-sans text-center my-20">
      {/* Header */}
      <h3 className="text-red-600 text-lg font-semibold">
        আপনার প্রার্থী নির্বাচন করুন
      </h3>
      <h4 className="text-lg font-medium mt-2">ভাইস প্রেসিডেন্ট প্রার্থী</h4>

      {/* Table */}
      <table className="mx-auto mt-5 border-collapse w-3/5">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 bg-green-300">
              প্রার্থীর নাম
            </th>
            <th className="border border-gray-300 px-4 py-2 bg-green-300">
              ভোট দিন
            </th>
          </tr>
        </thead>
        <tbody>
          {["John Doe", "Jane Doe", "Sam Smith"].map((candidate, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2 bg-green-100">
                {candidate}
              </td>
              <td className="border border-gray-300 px-4 py-2 bg-green-100">
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                  ভোট দিন
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div className="mt-5">
        <p className="mb-3">
          অন্যান্য পোস্টের প্রার্থীদের জন্য ভোট দিতে পরবর্তী পৃষ্ঠায় যান
        </p>
        <div className="space-x-2">
          {/* Pagination */}
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`px-3 py-1 rounded border ${
                page === 1 ? "bg-gray-200" : "bg-white"
              } hover:bg-gray-300`}
            >
              {page}
            </button>
          ))}
          <button className="px-3 py-1 rounded border bg-white hover:bg-gray-300">
            ...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vote;
