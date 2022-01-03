/** @format */

import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {Styles} from "./styles/sidebar.js";

function Sidebar() {
	useEffect(() => {
		const sidebarBtn = document.getElementById("sidebar-btn");

		if (sidebarBtn) {
			const sidebarOverlay = document.getElementById("sidebar-overlay");
			const sidebarBody = document.getElementById("sidebar-body");
			const sidebarExit = document.getElementById("close-sidebar");

			sidebarBtn.addEventListener("click", function (e) {
				e.preventDefault();
				sidebarOverlay.classList.add("visible");
				sidebarBody.classList.add("opened");
			});

			sidebarOverlay.addEventListener("click", function (e) {
				e.preventDefault();
				sidebarOverlay.classList.remove("visible");
				sidebarBody.classList.remove("opened");
			});

			sidebarExit.addEventListener("click", function (e) {
				e.preventDefault();
				sidebarOverlay.classList.remove("visible");
				sidebarBody.classList.remove("opened");
			});
		}
	});

	return (
		<Styles>
			{/* Sidebar */}
			<a
				href={process.env.PUBLIC_URL + "/"}
				className="nav-link nav-sidebar"
				id="sidebar-btn"
			>
				<i className="las la-bars"></i>
			</a>

			<div className="sidebar" id="sidebar-body">
				<div className="side-logo d-flex justify-content-between">
					<div>
						<Link to={process.env.PUBLIC_URL + "/"}>
							<img
								src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
								alt=""
							/>
						</Link>
					</div>
					<div>
						<a href={process.env.PUBLIC_URL + "/"} id="close-sidebar">
							<i className="las la-times"></i>
						</a>
					</div>
				</div>
				<div className="side-content">
					<h5>About Us</h5>
					<p>
						Summit University - the University of Ansar-Ud-Deen Society of
						Nigeria - is a private university established to offer qualitative
						tertiary education to students irrespective of ethnicity, creed, and
						religion.{" "}
						<Link to={process.env.PUBLIC_URL + "/about"}>
							<span style={{color: "#666666", fontSize: "14px"}}>
								Read more...
							</span>
						</Link>
					</p>
				</div>
				<div className="side-post">
					<h5>Projects</h5>
					<div className="post-box d-flex">
						<div className="post-img">
							<Link to={process.env.PUBLIC_URL + "/projects"}>
								<img
									src={process.env.PUBLIC_URL + "/assets/images/course-02.jpg"}
									alt=""
								/>
							</Link>
						</div>
						<div className="post-title">
							<Link to={process.env.PUBLIC_URL + "/projects"}>
								<p>Award of Scholarship to Students</p>
								<span>N1.5M</span>
							</Link>
						</div>
					</div>
					<div className="post-box d-flex">
						<div className="post-img">
							<Link to={process.env.PUBLIC_URL + "/projects"}>
								<img
									src={process.env.PUBLIC_URL + "/assets/images/course-03.jpg"}
									alt=""
								/>
							</Link>
						</div>
						<div className="post-title">
							<Link to={process.env.PUBLIC_URL + "/projects"}>
								<p>Endowment of a Professorial Chair</p>
								<span>N15M</span>
							</Link>
						</div>
					</div>
					<div className="post-box d-flex">
						<div className="post-img">
							<Link to={process.env.PUBLIC_URL + "/projects"}>
								<img
									src={process.env.PUBLIC_URL + "/assets/images/course-04.jpg"}
									alt=""
								/>
							</Link>
						</div>
						<div className="post-title">
							<Link to={process.env.PUBLIC_URL + "/projects"}>
								<p>Construction of the University's Sports Centre</p>
								<span>N75M</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="side-gallery">
					<h5>Gallery</h5>
					<img
						src={process.env.PUBLIC_URL + "/assets/images/imagegallery-001.jpg"}
						alt=""
					/>
					<img
						src={process.env.PUBLIC_URL + "/assets/images/imagegallery-002.jpg"}
						alt=""
					/>
					<img
						src={process.env.PUBLIC_URL + "/assets/images/imagegallery-003.jpg"}
						alt=""
					/>
					<img
						src={process.env.PUBLIC_URL + "/assets/images/imagegallery-004.jpg"}
						alt=""
					/>
					<img
						src={process.env.PUBLIC_URL + "/assets/images/imagegallery-005.jpg"}
						alt=""
					/>
					<img
						src={process.env.PUBLIC_URL + "/assets/images/imagegallery-006.jpg"}
						alt=""
					/>
				</div>
				<div className="side-contact">
					<h5>Contact Us</h5>
					<ul className="list-unstyled">
						<li>
							<i className="las la-map-marker"></i>Irra Road, PMB 4412, Offa,
							Kwara State, Nigeria.
						</li>
						<li>
							<i className="las la-phone"></i>+234 (0) 802 735 2041
						</li>
						<li>
							<i className="las la-envelope"></i>info@mysuab.org
						</li>
					</ul>
				</div>
				<div className="side-social">
					<ul className="list-unstyled list-inline">
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
								<i className="fab fa-google"></i>
							</a>
						</li>
						<li className="list-inline-item">
							<a href={process.env.PUBLIC_URL + "/"}>
								<i className="fab fa-linkedin-in"></i>
							</a>
						</li>
						<li className="list-inline-item">
							<a href={process.env.PUBLIC_URL + "/"}>
								<i className="fab fa-instagram"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="sidebar-overlay" id="sidebar-overlay"></div>
		</Styles>
	);
}

export default Sidebar;
