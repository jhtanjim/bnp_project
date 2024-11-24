import React from "react";

const CandiDate = () => {
  return (
    <div className="max-w-3xl mx-auto my-12 p-4">
      {/* Title */}
      <h1 className="text-center text-xl font-semibold text-red-600 mb-6">
        Select your post to be candidate
      </h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-green-500">
          <thead>
            <tr>
              <th className="border border-green-500 px-4 py-2 bg-green-200 text-left">
                Post Name
              </th>
              <th className="border border-green-500 px-4 py-2 bg-green-200 text-center">
                Select Post
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td className="border border-green-500 px-4 py-2">
                Vice President
              </td>
              <td className="border border-green-500 px-4 py-2 text-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Select
                </button>
              </td>
            </tr>
            {/* Row 2 */}
            <tr>
              <td className="border border-green-500 px-4 py-2">
                Joint Secretary
              </td>
              <td className="border border-green-500 px-4 py-2 text-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Select
                </button>
              </td>
            </tr>
            {/* Row 3 */}
            <tr>
              <td className="border border-green-500 px-4 py-2">Member</td>
              <td className="border border-green-500 px-4 py-2 text-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Select
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandiDate;
