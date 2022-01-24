/** @format */

import {Formik} from "formik";
import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import * as Yup from "yup";
import {Styles} from "./styles/newsletterForm.js";

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

function NewsletterForm() {
	const [loading, setLoading] = useState(false);
	const [feedbackModal, setFeedbackModal] = useState(
		initialStates.feedbackModal
	);
	const [warningFeedbackModal, setWarningFeedbackModal] = useState(
		initialStates.warningFeedbackModal
	);

	let data = {
		secTitle: "Get The Latest News & Updates On Your Box",
	};

	const closeFeedbackModal = () => {
		setFeedbackModal(initialStates.feedbackModal);
	};
	const closeWarningFeedbackModal = () => {
		setWarningFeedbackModal(initialStates.warningFeedbackModal);
	};

	const formikInitialValues = {
		name: "",
		email: "",
	};

	return (
		<Styles>
			{/* Newsletter Form */}
			<section className="newsletter-form-area">
				<Container>
					<Row>
						<Col md="12">
							<div className="newsletter-container">
								<div className="newsletter-box">
									<div className="sec-title text-center">
										<h4>{data.secTitle}</h4>
									</div>
									<Formik
										initialValues={formikInitialValues}
										validationSchema={Yup.object({
											name: Yup.string().required("Name can't be blank"),
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
													id="form2"
													className="form"
												>
													<Row>
														<Col md="4">
															<p className="form-control">
																<input
																	type="text"
																	placeholder="Enter your Name"
																	id="name2"
																	name="name"
																	onBlur={props.handleBlur}
																	onChange={props.handleChange}
																	value={props.values.name}
																/>
																{props.touched.name && props.errors.name ? (
																	<p style={{color: "red", fontSize: "11px"}}>
																		{props.errors.name}
																	</p>
																) : null}
															</p>
														</Col>
														<Col md="4">
															<p className="form-control">
																<input
																	type="email"
																	placeholder="Enter your Email"
																	id="email2"
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
														</Col>
														<Col md="4">
															<button>
																<i className="las la-envelope"></i>
																{loading
																	? "Sending subscription request..."
																	: "Subscribe Now"}
															</button>
														</Col>
													</Row>
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
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Styles>
	);
}

export default NewsletterForm;
