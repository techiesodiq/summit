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
					<BreadcrumbBox title="Investment" />

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
													`/assets/images/investment.jpg`
												}
												alt=""
												className="img-fluid"
											/>
										</div>
										<div className="heading">
											<h4>Summit Investment Programmes</h4>
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
														<i className="las la-bookmark"></i> Investment
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
												Our Investment Program is sub-divided into two parts:
												the internal capital projects investment and the
												external investment.
											</p>
											<br />
											<br />
											<h5>Internal Capital Projects Investment</h5>
											<p>
												For both new buildings and renovations, the Office of
												Capital Projects (OCP) provides leadership and
												experience to oversee capital projects from design to
												construction and delivery. We serve as a link between
												the project's supporting university department and the
												remaining project team, which includes designers,
												architects, engineers, and constructors. We also supply
												the lovely interior design and furniture layouts that
												you see in our structures. Many in our group bring
												specific sustainability knowledge and have been
												recognized as professionals in addition to leading
												project teams and monitoring project progress.
												<br />
												<br />
												This office would also provide property development and
												project management services. To fulfil the requirements
												of our students, professors, and staff, we shall
												frequently collaborate with other firms to build,
												manage, and provide real estate assets. Traditional
												project team structures are considered, as well as the
												ones that are only available on a project-by-project
												basis. Administrative buildings, residential
												developments, and multi-user projects are all part of
												the portfolio.
												{/* <span>
													<i className="las la-quote-right"></i>When a man dies,
													his deeds come to an end except for three things:
													ceaseless charity; knowledge which is beneficial; or a
													virtuous descendant who prays for him (the deceased).
													- Prophet Muhammad (S.A.W.).
												</span> */}
												We have been instrumental and supportive in managing all
												the capital projects donated to Summit from different
												organizations and bodies.
											</p>
											<br />
											<p>Some of our benefactors include:</p>
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
											<br />
											<br />
											<h5>Internal Capital Projects Investment</h5>
											<p>
												The endowment of Summit University will be mostly
												invested with external investment managers and passive
												indices. An investment manager, which can be a company
												or an individual, invests on behalf of its clients in
												public equities, private enterprises, credit
												instruments, and real estate.
												<br />
												<br />
												Summit's external managers buy and sell investments as
												needed, as well as evaluate the overall performance of
												the funds they manage, to meet their customers'
												investment objectives and parameters. The Endowment
												Office recruits and supervises these outside investment
												managers based on the university's asset allocation,
												liquidity, and risk standards.
											</p>
											<br />
											<ol>
												<li>
													<b>Share:</b> We will also invest in Shares and will
													be a member of The Nigerian Stock Exchange in the not
													too far future .
												</li>
												<li>
													<b>Assets:</b> Assets Are The Unrestricted Funds In
													Our Endowment For Which The Donor Has Not Specified A
													Purpose. While The Vast Majority Of Summit's Endowment
													Funds Have Been Designated For A Specific Purpose,
													Unrestricted Funds Allow The University To Respond To
													A Wide Range Of Needs And Priorities As They Arise.
												</li>
												<li>
													<b>Properties:</b>
													The University Is Planning To Own And Manage Rental
													Properties In Growing And Dynamic Areas Of Our
													Community. Our Residents Include Undergraduate And
													Graduate Students, Young Professionals, Faculty, Staff
													And Other Community Members. Rental Periods Often, But
													Not Always, Parallel The School Calendar. We Also
													Consider Tenant Applications Throughout The Year For
													Properties That Will Become available In The
													Future.For More Information, You can contact us on
													+2348027352041 Or gm@suab.org .
												</li>
											</ol>
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
												Invest Now
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
