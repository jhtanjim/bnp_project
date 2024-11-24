import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div>
      {/* ?banner */}
      <div className="max-w-screen-2xl my-4 rounded-2xl lg:mx-auto overflow-hidden">
        {/* 1st slide */}
        <img
          src="https://images.news18.com/ibnlive/uploads/2024/08/khaleda-zia-2024-08-304c0e136b37c71332f548fe2c8d89f6.png"
          className="w-full lg:h-[650px] object-cover"
          alt=""
        />
        {/* 2nd slide */}
        {/* <img
          src="https://images.news18.com/ibnlive/uploads/2024/08/khaleda-zia-2024-08-304c0e136b37c71332f548fe2c8d89f6.png"
          className="w-full lg:h-[650px] object-cover"
          alt=""
        /> */}
        {/* <Image
          src="https://images.pexels.com/photos/8847005/pexels-photo-8847005.jpeg"
          alt="banner"
          layout="responsive" // Makes the image responsive
          width={400} // Original image width
          height={400} // Original image height
          className="rounded-2xl"
        /> */}
      </div>

      {/* Leader Section */}
      <div className="max-w-screen-2xl mx-auto my-8 p-6 rounded-lg bg-white flex flex-col lg:flex-row items-center lg:items-start">
        {/* Text Section */}
        <div className="lg:w-[60%] my-auto ">
          <h2 className="text-6xl font-semibold text-red-500">
            Our
            <span className="ms-2 text-green-600 text-6xl font-bold">
              Leader
            </span>
          </h2>
          <p className="mt-4 text-3xl text-gray-700">
            Valiant freedom fighters and Bangladeshi Nationalists founded the{" "}
            party under the leadership of President Ziaur Rahman in 1978.
          </p>
          <a href="/ourLeader">
            {" "}
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-[#F8CF0B] hover:text-black">
              Learn more
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="mt-6 lg:mt-0 lg:ml-8 lg:w-[40%] flex justify-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="w-40 h-44 rounded-xl overflow-hidden">
              <img
                src="https://api.bnpbd.org/api/upload/images/our-leader-215252-ff2f.jpg"
                alt="Leader Image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-40 h-44 rounded-xl overflow-hidden">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Prinses_Beatrix_en_mevrouw_Begem_Ziaur_Rahman_bezoeken_Madurodam.jpg/220px-Prinses_Beatrix_en_mevrouw_Begem_Ziaur_Rahman_bezoeken_Madurodam.jpg"
                alt="Leader Image 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 w-full h-44 rounded-xl overflow-hidden ps-16">
              <img
                src="https://api.bnpbd.org/api/upload/images/our-leader-215252-2--66c6.jpg"
                alt="Leader Image 3"
                className="w-40 h-44 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="mt-6 text-center bg-[#DCFCE7] py-20">
        <blockquote className="italic text-2xl font-bold ">
          “We have got the strength and we can work, dig and grow. We can pull
          ourselves up. With our bare hands we can achieve great things.”
        </blockquote>
        <p className="mt-2  font-semibold text-xl">
          Shaheed President <span className="text-green-600">Ziaur Rahman</span>
        </p>
      </div>
      <div className="max-w-screen-2xl mx-auto my-8 p-6 rounded-lg bg-white ">
        {/* Videos Section */}
        <div className="mt-10">
          <h3 className="text-2xl text-center font-bold">Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Video 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/OsbiW19Mpio"
                  title="Video 1"
                  className="w-full h-80"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="p-4 text-gray-700">
                A comprehensive overview of the topic covered in the video.
              </p>
            </div>
            {/* Video 2 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/2tWPVCVSoaQ"
                  title="Video 2"
                  className="w-full h-80"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="p-4 text-gray-700">
                Learn more about fascinating insights and details.
              </p>
            </div>
            {/* Video 3 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/wULl6Djw-SQ"
                  title="Video 3"
                  className="w-full h-80"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="p-4 text-gray-700">
                Discover in-depth discussions on this amazing topic.
              </p>
            </div>
          </div>
        </div>

        {/* Press Release Section */}
        <div className="mt-10">
          <h3 className="text-2xl text-center font-bold">Press Release</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Press Release 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="h-52">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJMpghZFZykt2PzKqdu9azQhEP9n_wQnIIOQ&s"
                  alt="Press Release 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="p-4 text-gray-700">
                A detailed press release about the latest updates and news.
              </p>
            </div>
            {/* Press Release 2 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="h-52">
                <img
                  src="https://api.bnpbd.org/api/upload/images/mohan-8--8f9e.jpg"
                  alt="Press Release 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="p-4 text-gray-700">
                Important announcements and key details from the organization.
              </p>
            </div>
            {/* Press Release 3 */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="h-52">
                <img
                  src="https://outspoken.newagebd.com/files/img/202405/8e8e937209a04ba29700c47d3a283895.jpg"
                  alt="Press Release 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="p-4 text-gray-700">
                Updates on significant events and actions recently undertaken.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
