import axios from "axios";
import React, { useState } from "react";
import { MdCleaningServices } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

const FooterSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");

	const sendQuote = async (e) => {
    e.preventDefault();
    setLoading(true);

		try {
			const quote = await axios.post(
				"http://localhost:5000/customer/quote",
				{
					email,
				},
				{
					withCredentials: true,
					headers: { "Content-Type": "application/json" },
				}
			);

			if (quote) {
				toast.success(
					"We will send you a quote to your email address",
					{
						position: "top-center",
						autoClose: 3000,
						theme: "dark",
					}
        );
        setLoading(false);
			} else {
				toast.error("Something went wrong.", {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
			}
		} catch (error) {
			// Show error toast
			toast.error("Something went wrong. Please try again later.", {
				position: "top-center",
				autoClose: 3000,
				theme: "dark",
			});
		} finally {
			setEmail("");
		}
	};

	return (
    <footer className="bg-[#c1e4c4] py-16 flex flex-col items-center rounded-3xl">
       <ToastContainer />
			{/* Centered Image Div */}
			<div
				className="relative rounded-3xl w-[90%] max-w-[800px] h-[300px] md:h-[500px] flex flex-col justify-center items-center bg-cover bg-center mb-10"
				style={{ backgroundImage: "url('/Footer1.jpg')" }}
			>
				<h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-2 mt-0 p-4">
					Request a Free Quote
				</h2>
				<p className="text-base md:text-lg text-black text-center mb-6">
					Find out how affordable clean can be — Request your free quote today!
				</p>
				<div className=" bg-black mb-6 gap-8 lg:w-96  p-4 rounded-3xl shadow-md flex flex-col items-center md:flex-row md:space-x-4">
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter your email"
						className="p-2  bg-black placeholder-white text-white rounded w-full  md:w-auto  outline-none "
					/>
					<button
						className="mt-4 md:mt-0 px-8 py-2  bg-green-500 text-white rounded-md hover:bg-green-600 transition"
						onClick={sendQuote}
          >
            {loading && <ClipLoader className="mr-2" size={20} color="white"/>}
						Send 
					</button>
				</div>
			</div>

			{/* Footer content */}
			<div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Left Section */}
				<div className="flex flex-col items-center">
					<h1 className="text-lg font-bold flex items-center space-x-2">
						<span>CLEAN</span> <MdCleaningServices className="text-2xl" />
					</h1>
					<p className="mt-2 text-sm">
						"Efficient Cleaning, Exceptional Results."
					</p>
				</div>

				{/* Center Section */}
				<div className="text-center"></div>

				{/* Right Section */}
				<div className="flex justify-end pr-16">
					<div className="flex flex-row space-x-8">
						<div>
							<h2 className="text-lg font-bold">Pages</h2>
							<ul className="mt-2 text-sm space-y-1">
								<li>
									<a href="#" className="hover:underline">
										Home
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										About
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Contact
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="text-lg font-bold">Utilities</h2>
							<ul className="mt-2 text-sm space-y-1">
								<li>
									<a href="#" className="hover:underline">
										FAQ
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Support
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Privacy Policy
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="text-lg font-bold">Main</h2>
							<ul className="mt-2 text-sm space-y-1">
								<li>
									<a href="#" className="hover:underline">
										Services
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Blog
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Careers
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Section */}
			<div className="w-full border-t border-gray-300 mt-8 py-4">
				<div className="text-center text-sm">
					<p>&copy; 2025 Expert Cleaning. All rights reserved.</p>
					<p>Developed by Dipanshu Dilip Kale</p>
				</div>
			</div>
		</footer>
	);
};

export default FooterSection;
