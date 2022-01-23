/** @format */

import emailjs from "@emailjs/browser";
import React, {useEffect, useRef, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {BreadcrumbBox} from "../../components/common/Breadcrumb";
import FooterTwo from "../../components/FooterTwo";
import HeaderTwo from "../../components/HeaderTwo";
import GoogleMap from "./GoogleMap";
import {Styles} from "./styles/contact.js";

const Result = () => (
	<p>Your message has been successfully sent. We will contact you soon.</p>
);

function Contact() {
	const [result, setResult] = useState(false);
	const RESULT_SHOWTIME = 5000;

	useEffect(() => {
		const form = document.getElementById("form_contact");
		const name = document.getElementById("contact_name");
		const email = document.getElementById("contact_email");
		const subject = document.getElementById("contact_subject");
		const message = document.getElementById("contact_message");

		form.addEventListener("submit", formSubmit);

		function formSubmit(e) {
			e.preventDefault();

			const nameValue = name.value.trim();
			const emailValue = email.value.trim();
			const subjectValue = subject.value.trim();
			const messageValue = message.value.trim();

			if (nameValue === "") {
				setError(name, "Name can't be blank");
			} else {
				setSuccess(name);
			}

			if (emailValue === "") {
				setError(email, "Email can't be blank");
			} else if (!isEmail(emailValue)) {
				setError(email, "Not a valid email");
			} else {
				setSuccess(email);
			}

			if (subjectValue === "") {
				setError(subject, "Subject can't be blank");
			} else {
				setSuccess(subject);
			}

			if (messageValue === "") {
				setError(message, "Message can't be blank");
			} else {
				setSuccess(message);
			}
		}

		function setError(input, message) {
			const formControl = input.parentElement;
			const errorMsg = formControl.querySelector(".contact_input-msg");
			formControl.className = "form-control text-left error";
			errorMsg.innerText = message;
		}

		function setSuccess(input) {
			const formControl = input.parentElement;
			formControl.className = "form-control success";
		}

		function isEmail(email) {
			return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
		}
	});

	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

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
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
		setResult(true);
	};

	// Hide Result
	setTimeout(() => {
		setResult(false);
	}, RESULT_SHOWTIME);

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
										<form
											ref={form}
											onSubmit={sendEmail}
											id="form_contact"
											className="form"
										>
											<Row>
												<Col md="6">
													<p className="form-control">
														<input
															name="fullName"
															type="text"
															placeholder="Full Name"
															id="contact_name"
														/>
														<span className="contact_input-msg"></span>
													</p>
												</Col>
												<Col md="6">
													<p className="form-control">
														<input
															name="email"
															type="email"
															placeholder="Email Address"
															id="contact_email"
														/>
														<span className="contact_input-msg"></span>
													</p>
												</Col>
												<Col md="12">
													<p className="form-control">
														<input
															name="subject"
															type="text"
															placeholder="Subject"
															id="contact_subject"
														/>
														<span className="contact_input-msg"></span>
													</p>
												</Col>
												<Col md="12">
													<p className="form-control">
														<textarea
															name="message"
															id="contact_message"
															placeholder="Enter Message"
														></textarea>
														<span className="contact_input-msg"></span>
													</p>
												</Col>
												<Col md="12">
													<button>Send Message</button>
												</Col>
												<Row>
													<Col md="12">
														<div>{result ? <Result /> : null}</div>
													</Col>
												</Row>
											</Row>
										</form>
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
