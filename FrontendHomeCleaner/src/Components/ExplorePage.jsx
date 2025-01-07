import React from "react";
import { useNavigate } from "react-router-dom";


const ExplorePage = () => {
	const Navigate = useNavigate();
	

	const NavigationToExplore = () => {
		Navigate("/services");
	}

	return (
		<div section id="explore" className="bg-gray-50 min-h-screen py-34 padding-container lg:p-32 space-y-16">
			{/* Section 1 */}
			<div className="flex flex-col md:flex-row items-center gap-20">
				{/* Left Image */}
				<div className="relative w-full md:w-1/2 h-96 rounded-xl overflow-hidden">
					<img
						src="/img1.jpeg"
						alt="Explore"
						className=" w-full h-full object-cover rounded-[40px]"
					/>
					<div className="absolute top-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded-md shadow-lg">
						<p className="text-gray-800 font-semibold">2X Deep Cleaning</p>
					</div>
				</div>
				{/* Right Content */}
				<div className="w-full md:w-1/2 space-y-4">
					<h1 className="text-4xl font-bold">
						<span className="text-black font-extralight lg:text-7xl">Home</span>
						<span className="text-gray-700 italic font-thin lg:text-7xl ml-2">
							Refresh
						</span>
					</h1>
					<p className="text-gray-700">
						Experience the ultimate expert cleaning — Creating spaces where
						comfort and productivity thrive.
					</p>
					<button onClick={NavigationToExplore}
						className="bg-gray-100 border-2 border-gray-300 w-48 h-11 text-black font-light py-2 px-6 rounded-[20px] 
      hover:bg-[#BFF6C3] hover:border-0 transition-transform transform hover:-translate-y-1 duration-300"
					>
						EXPLORE
					</button>
				</div>
			</div>

			{/* Section 2 */}
			<div className="flex flex-col md:flex-row-reverse items-center gap-20">
				{/* Right Image */}
				<div className="relative w-full md:w-1/2 h-96 rounded-[40px] overflow-hidden">
					<img
						src="/img2.jpeg"
						alt="Explore"
						className="w-full h-full object-cover rounded-xl"
					/>
					<div className="absolute top-4 right-4 bg-white bg-opacity-80 px-4 py-2 rounded-md shadow-lg">
						<p className="text-gray-800 font-semibold">24/7 Maintenance</p>
					</div>
				</div>
				{/* Left Content */}
				<div className="w-full md:w-1/2 space-y-4">
					<h1 className="text-4xl font-bold">
						<span className="text-black  font-extralight lg:text-7xl ">
							Office
						</span>
						<span className="text-gray-600 italic  font-thin lg:text-7xl ml-2 ">
							Cleaners
						</span>
					</h1>
					<p className="text-gray-700">
						The cleaning team that cares — Experts in creating pristine homes
						and productive workspaces.
					</p>
					<button onClick={NavigationToExplore}
						className="bg-white w-48 border-2 border-gray-300 h-11 text-black font-light py-2 px-6 rounded-[20px] 
      hover:bg-[#BFF6C3] hover:border-0 transition-transform transform hover:-translate-y-1 duration-300"
					>
						EXPLORE
					</button>
				</div>
			</div>

			{/* Section 3 */}
			<div className="flex flex-col md:flex-row items-center gap-20">
				{/* Left Image */}
				<div className="relative w-full md:w-1/2 h-96 rounded-[40px] overflow-hidden">
					<img
						src="/img3.jpeg"
						alt="Explore"
						className="w-full h-full object-cover rounded-xl"
					/>
					<div className="absolute top-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded-md shadow-lg">
						<p className="text-gray-800 font-semibold">Post-Event Cleaning</p>
					</div>
				</div>
				{/* Right Content */}
				<div className="w-full md:w-1/2 space-y-4">
					<h1 className="text-4xl font-bold">
						<span className="text-black font-extralight lg:text-7xl">
							Carpet
						</span>
						<span className="text-gray-600 italic  font-thin lg:text-7xl ml-2">
							Cleaning
						</span>
					</h1>
					<p className="text-gray-700">
						Restore the look and feel of your carpets and upholstery with our
						expert cleaning.
					</p>
					<button onClick={NavigationToExplore}
						className="bg-white w-48 h-11 border-2 border-gray-300 text-black font-light py-2 px-6 rounded-[20px] 
      hover:bg-[#BFF6C3] hover:border-0 transition-transform transform hover:-translate-y-1 duration-300"
					>
						EXPLORE
					</button>
				</div>
			</div>
		</div>
	);
};

export default ExplorePage;
