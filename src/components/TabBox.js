/** @format */

import React, {Component} from "react";
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import missionImg from "../components/images/mission.svg";
import philosophyImg from "../components/images/philosophy.svg";
import visionImg from "../components/images/vision.svg";
import {Styles} from "./styles/tabBox.js";

class TabBox extends Component {
	render() {
		return (
			<Styles>
				{/* Tab Box Area */}
				<section className="tab-section">
					<Container>
						<Tab.Container defaultActiveKey="why">
							<Row>
								<Col lg="3" md="4">
									<Nav className="flex-column">
										<Nav.Item>
											<Nav.Link eventKey="why">
												<i className="las la-arrow-right"></i> Why Summit
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="mission">
												<i className="las la-arrow-right"></i> Our Vision
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="vision">
												<i className="las la-arrow-right"></i> Our Mission
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="ranking">
												<i className="las la-arrow-right"></i> Our Philosophy
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="research">
												<i className="las la-arrow-right"></i> Our Proprietor
											</Nav.Link>
										</Nav.Item>
									</Nav>
								</Col>
								<Col lg="9" md="8">
									<Tab.Content>
										<Tab.Pane eventKey="why">
											<h4 className="tab-title">Why Summit</h4>
											<p className="tab-desc">
												Summit University, Offa - the university of
												Ansar-Ud-Deen Society of Nigeria - is a private
												university established to offer qualitative tertiary
												education to students irrespective of
												nationality,ethnicity, creed and religion.
											</p>
											<ul className="list-unstyled check-list">
												<li>
													<i className="fa fa-check"></i>The University obtained
													its Provisional License issued by the National
													Universities Commission (NUC) on March 2015 and
													obtained Full Operational License on 1st April, 2019.
												</li>
												<li>
													<i className="fa fa-check"></i>It commenced academic
													activities on 6th March, 2017 in three Colleges
													namely: College of Natural & Applied Sciences, College
													of Management &Social Sciences, and College of
													Humanities.
												</li>
												<li>
													<i className="fa fa-check"></i>The University
													currently runs seventeen (17) programmes spread across
													3 different faculties including College of Natural &
													Applied Sciences, College of Management &Social
													Sciences, and College of Humanities..
												</li>
											</ul>
										</Tab.Pane>
										<Tab.Pane eventKey="mission">
											<div style={{display: "flex", alignItems: "center"}}>
												<div style={{flex: "1.5"}}>
													<h4 className="tab-title">Our Vision</h4>
													<p className="tab-desc">
														To provide for the advancement of learning and the
														acquisition of sound education enriched with good
														morals.
													</p>
												</div>
												<div style={{flex: "1"}}>
													<img src={visionImg} alt="" />
												</div>
											</div>
											{/* <ul className="list-unstyled check-list">
												<li>
													<i className="fa fa-check"></i>Lorem ipsum dolor sit
													amet, consectetur adipisicing elit. Voluptatum amet
													quo eius saepe et quis necessitatibus hic natus
													facere.
												</li>
												<li>
													<i className="fa fa-check"></i>Lorem ipsum dolor sit
													amet, consectetur adipisicing elit. Voluptatum amet
													quo eius saepe et quis necessitatibus hic natus
													facere.
												</li>
												<li>
													<i className="fa fa-check"></i>Lorem ipsum dolor sit
													amet, consectetur adipisicing elit. Voluptatum amet
													quo eius saepe et quis necessitatibus hic natus
													facere.
												</li>
											</ul> */}
										</Tab.Pane>
										<Tab.Pane eventKey="vision">
											<div style={{display: "flex", alignItems: "center"}}>
												<div style={{flex: "1.5"}}>
													<h4 className="tab-title">Our Mission</h4>
													<p className="tab-desc">
														To ensure that Summit University, Offa has financial
														resources to confidentially grow,maintain and expand
														its leadership in education and research for current
														and future generations.
													</p>
												</div>
												<div style={{flex: "1"}}>
													<img src={missionImg} alt="" />
												</div>
											</div>

											{/* <ul className="list-unstyled check-list">
												<li>
													<i className="fa fa-check"></i>Lorem ipsum dolor sit
													amet, consectetur adipisicing elit. Voluptatum amet
													quo eius saepe et quis necessitatibus hic natus
													facere.
												</li>
												<li>
													<i className="fa fa-check"></i>Lorem ipsum dolor sit
													amet, consectetur adipisicing elit. Voluptatum amet
													quo eius saepe et quis necessitatibus hic natus
													facere.
												</li>
												<li>
													<i className="fa fa-check"></i>Lorem ipsum dolor sit
													amet, consectetur adipisicing elit. Voluptatum amet
													quo eius saepe et quis necessitatibus hic natus
													facere.
												</li>
											</ul> */}
										</Tab.Pane>
										<Tab.Pane eventKey="ranking">
											<div style={{display: "flex", alignItems: "center"}}>
												<div style={{flex: "1.5"}}>
													<h4 className="tab-title">Our Philosophy</h4>
													<p className="tab-desc">
														To produce educated men and women imbued with moral
														and spiritual integrity for the service of God and
														benefit of humanity.
													</p>
												</div>
												<div style={{flex: "1"}}>
													<img src={philosophyImg} alt="" />
												</div>
											</div>

											{/* <ul className="list-unstyled check-list">
												<li>
													<i className="fa fa-check"></i>Lorem ipsum dolor sit
													amet, consectetur adipisicing elit. Voluptatum amet
													quo eius saepe et quis necessitatibus hic natus
													facere.
												</li>
												<li>
													<i className="fa fa-check"></i>Lorem ipsum dolor sit
													amet, consectetur adipisicing elit. Voluptatum amet
													quo eius saepe et quis necessitatibus hic natus
													facere.
												</li>
												<li>
													<i className="fa fa-check"></i>Lorem ipsum dolor sit
													amet, consectetur adipisicing elit. Voluptatum amet
													quo eius saepe et quis necessitatibus hic natus
													facere.
												</li>
											</ul> */}
										</Tab.Pane>
										<Tab.Pane eventKey="research">
											<h4 className="tab-title">Our Proprietor</h4>
											<p className="tab-desc">
												The university was established by Ansar-Ud-Deen Society
												of Nigeria (ADSN), a foremost Muslim organization
												founded in 1923 to enhance spiritual, moral and social
												development of the Muslim community. As a non-profit
												making religious organization, ADSN has invested
												massively in educational development of Nigeria and
												delivers services to the people without any
												discrimination on the basis of gender, religion or
												ethnicity.
											</p>
											<ul className="list-unstyled check-list">
												<li>
													<i className="fa fa-check"></i> In its 98 years of
													existence, the Society has been able to promote the
													establishment of Primary and Secondary Schools in
													various part of the country.
												</li>
												<li>
													<i className="fa fa-check"></i>Presently, the name
													Ansar-Ud-Deen Schools can be found on about 33 Nursery
													Schools, 236 Primary Schools, 58 Secondary Schools and
													1 College of Education.
												</li>
												<li>
													<i className="fa fa-check"></i>These schools are
													currently in operation and are located in different
													places across the entire Northern and South-western
													parts of Nigeria.
												</li>
											</ul>
										</Tab.Pane>
									</Tab.Content>
								</Col>
							</Row>
						</Tab.Container>
					</Container>
				</section>
			</Styles>
		);
	}
}

export default TabBox;
