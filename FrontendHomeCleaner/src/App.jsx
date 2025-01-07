import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import ExplorePage from "./Components/ExplorePage";
import ServicesPage from "./Components/ServicesPage";
import TestimonialPage from "./Components/TestimonialPage";
import LatestPost from "./Components/LatestPost";
import FAQPage from "./Components/FAQPage";
import FooterSection from "./Components/FooterSection";
import AboutUs from "./Components/AboutUs";
import HomeSection from "./Components/HomeSection";
import Services from "./Components/Services";
import BlogPage from "./Components/BlogPage";
import BlogRead from "./Components/BlogRead";
import ContactPage from "./Components/ContactPage";
import BookingPage from "./Components/BookingPage";

function App() {
	return (
		<>
			<Router>
        <Routes>
          <Route path="" element={<HomeSection/>}/>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-read" element={<BlogRead />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/appointment" element={ <BookingPage/>} />
        </Routes>
        <FooterSection/>
			</Router>
		</>
	);
}

export default App;
