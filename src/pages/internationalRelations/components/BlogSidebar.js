/** @format */

import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";
import CourseCategory from "./../../courses/components/CourseCategory";
import RecentBlog from "./RecentPost";

class BlogSidebar extends Component {
	render() {
		return (
			<div className="course-sidebar">
				<Row>
					<Col md="12">
						<CourseCategory />
					</Col>
					<Col md="12">
						<RecentBlog />
					</Col>
				</Row>
			</div>
		);
	}
}

export default BlogSidebar;
