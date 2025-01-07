import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Guide To Keeping Your Home Spotless",
    image: "./Post4.jpg",
        authorImage: "./Testimonial4.jpg",
        authorName: "Vaishnavi Rewatkar",
        Tag: "Wellness",
    
    dateTime: "Dec 28, 2024, 5:30 PM",
        quote: "Cleaning is an art, and we excel at it.",
    Description:
     "Maintaining a spotless home doesn’t have to feel overwhelming. With careful planning and consistent effort, you can transform cleaning into a manageable and even enjoyable task.This blog dives into the essentials of home cleaning, focusing on creating effective routines and using practical tools. From organizing clutter to implementing a systematic approach, you’ll learn techniques that save time and energy while achieving impeccable results."
  },
  {
    id: 2,
    title: "Simple Steps To Declutter Your Home",
    image: "./Post5.jpg",
    authorImage: "./Testimonial2.jpg",
    authorName: "Pooja Chandewar",
      dateTime: "Dec 27, 2024, 2:15 PM",
    Tag: "Cleaning Tips",
      quote: "A clean home is a happy home.",
    Description: "Clutter can be a silent source of stress, making even the simplest tasks feel daunting. In this blog, we present ten straightforward steps to declutter your living space and regain control over your environment.From your wardrobe to your kitchen and home office, we offer actionable advice for sorting, discarding, and reorganizing items. Learn how to categorize belongings, maximize storage space, and build a sustainable decluttering habit that keeps your home looking pristine."
  },
  {
    id: 3,
    title: "The Ultimate Guide To Cleaning Appliances",
    image: "./Post6.jpg",
    authorImage: "./Testimonial3.jpg",
      authorName: "Anshul Hanwate",
Tag: "Organization Hacks",
    dateTime: "Dec 26, 2024, 11:00 AM",
      quote: "Sparkling clean services tailored to your needs.",
    Description: "Your appliances are the backbone of a functional home, but they often get overlooked in routine cleaning. This comprehensive guide explores the best ways to keep your appliances in top condition, ensuring they last longer and perform efficiently.We cover everything from your refrigerator and oven to small appliances like toasters and coffee makers. With easy-to-follow instructions and expert advice, you’ll learn how to deep-clean, maintain, and troubleshoot common issues with your appliances."
  },
  {
    id: 4,
    title: "Why Cleaning is Good for Mental Health",
    image: "./Post7.jpg",
    authorImage: "./Testimonial1.jpg",
      authorName: "Shivang Raj",
    Tag: "Home Maintenance",
    dateTime: "Dec 25, 2024, 6:45 PM",
      quote: "We bring cleanliness and comfort to your doorstep.",
    Description: "Did you know that cleaning your home can positively impact your mental health? In this blog, we explore the fascinating link between a clean environment and emotional well-being. Discover how decluttering and tidying up can reduce stress, enhance focus, and create a sense of accomplishment. We delve into the psychology behind why a clean space feels comforting and how cleaning rituals can help you regain control over chaotic days."
  },
];



const BlogPage = () => {
const navigate = useNavigate();

  const handleReadMore = (blog) => {
    navigate("/blog-read", { state: { blog } });
  };
    
  return (
      <div className="bg-gray-100 min-h-screen">
          <Navbar/>
      {/* Header Section */}
      <section className="text-center py-20 ">
        <h5 className="text-gray-600 flex items-center justify-center font-sans text-xl tracking-widest mb-2">
          😊 NEWS & INSIGHTS
        </h5>
        <h1 className="text-6xl font-normal mb-4">Blog</h1>
        <p className="text-gray-700 tracking-wide">
          Stay tuned for helpful guides and inspiring content.
        </p>
      </section>

      {/* Blog Posts Section */}
      <section className="px-6 py-12 md:px-12 lg:px-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-sans mb-2">{post.title}</h3>
                <div className="flex items-center mb-4">
                  <img
                    src={post.authorImage}
                    alt={post.authorName}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-sm font-semibold">{post.authorName}</p>
                    <p className="text-xs text-gray-500">{post.dateTime}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  {post.quote}
                </blockquote>
                <button onClick={() => handleReadMore(post)} className="text-black bg-[#c1e4c4] py-2 px-4 rounded-lg hover:bg-[#BFF6C3]">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center mt-12"> */}
          {/* <button className="bg-[#c1e4c4] text-black py-2 px-6 rounded-lg shadow-lg hover:bg-[#BFF6C3]"> */}
            {/* View All */}
          {/* </button> */}
        {/* </div> */}
      </section>
    </div>
  );
};

export default BlogPage;
