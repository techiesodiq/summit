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

					{/* Breadcrumb */}
					<BreadcrumbBox title="Students' Scholarship" />

					{/* Blog Details */}
					<section className="blog-details-area">
						<Container>
							<Row>
								<Col lg="9" md="8" sm="7">
									<div className="blog-details-box">
										<div className="blog-details-banner">
											<img
												src={
													process.env.PUBLIC_URL + `/assets/images/scholar.jpg`
												}
												alt=""
												className="img-fluid"
											/>
										</div>
										<div className="heading">
											<h4>Scholarship Opportunities</h4>
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
												We have always prioritized excellence because it is our
												watchword. Therefore, through the Student’s Affairs
												Unit, our university awards scholarships at different
												levels - departmental level, faculty level and the
												overall university level - to the indigent students and
												bright students based on their academic performance to
												aid their learning.
												<br />
												<br />
											</p>
											<br />
											<p>
												The scholarships awarded by the University are designed
												for various categories of students. Some of the
												available scholarships are:
											</p>
											<ul className="list-unstyled">
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> Youth
													Empowerment Through Education
												</li>
												<p>
													In order to develop African’s human and social capital
													through education, a number of development and
													non-governmental organizations are partnering with
													Summit University to provide bursaries and
													scholarships to exceptional and talented students
													across Africa studying specific courses in Summit
													University, Offa.
												</p>
												<br />
												<br />
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> Female
													Education For Nation Building Scholarship
												</li>
												<p>
													The Female Education for Nation Building Scholarship
													scheme offers undergraduate scholarship to
													academically gifted girls/women from disadvantaged
													background in Nigeria. The scheme targets up to two
													hundred (200) girls and women from each geo-political
													zone of Nigeria.
												</p>
												<br />
												<br />
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i>{" "}
													Ansar-Ud-Deen Education Trust Fund
												</li>
												<p>
													Summit University has an Education Trust Fund with the
													Ansar-ud-Deen Society of Nigeria, (the parent
													organisation of Summit University). The Trust Fund
													offers scholarship to the children of indigent members
													of Ansar-ud-deen Society of Nigeria across Nigeria.
													<br />
													<b>Eligibility:</b> Must have applied and be admitted
													to Summit University, Offa Must be a serving member of
													any branch of the Ansar-ud-Deen Society of Nigeria.
												</p>
												<br />
												<br />
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> Work-Based
													Scheme
												</li>
												<p>
													Summit University offers a part-time, on-campus
													work-based program for exceptional students with
													specific financial needs. The students gain valuable
													work experience and skills related to their relevant
													courses of study, while the remuneration goes to the
													payment for the specific financial need.
												</p>
												<br />
												<br />
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> Sadaqatul
													Jariyah Trust
												</li>
												<p>
													Wealthy and influential Muslims and Zakat
													organizations sponsor a number of indigent students in
													Summit University as Sadaqatul Jariyah for their loved
													ones that have passed away.
												</p>
												<br />
												<br />
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> Instalment
													Payment Plan
												</li>
												<p>
													Parents of students in Summit University can pay a
													specified monthly instalment to cover the total fees
													of their children/wards. The specified amount shall be
													deducted from source to Summit University account.
													<br />
													<b>Eligibility:</b> The parent(s) of the students must
													be tenure employees in either the Federal or State
													Civil Service.
												</p>
												<br />
												<br />
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> Islamic
													Organizations (N+1 Admissions)
												</li>
												<p>
													Summit University offers Islamic organizations that
													sponsor up to five (5) students to Summit University,
													Offa free tuition fees for a sixth student.
												</p>
												<br />
												<br />
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> Siblings
													Discount
												</li>
												<p>
													Parents that have up to two children/wards in Summit
													University, Offa are eligible for a 50% tuition fees
													payment discount for a third child.
												</p>
												<br />
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
												Sponsor A Student
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
