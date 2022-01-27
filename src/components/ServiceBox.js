/** @format */

import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Datas from "../data/service/service-box.json";
import {Styles} from "./styles/serviceBox.js";

class ServiceBox extends Component {
	render() {
		return (
			<Styles>
				{/* Service Box */}
				<section className="service-area">
					<Container>
						<Row>
							<Col md="12">
								<div className="sec-title text-center">
									<h4>{Datas.secTitle}</h4>
								</div>
							</Col>
							{Datas.dataList.map((data, i) => (
								<Col md="4" key={i}>
									<div className="service-box d-flex">
										<div className="box-icon">
											<i className={data.boxIcon}></i>
										</div>
										<div className="box-title">
											<Link to={process.env.PUBLIC_URL + data.link}>
												<h6>{data.title}</h6>
											</Link>
											<p>{data.subTitle}</p>
										</div>
									</div>
								</Col>
							))}
						</Row>
					</Container>
				</section>
			</Styles>
		);
	}
}

export default ServiceBox;
