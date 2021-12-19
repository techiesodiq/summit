/** @format */

import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import ModalVideo from "react-modal-video";
import Data from "../data/hero/hero-image.json";
import {Styles} from "./styles/heroImage.js";

const HeroImage = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<Styles>
			{/* Hero Image */}
			<section
				className="hero-image-area"
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Data.heroBackground})`,
				}}
			>
				<div
					className="round-shape"
					style={{
						backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Data.heroRoundShape})`,
						filter: "blur(40px)",
					}}
				></div>
				<div className="hero-table">
					<div className="hero-tablecell">
						<Container>
							<Row>
								<Col md="12">
									<div className="hero-box text-center">
										<h1>{Data.heroTitle}</h1>
										<p>{Data.heroSubtitle}</p>
										<div className="video-player">
											<ModalVideo
												channel="youtube"
												isOpen={isOpen}
												videoId="qhOfcZcrcA8"
												onClose={() => setOpen(false)}
											/>
											<button
												onClick={() => setOpen(true)}
												className="play-button"
											>
												<i className="las la-play"></i>
											</button>
										</div>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
			</section>
		</Styles>
	);
};

export default HeroImage;
