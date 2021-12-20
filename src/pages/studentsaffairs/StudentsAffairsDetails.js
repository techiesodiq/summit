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
					<BreadcrumbBox title="Legacies" />

					{/* Blog Details */}
					<section className="blog-details-area">
						<Container>
							<Row>
								<Col lg="9" md="8" sm="7">
									<div className="blog-details-box">
										<div className="blog-details-banner">
											<img
												src={
													process.env.PUBLIC_URL + `/assets/images/legacies.jpg`
												}
												alt=""
												className="img-fluid"
											/>
										</div>
										<div className="heading">
											<h4>Here Is To All Who Has Supported Summit</h4>
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
												Our university has enjoyed kind gestures from different
												individuals who believe in writing their names in the
												sands of time. From individuals, to families, private
												organizations and religious bodies, Summit University,
												Offa had been blessed with people of good heart who are
												only interested in the development of quality education
												for today's generation and beyond.
												<br />
												<br />
												While some have been instrumental in the development of
												our infrastructures, some have been supportive in
												funding scholarships for our indigent and brilliant
												students. In the same vein, we have received supports
												from others who are concerned about other welfare
												package for our students.{" "}
												<span>
													<i className="las la-quote-right"></i>When a man dies,
													his deeds come to an end except for three things:
													ceaseless charity; knowledge which is beneficial; or a
													virtuous descendant who prays for him (the deceased).
													- Prophet Muhammad (S.A.W.).
												</span>
												When you give to Summit, you educate tomorrow’s
												change-makers, drive discoveries and innovation, and
												help find solutions to societal challenges. You have
												created a legacy and your name will never go unnoticed.
												More importantly, you support the university’s mission
												and accelerates its purposeful impact in the world.{" "}
											</p>
											<br />
											<p>
												Here is the list of people and organizations who have
												supported our university right from its inception. We
												are indeed very grateful for their kind gestures.
											</p>
											<ul className="list-unstyled">
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> ADSN
													Northern States Women Council.
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> The
													Children, Grand Children and Great Grand Children of
													Alhaja Adiat Abegbe Makanjuola.
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> Alhaji
													Najeem Usman Yasin.
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> The Children
													of Chief Wahab Iyanda Balogun Igbalaiye (Asiwaju of
													Lagos).
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i>{" "}
													Ansar-Ud-Deen Youth Association of Nigeria (ADYAN).
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> ADSN Offa
													Zone.
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> ADSN Lagos
													State Council.
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> An Anonymous
													Donor from ADSN Lagos Branch.
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i>{" "}
													Ansar-Ud-Deen Youth Association of Nigeria (ADYAN)
													Kano Branch.
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> Dr. B.O.
													Babalakin SAN, CON, Pioneer Pro-Chancellor.
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> Mallam Yusuf
													Ali SAN.
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> Elite Club
													’89 of Lagos.
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> Nigeria
													Deposit Insurance Corporation (NDIC).
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> Engr. Kola
													Balogun.
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> Federal
													Ministry Of Water Resources.
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> ADSN Offa
													Branch.
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> SUNO Support
													Group.
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> ADSN
													Northern States Council.
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> ADSN
													National Women Council.
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> Alhaji Femi
													Okunnu SAN, CON.
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> Mrs Mosun
													Belo-Olusoga (M&B Foundation).
												</li>
												<li
													style={{
														display: "flex",
														justifyContent: "flex-start",
													}}
												>
													<i className="fa fa-check mt-0 mb-0"></i> The Family
													of Dr. M. Olatinwo, Former Rector, Federal
													Polytechnic, Offa.
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
