import React from "react";
import Image from "next/image";

const OurLeader = () => {
  return (
    <div>
      {/* Leader Section */}
      <div className="max-w-screen-2xl mx-auto  p-6 rounded-lg bg-white   ">
        <h2 className="text-6xl text-center my-8 font-semibold text-red-500">
          Our
          <span className="ms-2 text-green-600 text-6xl font-bold">Leader</span>
        </h2>
        {/* Image Section */}
        <div className="mt-6 lg:mt-0 lg:ml-8  flex justify-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full h-60 rounded-xl overflow-hidden">
              <Image
                src="https://api.bnpbd.org/api/upload/images/our-leader-215252-ff2f.jpg"
                alt="Leader Image 1"
                className="w-full h-full object-cover"
                width={500} // Replace with the actual width
                height={500} // Replace with the actual height
              />
            </div>
            <div className="w-full h-60 rounded-xl overflow-hidden">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Prinses_Beatrix_en_mevrouw_Begem_Ziaur_Rahman_bezoeken_Madurodam.jpg/220px-Prinses_Beatrix_en_mevrouw_Begem_Ziaur_Rahman_bezoeken_Madurodam.jpg"
                alt="Leader Image 2"
                width={500} // Replace with the actual width
                height={500} // Replace with the actual height
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 w-44 h- rounded-xl overflow-hidden flex  justify-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Prinses_Beatrix_en_mevrouw_Begem_Ziaur_Rahman_bezoeken_Madurodam.jpg/220px-Prinses_Beatrix_en_mevrouw_Begem_Ziaur_Rahman_bezoeken_Madurodam.jpg"
                alt="Leader Image 2"
                width={500} // Replace with the actual width
                height={500} // Replace with the actual height
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* Text Section */}
        <div className="max-w-screen-xl mx-auto my-4">
          <h1 className="text-center  text-2xl ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            similique laborum, id quas iure necessitatibus velit tempore
            sapiente consequuntur magni non, d
          </h1>
          <h1 className="text-center  text-2xl ">
            {" "}
            vel reprehenderit ipsam recusandae magnam ad. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Accusamus ad consequuntur
            exercitationem quis culpa, deleniti, optio error animi beatae ullam
            nobis laudantium assumenda, odio esse iste nostrum suscipit enim
            ducimus.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OurLeader;
