"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const ApproveList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [approvingUserId, setApprovingUserId] = useState(null);
  const usersPerPage = 10;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://bnp-api-9oht.onrender.com/user");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      const unverifiedUsers =
        data.users?.filter((user) => !user.isVerified) || [];
      setUsers(unverifiedUsers);
      setError(null);
    } catch (error) {
      setError("Error fetching users. Please try again later.");
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const approveUser = async (userId) => {
    setApprovingUserId(userId);
    try {
      const response = await fetch(
        `https://bnp-api-9oht.onrender.com/user/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isVerified: true }),
        }
      );

      if (!response.ok) {
        const responseBody = await response.text();
        console.error("Server response:", responseBody);
        throw new Error(`Failed to approve user. Status: ${response.status}`);
      }

      const updatedUser = await response.json();

      // Optimistically update the UI
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      toast.success(
        `User ${updatedUser.fullName || userId} approved successfully`
      );
    } catch (error) {
      console.error("Error approving user:", error.message);
      toast.error(`Failed to approve user: ${error.message}`);
    } finally {
      setApprovingUserId(null);
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }

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
