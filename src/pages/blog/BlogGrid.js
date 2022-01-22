/** @format */

import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BreadcrumbBox} from "../../components/common/Breadcrumb";
import FooterTwo from "../../components/FooterTwo";
import HeaderTwo from "../../components/HeaderTwo";
import Datas from "../../data/blog/grid.json";
import BlogSidebar from "./components/BlogSidebar";
import {Styles} from "./styles/blog.js";

class BlogGrid extends Component {
	render() {
		return (
			<Styles>
				{/* Main Wrapper */}
				<div className="main-wrapper blog-grid-page">
					{/* Header 2 */}
					<HeaderTwo />

					{/* Breadcroumb */}
					<BreadcrumbBox title="News" />

					{/* Blog Classic */}
					<section className="blog-grid-area">
						<Container>
							<Row>
								<Col lg="9" md="8" sm="7">
									<Row>
										{Datas.map((data, i) => (
											<Col lg="6" md="12" key={i}>
												<div className="blog-item">
													<div className="blog-img" style={{display: "flex"}}>
														<Link
															to={
																process.env.PUBLIC_URL +
																"/news-details/" +
																data.postLink
															}
														>
															<img
																style={{alignSelf: "stretch"}}
																src={
																	process.env.PUBLIC_URL +
																	`/assets/images/${data.postImg}`
																}
																alt=""
																className="img-fluid"
															/>
														</Link>
													</div>
													<div className="blog-content">
														<div
															className="blog-auth_date d-flex"
															style={{display: "flex"}}
														>
															<div
																className="author-img d-flex"
																style={{alignSelf: "stretch"}}
															>
																{/* <Link
																	to={process.env.PUBLIC_URL + data.authorLink}
																>
																	<img
																		src={
																			process.env.PUBLIC_URL +
																			`/assets/images/${data.authorImg}`
																		}
																		alt=""
																	/>
																</Link> */}
																{/* <p>
																	<Link
																		to={
																			process.env.PUBLIC_URL + data.authorLink
																		}
																	>
																		{data.authorName}
																	</Link>
																</p> */}
															</div>
															<div className="post-date">
																<p>
																	<i className="las la-calendar"></i>{" "}
																	{data.postDate}
																</p>
															</div>
														</div>
														<div className="blog-title">
															<h6>
																<Link
																	to={
																		process.env.PUBLIC_URL +
																		"/news-details/" +
																		data.postLink
																	}
																>
																	{data.postTitle}
																</Link>
															</h6>
														</div>
														<div className="blog-desc">
															<p>{data.postDesc}</p>
														</div>
													</div>
												</div>
											</Col>
										))}
									</Row>

									<div className="text-center">{/* <Pagination /> */}</div>
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

export default BlogGrid;
