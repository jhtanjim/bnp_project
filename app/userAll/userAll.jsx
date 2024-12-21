"use client";
import React, { useEffect, useState } from "react";

const UserAll = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://bnp-api-9oht.onrender.com/user")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          User List
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users.length > 0 ? (
            users.map((user) => (
              <div
                key={user.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={
                    user.image === "[object Object]"
                      ? "https://via.placeholder.com/150"
                      : user.image
                  }
                  alt={user.fullName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-700">
                    {user.fullName}
                  </h2>
                  <p className="text-sm text-gray-500">
                    <strong>Role:</strong> {user.role}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Mobile:</strong> {user.mobile}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Election Center:</strong> {user.electionCenter}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Mohanagar:</strong> {user.mohanagar}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Thana:</strong> {user.thana}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Ward:</strong> {user.ward}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-xl col-span-full">
              Loading users...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAll;
