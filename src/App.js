/** @format */

import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {GlobalStyle} from "./components/common/styles/global.js";
import ScrollToTop from "./helper/ScrollToTop";
import HomeOne from "./HomeOne";
import HomeTwo from "./HomeTwo";
import PageNotFound from "./pages/404/PageNotFound";
import About from "./pages/about/About";
import Login from "./pages/account/Login";
import Register from "./pages/account/Register";
import BlogClassic from "./pages/blog/BlogClassic";
import BlogDetails from "./pages/blog/BlogDetails";
import BlogGrid from "./pages/blog/BlogGrid";
import ComingSoon from "./pages/comingsoon/ComingSoon";
import Contact from "./pages/contact/Contact";
import CourseDetails from "./pages/courses/CourseDetails";
import CourseGrid from "./pages/courses/CourseGrid";
import CourseList from "./pages/courses/CourseList";
import Events from "./pages/events/Events";
import EventDetails from "./pages/events/EventsDetails";
import Faq from "./pages/faq/Faq";
import Gallery from "./pages/gallery/Gallery";
import InstructorDetails from "./pages/instructor/InstructorDetails";
import Instructor from "./pages/instructor/Instructors";
import Cart from "./pages/shop/Cart";
import ProductDetails from "./pages/shop/ProductDetails";
import Product from "./pages/shop/Products";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<ScrollToTop />
			<Switch>
				<Route
					exact
					path={`${process.env.PUBLIC_URL + "/"}`}
					component={HomeOne}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/home-two"}`}
					component={HomeTwo}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/about"}`}
					component={About}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/course-grid"}`}
					component={CourseGrid}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/course-list"}`}
					component={CourseList}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/course-details"}`}
					component={CourseDetails}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/instructor"}`}
					component={Instructor}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/instructor-details"}`}
					component={InstructorDetails}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/gallery"}`}
					component={Gallery}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/events"}`}
					component={Events}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/event-details"}`}
					component={EventDetails}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/login"}`}
					component={Login}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/registration"}`}
					component={Register}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/contact"}`}
					component={Contact}
				/>
				<Route path={`${process.env.PUBLIC_URL + "/faq"}`} component={Faq} />
				<Route
					path={`${process.env.PUBLIC_URL + "/404"}`}
					component={PageNotFound}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/coming-soon"}`}
					component={ComingSoon}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/blog-classic"}`}
					component={BlogClassic}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/blog-grid"}`}
					component={BlogGrid}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/blog-details"}`}
					component={BlogDetails}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/products"}`}
					component={Product}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/product-details"}`}
					component={ProductDetails}
				/>
				<Route path={`${process.env.PUBLIC_URL + "/cart"}`} component={Cart} />
			</Switch>
		</Router>
	);
}

export default App;
