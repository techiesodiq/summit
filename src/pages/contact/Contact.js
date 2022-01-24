/** @format */

import emailjs from "@emailjs/browser";
import {Formik} from "formik";
import React, {useRef, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import * as Yup from "yup";
import {BreadcrumbBox} from "../../components/common/Breadcrumb";
import FooterTwo from "../../components/FooterTwo";
import HeaderTwo from "../../components/HeaderTwo";
import GoogleMap from "./GoogleMap";
import {Styles} from "./styles/contact.js";

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

function Contact() {
	const form = useRef();
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
		fullName: "",
		email: "",
		subject: "",
		message: "",
	};

	return (
		<Styles>
			{/* Main Wrapper */}
			<div className="main-wrapper contact-page">
				{/* Header 2 */}
				<HeaderTwo />

				{/* Breadcroumb */}
				<BreadcrumbBox title="Contact Us" />

				{/* Contact Area */}
				<section className="contact-area">
					<Container>
						<Row>
							<Col md="4">
								<div className="contact-box-title">
									<h4>Contact Info</h4>
								</div>
								<div className="contact-icon-box d-flex">
									<div className="icon">
										<i className="las la-map-marker"></i>
									</div>
									<div className="box-content">
										<h5>Our Location</h5>
										<address>
											<b>Summit Campus:</b> Irra Road, PMB 4412, Offa, Kwara
											State, Nigeria.
										</address>
										<address>
											<b>Lagos Liaison Office:</b> 165, Herbert Macaulay Way,
											Ebute Metta, Lagos, Nigeria.
										</address>
									</div>
								</div>
								<div className="contact-icon-box d-flex">
									<div className="icon">
										<i className="las la-envelope-open"></i>
									</div>
									<div className="box-content">
										<h5>Email Address</h5>
										<p>
											info@mysuab.org
											<br />
											gm@suab.org
										</p>
									</div>
								</div>
								<div className="contact-icon-box d-flex">
									<div className="icon">
										<i className="las la-phone"></i>
									</div>
									<div className="box-content mt-3">
										<h5>Phone Number</h5>
										<p>+234 (0) 802 735 2041</p>
									</div>
								</div>
								<div className="contact-social">
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
												<i className="fab fa-instagram"></i>
											</a>
										</li>
									</ul>
								</div>
							</Col>
							<Col md="8">
								<div className="contact-form">
									<div className="form-title">
										<h4>Get In Touch</h4>
									</div>
									<div className="form-box">
										<Formik
											initialValues={formikInitialValues}
											validationSchema={Yup.object({
												fullName: Yup.string().required("Name can't be blank"),
												email: Yup.string()
													.email("Not a valid email")
													.required("Email can't be blank"),
												subject: Yup.string().required(
													"Subject can't be blank"
												),
												message: Yup.string()
													.required("Message can't be blank")
													.max(500, "Must be 500 characters or less"),
											})}
											onSubmit={async (values, {resetForm}) => {
												setLoading(true);
												emailjs
													.sendForm(
														"service_r73zsus",
														"template_xa2t6pf",
														form.current,
														"user_z3w4Z9rMH6T7xyd87noOV"
													)
													.then(
														(result) => {
															console.log(result.text);
															setLoading(false);
															setFeedbackModal((prev) => ({
																...prev,
																open: true,
																success: true,
																error: false,
																title: "Sent!",
																message:
																	"Email sent. We will contact you soon. Thank you.",
															}));
														},
														(error) => {
															console.log(error.text);
															setLoading(false);
															setWarningFeedbackModal((prev) => ({
																...prev,
																open: true,
																success: false,
																error: true,
																title: "Failed!",
																message: error.text,
															}));
														}
													);
												resetForm({values: ""});
											}}
										>
											{(props) => {
												return (
													<form
														ref={form}
														onSubmit={props.handleSubmit}
														id="form_contact"
														className="form"
													>
														<Row>
															<Col md="6">
																<p className="form-control">
																	<input
																		name="fullName"
																		type="text"
																		placeholder="Enter Full Name"
																		id="contact_name"
																		onBlur={props.handleBlur}
																		onChange={props.handleChange}
																		value={props.values.fullName}
																	/>
																	{props.touched.fullName &&
																	props.errors.fullName ? (
																		<p style={{color: "red", fontSize: "11px"}}>
																			{props.errors.fullName}
																		</p>
																	) : null}
																</p>
															</Col>
															<Col md="6">
																<p className="form-control">
																	<input
																		name="email"
																		type="email"
																		placeholder="Enter Email Address"
																		id="contact_email"
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
															<Col md="12">
																<p className="form-control">
																	<input
																		name="subject"
																		type="text"
																		placeholder="Enter Subject"
																		id="contact_subject"
																		onBlur={props.handleBlur}
																		onChange={props.handleChange}
																		value={props.values.subject}
																	/>
																	{props.touched.subject &&
																	props.errors.subject ? (
																		<p style={{color: "red", fontSize: "11px"}}>
																			{props.errors.subject}
																		</p>
																	) : null}
																</p>
															</Col>
															<Col md="12">
																<p className="form-control">
																	<textarea
																		name="message"
																		id="contact_message"
																		placeholder="Enter Message"
																		onBlur={props.handleBlur}
																		onChange={props.handleChange}
																		value={props.values.message}
																	></textarea>
																	{props.touched.message &&
																	props.errors.message ? (
																		<p style={{color: "red", fontSize: "11px"}}>
																			{props.errors.message}
																		</p>
																	) : null}
																</p>
															</Col>
															<Col md="12">
																<button>
																	{loading ? "Sending..." : "Send Message"}
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

					{/* Google Map */}
					<GoogleMap />
				</section>

				{/* Footer 2 */}
				<FooterTwo />
			</div>
		</Styles>
	);
}

export default Contact;
