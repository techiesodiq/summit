/** @format */

import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import MobileMenu from "./common/MobileMenu";
import Sidebar from "./common/Sidebar";
import StickyMenu from "./common/StickyMenu";
import {Styles} from "./styles/header.js";

class Header extends Component {
	render() {
		return (
			<Styles>
				{/* Topbar */}
				<section className="top-bar">
					<Container>
						<Row>
							<Col lg="6" md="5">
								<div className="bar-left">
									<ul className="list-unstyled list-inline">
										<li className="list-inline-item">
											<i className="las la-map-marker"></i>Irra Road, PMB 4412,
											Offa, Kwara State, Nigeria.
										</li>
										<li className="list-inline-item">
											<Link to={process.env.PUBLIC_URL + "/faq"}>
												Have Questions?
											</Link>
										</li>
									</ul>
								</div>
							</Col>
							<Col lg="6" md="7">
								<div className="bar-right d-flex justify-content-end">
									<ul className="list-unstyled list-inline bar-social">
										<li className="list-inline-item">
											<a href={process.env.PUBLIC_URL + "/"}>
												<i className="fab fa-facebook-f"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a href={process.env.PUBLIC_URL + "/"}>
												<i className="fab fa-twitter"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a href={process.env.PUBLIC_URL + "/"}>
												<i className="fab fa-linkedin-in"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a href={process.env.PUBLIC_URL + "/"}>
												<i className="fab fa-instagram"></i>
											</a>
										</li>
									</ul>
									<ul className="list-unstyled list-inline bar-lang">
										{/* <li className="list-inline-item">
											<Dropdown>
												<Dropdown.Toggle as="a">
													<img
														src={
															process.env.PUBLIC_URL + "/assets/images/us.png"
														}
														alt=""
													/>
													English<i className="las la-angle-down"></i>
												</Dropdown.Toggle>
												<Dropdown.Menu as="ul">
													<Dropdown.Item as="li">
														<img
															src={
																process.env.PUBLIC_URL + "/assets/images/us.png"
															}
															alt=""
														/>{" "}
														English
													</Dropdown.Item>
													<Dropdown.Item as="li">
														<img
															src={
																process.env.PUBLIC_URL +
																"/assets/images/fra.png"
															}
															alt=""
														/>{" "}
														French
													</Dropdown.Item>
													<Dropdown.Item as="li">
														<img
															src={
																process.env.PUBLIC_URL +
																"/assets/images/ger.png"
															}
															alt=""
														/>{" "}
														German
													</Dropdown.Item>
													<Dropdown.Item as="li">
														<img
															src={
																process.env.PUBLIC_URL +
																"/assets/images/spa.png"
															}
															alt=""
														/>{" "}
														Spanish
													</Dropdown.Item>
													<Dropdown.Item as="li">
														<img
															src={
																process.env.PUBLIC_URL +
																"/assets/images/bra.png"
															}
															alt=""
														/>{" "}
														Brazilian
													</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</li> */}
									</ul>
									{/* <ul className="list-unstyled list-inline bar-login">
										<li className="list-inline-item">
											<Link to={process.env.PUBLIC_URL + "/login"}>
												<i className="las la-user"></i>Log In
											</Link>
										</li>
										<li className="list-inline-item">
											<Link to={process.env.PUBLIC_URL + "/registration"}>
												<i className="las la-user-edit"></i>Register
											</Link>
										</li>
									</ul> */}
								</div>
							</Col>
						</Row>
					</Container>
				</section>

				{/* Logo Area */}
				<section className="logo-area">
					<Container>
						<Row>
							<Col md="3">
								<div className="logo">
									<Link to={process.env.PUBLIC_URL + "/"}>
										<img
											style={{objectFit: "cover", width: "20%", height: "20%"}}
											src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
											alt=""
										/>
									</Link>
								</div>
							</Col>
							<Col md="9">
								<div className="logo-contact-box d-flex justify-content-end">
									<div className="emcontact-box d-flex">
										<div className="box-icon">
											<i className="flaticon-phone-call"></i>
										</div>
										<div className="box-content">
											<p>Call Us Now</p>
											<span>(+234) 802 735 2041</span>
										</div>
									</div>
									<div className="emcontact-box d-flex">
										<div className="box-icon">
											<i className="flaticon-envelope"></i>
										</div>
										<div className="box-content">
											<p>Inquire Us</p>
											<span>info@suab.org</span>
										</div>
									</div>
									<div className="apply-btn">
										<Link to={process.env.PUBLIC_URL + "/"}>
											<i className="las la-clipboard-list"></i>Give Now
										</Link>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</section>

				{/* Navbar */}
				<section className="main-menu">
					<Container>
						<Row>
							<Col md="12">
								<div className="main-menu-box">
									<div className="menu-box d-flex justify-content-between">
										<ul className="nav menu-nav">
											<li className="nav-item dropdown active">
												<Link
													className="nav-link dropdown-toggle"
													to={process.env.PUBLIC_URL + "/"}
													data-toggle="dropdown"
												>
													Home
												</Link>
											</li>
											<li className="nav-item dropdown">
												<Link
													className="nav-link dropdown-toggle"
													to={process.env.PUBLIC_URL + "/services"}
													data-toggle="dropdown"
												>
													Services<i className="las la-angle-down"></i>
												</Link>
												<ul className="dropdown list-unstyled">
													<li className="nav-item">
														<Link
															className="nav-link"
															to={process.env.PUBLIC_URL + "/endowment"}
														>
															Endowment
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link"
															to={process.env.PUBLIC_URL + "/research-grants"}
														>
															Research Grants
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link"
															to={
																process.env.PUBLIC_URL + "/professorial-chairs"
															}
														>
															Professorial Chairs
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link"
															to={
																process.env.PUBLIC_URL + "/students-scholarship"
															}
														>
															Students' Scholarship
														</Link>
													</li>
													<li className="nav-item">
														<Link
															className="nav-link"
															to={process.env.PUBLIC_URL + "/investment"}
														>
															Investment
														</Link>
													</li>
													{/* <li className="nav-item">
														<Link
															className="nav-link"
															to={process.env.PUBLIC_URL + "/students-affairs"}
														>
															Students' Affairs
														</Link>
													</li> */}
													<li className="nav-item">
														<Link
															className="nav-link"
															to={process.env.PUBLIC_URL + "/business-ventures"}
														>
															Business Ventures
														</Link>
													</li>
												</ul>
											</li>
											<li className="nav-item dropdown">
												<Link
													className="nav-link dropdown-toggle"
													to={process.env.PUBLIC_URL + "/projects"}
													data-toggle="dropdown"
												>
													Projects
												</Link>
											</li>
											<li className="nav-item dropdown">
												<Link
													className="nav-link dropdown-toggle"
													to={process.env.PUBLIC_URL + "/legacies"}
													data-toggle="dropdown"
												>
													Legacies
												</Link>
											</li>
											<li className="nav-item dropdown">
												<Link
													className="nav-link dropdown-toggle"
													to={process.env.PUBLIC_URL + "/alumni"}
													data-toggle="dropdown"
												>
													Alumni
												</Link>
											</li>
											<li className="nav-item dropdown">
												<Link
													className="nav-link dropdown-toggle"
													to={process.env.PUBLIC_URL + "/blog-grid"}
													data-toggle="dropdown"
												>
													News
												</Link>
											</li>
											<li className="nav-item dropdown">
												<Link
													className="nav-link dropdown-toggle"
													to={process.env.PUBLIC_URL + "/contact"}
													data-toggle="dropdown"
												>
													Contact
												</Link>
											</li>
										</ul>
										<ul className="nav search-cart-bar">
											{/* <li className="nav-item search-box">
												<Search />
											</li> */}
											{/* <li className="nav-item cart-box">
												<Link
													to={process.env.PUBLIC_URL + "/cart"}
													className="nav-link nav-cart"
												>
													<i className="las la-shopping-bag"></i>
												</Link>
											</li> */}
											<li className="nav-item side-box">
												<Sidebar />
											</li>
										</ul>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</section>

				{/* Sticky Menu */}
				<StickyMenu />

				{/* Mobile Menu */}
				<MobileMenu />
			</Styles>
		);
	}
}

export default Header;
