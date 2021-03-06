/** @format */

import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {BreadcrumbBox} from "../../components/common/Breadcrumb";
import FooterTwo from "../../components/FooterTwo";
import HeaderTwo from "../../components/HeaderTwo";
import CourseItemGrid from "./components/CourseItemsGrid5";
import CourseSidebar from "./components/CourseSidebar";
import {Styles} from "./styles/course.js";

class CourseGrid extends Component {
	render() {
		return (
			<div className="main-wrapper course-page">
				{/* Header 2 */}
				<HeaderTwo />

				{/* Breadcrumb */}
				<BreadcrumbBox title="Projects" />

				<Styles>
					{/* Course Grid */}
					<section className="course-grid-area">
						<Container>
							<Row>
								<Col lg="3" md="4" sm="5">
									<CourseSidebar />
								</Col>
								<Col lg="9" md="8" sm="7">
									<div className="course-items">
										<Row>
											<CourseItemGrid />
										</Row>
									</div>
								</Col>
							</Row>
						</Container>
					</section>
				</Styles>

				{/* Footer 2 */}
				<FooterTwo />
			</div>
		);
	}
}

export default CourseGrid;
