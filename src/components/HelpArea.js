/** @format */

import {Formik} from "formik";
import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import * as Yup from "yup";
import Datas from "../data/help-area/help-area.json";
import {Styles} from "./styles/homeContact.js";

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

function HelpArea() {
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
		name: "",
		email: "",
		subject: "",
	};

	return (
		<Styles>
			{/* Help Area */}
			<section
				className="home-contact-area"
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.backgroundImage})`,
				}}
			>
				<Container>
					<Row>
						<Col md="12">
							<div className="sec-title text-center">
								<h4>{Datas.secTitle}</h4>
							</div>
						</Col>
						<Col md="12">
							<Formik
								initialValues={formikInitialValues}
								validationSchema={Yup.object({
									name: Yup.string().required("Name can't be blank"),
									email: Yup.string()
										.email("Not a valid email")
										.required("Email can't be blank"),
									subject: Yup.string().required("Subject can't be blank'"),
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
											title: "Sent!",
											message:
												"Request sent. We will contact you soon. Thank you.",
										}));
									} else {
										setLoading(false);
										setWarningFeedbackModal((prev) => ({
											...prev,
											open: true,
											success: false,
											error: true,
											title: "Failed!",
											message: "request not sent",
										}));
									}
								}}
							>
								{(props) => {
									return (
										<form
											id="form1"
											className="form"
											onSubmit={props.handleSubmit}
										>
											<Row>
												<Col md="4">
													<p className="form-control">
														<input
															type="text"
															placeholder="Enter your Name"
															id="name1"
															name="name"
															onBlur={props.handleBlur}
															onChange={props.handleChange}
															value={props.values.name}
														/>
														{props.touched.name && props.errors.name ? (
															<p
																style={{
																	color: "red",
																	fontSize: "11px",
																}}
															>
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
															id="email1"
															name="email"
															onBlur={props.handleBlur}
															onChange={props.handleChange}
															value={props.values.email}
														/>
														{props.touched.email && props.errors.email ? (
															<p
																style={{
																	color: "red",
																	fontSize: "11px",
																}}
															>
																{props.errors.email}
															</p>
														) : null}
													</p>
												</Col>
												<Col md="4">
													<p className="form-control">
														<input
															type="text"
															placeholder="Enter Subject"
															id="subject1"
															name="subject"
															onBlur={props.handleBlur}
															onChange={props.handleChange}
															value={props.values.subject}
														/>
														{props.touched.subject && props.errors.subject ? (
															<p
																style={{
																	color: "red",
																	fontSize: "11px",
																}}
															>
																{props.errors.subject}
															</p>
														) : null}
													</p>
												</Col>
												<Col md="12" className="text-center">
													<button>
														{loading ? "Sending Request..." : "Send Request"}
													</button>
												</Col>
											</Row>
										</form>
									);
								}}
							</Formik>
						</Col>
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
					</Row>
				</Container>
			</section>
		</Styles>
	);
}

export default HelpArea;
