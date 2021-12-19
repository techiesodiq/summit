/** @format */

import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
import {Link} from "react-router-dom";
import Datas from "../data/about-us/about-us.json";
import {Styles} from "./styles/aboutUs.js";

class AboutUs extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false,
		};
		this.openModal = this.openModal.bind(this);
	}

	openModal() {
		this.setState({isOpen: true});
	}

	render() {
		return (
			<Styles>
				{/* About Us */}
				<section className="about-us">
					<Container>
						<Row>
							<Col md="6">
								<div className="about-image">
									<img
										src={
											process.env.PUBLIC_URL +
											`/assets/images/${Datas.mainImage}`
										}
										className="main-img"
										alt=""
									/>
									<img
										src={process.env.PUBLIC_URL + "/assets/images/pattern.png"}
										className="pattern-img"
										alt=""
									/>
									<div
										className="video-player"
										style={{
											backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.videoBackground})`,
										}}
									>
										<ModalVideo
											channel="youtube"
											isOpen={this.state.isOpen}
											videoId="qhOfcZcrcA8"
											onClose={() => this.setState({isOpen: false})}
										/>
										<button onClick={this.openModal} className="play-button">
											<i className="las la-play"></i>
										</button>
									</div>
								</div>
							</Col>
							<Col md="6">
								<div className="about-content">
									<h4 className="about-title">{Datas.title}</h4>
									<p className="about-para">
										{Datas.desc1}
										<span>{Datas.desc2}</span>
									</p>
									<Row>
										<Col sm="4">
											<div className="counter-box box1 text-center">
												<h3>
													<CountUp end={1570} duration={5} delay={1.5} />
													<i className="las la-plus"></i>
												</h3>
												<p>Happy Students</p>
											</div>
										</Col>
										<Col sm="4">
											<div className="counter-box box2 text-center">
												<h3>
													<CountUp end={130} duration={5} delay={1.5} />
													<i className="las la-plus"></i>
												</h3>
												<p>Faculty Members</p>
											</div>
										</Col>
										<Col sm="4">
											<div className="counter-box box3 text-center">
												<h3>
													<CountUp end={101} duration={5} delay={1.5} />
													<i className="las la-plus"></i>
												</h3>
												<p>Projects</p>
											</div>
										</Col>
									</Row>
									<Link
										className="readmore-btn"
										to={process.env.PUBLIC_URL + "/about"}
									>
										Read More
									</Link>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</Styles>
		);
	}
}

export default AboutUs;
