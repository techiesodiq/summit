/** @format */

import React, {useEffect} from "react";
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {BreadcrumbBox} from "../../components/common/Breadcrumb";
import FooterTwo from "../../components/FooterTwo";
import HeaderTwo from "../../components/HeaderTwo";
import datas from "../../data/course/details.json";
import PopularCourse from "./components/PopularCourse";
import ReviewForm from "./components/ReviewForm";
import {Styles} from "./styles/course.js";

function CourseDetails() {
	const {courseLink} = useParams();
	console.log(courseLink);
	useEffect(() => {
		const courseButton = document.querySelectorAll(".course-button");
		courseButton.forEach((button) => {
			button.addEventListener("click", () => {
				button.classList.toggle("active");
				const content = button.nextElementSibling;

				if (button.classList.contains("active")) {
					content.className = "course-content show";
					content.style.maxHeight = content.scrollHeight + "px";
				} else {
					content.className = "course-content";
					content.style.maxHeight = "0";
				}
			});
		});
	});

	return (
		<>
			{datas
				.filter((data) => data.courseLink === courseLink)
				.map((data, index) => (
					<div key={index} className="main-wrapper course-details-page">
						{/* Header 2 */}
						<HeaderTwo />

						{/* Breadcrumb */}
						<BreadcrumbBox title={data.courseTitle} />

						<Styles>
							{/* Course Details */}

							<section className="course-details-area">
								<Container>
									<Row>
										<Col lg="9" md="8" sm="12">
											<div className="course-details-top">
												<div className="heading">
													<h4>{data.courseDesc}</h4>
												</div>
												<div className="course-top-overview">
													<div className="d-flex overviews">
														<div className="author">
															<img
																src={
																	process.env.PUBLIC_URL +
																	`/assets/images/team-04.jpeg`
																}
																alt=""
															/>
															<div className="author-name">
																<h6>C/o</h6>
																<p>Dr N. Akinlabi-Babalola</p>
															</div>
														</div>
														<div className="category">
															<h6>Category</h6>
															<p>{data.category}</p>
														</div>
														<div className="price">
															<h6>Estimated Budget</h6>
															<p>{data.price}</p>
														</div>
													</div>
												</div>
												<div className="course-details-banner">
													<img
														src={
															process.env.PUBLIC_URL +
															`/assets/images/${data.imgUrl}`
														}
														alt=""
														className="img-fluid"
													/>
												</div>
												<div className="course-tab-list">
													<Tab.Container defaultActiveKey="overview">
														<Nav className="flex-column">
															<Nav.Item>
																<Nav.Link eventKey="overview">
																	Overview
																</Nav.Link>
															</Nav.Item>
															{/* <Nav.Item>
													<Nav.Link eventKey="curriculum">Curriculum</Nav.Link>
												</Nav.Item> */}
															<Nav.Item>
																<Nav.Link eventKey="instructor">
																	Project Facilitators
																</Nav.Link>
															</Nav.Item>
															<Nav.Item>
																<Nav.Link eventKey="review">Contact</Nav.Link>
															</Nav.Item>
														</Nav>
														<Tab.Content>
															<Tab.Pane
																eventKey="overview"
																className="overview-tab"
															>
																<div className="course-desc">
																	<h5>Project Description</h5>
																	<p>
																		{data.desc1}
																		<br />
																		<br />
																		{data.desc2}
																	</p>
																</div>
																<div className="course-feature">
																	<h5>Project Features</h5>
																	<p>{data.feature}</p>
																	{data.featureItem.map((item, i) => (
																		<ul className="list-unstyled">
																			<li key={i}>
																				{/* <i className="las la-arrow-right"></i> */}
																				<i className="fa fa-check"></i>
																				{item}
																			</li>
																		</ul>
																	))}
																</div>
																<div className="course-face d-flex justify-content-between">
																	<button
																		style={{
																			fontSize: "14px",
																			color: "#fff",
																			background:
																				"linear-gradient(90deg, #11B67A 0%, #009444 100%)",
																			display: "inline-block",
																			width: "120px",
																			height: "40px",
																			textAlign: "center",
																			padding: "11px",
																			borderRadius: "5px",
																			marginTop: "0px",
																		}}
																	>
																		Donate Now
																	</button>
																</div>

																{/* <div className="course-share">
																	<h5>Share This</h5>
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
																</div> */}
															</Tab.Pane>
															<Tab.Pane
																eventKey="curriculum"
																className="curriculum-tab"
															>
																<div className="course-curriculum">
																	<h5>Course Curriculum</h5>
																	<p>
																		Lorem ipsum dolor sit, amet consectetur
																		adipisicing elit. Quae impedit eligendi
																		perspiciatis animi maxime ab minus corporis
																		omnis similique excepturi, quidem facere
																		quisquam aperiam neque dolorem saepe.
																		Laboriosam, quam aliquam. Optio earum
																		accusantium quam eius dignissimos quaerat
																		voluptatem excepturi aliquid dolor ducimus.
																		Illo porro maiores fuga dignissimos
																		temporibus odio nulla nobis nemo.
																	</p>
																</div>
																<div className="course-element">
																	<h5>Course Content</h5>
																	<div className="course-item">
																		<button className="course-button active">
																			Part 1: Introduction of Javsscript{" "}
																			<span>04 Lectures - 30 Min</span>
																		</button>
																		<div className="course-content show">
																			<ul className="list-unstyled">
																				<li>
																					<span className="play-icon">
																						<i className="las la-play"></i>{" "}
																						Lecture: 01
																					</span>
																					<span className="lecture-title">
																						Javascript functional components
																					</span>
																					<span className="lecture-duration">
																						02:36
																					</span>
																				</li>
																				<li>
																					<span className="play-icon">
																						<i className="las la-play"></i>{" "}
																						Lecture: 02
																					</span>
																					<span className="lecture-title">
																						Javascript api integration
																					</span>
																					<span className="lecture-duration">
																						04:20
																					</span>
																				</li>
																				<li>
																					<span className="play-icon">
																						<i className="las la-play"></i>{" "}
																						Lecture: 03
																					</span>
																					<span className="lecture-title">
																						Javscript project Setup
																					</span>
																					<span className="lecture-duration">
																						03:39
																					</span>
																				</li>
																				<li>
																					<span className="play-icon">
																						<i className="las la-play"></i>{" "}
																						Lecture: 04
																					</span>
																					<span className="lecture-title">
																						React app setup project
																					</span>
																					<span className="lecture-duration">
																						01:56
																					</span>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div className="course-item">
																		<button className="course-button active">
																			Part 2: Javascript Project Setup{" "}
																			<span>03 Lectures - 43 Min</span>
																		</button>
																		<div className="course-content show">
																			<ul className="list-unstyled">
																				<li>
																					<span className="play-icon">
																						<i className="las la-play"></i>{" "}
																						Lecture: 01
																					</span>
																					<span className="lecture-title">
																						Javascript functional components
																					</span>
																					<span className="lecture-duration">
																						11:36
																					</span>
																				</li>
																				<li>
																					<span className="play-icon">
																						<i className="las la-play"></i>{" "}
																						Lecture: 02
																					</span>
																					<span className="lecture-title">
																						Javascript api integration
																					</span>
																					<span className="lecture-duration">
																						19:20
																					</span>
																				</li>
																				<li>
																					<span className="play-icon">
																						<i className="las la-play"></i>{" "}
																						Lecture: 03
																					</span>
																					<span className="lecture-title">
																						Javscript project Setup
																					</span>
																					<span className="lecture-duration">
																						10:39
																					</span>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div className="course-item">
																		<button className="course-button active">
																			Part 3: React Application Setup Project{" "}
																			<span>04 Lectures - 59 Min</span>
																		</button>
																		<div className="course-content show">
																			<ul className="list-unstyled">
																				<li>
																					<span className="play-icon">
																						<i className="las la-play"></i>{" "}
																						Lecture: 01
																					</span>
																					<span className="lecture-title">
																						Javascript functional components
																					</span>
																					<span className="lecture-duration">
																						24:36
																					</span>
																				</li>
																				<li>
																					<span className="play-icon">
																						<i className="las la-play"></i>{" "}
																						Lecture: 02
																					</span>
																					<span className="lecture-title">
																						Javascript api integration
																					</span>
																					<span className="lecture-duration">
																						21:20
																					</span>
																				</li>
																				<li>
																					<span className="play-icon">
																						<i className="las la-play"></i>{" "}
																						Lecture: 03
																					</span>
																					<span className="lecture-title">
																						Javscript project Setup
																					</span>
																					<span className="lecture-duration">
																						15:39
																					</span>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</Tab.Pane>
															<Tab.Pane
																eventKey="instructor"
																className="instructor-tab"
															>
																<h5>Resource Personnel</h5>
																<div className="instructor-item">
																	<Row>
																		<Col md="4">
																			<div className="instructor-img">
																				<img
																					src={
																						process.env.PUBLIC_URL +
																						`/assets/images/team-04.jpeg`
																					}
																					alt=""
																					className="img-fluid"
																				/>
																			</div>
																		</Col>
																		<Col md="8">
																			<div className="instructor-content">
																				<div className="instructor-box">
																					<div className="top-content d-flex justify-content-between">
																						<div className="instructor-name">
																							<h6>
																								Dr Nurat Akinlabi-Babalola
																							</h6>
																							<p>General Manager, SUAB</p>
																						</div>
																						<div className="instructor-social">
																							<ul className="social list-unstyled list-inline">
																								<li className="list-inline-item">
																									<a
																										href={
																											process.env.PUBLIC_URL +
																											"/"
																										}
																									>
																										<i className="fab fa-facebook-f"></i>
																									</a>
																								</li>
																								<li className="list-inline-item">
																									<a
																										href={
																											process.env.PUBLIC_URL +
																											"/"
																										}
																									>
																										<i className="fab fa-twitter"></i>
																									</a>
																								</li>
																								<li className="list-inline-item">
																									<a
																										href={
																											process.env.PUBLIC_URL +
																											"/"
																										}
																									>
																										<i className="fab fa-linkedin-in"></i>
																									</a>
																								</li>
																								<li className="list-inline-item">
																									<a
																										href={
																											process.env.PUBLIC_URL +
																											"/"
																										}
																									>
																										<i className="fab fa-youtube"></i>
																									</a>
																								</li>
																							</ul>
																						</div>
																					</div>
																					<div className="instructor-desk">
																						<p>
																							Dr Nurat Akinlabi-Babalola is a
																							graduate of Chartered Institute of
																							Stockbroker and the General
																							Manager of Summit University
																							Advancement Bureau. She is a
																							Community influencer and belongs
																							to a team of youth trainers in her
																							Community who believe in the
																							principle of changing our world on
																							day at a time by having positive
																							impact on the youth and engaging
																							in social change that in the long
																							run cumulates to economic change
																							and a peaceful society. She is the
																							founder of The Truth Bearer
																							Platform which metamorphosed into
																							the sisters in Deen Foundation and
																							the birth of Baytu Sakeenah Home
																							for the Orphans.
																						</p>
																					</div>
																				</div>
																			</div>
																		</Col>
																	</Row>
																</div>
															</Tab.Pane>
															<Tab.Pane
																eventKey="review"
																className="review-tab"
															>
																<Row>
																	<Col md="12">
																		<div className="review-form">
																			<h5>Contact Us</h5>
																			<ReviewForm />
																		</div>
																	</Col>
																</Row>
															</Tab.Pane>
														</Tab.Content>
													</Tab.Container>
												</div>
											</div>
										</Col>
										<Col lg="3" md="4" sm="12">
											<div className="single-details-sidbar">
												<Row>
													<Col md="12">
														<div className="course-details-feature">
															<h5 className="title">Project Details</h5>
															<ul className="list-unstyled feature-list">
																<li>
																	<i className="las la-calendar"></i> Start
																	Date: <span>{data.startDate}</span>
																</li>
																<li>
																	<i className="las la-calendar"></i> End Date:{" "}
																	<span>{data.endDate}</span>
																</li>
																<li>
																	<i className="las la-calendar"></i> Estimated
																	Budget: <span>{data.price}</span>
																</li>
																<li>
																	<i className="las la-clock"></i> Duration:{" "}
																	<span>{data.duration}</span>
																</li>
																<li>
																	<i className="las la-graduation-cap"></i>{" "}
																	Category: <span>{data.category}</span>
																</li>
																<li>
																	<i className="las la-book"></i> Status:{" "}
																	<span>{data.status}</span>
																</li>
															</ul>
															<button type="button" className="enroll-btn">
																Give Now
															</button>
														</div>
													</Col>
													<Col md="12">
														<PopularCourse />
													</Col>
												</Row>
											</div>
										</Col>
									</Row>
								</Container>
							</section>
						</Styles>

						{/* Footer 2 */}
						<FooterTwo />
					</div>
				))}
		</>
	);
}

export default CourseDetails;
