"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import Next.js Link component

const Elections = () => {
  const [elections, setElections] = useState([]); // State to store elections data
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const [loading, setLoading] = useState(true); // State to show loading

  useEffect(() => {
    // Fetch the election data
    fetch("https://bnp-api-9oht.onrender.com/election/summary")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setElections(data); // Store the fetched data in state
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching elections:", error);
        setErrorMessage(
          "ইলেকশন ডেটা লোড করতে ব্যর্থ হয়েছে। পুনরায় চেষ্টা করুন।"
        );
        setLoading(false); // Stop loading even if there's an error
      });
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "red" }}>চলমান নির্বাচন সমূহ</h1>

      {loading ? (
        <p style={{ textAlign: "center", color: "blue" }}>তথ্য লোড হচ্ছে...</p>
      ) : errorMessage ? (
        <p style={{ textAlign: "center", color: "red" }}>{errorMessage}</p>
      ) : elections.length > 0 ? (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#90ee90", textAlign: "left" }}>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                প্রার্থীর নাম
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                নির্বাচন
              </th>
            </tr>
          </thead>
          <tbody>
            {elections.map((election) =>
              election.posts.map((post) => (
                <tr key={post.id} style={{ backgroundColor: "#d4f4d4" }}>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {post.name}
                  </td>

                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      textAlign: "center",
                    }}
                  >
                    <Link
                      href={`/election/${election.id}`} // Dynamically link to the specific election ID
                      style={{
                        padding: "10px 20px",
                        backgroundColor: "#28a745",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        textDecoration: "none",
                      }}
                    >
                      ভোট দিন
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: "center", color: "red" }}>
          কোন তথ্য পাওয়া যায়নি।
        </p>
      )}
    </div>
  );
};

export default Elections;
