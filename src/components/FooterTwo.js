/** @format */

import {Formik} from "formik";
import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import Datas from "../data/footer/footer2.json";
import BackToTop from "./common/BackToTop";
import {Styles} from "./styles/footerTwo.js";

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

function FooterTwo() {
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
	};

	return (
		<Styles>
			{/* Footer Two */}
			<footer
				className="footer2"
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.backgroundImage})`,
				}}
			>
				<Container>
					<Row>
						<Col md="3">
							<div className="footer-logo-info">
								<p style={{marginTop: "5px"}}>
									Summit University, Offa is a private university established to
									offer qualitative tertiary education to students irrespective
									of nationality, ethnicity, creed and religion.
									<Link to="about"> Read more here...</Link>
								</p>
								<br />
								<ul className="list-unstyled">
									{/* <li>
										<i className="las la-map-marker"></i>Irra Road, PMB 4412,
										Offa, Kwara State, Nigeria.
									</li> */}
									<li>
										<address>
											<b>Summit Campus:</b> Irra Road, PMB 4412, Offa, Kwara
											State, Nigeria.
										</address>
										<address>
											<b>Lagos Liaison Office:</b> 165, Herbert Macaulay Way,
											Ebute Metta, Lagos, Nigeria.
										</address>
									</li>
									<li>
										<i className="las la-envelope"></i>info@suab.org
									</li>
									<li>
										<i className="las la-phone"></i>+234 802 735 2041
									</li>
								</ul>
							</div>
						</Col>
						<Col md="3">
							<div className="f-links">
								<h5>Useful Links</h5>
								<ul className="list-unstyled">
									<li>
										<Link to={process.env.PUBLIC_URL + "/projects"}>
											<i className="las la-angle-right"></i>Projects
										</Link>
									</li>
									<li>
										<Link to={process.env.PUBLIC_URL + "/legacies"}>
											<i className="las la-angle-right"></i>Legacies
										</Link>
									</li>
									<li>
										<Link to={process.env.PUBLIC_URL + "/about"}>
											<i className="las la-angle-right"></i>About Us
										</Link>
									</li>
									<li>
										<Link to={process.env.PUBLIC_URL + "/services"}>
											<i className="las la-angle-right"></i>Services
										</Link>
									</li>
									<li>
										<Link to={process.env.PUBLIC_URL + "/gallery"}>
											<i className="las la-angle-right"></i>Gallery
										</Link>
									</li>
								</ul>
							</div>
						</Col>
						<Col md="3">
							<div className="f-links">
								<h5>Useful Links</h5>

								<ul className="list-unstyled">
									<li>
										<Link to={process.env.PUBLIC_URL + "/"}>
											<i className="las la-angle-right"></i>Privacy Policy
										</Link>
									</li>
									<li>
										<Link to={process.env.PUBLIC_URL + "/contact"}>
											<i className="las la-angle-right"></i>Contact Us
										</Link>
									</li>
									<li>
										<Link to={process.env.PUBLIC_URL + "/faq"}>
											<i className="las la-angle-right"></i>FAQ
										</Link>
									</li>
									<li>
										<Link to={process.env.PUBLIC_URL + "/events"}>
											<i className="las la-angle-right"></i>Events
										</Link>
									</li>
									<li>
										<Link to={process.env.PUBLIC_URL + "/next-event"}>
											<i className="las la-angle-right"></i>Next Event
										</Link>
									</li>
								</ul>
							</div>
						</Col>
						<Col md="3">
							<div className="f-newsletter">
								<h5>Newsletter</h5>
								<p>Subscribe to our newsletter to receive latest updates.</p>
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
												id="form4"
												className="form"
											>
												<p className="form-control">
													<input
														type="text"
														placeholder="Enter name here"
														id="name4"
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
														placeholder="Enter email here"
														id="email4"
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
												<button>{loading ? "Submitting..." : "Submit"}</button>
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
						<Col md="12">
							<div className="copytext-area text-center">
								<p>
									Copyright &copy; 2021 | Designed With{" "}
									<i className="las la-heart"></i> by{" "}
									<a
										href={process.env.PUBLIC_URL + "/"}
										target="_blank"
										rel="noopener noreferrer"
									>
										Sodiq Akanmu
									</a>
								</p>
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

				{/* Back To Top  */}
				<BackToTop />
			</footer>
		</Styles>
	);
}

export default FooterTwo;
