/** @format */

import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Styles} from "../styles/courseTag.js";

class CourseTag extends Component {
	render() {
		return (
			<Styles>
				{/* Course Tag */}
				<div className="course-tag">
					<h5>News Tag</h5>
					<div className="tag-box">
						<Link to={process.env.PUBLIC_URL + "/"}>Projects</Link>
						<Link to={process.env.PUBLIC_URL + "/"}>Scholarship</Link>
						<Link to={process.env.PUBLIC_URL + "/"}>Academics</Link>
						<Link to={process.env.PUBLIC_URL + "/"}>Students</Link>
						<Link to={process.env.PUBLIC_URL + "/"}>Excellence</Link>
						<Link to={process.env.PUBLIC_URL + "/"}>Summit</Link>
						<Link to={process.env.PUBLIC_URL + "/"}>University</Link>
						<Link to={process.env.PUBLIC_URL + "/"}>Support</Link>
					</div>
				</div>
			</Styles>
		);
	}
}

export default CourseTag;
