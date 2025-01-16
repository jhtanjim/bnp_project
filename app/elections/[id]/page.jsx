"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function ElectionDetail() {
  const [electionDetail, setElectionDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [votedCandidates, setVotedCandidates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const params = useParams();
  const id = params.id;

  const userToken = localStorage.getItem("token");
  console.log(userToken);

  useEffect(() => {
    if (!id) return;

    // Fetch election details
    fetch(`https://bnp-api-9oht.onrender.com/election/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setElectionDetail(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching election detail:", error);
        setErrorMessage(
          "ইলেকশন ডেটা লোড করতে ব্যর্থ হয়েছে। পুনরায় চেষ্টা করুন।"
        );
        setLoading(false);
      });

    // Check for previously voted candidates from localStorage
    const voted = JSON.parse(localStorage.getItem("votedCandidates") || "[]");
    setVotedCandidates(voted);
  }, [id]);

  const handleVote = async (postId, candidateId) => {
    try {
      setErrorMessage("");
      setSuccessMessage("");

      const response = await fetch(
        "https://bnp-api-9oht.onrender.com/election/vote",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify({ postId: postId, candidateId: candidateId }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage("আপনার ভোট সফলভাবে গৃহীত হয়েছে!");

        // Save voted candidate in localStorage and state
        const updatedVotedCandidates = [...votedCandidates, candidateId];
        setVotedCandidates(updatedVotedCandidates);
        localStorage.setItem(
          "votedCandidates",
          JSON.stringify(updatedVotedCandidates)
        );
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Voting failed");
      }
    } catch (error) {
      console.error("Voting failed:", error);
      setErrorMessage(`ভোট দিতে ব্যর্থ হয়েছে: ${error.message}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <p className="text-red-600">{errorMessage}</p>;
  }

  if (!electionDetail) {
    return <p className="text-red-600">ডেটা পাওয়া যায়নি।</p>;
  }

  // Get the posts for the current page (currentPage)
  const currentPost = electionDetail.posts[currentPage - 1] || {};

  return (
    <div className="font-sans text-center my-20">
      {/* Header */}
      <h3 className="text-red-600 text-lg font-semibold">
        আপনার প্রার্থী নির্বাচন করুন
      </h3>

      {currentPost &&
        currentPost.candidates &&
        currentPost.candidates.length > 0 && (
          <>
            <h4 className="text-lg font-medium mt-2">
              {currentPost.name} প্রার্থী
            </h4>

            {/* Success Message */}
            {successMessage && (
              <p className="text-green-600 font-bold my-3">{successMessage}</p>
            )}

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-600 font-bold my-3">{errorMessage}</p>
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
                {currentPost.candidates.map((candidate, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2 bg-green-100">
                      {candidate.fullName}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 bg-green-100">
                      <button
                        onClick={() => handleVote(currentPost.id, candidate.id)}
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
          {electionDetail.posts.map((election, index) => (
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
}
