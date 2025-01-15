"use client";
import React, { useEffect, useState } from "react";

const Vote = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [votedCandidates, setVotedCandidates] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [elections, setElections] = useState(null);

  // Simulated user token (replace with actual authentication token)
  const userToken = "user-token-from-login";

  useEffect(() => {
    // Fetch the election data
    fetch("https://bnp-api-9oht.onrender.com/election/summary")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setElections(data); // Store the fetched data in state
      })
      .catch((error) => console.error("Error fetching elections:", error));
  }, []);

  // Handle voting
  const handleVote = async (postId, candidateId) => {
    try {
      const response = await fetch(
        "https://bnp-api-9oht.onrender.com/election/vote",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify({ postId, candidateId }),
        }
      );

      if (response.ok) {
        setSuccessMessage("আপনার ভোট সফলভাবে গৃহীত হয়েছে!");
        setVotedCandidates((prev) => [...prev, candidateId]);
      } else {
        throw new Error("Voting failed");
      }
    } catch (error) {
      console.error("Voting failed:", error);
      alert("ভোট দিতে ব্যর্থ হয়েছে। আবার চেষ্টা করুন।");
    }
  };

  // Check if elections data is loaded
  if (!elections) return <div>Loading...</div>;

  // Get the current post for the current page
  const currentPost = elections[currentPage - 1]?.posts || [];

  return (
    <div className="font-sans text-center my-20">
      {/* Header */}
      <h3 className="text-red-600 text-lg font-semibold">
        আপনার প্রার্থী নির্বাচন করুন
      </h3>
      {currentPost.length > 0 && (
        <>
          <h4 className="text-lg font-medium mt-2">
            {currentPost[0].name} প্রার্থী
          </h4>

          {/* Success Message */}
          {successMessage && (
            <p className="text-green-600 font-bold my-3">{successMessage}</p>
          )}

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
              {currentPost.map((candidate, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2 bg-green-100">
                    {candidate.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 bg-green-100">
                    <button
                      onClick={() =>
                        handleVote(currentPost[0].id, candidate.id)
                      }
                      disabled={votedCandidates.includes(candidate.id)}
                      className={`px-4 py-2 rounded ${
                        votedCandidates.includes(candidate.id)
                          ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                          : "bg-green-500 text-white hover:bg-green-600"
                      }`}
                    >
                      {votedCandidates.includes(candidate.id)
                        ? "ভোট দেওয়া হয়েছে"
                        : "ভোট দিন"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Footer */}
      <div className="mt-5">
        <p className="mb-3">
          অন্যান্য পোস্টের প্রার্থীদের জন্য ভোট দিতে পরবর্তী পৃষ্ঠায় যান
        </p>
        <div className="space-x-2">
          {/* Pagination */}
          {elections.map((election, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded border ${
                currentPage === index + 1 ? "bg-gray-200" : "bg-white"
              } hover:bg-gray-300`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vote;
