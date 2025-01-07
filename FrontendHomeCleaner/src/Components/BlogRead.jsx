import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const BlogRead = () => {
  const { state } = useLocation();
  const { blog } = state || {};

  if (!blog) {
    return <p className="text-center mt-12">No blog data found.</p>;
  }

  return (
      <div className="bg-gray-100 min-h-screen lg:px-10 lg:py-8">
          <Navbar/>
      {/* Header Section */}
      <section className="text-center py-12  rounded-lg lg:mt-12">
        <h5 className="text-gray-600 uppercase tracking-widest text-sm mb-2">
          {blog.Tag}
        </h5>
        <h1 className="text-lg md:text-6xl font-thin mb-4">{blog.title}</h1>
        <p className="text-gray-700 tracking-wide mb-6">{blog.subtitle}</p>
        <div className="flex items-center justify-center">
          <img
            src={blog.authorImage}
            alt={blog.authorName}
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold">{blog.authorName}</p>
            <p className="text-sm text-gray-500">{blog.date}</p>
          </div>
        </div>
      </section>

      {/* Blog Image */}
      <section className="py-12 flex justify-center">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-[900px] h-[600px] object-cover rounded-lg"
        />
      </section>

      {/* Blog Description */}
      <section className="py-6 ">
        <p className="text-lg leading-relaxed whitespace-pre-line">
          {blog.Description}
        </p>
      </section>
    </div>
  );
};

export default BlogRead;
