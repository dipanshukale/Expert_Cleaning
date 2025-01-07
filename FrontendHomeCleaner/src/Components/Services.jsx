import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import ServicesPage from "./ServicesPage";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-scroll"

const Services = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />

      {/* Hero Section */}
          <section className="py-28 text-center lg:mt-32">
              <p className="tracking-widest mb-2 flex justify-center space-x-2 gap-4 font-sans items-center"> <FaCircleCheck className="text-xl" /> EXPERT CLEANING</p>
        <h1 className="text-7xl font-normal">OUR SERVICES</h1>
        <p className="text-gray-700 mt-4 font-normal tracking-widest">
          WE OFFER PROFESSIONAL CLEANING SERVICES TO KEEP YOUR SPACE SPOTLESS.
        </p>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 px-4 lg:flex lg:items-center lg:justify-between lg:gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-serif mb-4">Top-notch Cleaning Services</h2>
          <p className="text-gray-600 mb-6">
            We ensure every corner of your home or office shines with cleanliness.
            Our dedicated team uses eco-friendly products to deliver exceptional
            results.
          </p>
          <button className="px-6 py-2 text-gray-800 rounded-full bg-[#BFF6C3] hover:bg-[#7ff188]">
            <Link to="services" smooth={true} duration={1000}>EXPLORE</Link>
          </button>
        </div>

        <div className="lg:w-[600px] lg:mr-16 p-6 mb-56 mt-10 lg:mt-0  ">
          <motion.div
            className=" max-h-[500px] p-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {["Home Cleaning", "Office Cleaning", "Deep Cleaning", "Sanitization"]
              .map((service, index) => (
                <div
                  key={index}
                  className="p-8 border-b last:border-b-0 mb-6 hover:bg-gray-50 bg-white shadow-2xl rounded-3xl space-x-6"
                >
                  <h3 className="text-2xl font-serif">{service}</h3>
                  <p className="text-sm text-gray-600">
                    Comprehensive and professional {service.toLowerCase()} services
                    tailored to your needs.
                  </p>
                </div>
              ))}
          </motion.div>
        </div>
          </section>
          
          <ServicesPage/>

      {/* Images Section */}
      <section section id="services" className="py-20 grid lg:ml-28  grid-cols-1 lg:grid-cols-2  sm:grid-cols-1 gap-12 p-12">
        <motion.img
          src="./Service1.jpg"
          alt="Cleaning Supplies"
          className="rounded-lg shadow-2xl h-[500px] w-[500px] cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <motion.img
          src="./Service2.jpg"
          alt="Cleaning in Action"
          className="rounded-lg shadow-2xl h-[500px] w-[500px] cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <motion.img
          src="./Service34.jpg"
          alt="Sanitization"
          className="rounded-lg shadow-2xl h-[500px] w-[500px] cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <motion.img
          src="./Service44.jpg"
          alt="Organized Cleaning Tools"
          className="rounded-lg shadow-2xl h-[500px] w-[500px] cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
      </section>
    </div>
  );
};

export default Services;