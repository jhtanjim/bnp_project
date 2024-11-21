import React from "react";

const NoticeBoard = () => {
  return (
    <div className="my-20">
      <h1 className="font-bold text-xl text-center mb-4">Notice Board</h1>

      {/* Board Wrapper */}
      <div className="space-y-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="lg:flex  overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
          >
            {/* Card 1 */}
            <div className="border border-black w-full lg:w-[25%] bg-[#DCFCE7] p-4 flex items-center justify-center min-w-[200px]">
              <h1 className="text-lg font-semibold">Admin</h1>
            </div>
            {/* Card 2 */}
            <div className="border border-black w-full lg:w-[50%] bg-[#DCFCE7] p-4 flex items-center justify-center min-w-[300px]">
              <p className="text-start text-sm font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium in, id quam neque aut officia. Natus, minus cum
                obcaecati blanditiis deserunt eligendi ipsum corrupti veritatis,
                mollitia, molestiae voluptatem sint neque!
              </p>
            </div>
            {/* Card 3 */}
            <div className="border border-black w-full lg:w-[25%] bg-[#DCFCE7] p-4 flex items-center justify-center min-w-[200px]">
              <h1 className="text-lg font-semibold">Admin</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
