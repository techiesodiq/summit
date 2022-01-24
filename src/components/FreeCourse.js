/** @format */

import {Formik} from "formik";
import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import Timer from "react-compound-timer";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import * as Yup from "yup";
import Datas from "../data/free-course/free-course.json";
import {Styles} from "./styles/freeCourse.js";

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

function FreeCourse() {
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
		phone: "",
	};

	return (
		<Styles>
			{/* Free Course */}
			<section className="free-course-area">
				<Container>
					<Row>
						<Col md="7">
							<div className="course-text">
								<h4>{Datas.secTitle}</h4>
								<p>{Datas.subTitle}</p>
							</div>
							<div className="countdown-timer">
								<Timer initialTime={10440 * 2970 * 980} direction="backward">
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
						</Col>
						<Col md="5">
							<div
								className="register-form text-center"
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.formBackground})`,
								}}
							>
								<div className="form-box">
									<h4 className="title">Sign Up Now</h4>
									<p className="desc">Get Free Updates</p>
									<Formik
										initialValues={formikInitialValues}
										validationSchema={Yup.object({
											name: Yup.string().required("Name can't be blank"),
											email: Yup.string()
												.email("Not a valid email")
												.required("Email can't be blank"),
											phone: Yup.string()
												.max(20, "Maximum of 20 digits")
												.required("Number can't be blank"),
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
														"You have successfully requested for our free updates. Thank you.",
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
													id="form3"
													className="form"
												>
													<p className="form-control">
														<input
															type="text"
															placeholder="Enter your Name"
															id="name3"
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
													<p className="form-control">
														<input
															type="email"
															placeholder="Enter your Email"
															id="email3"
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
														<ReactPhoneInput
															type="text"
															placeholder="Enter Phone Number"
															id="phone3"
															country="ng"
															value={props.values.destination}
															inputProps={{
																name: "phone",
																required: true,
															}}
															inputStyle={{width: "100%", paddingLeft: "45px"}}
															onBlur={props.handleBlur}
															onChange={(val) => {
																props.setFieldValue("phone", val);
															}}
														/>
														{props.touched.phone && props.errors.phone ? (
															<p style={{color: "red", fontSize: "11px"}}>
																{props.errors.phone}
															</p>
														) : null}
													</p>
													<button>
														{loading ? "Sending Request..." : "Send Request"}
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
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Styles>
	);
}

export default FreeCourse;
