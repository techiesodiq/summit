/** @format */

import {Formik} from "formik";
import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import * as Yup from "yup";
import {BreadcrumbBox} from "../../components/common/Breadcrumb";
import FooterTwo from "../../components/FooterTwo";
import HeaderTwo from "../../components/HeaderTwo";
import {Styles} from "./styles/account.js";

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

function Register() {
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
		firstName: "",
		lastName: "",
		email: "",
		course: "",
		department: "",
	};

	return (
		<Styles>
			{/* Main Wrapper */}
			<div className="main-wrapper registration-page">
				{/* Header 2 */}
				<HeaderTwo />

				{/* Breadcroumb */}
				<BreadcrumbBox title="Registration" />

				{/* Registration Area */}
				<section className="registration-area">
					<Container>
						<Row>
							<Col md="12">
								<div className="registration-box">
									<div className="registration-title text-center">
										<h3>Alumni Membership Registration</h3>
									</div>
									<Formik
										initialValues={formikInitialValues}
										validationSchema={Yup.object({
											firstName: Yup.string().required(
												"First Name can't be blank"
											),
											lastName: Yup.string().required(
												"Last Name can't be blank"
											),
											email: Yup.string()
												.email("Not a valid email")
												.required("Email can't be blank"),
											course: Yup.string().required("Course can't be blank"),
											department: Yup.string().required(
												"Department can't be blank"
											),
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
													title: "Congratulations!",
													message:
														"You have successfully registered to be part of the university alumni body. Other necessary information will be communicated to you soon. Thank you.",
												}));
											} else {
												setLoading(false);
												setWarningFeedbackModal((prev) => ({
													...prev,
													open: true,
													success: false,
													error: true,
													title: "Failed!",
													message: "Registration failed",
												}));
											}
										}}
									>
										{(props) => {
											return (
												<form
													onSubmit={props.handleSubmit}
													id="form_registration"
													className="form"
												>
													<p className="form-control">
														<label htmlFor="registration_fname">
															First Name
														</label>
														<input
															type="text"
															placeholder="First name"
															id="registration_fname"
															name="firstName"
															onBlur={props.handleBlur}
															onChange={props.handleChange}
															value={props.values.firstName}
														/>
														{props.touched.firstName &&
														props.errors.firstName ? (
															<p style={{color: "red", fontSize: "11px"}}>
																{props.errors.firstName}
															</p>
														) : null}
													</p>
													<p className="form-control">
														<label htmlFor="registration_lname">
															Last Name
														</label>
														<input
															type="text"
															placeholder="Last name"
															id="registration_lname"
															name="lastName"
															onBlur={props.handleBlur}
															onChange={props.handleChange}
															value={props.values.lastName}
														/>
														{props.touched.lastName && props.errors.lastName ? (
															<p style={{color: "red", fontSize: "11px"}}>
																{props.errors.lastName}
															</p>
														) : null}
													</p>
													<p className="form-control">
														<label htmlFor="registration_email">
															Email Address
														</label>
														<input
															type="email"
															placeholder="Email address"
															id="registration_email"
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
													<p className="form-control">
														<label htmlFor="registration_user">
															Course of Study
														</label>
														<input
															type="text"
															placeholder="Course of Study"
															id="registration_user"
															name="course"
															onBlur={props.handleBlur}
															onChange={props.handleChange}
															value={props.values.course}
														/>
														{props.touched.course && props.errors.course ? (
															<p style={{color: "red", fontSize: "11px"}}>
																{props.errors.course}
															</p>
														) : null}
													</p>
													<p className="form-control">
														<label htmlFor="registration_user">
															Department
														</label>
														<input
															type="text"
															placeholder="Department"
															id="registration_user"
															name="department"
															onBlur={props.handleBlur}
															onChange={props.handleChange}
															value={props.values.department}
														/>
														{props.touched.department &&
														props.errors.department ? (
															<p style={{color: "red", fontSize: "11px"}}>
																{props.errors.department}
															</p>
														) : null}
													</p>

													<button type="submit">
														{loading ? "Submitting..." : "Submit"}
													</button>
												</form>
											);
										}}
									</Formik>
								</div>
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

				{/* Footer 2 */}
				<FooterTwo />
			</div>
		</Styles>
	);
}

export default Register;
