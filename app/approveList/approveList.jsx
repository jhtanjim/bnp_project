"use client";
import React, { useEffect, useState } from "react";

const ApproveList = () => {
  const [users, setUsers] = useState([]);
  const [approvingUserId, setApprovingUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const userToken = localStorage.getItem("token");
  // console.log(userToken);
  // Calculate total pages based on fetched data length and usersPerPage
  const totalPages = Math.ceil(users.length / usersPerPage);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://bnp-api-9oht.onrender.com/user");
      const data = await response.json();
      if (response.ok) {
        const unverifiedUsers = data.users.filter(
          (user) => user.isVerified === false
        );
        setUsers(unverifiedUsers);
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const approveUser = async (userId) => {
    setApprovingUserId(userId);
    try {
      const response = await fetch(
        `https://bnp-api-9oht.onrender.com/user/${userId}/verify`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify({ isVerified: true }),
        }
      );

      // Log response for debugging
      console.log("Response status:", response.status);
      const responseBody = await response.json();
      console.log("Response body:", responseBody);

      if (response.ok) {
        // Update the local state to reflect the change
        setUsers(users.filter((user) => user.id !== userId));
      } else {
        console.error("Failed to approve user:", responseBody);
      }
    } catch (error) {
      console.error("Error approving user:", error);
    } finally {
      setApprovingUserId(null);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination: slice users to show only the current page's users
  const currentUsers = users.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-4 my-24">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        অনুমোদন তালিকা
      </h2>
      {users.length === 0 ? (
        <p className="text-center">No unverified users found.</p>
      ) : (
        <>
          <div className="border rounded-lg overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-100">
                <tr>
                  <th className="text-center border p-2">নাম</th>
                  <th className="text-center border p-2">ইমেইল</th>
                  <th className="text-center border p-2">মোবাইল</th>
                  <th className="text-center border p-2">এনআইডি</th>
                  <th className="text-center border p-2">অনুমোদন</th>
                </tr>
              </thead>
              <tbody className="border bg-green-50 text-center">
                {currentUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="border p-2">{user.fullName || "N/A"}</td>
                    <td className="border p-2">{user.email || "N/A"}</td>
                    <td className="border p-2">{user.mobile || "N/A"}</td>
                    <td className="border p-2">{user.nid || "N/A"}</td>
                    <td className="border p-2">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => approveUser(user.id)}
                          className={`px-4 py-1 text-sm rounded ${
                            approvingUserId === user.id
                              ? "bg-gray-400"
                              : "bg-green-500 hover:bg-green-600 text-white"
                          }`}
                          disabled={approvingUserId === user.id}
                        >
                          {approvingUserId === user.id
                            ? "Approving..."
                            : "অনুমোদন"}
                        </button>
                        <button className="px-4 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded">
                          বাতিল
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-center items-center gap-2">
            <button
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50"
              aria-label="Previous page"
            >
              Previous
            </button>
            <span className="px-4 py-2 border rounded bg-blue-500 text-white">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50"
              aria-label="Next page"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ApproveList;
