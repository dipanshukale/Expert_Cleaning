import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { FaAirFreshener } from "react-icons/fa";
import { GiAcidTube } from "react-icons/gi";
import { RiHomeHeartLine } from "react-icons/ri";
import { MdOutlineSanitizer } from "react-icons/md";
import { Link } from "react-scroll"

const AboutUs = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div className="bg-gray-100 text-center overflow-hidden">
			<Navbar />

			{/* Hero Section */}
			<section className="py-20">
				<h5 className="text-gray flex items-center justify-center font-sans gap-4 space-x-2 py-4 text-xl tracking-widest md:text-xl">
					{" "}
					<FaAirFreshener className="text-sm  text-gray-800" /> GO-TO-CLEANERS
				</h5>
				<h1 className="text-7xl font-normal">ABOUT US</h1>
				<p className="text-gray-700  mt-4 font-normal tracking-widest">
					WE’RE PASSIONATE ABOUT DELIVERING EXCEPTIONAL CLEANING THAT GO BEYOND
					EXPECTATIONS.
				</p>
                <button className="mt-6 px-6 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-[#BFF6C3]">
                    <Link to="about-us" smooth={true} duration={500}>EXPLORE</Link>
				</button>
			</section>

			{/* Animated Image Section */}
			<section className="py-16">
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
					className="container mx-auto"
				>
					<img src="./About.jpg" alt="Animated Visual" className="mx-auto lg:w-[1000px] rounded-3xl" />
				</motion.div>
			</section>

			{/* Our Team Section */}
			<section section id="about-us" className="py-20 bg-gray-50">
				<h2 className="text-6xl font-serif">Our Team</h2>
				<p className="text-gray-600 mt-2">
					Meet the dedicated professionals behind our top-tier cleaning
					services. Relax on the weekends.
				</p>

				<div  className="mt-8">
					<Slider {...settings}>
						<div className="p-4 bg-white rounded-lg shadow">
							<img src="./Team4.jpg" alt="Amy Lee" className="rounded-lg" />
							<h3 className="text-lg font-bold mt-4">Anuj & Shraddha</h3>
							<p className="text-sm text-gray-600">CLEANING SPECIALIST</p>
							<p className="mt-2 text-gray-500">
								Anuj ensures every space is spotless and clean.
							</p>
						</div>
						<div className="p-4 bg-white rounded-lg shadow">
							<img src="./Team6.jpg" alt="Eva Kim" className="rounded-lg" />
							<h3 className="text-lg font-bold mt-4">Latish,Latika & Ayush Rangari</h3>
							<p className="text-sm text-gray-600">SANITATION TECHNICIAN</p>
							<p className="mt-2 text-gray-500">
								Latish provides top-notch disinfection services.
							</p>
						</div>
						<div className="p-4 bg-white rounded-lg shadow">
							<img src="./Team4.jpg" alt="Eva Kim" className="rounded-lg" />
							<h3 className="text-lg font-bold mt-4">Yash Kosare & Annya Joshi</h3>
							<p className="text-sm text-gray-600">SANITATION TECHNICIAN</p>
							<p className="mt-2 text-gray-500">
								Annya provides top-notch disinfection services.
							</p>
						</div>
						<div className="p-4 bg-white rounded-lg shadow">
							<img src="./Team5.jpg" alt="Eva Kim" className="rounded-lg" />
							<h3 className="text-lg font-bold mt-4">Tanvi Khobhragade</h3>
							<p className="text-sm text-gray-600">SANITATION TECHNICIAN</p>
							<p className="mt-2 text-gray-500">
								Tanvi provides top-notch disinfection services.
							</p>
						</div>
						{/* Add more team members here */}
					</Slider>
				</div>
			</section>

			{/* Stats and Features Section */}
			<section className="py-20">
				<div className="container mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="text-center">
						<h3 className="text-8xl font-normal">5K</h3>
						<p className="text-gray-600">Customers</p>
					</div>
					<div className="text-center">
						<h3 className="text-8xl font-normal">4.5K</h3>
						<p className="text-gray-600">Repeat</p>
					</div>
					<div className="text-center">
						<h3 className="text-8xl font-normal">99%</h3>
						<p className="text-gray-600">Satisfaction</p>
					</div>
				</div>

				<div className="mt-10 grid  grid-cols-1  md:grid-cols-3 gap-10 p-16 lg:p-32">
					<div className="p-16 lg:w-[400px] lg:h-[300px] bg-yellow-100 rounded-lg shadow">
						<h4 className="text-xl font-bold flex justify-center gap-2 items-center ">
							{" "}
							<GiAcidTube className="text-4xl" />
							QUALITY
						</h4>
						<p className="mt-2 text-gray-500">
							Every space is spotless and well-maintained.
						</p>
					</div>
					<div className="p-16 lg:w-[400px] lg:h-[300px] bg-green-100 rounded-lg shadow">
						<h4 className="text-xl font-bold flex justify-center items-center gap-2">
							{" "}
							<RiHomeHeartLine />
							REFRESH
						</h4>
						<p className="mt-2 text-gray-500">
							Every room feeling fresh and rejuvenated.
						</p>
					</div>
					<div className="p-16 lg:w-[400px] lg:h-[300px] bg-blue-100 rounded-lg shadow-md">
						<h4 className="text-xl font-bold flex justify-center items-center gap-2">
							<MdOutlineSanitizer /> SANITIZE
						</h4>
						<p className="mt-2 text-gray-500">
							Top-grade sanitization techniques.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
