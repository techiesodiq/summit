/** @format */

import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Styles} from "./styles/mobileMenu.js";

function MobileMenu() {
	useEffect(() => {
		// Mobile Menu
		const hmBtn = document.getElementById("mb-sidebar-btn");

		if (hmBtn) {
			const mdSidebarOverlay = document.getElementById("mb-sidebar-overlay");
			const mdSidebarBody = document.getElementById("mb-sidebar-body");
			const mdSidebarExit = document.getElementById("close-mb-sidebar");

			hmBtn.addEventListener("click", function (e) {
				e.preventDefault();
				mdSidebarOverlay.classList.toggle("visible");
				mdSidebarBody.classList.toggle("opened");
			});

			mdSidebarOverlay.addEventListener("click", function (e) {
				e.preventDefault();
				mdSidebarOverlay.classList.remove("visible");
				mdSidebarBody.classList.remove("opened");
			});

			mdSidebarExit.addEventListener("click", function (e) {
				e.preventDefault();
				mdSidebarOverlay.classList.remove("visible");
				mdSidebarBody.classList.remove("opened");
			});
		}

		// Menu Accordion -----------------
		const menuButton = document.querySelectorAll(".mb-menu-button");
		menuButton.forEach((button) => {
			button.addEventListener("click", () => {
				button.classList.toggle("active");
				const content = button.nextElementSibling;

				if (button.classList.contains("active")) {
					content.className = "mb-menu-content show";
					content.style.maxHeight = content.scrollHeight + "px";
				} else {
					content.className = "mb-menu-content";
					content.style.maxHeight = "0";
				}
			});
		});
	});

	return (
		<Styles>
			{/* Mobile Menu */}
			<section className="mobile-menu-area">
				<Container>
					<Row>
						<Col md="0" sm="12">
							<div className="mb-topbar d-flex justify-content-between">
								<div className="topbar-item">
									<p>
										<i className="las la-phone"></i>(+234) 802 735 2041
									</p>
								</div>
							</div>
							<div className="mb-logo-area d-flex justify-content-between">
								<div className="mb-logo-box d-flex">
									<div className="mb-logo">
										<Link to={process.env.PUBLIC_URL + "/"}>
											<img
												src={
													process.env.PUBLIC_URL +
													"/assets/images/suab-logo.png"
												}
												alt=""
											/>
										</Link>
									</div>
								</div>
								<div className="hm-button">
									<a
										style={{color: "#ffffff", fontSize: "45px"}}
										href={process.env.PUBLIC_URL + "/"}
										id="mb-sidebar-btn"
									>
										<i className="las la-bars"></i>
									</a>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			{/* Mobile Menu Sidebar */}
			<section className="mb-sidebar" id="mb-sidebar-body">
				<div className="mb-sidebar-heading d-flex justify-content-between">
					<div>
						<h5>Menu</h5>
					</div>
					<div>
						<a href={process.env.PUBLIC_URL + "/"} id="close-mb-sidebar">
							<i className="las la-times"></i>
						</a>
					</div>
				</div>
				<div className="mb-sidebar-menu">
					<div
						style={{paddingTop: "10px", paddingBottom: "10px"}}
						className="mb-menu-item"
					>
						<Link
							style={{
								textDecoration: "none",
								color: "black",
								fontSize: "14px",
							}}
							to={process.env.PUBLIC_URL + "/"}
						>
							HOME
						</Link>
					</div>
					<div className="mb-menu-item">
						<button className="mb-menu-button active">
							<Link
								to={process.env.PUBLIC_URL + "/services"}
								style={{
									textDecoration: "none",
									color: "black",
									fontSize: "14px",
								}}
							>
								SERVICES <i className="las la-plus"></i>
							</Link>
						</button>
						<div className="mb-menu-content show">
							<ul className="list-unstyled">
								<li>
									<Link to={process.env.PUBLIC_URL + "/endowment"}>
										Endowment
									</Link>
								</li>
								<li>
									<Link to={process.env.PUBLIC_URL + "/research-grants"}>
										Research Grants
									</Link>
								</li>
								<li>
									<Link to={process.env.PUBLIC_URL + "/professorial-chairs"}>
										Professorial Chairs
									</Link>
								</li>
								<li>
									<Link to={process.env.PUBLIC_URL + "/students-scholarship"}>
										Students' Scholarship
									</Link>
								</li>
								<li>
									<Link to={process.env.PUBLIC_URL + "/investment"}>
										Investment
									</Link>
								</li>
								<li>
									<Link
										to={process.env.PUBLIC_URL + "/international-relations"}
									>
										International Relations
									</Link>
								</li>
								<li>
									<Link to={process.env.PUBLIC_URL + "/business-ventures"}>
										Business Ventures
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div
						style={{paddingTop: "10px", paddingBottom: "10px"}}
						className="mb-menu-item"
					>
						<Link
							style={{
								textDecoration: "none",
								color: "black",
								fontSize: "14px",
							}}
							to={process.env.PUBLIC_URL + "/projects"}
						>
							PROJECTS
						</Link>
					</div>
					<div
						style={{paddingTop: "10px", paddingBottom: "10px"}}
						className="mb-menu-item"
					>
						<Link
							style={{
								textDecoration: "none",
								color: "black",
								fontSize: "14px",
							}}
							to={process.env.PUBLIC_URL + "/legacies"}
						>
							LEGACIES
						</Link>
					</div>
					<div
						style={{paddingTop: "10px", paddingBottom: "10px"}}
						className="mb-menu-item"
					>
						<Link
							style={{
								textDecoration: "none",
								color: "black",
								fontSize: "14px",
							}}
							to={process.env.PUBLIC_URL + "/alumni"}
						>
							ALUMNI
						</Link>
					</div>
					<div
						style={{paddingTop: "10px", paddingBottom: "10px"}}
						className="mb-menu-item"
					>
						<Link
							style={{
								textDecoration: "none",
								color: "black",
								fontSize: "14px",
							}}
							to={process.env.PUBLIC_URL + "/news"}
						>
							NEWS
						</Link>
					</div>
					<div
						style={{paddingTop: "10px", paddingBottom: "10px"}}
						className="mb-menu-item"
					>
						<Link
							style={{
								textDecoration: "none",
								color: "black",
								fontSize: "14px",
							}}
							to={process.env.PUBLIC_URL + "/contact"}
						>
							CONTACT
						</Link>
					</div>
				</div>
			</section>
			<div className="mb-sidebar-overlay" id="mb-sidebar-overlay"></div>
		</Styles>
	);
}

export default MobileMenu;
