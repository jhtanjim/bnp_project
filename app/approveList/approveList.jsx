import React from "react";

const ApproveList = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 my-24">
      <h2 className="text-2xl font-semibold mb-4 text-center">Approval List</h2>
      <div className="border rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead className="bg-green-100">
            <tr className="">
              <th className="text-center border p-2 ">Name</th>
              <th className="p-2 border-collapse text-center">Approval</th>
            </tr>
          </thead>
          <tbody className="border bg-green-50 text-center">
            {[1, 2, 3].map((row) => (
              <tr className="" key={row}>
                <td className="border  p-2">John Doe</td>
                <td className="border   p-2">
                  <div className="flex justify-center gap-2">
                    <button className=" px-4 py-1 text-sm bg-green-500 hover:bg-green-600 text-white rounded">
                      Approve
                    </button>
                    <button className="px-4 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded">
                      Cancel
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-center items-center gap-2">
        <button className="px-2 py-1 border rounded hover:bg-gray-100">
          &lt;
        </button>
        <button className="px-2 py-1 border rounded bg-blue-500 text-white">
          1
        </button>
        <button className="px-2 py-1 border rounded hover:bg-gray-100">
          2
        </button>
        <button className="px-2 py-1 border rounded hover:bg-gray-100">
          3
        </button>
        <span>...</span>
        <button className="px-2 py-1 border rounded hover:bg-gray-100 mb-12">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ApproveList;
