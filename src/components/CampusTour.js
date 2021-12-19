/** @format */

import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import ModalImage from "react-modal-image";
import {Styles} from "./styles/campusTour.js";

class CampusTour extends Component {
	state = {
		secTitle:
			"Take A Tour Round Our Campus. Have A Look At Our Beautiful Environment.",
	};

	render() {
		return (
			<Styles>
				{/* Campus Tour */}
				<section className="campus-tour">
					<Container>
						<Row>
							<Col md="12">
								<div className="sec-title text-center">
									<h4>{this.state.secTitle}</h4>
								</div>
							</Col>
							<Col lg="2" md="3">
								<div className="tour-box">
									<ModalImage
										small={
											process.env.PUBLIC_URL + "/assets/images/tour-01.jpg"
										}
										large={
											process.env.PUBLIC_URL + "/assets/images/tour-01.jpg"
										}
										alt=""
									/>
								</div>
								<div className="tour-box">
									<ModalImage
										small={
											process.env.PUBLIC_URL + "/assets/images/tour-02.jpg"
										}
										large={
											process.env.PUBLIC_URL + "/assets/images/tour-02.jpg"
										}
										alt=""
									/>
								</div>
							</Col>
							<Col lg="4" md="6">
								<Row>
									<Col lg="6" md="6">
										<div className="tour-box">
											<ModalImage
												small={
													process.env.PUBLIC_URL + "/assets/images/tour-03.jpg"
												}
												large={
													process.env.PUBLIC_URL + "/assets/images/tour-03.jpg"
												}
												alt=""
											/>
										</div>
									</Col>
									<Col lg="6" md="6">
										<div className="tour-box">
											<ModalImage
												small={
													process.env.PUBLIC_URL + "/assets/images/tour-04.jpg"
												}
												large={
													process.env.PUBLIC_URL + "/assets/images/tour-04.jpg"
												}
												alt=""
											/>
										</div>
									</Col>
									<Col lg="12">
										<div className="tour-box">
											<ModalImage
												small={
													process.env.PUBLIC_URL +
													"/assets/images/tour-wt01.jpg"
												}
												large={
													process.env.PUBLIC_URL +
													"/assets/images/tour-wt01.jpg"
												}
												alt=""
											/>
										</div>
									</Col>
								</Row>
							</Col>
							<Col lg="2" md="3">
								<div className="tour-box">
									<ModalImage
										small={
											process.env.PUBLIC_URL + "/assets/images/tour-ht1.jpg"
										}
										large={
											process.env.PUBLIC_URL + "/assets/images/tour-ht1.jpg"
										}
										alt=""
									/>
								</div>
							</Col>
							<Col lg="4" md="12">
								<Row>
									<Col lg="12" md="6">
										<div className="tour-box">
											<ModalImage
												small={
													process.env.PUBLIC_URL +
													"/assets/images/tour-wt02.jpg"
												}
												large={
													process.env.PUBLIC_URL +
													"/assets/images/tour-wt02.jpg"
												}
												alt=""
											/>
										</div>
									</Col>
									<Col lg="6" md="3">
										<div className="tour-box">
											<ModalImage
												small={
													process.env.PUBLIC_URL + "/assets/images/tour-05.jpg"
												}
												large={
													process.env.PUBLIC_URL + "/assets/images/tour-05.jpg"
												}
												alt=""
											/>
										</div>
									</Col>
									<Col lg="6" md="3">
										<div className="tour-box">
											<ModalImage
												small={
													process.env.PUBLIC_URL + "/assets/images/tour-06.jpg"
												}
												large={
													process.env.PUBLIC_URL + "/assets/images/tour-06.jpg"
												}
												alt=""
											/>
										</div>
									</Col>
								</Row>
							</Col>
						</Row>
					</Container>
				</section>
			</Styles>
		);
	}
}

export default CampusTour;
