/** @format */

import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Datas from "../data/footer/footer2.json";
import BackToTop from "./common/BackToTop";
import {Styles} from "./styles/footerTwo.js";

function FooterTwo() {
	useEffect(() => {
		const form = document.getElementById("form4");
		const email = document.getElementById("email4");

		form.addEventListener("submit", formSubmit);

		function formSubmit(e) {
			e.preventDefault();

			const emailValue = email.value.trim();

			if (emailValue === "") {
				setError(email, "Email can't be blank");
			} else if (!isEmail(emailValue)) {
				setError(email, "Not a valid email");
			} else {
				setSuccess(email);
			}
		}

		function setError(input, message) {
			const formControl = input.parentElement;
			const errorMsg = formControl.querySelector(".input-msg4");
			formControl.className = "form-control error";
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

								<form id="form4" className="form">
									<p className="form-control">
										<input
											type="email"
											placeholder="Enter email here"
											id="email4"
										/>
										<span className="input-msg4"></span>
									</p>
									<button>Submit</button>
								</form>
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
