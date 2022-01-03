/** @format */

import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {BreadcrumbBox} from "../../components/common/Breadcrumb";
import FooterTwo from "../../components/FooterTwo";
import HeaderTwo from "../../components/HeaderTwo";
import {Styles} from "./styles/account.js";

function Register() {
	useEffect(() => {
		const form = document.getElementById("form_registration");
		const fname = document.getElementById("registration_fname");
		const lname = document.getElementById("registration_lname");
		const email = document.getElementById("registration_email");
		const user = document.getElementById("registration_user");
		const password = document.getElementById("registration_password");
		const cpassword = document.getElementById("registration_cpassword");

		form.addEventListener("submit", formSubmit);

		function formSubmit(e) {
			e.preventDefault();

			const fnameValue = fname.value.trim();
			const lnameValue = lname.value.trim();
			const emailValue = email.value.trim();
			const userValue = user.value.trim();
			const passwordValue = password.value.trim();
			const cpasswordValue = cpassword.value.trim();

			if (fnameValue === "") {
				setError(fname, "First name can't be blank");
			} else {
				setSuccess(fname);
			}

			if (lnameValue === "") {
				setError(lname, "Last name can't be blank");
			} else {
				setSuccess(lname);
			}

			if (emailValue === "") {
				setError(email, "Email can't be blank");
			} else if (!isEmail(emailValue)) {
				setError(email, "Not a valid email");
			} else {
				setSuccess(email);
			}

			if (userValue === "") {
				setError(user, "User name can't be blank");
			} else {
				setSuccess(user);
			}

			if (passwordValue === "") {
				setError(password, "Password can't be blank");
			} else {
				setSuccess(password);
			}

			if (cpasswordValue === "" || passwordValue !== cpasswordValue) {
				setError(cpassword, "Password doesn't match");
			} else {
				setSuccess(cpassword);
			}
		}

		function setError(input, message) {
			const formControl = input.parentElement;
			const errorMsg = formControl.querySelector(".registration_input-msg");
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
									<form id="form_registration" className="form">
										<p className="form-control">
											<label htmlFor="registration_fname">First Name</label>
											<input
												type="text"
												placeholder="First name"
												id="registration_fname"
											/>
											<span className="registration_input-msg"></span>
										</p>
										<p className="form-control">
											<label htmlFor="registration_lname">Last Name</label>
											<input
												type="text"
												placeholder="Last name"
												id="registration_lname"
											/>
											<span className="registration_input-msg"></span>
										</p>
										<p className="form-control">
											<label htmlFor="registration_email">Email Address</label>
											<input
												type="email"
												placeholder="Email address"
												id="registration_email"
											/>
											<span className="registration_input-msg"></span>
										</p>
										<p className="form-control">
											<label htmlFor="registration_user">Course of Study</label>
											<input
												type="text"
												placeholder="Course of Study"
												id="registration_user"
											/>
											<span className="registration_input-msg"></span>
										</p>
										<p className="form-control">
											<label htmlFor="registration_user">Department</label>
											<input
												type="text"
												placeholder="Department"
												id="registration_user"
											/>
											<span className="registration_input-msg"></span>
										</p>

										<button>Submit</button>
									</form>
									{/* <div className="have_account-btn text-center">
                                        <p>Already have an account? <Link to="/login">Login Here</Link></p>
                                    </div> */}
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
