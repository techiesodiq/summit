/** @format */

import React, {Component} from "react";
import {Col, Container, Dropdown, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import MobileMenu from "./common/MobileMenu";
import Search from "./common/Search";
import Sidebar from "./common/Sidebar";
import StickyMenu from "./common/StickyMenu";
import {Styles} from "./styles/headerTwo.js";

class HeaderTwo extends Component {
	render() {
		return (
			<Styles>
				{/* Topbar 2 */}
				<section className="top-bar2">
					<Container>
						<Row>
							<Col lg="7" md="9">
								<div className="bar-left">
									<ul className="list-unstyled list-inline">
										<li className="list-inline-item">
											<i className="las la-phone"></i>(+234) 802 735 2041
										</li>
										<li className="list-inline-item">
											<i className="las la-envelope"></i>info@suab.org
										</li>
										<li className="list-inline-item">
											<i className="las la-map-marker"></i>Irra Road, Offa,
											Kwara State, Nigeria.
										</li>
									</ul>
								</div>
							</Col>
							<Col lg="5" md="3">
								<div className="bar-right d-flex justify-content-end">
									<ul className="list-unstyled list-inline bar-lang">
										<li className="list-inline-item">
											<Dropdown>
												<Dropdown.Toggle>
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
										</li>
									</ul>
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

									<ul className="list-unstyled list-inline sidebar-button">
										<li className="list-inline-item nav-item side-box">
											<Sidebar />
										</li>
									</ul>
								</div>
							</Col>
						</Row>
					</Container>
				</section>

				{/* Logo Area 2 */}
				<section className="logo-area2">
					<Container>
						<Row>
							<Col md="3">
							<Link to={process.env.PUBLIC_URL + "/"}>
								<div className="logo advancement-logo">
									
										<img
										    className="logo-image"
											src={
												process.env.PUBLIC_URL + "/assets/images/summit-white-logo.png"
											}
											alt=""
										/>
										<h6 className="logo-header">Advancement Bureau</h6>
									
								</div>
								</Link>
							</Col>
							<Col md="9">
								<div className="menu-box d-flex justify-content-end">
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
														to={process.env.PUBLIC_URL + "/professorial-chairs"}
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
												<li className="nav-item">
													<Link
														className="nav-link"
														to={
															process.env.PUBLIC_URL +
															"/international-relations"
														}
													>
														International Relations
													</Link>
												</li>
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
												to={process.env.PUBLIC_URL + "/news"}
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
									<div className="search-box">
										<Search />
									</div>
									<div className="apply-btn">
										<Link to={process.env.PUBLIC_URL + "/registration"}>
											<i className="las la-clipboard-list"></i>Give Now
										</Link>
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

export default HeaderTwo;
