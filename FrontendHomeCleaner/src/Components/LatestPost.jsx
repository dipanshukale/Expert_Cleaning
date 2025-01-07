import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Our recent articles",
    image: "./post1.jpg",
    authorImage: "./Testimonial.jpg",
    authorName: "Yashika Wanjari",
    dateTime: "Dec 28, 2024, 5:30 PM",
    quote: "Cleaning is an art, and we excel at it.",
  },
  {
    id: 2,
    title: "Heading for Post 2",
    image: "./post2.jpg",
    authorImage: "./Testimonial6.jpg",
    authorName: "Rutuja Bankar",
    dateTime: "Dec 27, 2024, 2:15 PM",
    quote: "A clean home is a happy home.",
    description:
      "Experience the joy of spotless surroundings with our professional cleaning services.",
  },
];

const LatestPost = () => {
  return (
    <section className="bg-gray-100 min-h-screen px-6 py-12 md:p-12 lg:p-36">
      <h2 className="text-2xl md:text-3xl font-serif tracking-widest text-center md:text-left mb-8">
        Latest Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Post */}
        <div className="h-auto  rounded-lg p-4 flex flex-col">
          <h3 className="text-lg md:text-xl font-semibold mb-4">
            {posts[0].title}
          </h3>
          <div className="relative">
            <img
              src={posts[0].image}
              alt="Post Image"
              className="rounded-[20px] w-full h-64 md:h-80 lg:h-96 object-cover"
            />
            <button
              className="absolute bottom-4 right-4 w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-gray-700"
              title="Go Up"
            >
              ↑
            </button>
          </div>
          <div className="flex items-center mt-4">
            <img
              src={posts[0].authorImage}
              alt="Author"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-3"
            />
            <div>
              <p className="text-sm font-semibold">{posts[0].authorName}</p>
              <p className="text-xs text-gray-500">{posts[0].dateTime}</p>
            </div>
          </div>
          <blockquote className="text-gray-700 italic mt-4 text-sm md:text-base">
            {posts[0].quote}
          </blockquote>
        </div>

        {/* Right Post */}
        <div className="rounded-lg p-4 flex flex-col">
          <blockquote className="text-gray-700 italic mb-4 text-sm md:text-base">
            {posts[1].description}
          </blockquote>
          <div className="relative">
            <img
              src={posts[1].image}
              alt="Post Image"
              className="rounded-lg w-full h-64 md:h-80 lg:h-96 object-cover"
            />
            <button
              className="absolute bottom-4 right-4 w-10 h-10 bg-gray-800 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-gray-700"
              title="Go Up"
            >
              ↑
            </button>
          </div>
          <div className="flex items-center mt-4">
            <img
              src={posts[1].authorImage}
              alt="Author"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-3"
            />
            <div>
              <p className="text-sm font-semibold">{posts[1].authorName}</p>
              <p className="text-xs text-gray-500">{posts[1].dateTime}</p>
            </div>
          </div>
          <blockquote className="text-gray-700 italic mt-4 text-sm md:text-base">
            {posts[1].quote}
          </blockquote>
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12 md:mt-16">
        <Link to="/blog" className="bg-[#c1e4c4] text-black py-2 px-6 rounded-lg shadow-lg hover:bg-[#BFF6C3]">
          View All
        </Link>
      </div>
    </section>
  );
};

export default LatestPost;
