/** @format */

import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Swiper from "react-id-swiper";
import {Link} from "react-router-dom";
import Datas from "../data/hero/hero-slider.json";
import {Styles} from "./styles/heroSlider.js";

class HeroSlider extends Component {
	render() {
		const settings = {
			slidesPerView: 1,
			loop: true,
			speed: 3000,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			watchSlidesVisibility: true,
			effect: "fade",
			navigation: {
				nextEl: ".slider-button-next",
				prevEl: ".slider-button-prev",
			},
			renderPrevButton: () => (
				<div className="swiper-btn slider-button-prev">
					<i className="flaticon-arrow-left-th"></i>
				</div>
			),
			renderNextButton: () => (
				<div className="swiper-btn slider-button-next">
					<i className="flaticon-arrow-right-th"></i>
				</div>
			),
		};

		return (
			<Styles>
				{/* Hero Slider */}
				<section className="hero-slider-area">
					<Swiper {...settings}>
						{Datas.map((data, i) => (
							<div className="slider-item" key={i}>
								<div className="image-container">
									<div
										style={{
											zIndex: "3",
											width: "100%",
											height: "100%",
											backgroundColor: "#000",
											opacity: "0.6",
											position: "absolute",
										}}
									></div>
									<img
										style={{width: "100%", objectFit: "cover"}}
										src={
											process.env.PUBLIC_URL +
											`/assets/images/${data.backgroundImage}`
										}
										className="slider-image"
										alt={data.backgroundImage}
									/>
								</div>
								<div className="slider-table">
									<div className="slider-tablecell">
										<Container>
											<Row>
												<Col md="12">
													<div className={data.uniqClass}>
														<div className="slider-title">
															<p>{data.title}</p>
														</div>
														<div className="slider-desc">
															<h1>{data.desc}</h1>
														</div>
														<div className="slider-btn">
															<Link
																className="slider-btn1"
																to={
																	process.env.PUBLIC_URL + `/${data.btnOneLink}`
																}
															>
																Our Courses
															</Link>
															<Link
																className="slider-btn2"
																to={
																	process.env.PUBLIC_URL + `/${data.btnTwoLink}`
																}
															>
																Contact Us
															</Link>
														</div>
													</div>
												</Col>
											</Row>
										</Container>
									</div>
								</div>
							</div>
						))}
					</Swiper>
				</section>
			</Styles>
		);
	}
}

export default HeroSlider;
