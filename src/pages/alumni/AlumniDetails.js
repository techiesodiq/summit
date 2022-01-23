/** @format */

import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import {BreadcrumbBox} from "../../components/common/Breadcrumb";
import FooterTwo from "../../components/FooterTwo";
import HeaderTwo from "../../components/HeaderTwo";
import BlogSidebar from "./components/BlogSidebar";
import {Styles} from "./styles/blogDetails.js";

const BlogDetails = () => {
	const history = useHistory();

	return (
		<Styles>
			{/* Main Wrapper */}
			<div className="main-wrapper blog-details-page">
				{/* Header 2 */}
				<HeaderTwo />

				{/* Breadcroumb */}
				<BreadcrumbBox title="Alumni" />

				{/* Blog Details */}
				<section className="blog-details-area">
					<Container>
						<Row>
							<Col lg="9" md="8" sm="7">
								<div className="blog-details-box">
									<div className="blog-details-banner">
										<img
											src={
												process.env.PUBLIC_URL + `/assets/images/graduate.jpg`
											}
											alt=""
											style={{height: "20%"}}
											className="img-fluid"
										/>
									</div>
									<div className="heading">
										<h4>Alumni</h4>
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
											We are always proud of our alumni and want to hear about
											their employment and Summit University memories. We
											encourage and provide opportunities for our alumni and
											friends to participate in Summit's activities. We also
											work hard to make sure that everyone in our global
											community has access to our world-class services and
											facilities.
											<br />
											<br />
											Our events program brings together alumni to celebrate,
											debate, and collaborate, while our international network
											of local groups allows graduates to reconnect and make new
											friends in their area. A member becomes an alumnus of
											Summit and a member of our alumni community upon
											graduation joining individuals from different parts of the
											world.{" "}
										</p>
										<br />
										<p>
											There are numerous advantages to being a member of our
											alumni community. We help our alumni members build a
											lifelong engagement with the university and each other,
											whether the member wants to attend our global events, meet
											other graduates in their academic or professional sector,
											or simply stay in contact.
										</p>
									</div>

									<Col md="12">
										<button
											onClick={() => history.push("/registration")}
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
											Join Alumni
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
};

export default BlogDetails;
