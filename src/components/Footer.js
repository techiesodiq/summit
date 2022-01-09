/** @format */

import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Datas from "../data/footer/footer.json";
import BackToTop from "./common/BackToTop";
import {Styles} from "./styles/footerOne.js";

class Footer extends Component {
	render() {
		return (
			<Styles>
				{/* Footer Area */}
				<footer
					className="footer1"
					style={{
						backgroundImage: `url(assets/images/${
							process.env.PUBLIC_URL + Datas.backgroundImage
						})`,
					}}
				>
					<Container>
						<Row>
							<Col md="4">
								<div className="footer-logo-info">
									<p style={{marginTop: "5px"}}>
										Summit University, Offa is a private university established
										to offer qualitative tertiary education to students
										irrespective of nationality, ethnicity, creed and religion.
										<Link to="about"> Read more here...</Link>
									</p>
									<br />
									<ul className="list-unstyled">
										<li>
											<i className="las la-map-marker"></i>Irra Road, PMB 4412,
											Offa, Kwara State, Nigeria.
										</li>
										<li>
											<i className="las la-envelope"></i>info@suab.org
										</li>
										<li>
											<i className="las la-phone"></i>+234 802 735 2041
										</li>
									</ul>
								</div>
							</Col>
							<Col md="4">
								<div className="f-links">
									<h5>Useful Links</h5>
									<div
										style={{
											display: "flex",
										}}
									>
										<ul style={{flex: "1.1"}} className="list-unstyled">
											<li>
												<Link to={process.env.PUBLIC_URL + "/projects"}>
													<i className="las la-angle-right"></i>Projects
												</Link>
											</li>
											<li>
												<Link to={process.env.PUBLIC_URL + "/legacies"}>
													<i className="las la-angle-right"></i>Legacies
												</Link>
											</li>
											<li>
												<Link to={process.env.PUBLIC_URL + "/about"}>
													<i className="las la-angle-right"></i>About
												</Link>
											</li>
											<li>
												<Link to={process.env.PUBLIC_URL + "/services"}>
													<i className="las la-angle-right"></i>Services
												</Link>
											</li>
											<li>
												<Link to={process.env.PUBLIC_URL + "/gallery"}>
													<i className="las la-angle-right"></i>Gallery
												</Link>
											</li>
										</ul>

										<ul style={{flex: "1"}} className="list-unstyled">
											<li>
												<Link to={process.env.PUBLIC_URL + "/"}>
													<i className="las la-angle-right"></i>Privacy
												</Link>
											</li>
											<li>
												<Link to={process.env.PUBLIC_URL + "/contact"}>
													<i className="las la-angle-right"></i>Contact
												</Link>
											</li>
											<li>
												<Link to={process.env.PUBLIC_URL + "/faq"}>
													<i className="las la-angle-right"></i>FAQ
												</Link>
											</li>
											<li>
												<Link to={process.env.PUBLIC_URL + "/events"}>
													<i className="las la-angle-right"></i>Events
												</Link>
											</li>
											<li>
												<Link to={process.env.PUBLIC_URL + "/coming-soon"}>
													<i className="las la-angle-right"></i>Coming
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</Col>
							<Col md="4">
								<div className="f-post">
									<h5>Recent Post</h5>
									<div className="post-box d-flex">
										<div className="post-img">
											<img
												src={
													process.env.PUBLIC_URL + "/assets/images/blog-004.jpg"
												}
												alt=""
											/>
										</div>
										<div className="post-content">
											<Link to={process.env.PUBLIC_URL + "/news"}>
												A 60 bed-space hostel was donated by ADSN Lagos State
												Council to Summit University
											</Link>
											<span>Mar 30, 2020</span>
										</div>
									</div>
									<div className="post-box d-flex">
										<div className="post-img">
											<img
												src={
													process.env.PUBLIC_URL + "/assets/images/blog01.jpg"
												}
												alt=""
											/>
										</div>
										<div className="post-content">
											<Link to={process.env.PUBLIC_URL + "/news"}>
												SUNO receives a 500-capacity Lecture Theatre in honour
												of Alhaja Makanjuola...
											</Link>
											<span>Mar 30, 2020</span>
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</footer>

				{/* Copyright Area */}
				<section className="copyright-area">
					<Container>
						<Row>
							<Col md="6">
								<div className="copy-text">
									<p>
										Copyright &copy; 2021 | Designed With{" "}
										<i className="las la-heart"></i> by{" "}
										<a
											href={process.env.PUBLIC_URL + "/"}
											target="_blank"
											rel="noopener noreferrer"
										>
											Sodiq Akanmu
										</a>
									</p>
								</div>
							</Col>
							<Col md="6" className="text-right">
								<ul className="social list-unstyled list-inline">
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
											<i className="fab fa-youtube"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href={process.env.PUBLIC_URL + "/"}>
											<i className="fab fa-dribbble"></i>
										</a>
									</li>
								</ul>
							</Col>
						</Row>
					</Container>

					{/* Back To Top */}
					<BackToTop />
				</section>
			</Styles>
		);
	}
}

export default Footer;
