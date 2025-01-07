import React, { useState } from "react";
import { MdCleaningServices } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="bg-white padding-navbar lg:pt-12 lg:px-32 md:py-4 md:px-6 flex justify-between items-center">
			{/* Logo Section */}
			<div className="flex items-center  space-x-2">
				<h1 className="text-black font-bold flex text-4xl sm:text-3xl md:text-4xl tracking-widest  items-center ">
					C L E A N <MdCleaningServices className="md:text-4xl text-4xl" />
				</h1>
			</div>

			{/* Navigation Menu */}
			<nav className="hidden md:block">
				<ul className="flex space-x-8 text-xl">
					<li className="text-gray-500 hover:text-black transition-transform transform hover:translate-y-1 duration-300 cursor-pointer">
						<Link to="/">HOME</Link>
					</li>
					<li  className="text-gray-500 hover:text-black transition-transform transform hover:translate-y-1 duration-300 cursor-pointer">
						<Link to="/aboutus">ABOUT</Link>
					</li>
					<li className="text-gray-500 hover:text-black transition-transform transform hover:translate-y-1 duration-300 cursor-pointer">
						<Link to="/services">SERVICES</Link>
					</li>
					<li className="text-gray-500 hover:text-black transition-transform transform hover:translate-y-1 duration-300 cursor-pointer">
						<Link to="/blog">BLOG</Link>
					</li>
					<li className="text-gray-500 hover:text-black transition-transform transform hover:translate-y-1 duration-300 cursor-pointer">
						<Link to="/contact">CONTACT</Link>

					</li>
				</ul>
			</nav>

			{/* Hamburger Menu for small screens */}
			<div className="md:hidden flex items-center">
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="text-4xl  text-gray-500 focus:outline-none"
				>
					{isMenuOpen ? "X" : "☰"}
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden absolute right-0 h-screen top-28 w-full   bg-white p-8  ${
					isMenuOpen ? "block" : "hidden"
				}`}
				style={{
					zIndex: 1000, 
				}}
			>
				<ul className="space-y-4 text-xl">
					<li className="text-gray-500 hover:text-black transition-transform transform hover:translate-y-1 duration-300 cursor-pointer">
						<Link to="/">HOME</Link>
					</li>
					<li className="text-gray-500 hover:text-black transition-transform transform hover:translate-y-1 duration-300 cursor-pointer">
						<Link to="/aboutus">ABOUT</Link>
					</li>
					<li className="text-gray-500 hover:text-black transition-transform transform hover:translate-y-1 duration-300 cursor-pointer">
						<Link to="/services">SERVICES</Link>
					</li>
					<li className="text-gray-500 hover:text-black transition-transform transform hover:translate-y-1 duration-300 cursor-pointer">
						<Link to="/blog">BLOG</Link>
					</li>
					<li className="text-gray-500 hover:text-black transition-transform transform hover:translate-y-1 duration-300 cursor-pointer">
						<Link to="/contact">CONTACT</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Navbar;
