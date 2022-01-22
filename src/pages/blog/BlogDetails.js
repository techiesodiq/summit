/** @format */

import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {BreadcrumbBox} from "../../components/common/Breadcrumb";
import FooterTwo from "../../components/FooterTwo";
import HeaderTwo from "../../components/HeaderTwo";
import datas from "../../data/blog/news-details.json";
import BlogSidebar from "./components/BlogSidebar";
import {Styles} from "./styles/blogDetails.js";

const BlogDetails = () => {
	const {postLink} = useParams();
	console.log(postLink);

	return (
		<>
			<Styles>
				{/* Main Wrapper */}
				{datas
					.filter((data) => data.postLink === postLink)
					.map((data, index) => (
						<div key={index} className="main-wrapper blog-details-page">
							{/* Header 2 */}
							<HeaderTwo />

							{/* Breadcroumb */}
							<BreadcrumbBox title={data.postTitle} />

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
															`/assets/images/${data.postImg}`
														}
														alt=""
														className="img-fluid"
													/>
												</div>
												<div className="heading">
													<h4>{data.postTitle}</h4>
												</div>
												<div className="blog-auth_date d-flex">
													<div className="post-date">
														<p>
															<i className="las la-calendar"></i> April 23, 2020
														</p>
													</div>
													{/* <div className="post-category">
														<p>
															<Link to={process.env.PUBLIC_URL + "/"}>
																<i className="las la-bookmark"></i> Web Design
															</Link>
														</p>
													</div> */}
													<div className="post-comment">
														<p>
															<Link to={process.env.PUBLIC_URL + "/"}>
																<i className="las la-comment"></i> (23)
															</Link>
														</p>
													</div>
												</div>
												<div className="blog-details-desc">
													{console.log(data)}
													{data.postDetails.map((item, i) => (
														<ul key={i} className="list-unstyled">
															<li>{item}</li>
														</ul>
													))}
												</div>
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
					))}
			</Styles>
		</>
	);
};

export default BlogDetails;
