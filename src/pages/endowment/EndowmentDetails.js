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
					<BreadcrumbBox title="Endowment" />

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
													`/assets/images/endowment.jpg`
												}
												alt=""
												className="img-fluid"
											/>
										</div>
										<div className="heading">
											<h4>Endowments contribute To Summit's Funding</h4>
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
													<Link to={process.env.PUBLIC_URL + "/services"}>
														<i className="las la-bookmark"></i> Services
													</Link>
												</p>
											</div>
										</div>
										<div className="blog-details-desc">
											<p>
												The University's academic mission is supported through
												the Endowment and other gifts. Thousands of generous
												gifts have been made to Summit's endowment since the
												university's founding; many of which have been
												contributed to support specific parts of the
												university's teaching and research. These gifts, when
												added together, create a long-term source of support
												that connects scholars and learners from a wide range of
												backgrounds with opportunities at Summit, both now and
												in the future.
												<br />
												<br />
												By advancing ground-breaking research, sustaining a
												world-class faculty, and funding student financial aid,
												these financial resources are critical to the
												University's purpose.{" "}
												{/* <span>
													<i className="las la-quote-right"></i>When a man dies,
													his deeds come to an end except for three things:
													ceaseless charity; knowledge which is beneficial; or a
													virtuous descendant who prays for him (the deceased).
													- Prophet Muhammad (S.A.W.).
												</span> */}
												The mission of the endowment is to financially support
												the many endeavors of the University’s faculty, students
												and staff, shape the character of Summit as an
												institution, and ensure its permanence. Since we know
												how important these gifts and endowments go in
												sustaining our university, the University Endowment is
												managed and stewarded by a distinct unit – the Endowment
												Office - at Summit.
											</p>
											<br />
											<p>
												To support this mission, the Endowment Office focuses on
												preserving and prudently growing the endowment and its
												income distribution in perpetuity. We promise to
												annually publish our reports as a form of transparency
												and provide you with feedback and updates on your trust.
											</p>
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
												Give Now
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
