/** @format */

import emailjs from "@emailjs/browser";
import {Formik} from "formik";
import React, {useRef, useState} from "react";
import {Col, Row} from "react-bootstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import * as Yup from "yup";
import {Styles} from "../styles/reviewForm.js";

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

function ReviewForm() {
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
			<Formik
				initialValues={formikInitialValues}
				validationSchema={Yup.object({
					fullName: Yup.string().required("Name can't be blank"),
					email: Yup.string()
						.email("Not a valid email")
						.required("Email can't be blank"),
					subject: Yup.string().required("Subject can't be blank"),
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
									message: "Email sent. We will contact you soon. Thank you.",
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
							id="form6"
							className="form review-comment-form"
						>
							<Row>
								<Col md="6">
									<p className="form-control">
										<input
											type="text"
											placeholder="Enter your name"
											id="name6"
											name="fullName"
											onBlur={props.handleBlur}
											onChange={props.handleChange}
											value={props.values.fullName}
										/>
										{props.touched.fullName && props.errors.fullName ? (
											<p style={{color: "red", fontSize: "11px"}}>
												{props.errors.fullName}
											</p>
										) : null}
									</p>
								</Col>
								<Col md="6">
									<p className="form-control">
										<input
											type="email"
											placeholder="Enter your email"
											id="email6"
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
								<Col md="12">
									<p className="form-control">
										<input
											type="text"
											placeholder="Enter your subject"
											id="email6"
											name="subject"
											onBlur={props.handleBlur}
											onChange={props.handleChange}
											value={props.values.subject}
										/>
										{props.touched.subject && props.errors.subject ? (
											<p style={{color: "red", fontSize: "11px"}}>
												{props.errors.subject}
											</p>
										) : null}
									</p>
								</Col>
								<Col md="12">
									<p className="form-control">
										<textarea
											id="desc6"
											placeholder="Enter your message"
											name="message"
											onBlur={props.handleBlur}
											onChange={props.handleChange}
											value={props.values.message}
										></textarea>
										{props.touched.message && props.errors.message ? (
											<p style={{color: "red", fontSize: "11px"}}>
												{props.errors.message}
											</p>
										) : null}
									</p>
								</Col>

								<Col md="12">
									<button>{loading ? "Sending..." : "Send"}</button>
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
		</Styles>
	);
}

export default ReviewForm;
