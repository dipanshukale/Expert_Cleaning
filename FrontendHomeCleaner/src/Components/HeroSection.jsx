import React from 'react';
import { FaAirFreshener } from "react-icons/fa";
import { Link } from "react-router-dom";


const HeroSection = () => {
    return (
        <section
            className="relative lg:p-12 bg-cover bg-no-repeat bg-center flex h-screen  rounded-3xl overflow-hidden"
            // style={{
                    // backgroundImage: "url('/HomeCleaner.jpeg')",
                // backgroundPosition: "center",
                // backgroundSize: "120% auto", // Default size for larger screens
            // }}
        >
            <div className=' w-full p-32 bg-cover bg-no-repeat md:p-36 rounded-[80px]' style={{backgroundImage: "url('/HomeCleaner1.jpeg')"}}>
            <div className="absolute inset-0 bg-primary bg-opacity-50 flex justify-center items-center">
                <div className="bg-[#c1e4c4] bg-opacity-70 p-8  rounded-[64px] shadow-lg text-center md:px-0 sm:max-w-20 md:max-w-xl max-w-xl w-full">
                    <h5 className="text-gray flex items-center justify-center font-sans gap-4 space-x-2 py-12 text-xl tracking-widest md:text-xl"> <FaAirFreshener className='text-2xl  text-gray-800'/> GO-TO-CLEANERS</h5>
                    <h1 className="smallx-container text-xl text-black  tracking-widest">EXPERT</h1>
                        <h1 className="headings-small-container  text-gray-900 italic font-thin tracking-widest">CLEANING</h1>
                    <p className="text-gray-600 text-xl my-8">
                        Creating cleaner, healthier spaces so you can focus on what matters most and relax on the weekends.
                    </p>
                    <button className="bg-white w-48 h-11 text-black font-light py-2 px-6 rounded-[20px] 
                        hover:bg-[#BFF6C3] transition-transform transform hover:-translate-y-1 duration-300">
                            <Link to="/appointment">BOOK YOUR SLOT</Link>
                    </button>
                </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
