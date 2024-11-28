// "use client";
// import { cn } from "../lib/utils"; // Utility function for combining class names
// import { AnimatePresence, motion } from "framer-motion"; // Animation library
// import Link from "next/link"; // For routing
// import { useState } from "react";

// // Main BnpDofa Component
// export const BnpDofa = ({ className }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null); // State to manage hover index

//   // Define the items data
//   const items = [
//     {
//       link: "/dofa10",
//       title: "১০ দফা",
//       description: "This is a description for the first item.",
//     },
//     {
//       link: "/dofa31",
//       title: "৩১  দফা",
//       description: "This is a description for the second item.",
//     },
//     {
//       link: "/dofa19",
//       title: "১৯ দফা",
//       description: "This is a description for the third item.",
//     },
//     {
//       link: "/vision",
//       title: "ভিশন ২০৩০",
//       description: "This is a description for the third item.",
//     },
//   ];

//   return (
//     <div
//       className={cn(
//         " grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 py-10", // Tailwind classes for layout
//         className
//       )}
//     >
//       {items.map((item, idx) => (
//         <Link
//           href={item?.link}
//           key={item?.link}
//           className="relative group block p-2 h-full w-full"
//           onMouseEnter={() => setHoveredIndex(idx)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         >
//           <AnimatePresence>
//             {hoveredIndex === idx && (
//               <motion.span
//                 className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-red-700/[0.8] block rounded-3xl"
//                 layoutId="hoverBackground"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1, transition: { duration: 0.15 } }}
//                 exit={{
//                   opacity: 0,
//                   transition: { duration: 0.15, delay: 0.2 },
//                 }}
//               />
//             )}
//           </AnimatePresence>
//           <Card>
//             <CardTitle>{item.title}</CardTitle>
//             {/* <CardDescription>{item.description}</CardDescription> */}
//           </Card>
//         </Link>
//       ))}
//     </div>
//   );
// };

// // Card Component for each item
// export const Card = ({ className, children }) => {
//   return (
//     <div
//       className={cn(
//         "rounded-2xl h-full w-full p-4 overflow-hidden bg-green-800 border border-transparent dark:border-yellow-300/[0.2] group-hover:border-yellow-300 relative z-20",
//         className
//       )}
//     >
//       <div className="relative z-50">
//         <div className="p-4">{children}</div>
//       </div>
//     </div>
//   );
// };

// // CardTitle Component for the title of each card
// export const CardTitle = ({ className, children }) => {
//   return (
//     <h4
//       className={cn(
//         "text-yellow-500 font-bold tracking-wide mt-4 text-3xl",
//         className
//       )}
//     >
//       {children}
//     </h4>
//   );
// };

// // CardDescription Component for the description of each card
// export const CardDescription = ({ className, children }) => {
//   return (
//     <p
//       className={cn(
//         "mt-8 text-yellow-500 tracking-wide leading-relaxed text-sm",
//         className
//       )}
//     >
//       {children}
//     </p>
//   );
// };
"use client";
import { cn } from "../lib/utils"; // Utility function for combining class names
import Link from "next/link"; // For routing
import { useState } from "react";

// Main BnpDofa Component
export const BnpDofa = ({ className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to manage hover index

  // Define the items data
  const items = [
    {
      link: "/dofa10",
      title: "১০ দফা",
      description: "This is a description for the first item.",
    },
    {
      link: "/dofa31",
      title: "৩১  দফা",
      description: "This is a description for the second item.",
    },
    {
      link: "/dofa19",
      title: "১৯ দফা",
      description: "This is a description for the third item.",
    },
    {
      link: "/vision",
      title: "ভিশন ২০৩০",
      description: "This is a description for the third item.",
    },
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 py-10", // Tailwind classes for layout
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className={`absolute inset-0 h-full w-full ${
              hoveredIndex === idx
                ? "bg-neutral-200 dark:bg-red-700/[0.8]"
                : "bg-transparent"
            } block rounded-3xl transition-opacity duration-150`}
          />
          <Card>
            <CardTitle>{item.title}</CardTitle>
            {/* <CardDescription>{item.description}</CardDescription> */}
          </Card>
        </Link>
      ))}
    </div>
  );
};

// Card Component for each item
export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-green-800 border border-transparent dark:border-yellow-300/[0.2] group-hover:border-yellow-300 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

// CardTitle Component for the title of each card
export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-yellow-500 font-bold tracking-wide mt-4 text-3xl",
        className
      )}
    >
      {children}
    </h4>
  );
};

// CardDescription Component for the description of each card
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-yellow-500 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
