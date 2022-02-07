/** @format */

import React from "react";
import AboutUs from "./components/AboutUs";
import CampusTour from "./components/CampusTour";
import CourseFilter from "./components/CourseFilter";
import FaqEvent from "./components/FaqEvent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HelpArea from "./components/HelpArea";
import HeroSlider from "./components/HeroSlider";
import HomeBlog from "./components/HomeBlog";
import IconBox from "./components/IconBox";
import NewsletterForm from "./components/NewsletterForm";
import TeamSlider from "./components/TeamSlider";
import TestimonialSlider from "./components/TestimonialSlider";

const HomeOne = () => {
	return (
		<div className="main-wrapper">
			{/* Header */}
			<Header />

			{/* Hero Slider */}
			<HeroSlider />

			{/* Icon Box */}
			<IconBox />

			{/* About Area */}
			<AboutUs />

			{/* Course Filter */}
			<CourseFilter />

			{/* Testimonial Slider */}
			<TestimonialSlider />

			{/* Faq & Event Area */}
			<FaqEvent />

			{/* Team Slider */}
			<TeamSlider />

			{/* Help Area */}
			<HelpArea />

			{/* Blog Area */}
			<HomeBlog />

			{/* Campus Tour */}
			<CampusTour />

			{/* Newsletter Form */}
			<NewsletterForm />

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default HomeOne;
