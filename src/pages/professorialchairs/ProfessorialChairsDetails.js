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
					<BreadcrumbBox title="Professorial Chairs" />

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
													`/assets/images/course-03.jpg`
												}
												alt=""
												className="img-fluid"
											/>
										</div>
										<div className="heading">
											<h4>Professorial Chairs</h4>
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
													<i className="las la-calendar"></i> December 19, 2021
												</p>
											</div>
											<div className="post-category">
												<p>
													<Link to={process.env.PUBLIC_URL + "/"}>
														<i className="las la-bookmark"></i> Legacies
													</Link>
												</p>
											</div>
											<div className="post-comment">
												<p>
													<Link to={process.env.PUBLIC_URL + "/"}>
														<i className="las la-comment"></i> (23)
													</Link>
												</p>
											</div>
										</div>
										<div className="blog-details-desc">
											<p>
												Either as an organisation or as an individual, you can
												support our endowed chaired position. This will help us
												to keep the best brains with us and attract esteemed
												faculty members anywhere in the world. More importantly,
												the funds will be channelled to support research.
												<br />
												<br />
												Creating a professorial chair is one of the most
												significant investments a contributor can make at Summit
												University, Offa, it is intended for an individuals or
												corporate organization who may want to contribute to the
												progress of the University by contributing to our
												professorial chair with a payment in form of an
												endowment fund in to the University, once a fund is
												created and the time is right, the process of appointing
												a holder begins. A portion of the interest earned is
												given to the chair holder for the contribution made to
												knowledge.
												<br />
												<br />
												College of Natural and Applied Sciences College of
												Management and Social Sciences College of Humanities
												Proposed College of Law
											</p>
											<br />
											<p>
												The University has available for endowments 4
												professorial chairs in the following Colleges:
											</p>
											<ul className="list-unstyled">
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i>College of
													Natural and Applied Sciences
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> College of
													Management and Social Sciences
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> College of
													Humanities
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> Proposed
													College of Law
												</li>
											</ul>
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
											>
												Leave A Legacy
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
