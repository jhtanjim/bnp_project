// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { useAuth } from "@/contexts/AuthContext";

// export default function Elections() {
//   const { user, userInformation } = useAuth(); // Extract user data
//   console.log(userInformation);
//   const [elections, setElections] = useState([]);
//   const [filteredElections, setFilteredElections] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(true);
//   // console.log(user);
//   useEffect(() => {
//     fetch("https://bnp-api-9oht.onrender.com/election/summary")
//       .then((res) => res.json())
//       .then((data) => {
//         setElections(data);
//         setLoading(false);

//         const userWardId = user?.wardId;
//         const userThanaId = user?.thanaId;
//         const userMohanagarId = user?.mohanagarId;

//         if (userWardId) {
//           // Filter elections with matching wardId for WARD level
//           const matchedElections = data.filter(
//             (election) =>
//               (election.level === "WARD" && election.wardId === userWardId) ||
//               election.level !== "WARD"
//           );
//           setFilteredElections(matchedElections);
//         } else if (userThanaId) {
//           // Filter elections with matching thanaId for THANA level
//           const matchedElections = data.filter(
//             (election) =>
//               (election.level === "THANA" &&
//                 election.thanaId === userThanaId) ||
//               election.level !== "THANA"
//           );
//           setFilteredElections(matchedElections);
//         } else if (userMohanagarId) {
//           // Filter elections with matching mohanagarId for MOHANAGAR level
//           const matchedElections = data.filter(
//             (election) =>
//               (election.level === "MOHANAGAR" &&
//                 election.mohanagarId === userMohanagarId) ||
//               election.level !== "MOHANAGAR"
//           );
//           setFilteredElections(matchedElections);
//         } else {
//           // If no specific level matches, show all elections (or those with no level-specific ID)
//           const matchedElections = data.filter(
//             (election) =>
//               !election.wardId && !election.thanaId && !election.mohanagarId
//           );
//           setFilteredElections(matchedElections);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching elections:", error);
//         setErrorMessage(
//           "ইলেকশন ডেটা লোড করতে ব্যর্থ হয়েছে। পুনরায় চেষ্টা করুন।"
//         );
//         setLoading(false);
//       });
//   }, [user]);

//   // useEffect(() => {
//   //   fetch(`https://bnp-api-9oht.onrender.com/user/${user.id}`)
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       console.log(data); // Log the fetched data
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error fetching user data:", error); // Handle any errors
//   //     });
//   // }, []); // Empty dependency array ensures this runs once when the component mounts

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1 style={{ textAlign: "center", color: "red" }}>চলমান নির্বাচন সমূহ</h1>

//       {loading ? (
//         <p style={{ textAlign: "center", color: "blue" }}>তথ্য লোড হচ্ছে...</p>
//       ) : errorMessage ? (
//         <p style={{ textAlign: "center", color: "red" }}>{errorMessage}</p>
//       ) : filteredElections.length > 0 ? (
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr style={{ backgroundColor: "#90ee90", textAlign: "left" }}>
//               <th style={{ padding: "10px", border: "1px solid #ddd" }}>
//                 প্রার্থীর নাম
//               </th>
//               <th style={{ padding: "10px", border: "1px solid #ddd" }}>
//                 নির্বাচন
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredElections.map((election) =>
//               election.posts.map((post) => (
//                 <tr key={post.id} style={{ backgroundColor: "#d4f4d4" }}>
//                   <td style={{ padding: "10px", border: "1px solid #ddd" }}>
//                     {election.title}
//                   </td>
//                   <td
//                     style={{
//                       padding: "10px",
//                       border: "1px solid #ddd",
//                       textAlign: "center",
//                     }}
//                   >
//                     <Link
//                       href={`/elections/${election.id}`}
//                       style={{
//                         padding: "10px 20px",
//                         backgroundColor: "#28a745",
//                         color: "white",
//                         border: "none",
//                         borderRadius: "5px",
//                         textDecoration: "none",
//                       }}
//                     >
//                       ভোট দিন
//                     </Link>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       ) : (
//         <p style={{ textAlign: "center", color: "red" }}>
//           আপনার ওয়ার্ডের জন্য কোন নির্বাচন পাওয়া যায়নি।
//         </p>
//       )}
//     </div>
//   );
// }
import React from "react";
import Elections from "./elections";

const page = () => {
  return (
    <div>
      <Elections />
    </div>
  );
};

export default page;
