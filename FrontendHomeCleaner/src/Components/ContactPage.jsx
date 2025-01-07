import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import Navbar from "./Navbar";
import FAQPage from "./FAQPage";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");

  const contactSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !phone || !message) {
      toast.error("All fields are required.", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    try {
        const { data } = await axios.post(
        "http://localhost:5000/customer/contact",
        {
          name,
          email,
          phone,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (data) {
        toast.success(
          "Thank You for Contacting us! We will get back to you soon.",
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
      // Reset form fields after successful submission
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  };

  return (
    <div>
      {/* Navbar Section */}
      <div className="z-10">
        <Navbar />
      </div>

      {/* Contact Section */}
      <section className="bg-gray-100 min-h-screen flex items-center justify-center px-6 py-6">
        <ToastContainer />
        <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg mt-24">
          {/* Header Section */}
          <div className="text-center mb-8">
            <p className="text-gray-500 uppercase tracking-wide text-sm">
              Get in Touch
            </p>
            <h1 className="text-3xl font-sans text-gray-800">Contact</h1>
            <p className="text-gray-600 mt-2">
              Have questions or need help? Feel free to contact us using the
              form below, and we’ll get back to you as soon as possible!
            </p>
          </div>

          {/* Form Section */}
          <form onSubmit={contactSubmission} className="space-y-6 text-left">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Your Email Address"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Your Phone Number"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#C1E4C4] text-blsvk font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-black hover:text-white transition duration-300"
              >
                {loading && <ClipLoader className="mr-2" size={20} color="white"/>}
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      <FAQPage />
    </div>
  );
};

export default ContactPage;
