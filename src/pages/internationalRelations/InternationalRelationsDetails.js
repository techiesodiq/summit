/** @format */

import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BreadcrumbBox} from "../../components/common/Breadcrumb";
import FooterTwo from "../../components/FooterTwo";
import HeaderTwo from "../../components/HeaderTwo";
import BlogSidebar from "./components/BlogSidebar";
import {Styles} from "./styles/blogDetails.js";

class BlogDetails extends Component {
	render() {
		return (
			<Styles>
				{/* Main Wrapper */}
				<div className="main-wrapper blog-details-page">
					{/* Header 2 */}
					<HeaderTwo />

					{/* Breadcroumb */}
					<BreadcrumbBox title="International Relations" />

					{/* Blog Details */}
					<section className="blog-details-area">
						<Container>
							<Row>
								<Col lg="9" md="8" sm="7">
									<div className="blog-details-box">
										<div className="blog-details-banner">
											<img
												src={
													process.env.PUBLIC_URL +
													`/assets/images/international.jpg`
												}
												alt=""
												className="img-fluid"
											/>
										</div>
										<div className="heading">
											<h4>International Relations</h4>
										</div>
										<div className="blog-auth_date d-flex">
											{/* <div className="author-img d-flex">
												<Link to={process.env.PUBLIC_URL + "/"}>
													<img
														src={
															process.env.PUBLIC_URL +
															`/assets/images/author.jpg`
														}
														alt=""
													/>
												</Link>
												<p>
													<Link to={process.env.PUBLIC_URL + "/"}>
														Medison Azar
													</Link>
												</p>
											</div> */}
											<div className="post-date">
												<p>
													<i className="las la-calendar"></i> January 19, 2022
												</p>
											</div>
											<div className="post-category">
												<p>
													<Link to={process.env.PUBLIC_URL + "/services"}>
														<i className="las la-bookmark"></i> Services
													</Link>
												</p>
											</div>
										</div>
										<div className="blog-details-desc">
											<p>
												We at summit university advancement bureau, a
												mission-driven entity, promote partnership with
												international and interested institutions, research
												institutes, academic outlets, and professional firms
												whose vision and mission are also for academic
												excellence and development in research. This is geared
												towards having productive graduates, world-class
												research, and implementable projects. This partnership
												can involve a variety of activities, such as joint
												research or teaching initiatives or engaging in
												formalized faculty or student exchanges, internships for
												students as we see internship a perfect opportunity to
												explore future career options and to begin to build both
												a portfolio and a professional network.
												<br />
												<br />
												We understand that some colleges and universities may be
												interested in recruiting more international students and
												may have funding to contribute while others may not.
												Some may be more interested in establishing faculty
												exchanges or joint-degree programs.
												<br />
												<br />
												We welcome 2022 to build upon our mission of connecting
												employability and education through experiential
												learning and internship about student internships. Let’s
												work together to shape the future of International
												Education. This is encouraged as finding a full-time
												role after graduation can seem a daunting task. Now,
												more than ever, internships for college students are
												essential elements of career preparation. With this
												stated, Summit University sees Hands-on experience,
												especially with international bodies as just as
												important as coursework for those looking to make a
												smooth transition into the global workforce.
											</p>
											<br />
										</div>

										<Col md="12">
											<button
												style={{
													fontSize: "15px",
													color: "#fff",
													background: "#11B67A",
													width: "200px",
													height: "50px",
													border: "none",
													fontWeight: 500,
													borderRadius: "5px",
													marginTop: "5px",
												}}
												onClick={() => (window.location.href = "/contact")}
											>
												Contact Us
											</button>
										</Col>
									</div>
								</Col>
								<Col lg="3" md="4" sm="5">
									<BlogSidebar />
								</Col>
							</Row>
						</Container>
					</section>

					{/* Footer 2 */}
					<FooterTwo />
				</div>
			</Styles>
		);
	}
}

export default BlogDetails;
