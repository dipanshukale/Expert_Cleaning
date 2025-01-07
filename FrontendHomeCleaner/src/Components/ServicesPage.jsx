import React from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BiSolidTimer } from "react-icons/bi";

const ServicesPage = () => {
  return (
    <div>
      {/* Main Services Page Content */}
      <section className="bg-[#c1e4c4] min-h-screen w-full py-12 px-6 sm:px-12 lg:px-24 xl:px-36 rounded-[80px]">
        {/* Ratings Section */}
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-40 md:gap-24 mb-12">
          <div className="rounded-lg p-6 text-center w-32 sm:w-40 md:w-48">
            <p className="service-container text-3xl md:text-4xl font-extralight text-black">5K</p>
            <p className="text-sm py-4 md:py-6 md:text-lg text-gray-800">Customers</p>
          </div>
          <div className="rounded-lg p-6 text-center w-32 sm:w-40 md:w-48">
            <p className="service-container text-3xl md:text-4xl font-extralight text-black">4.5K</p>
            <p className="text-sm py-4 md:py-6 md:text-lg text-gray-800">Repeat Clients</p>
          </div>
          <div className="rounded-lg p-6 text-center w-32 sm:w-40 md:w-48">
            <p className="service-container text-3xl md:text-4xl font-extralight text-black">99%</p>
            <p className="text-sm py-4 md:py-6 md:text-lg text-gray-800">Satisfaction</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-xl font-thin flex items-center justify-center lg:justify-start mb-4">
              <span className="mr-2 p-2 rounded-full">
                <BiSolidTimer className="text-4xl" />
              </span>
              E F F I C I E N T
            </p>
            <h2 className="text-2xl md:text-3xl flex justify-center lg:justify-start font-normal text-gray-800 mb-4">
              Professional Cleaning For Every Occasion
            </h2>
            <p className="text-gray-600 mb-8">
             Our professional cleaning services are tailored to meet your needs for every occasion, from homes to offices and special events.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600 font-normal flex items-center justify-center tracking-widest lg:justify-start">
                <IoIosCheckmarkCircle className=" mr-2" /> REGULAR CLEANING
              </p>
              <p className="text-gray-600 flex font-normal items-center   tracking-widest justify-center lg:justify-start">
                <IoIosCheckmarkCircle className=" mr-2" /> DEEP CLEANING
              </p>
              <p className="text-gray-600 flex font-normal items-center tracking-widest justify-center lg:justify-start">
                <IoIosCheckmarkCircle className=" mr-2" /> MOVE IN-OUT CLEANING
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-3/4 flex justify-center mt-8 lg:mt-0">
            <img
              src="./service.jpg"
              alt="Service Example"
              className="img-compression rounded-3xl shadow-md w-full  max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
