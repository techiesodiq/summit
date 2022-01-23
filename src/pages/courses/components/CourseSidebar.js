/** @format */

import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";
import CourseCategory from "./CourseCategory";
import PopularCourse from "./PopularCourse";

class CourseSidebar extends Component {
	render() {
		return (
			<div className="course-sidebar">
				<Row>
					{/* <Col md="12">
                        <CourseSearch />
                    </Col> */}
					<Col md="12">
						<CourseCategory />
					</Col>
					{/* <Col md="12">
						<CoursePrice />
					</Col> */}
					<Col md="12">
						<PopularCourse />
					</Col>
					{/* <Col md="12">
						<CourseTag />
					</Col> */}
				</Row>
			</div>
		);
	}
}

export default CourseSidebar;
