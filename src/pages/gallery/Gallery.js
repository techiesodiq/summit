/** @format */

import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import ModalImage from "react-modal-image";
import {BreadcrumbBox} from "../../components/common/Breadcrumb";
import FooterTwo from "../../components/FooterTwo";
import HeaderTwo from "../../components/HeaderTwo";
import Datas from "../../data/gallery/gallery-page.json";
import {Styles} from "./styles/gallery.js";

class Gallery extends Component {
	render() {
		return (
			<Styles>
				{/* Main Wrapper */}
				<div className="main-wrapper gallery-page">
					{/* Header 2 */}
					<HeaderTwo />

					{/* Breadcroumb */}
					<BreadcrumbBox title="Gallery" />

					{/* Gallery Area */}
					<section className="gallery-page-area">
						<Container>
							<Row>
								{Datas.map((data, i) => (
									<Col lg="4" sm="6" key={i}>
										<div
											className="gallery-box"
											style={{width: "100%", objectFit: "cover"}}
										>
											<ModalImage
												style={{width: "100%", objectFit: "cover"}}
												small={
													process.env.PUBLIC_URL +
													`/assets/images/${data.galleryImage}`
												}
												large={
													process.env.PUBLIC_URL +
													`/assets/images/${data.galleryImage}`
												}
												alt=""
											/>
										</div>
									</Col>
								))}
							</Row>
						</Container>
					</section>

					{/* Footer 2 */}
					<FooterTwo />
				</div>
			</Styles>
		);
	}
}

export default Gallery;
