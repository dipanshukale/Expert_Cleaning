import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import Navbar from "./Navbar";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify styles

const BookingPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [cleaningType, setCleaningType] = useState("");
	const [date, setDate] = useState(""); // Ensure date is a string
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState("");


	const BookingSuccess = async (event) => {
        event.preventDefault(); // Prevent form refresh
        setLoading(true);

		try {
			const { data } = await axios.post(
				"https://expert-cleaning.onrender.com/clients/booking",
				{
					name,
					email,
					phone,
					cleaningType,
					bookingDate: date,
					message,
				},
				{
					withCredentials: true,
					headers: { "Content-Type": "application/json" },
				}
			);

			toast.success("You booked your slot successfully!", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
            });
            setLoading(false);
		} catch (error) {
			toast.error("Failed to book your slot. Please try again.", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
		} finally {
			setName("");
			setEmail("");
			setPhone("");
			setCleaningType("");
			setDate("");
			setMessage("");
		}
	};

	return (
		<div>
			{/* Navbar Section */}
			<div className="z-10 py-2">
				<Navbar />
			</div>

			{/* ToastContainer */}
			<ToastContainer />

			{/* Booking Section */}
			<section className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-6 py-12">
				<div className="max-w-3xl w-full bg-white p-10 rounded-lg shadow-lg mt-24">
					<div className="text-center mb-8">
						<p className="text-gray-500 uppercase tracking-wide text-sm">
							Book Your Cleaning Service
						</p>
						<h1 className="text-3xl font-sans text-gray-800">Booking Page</h1>
						<p className="text-gray-600 mt-2">
							Schedule a cleaning service with us! Fill out the form below, and
							we’ll confirm your booking shortly.
						</p>
					</div>

					<form onSubmit={BookingSuccess} className="space-y-6 text-left">
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Name
							</label>
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="mt-2 block w-full px-4 py-2 border rounded-lg"
								placeholder="Your Name"
								required
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Email
							</label>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="mt-2 block w-full px-4 py-2 border rounded-lg"
								placeholder="Your Email"
								required
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Phone
							</label>
							<input
								type="tel"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className="mt-2 block w-full px-4 py-2 border rounded-lg"
								placeholder="Your Phone Number"
								required
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Cleaning Type
							</label>
							<select
								value={cleaningType}
								onChange={(e) => setCleaningType(e.target.value)}
								className="mt-2 block w-full px-4 py-2 border rounded-lg"
								required
							>
								<option value="">Select Cleaning Type</option>
								<option value="home-cleaning">Home Cleaning</option>
								<option value="office-cleaning">Office Cleaning</option>
							</select>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Booking Date
							</label>
							<input
								type="date"
								value={date}
								onChange={(e) => setDate(e.target.value)}
								className="mt-2 block w-full px-4 py-2 border rounded-lg"
								required
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Message (Optional)
							</label>
							<textarea
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								rows="4"
								className="mt-2 block w-full px-4 py-2 border rounded-lg"
								placeholder="Additional details or requirements"
							></textarea>
						</div>
						<div className="text-center ">
							<button
								type="submit"
								className="bg-green-400 text-white py-2 px-6 rounded-lg hover:bg-green-500"
                            >
                                {loading && <ClipLoader className="mr-2 " size={20} color="white"/>}
								Book Now
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

export default BookingPage;
