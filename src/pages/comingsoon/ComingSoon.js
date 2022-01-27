/** @format */

import {Formik} from "formik";
import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import Timer from "react-compound-timer";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import Datas from "../../data/coming-soon/coming-soon.json";
import {Styles} from "./styles/comingSoon.js";

const initialStates = {
	feedbackModal: {
		open: false,
		message: "",
		title: "",
	},
	warningFeedbackModal: {
		open: false,
		message: "",
		title: "",
	},
};

function ComingSoon() {
	const [loading, setLoading] = useState(false);
	const [feedbackModal, setFeedbackModal] = useState(
		initialStates.feedbackModal
	);
	const [warningFeedbackModal, setWarningFeedbackModal] = useState(
		initialStates.warningFeedbackModal
	);

	const closeFeedbackModal = () => {
		setFeedbackModal(initialStates.feedbackModal);
	};
	const closeWarningFeedbackModal = () => {
		setWarningFeedbackModal(initialStates.warningFeedbackModal);
	};

	const formikInitialValues = {
		email: "",
	};

	return (
		<div className="site-wrap">
			<Styles>
				{/* Main Wrapper */}
				<div className="main-wrapper coming-soon-page">
					{/* Coming Soon Area */}
					<section
						className="coming-soon-area"
						style={{
							backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.backgroundImage})`,
						}}
					>
						<div className="cm-table">
							<div className="cm-tablecell">
								<Container>
									<Row>
										<Col md="12" className="text-center">
											<div className="cm-logo">
												<Link to={process.env.PUBLIC_URL + "/"}>
													<img
														src={
															process.env.PUBLIC_URL + "/assets/images/logo.png"
														}
														alt=""
													/>
												</Link>
											</div>
											<div className="launching-text">
												<p>Alumni Quarterly Engagement</p>
											</div>
											<div className="countdown-timer">
												<Timer
													initialTime={2190 * 1310 * 980}
													direction="backward"
												>
													<p>
														<span>
															<Timer.Days />
														</span>
														Days
													</p>
													<p>
														<span>
															<Timer.Hours />
														</span>
														Hours
													</p>
													<p>
														<span>
															<Timer.Minutes />
														</span>
														Minutes
													</p>
													<p>
														<span>
															<Timer.Seconds />
														</span>
														Seconds
													</p>
												</Timer>
											</div>
											<div className="email-subscrition">
												<p className="sub-text">
													Don't miss our news & updates
												</p>
												<Formik
													initialValues={formikInitialValues}
													validationSchema={Yup.object({
														email: Yup.string()
															.email("Not a valid email")
															.required("Email can't be blank"),
													})}
													onSubmit={async (values, {resetForm}) => {
														setLoading(true);
														resetForm({values: ""});
														if (values) {
															console.log(values);
															setLoading(false);
															setFeedbackModal((prev) => ({
																...prev,
																open: true,
																success: true,
																error: false,
																title: "Awesome!",
																message:
																	"You have successfully subscribed to our mailing list. Thank you.",
															}));
														} else {
															setLoading(false);
															setWarningFeedbackModal((prev) => ({
																...prev,
																open: true,
																success: false,
																error: true,
																title: "Failed!",
																message: "Subscription failed",
															}));
														}
													}}
												>
													{(props) => {
														return (
															<form
																onSubmit={props.handleSubmit}
																id="cm_form"
																className="form"
															>
																<p className="form-control">
																	<input
																		type="email"
																		placeholder="Enter your email"
																		id="cm_email"
																		name="email"
																		onBlur={props.handleBlur}
																		onChange={props.handleChange}
																		value={props.values.email}
																	/>
																	{props.touched.email && props.errors.email ? (
																		<p style={{color: "red", fontSize: "11px"}}>
																			{props.errors.email}
																		</p>
																	) : null}
																</p>
																<button>
																	{loading ? "Submitting..." : "Submit"}
																</button>
															</form>
														);
													}}
												</Formik>
												<Col lg={12}>
													{feedbackModal.open && (
														<SweetAlert
															title={feedbackModal.title}
															success
															confirmBtnBsStyle="success"
															onConfirm={closeFeedbackModal}
														>
															{feedbackModal.message}
														</SweetAlert>
													)}
													<div>
														{warningFeedbackModal.open && (
															<SweetAlert
																title={warningFeedbackModal.title}
																danger
																confirmBtnBsStyle="danger"
																onConfirm={closeWarningFeedbackModal}
															>
																{warningFeedbackModal.message}
															</SweetAlert>
														)}
													</div>
												</Col>
											</div>
											<div className="cm-social">
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
											</div>
										</Col>
									</Row>
								</Container>
							</div>
						</div>
					</section>
				</div>
			</Styles>
		</div>
	);
}

export default ComingSoon;
