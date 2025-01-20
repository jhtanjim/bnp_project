// // pages/election/[id].js
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router"; // Import useRouter for dynamic routing

// const ElectionDetail = () => {
//   const [electionDetail, setElectionDetail] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");

//   const router = useRouter();
//   const { id } = router.query;
//   console.log("Router ID: ", id); // Check if the id is coming through

//   useEffect(() => {
//     if (!id) return; // Wait until the ID is available

//     // Fetch data for the specific election by ID
//     fetch(`https://bnp-api-9oht.onrender.com/election/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setElectionDetail(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching election detail:", error);
//         setErrorMessage(
//           "ইলেকশন ডেটা লোড করতে ব্যর্থ হয়েছে। পুনরায় চেষ্টা করুন।"
//         );
//         setLoading(false);
//       });
//   }, [id]); // Re-run the effect whenever the ID changes

//   if (loading) {
//     return (
//       <p style={{ textAlign: "center", color: "blue" }}>তথ্য লোড হচ্ছে...</p>
//     );
//   }

//   if (errorMessage) {
//     return <p style={{ textAlign: "center", color: "red" }}>{errorMessage}</p>;
//   }

//   if (!electionDetail) {
//     return (
//       <p style={{ textAlign: "center", color: "red" }}>ডেটা পাওয়া যায়নি।</p>
//     );
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1 style={{ textAlign: "center", color: "green" }}>
//         {electionDetail.name} - বিস্তারিত
//       </h1>
//       <p style={{ textAlign: "center" }}>
//         এখানে নির্বাচনের বিস্তারিত তথ্য দেখানো হবে।
//       </p>
//       {/* Display other election details here */}
//     </div>
//   );
// };

// export default ElectionDetail;
