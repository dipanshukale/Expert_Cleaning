import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ExplorePage from "./ExplorePage";
import ServicesPage from "./ServicesPage";
import TestimonialPage from "./TestimonialPage";
import LatestPost from "./LatestPost";
import FAQPage from "./FAQPage";

const HomeSection = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<ExplorePage />
			<ServicesPage />
			<TestimonialPage />
			<LatestPost />
			<FAQPage />
		</>
	);
};

export default HomeSection;
