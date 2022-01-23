/** @format */

import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Styles} from "../styles/courseCategory.js";

class CourseCategory extends Component {
	render() {
		return (
			<Styles>
				{/* Course Tag */}
				<div className="course-category">
					<h5>Project's Category</h5>
					<ul className="category-item list-unstyled">
						<li className="check-btn">
							<Link to="/projects-academic-centres">
								<label htmlFor="cat1">
									<input type="checkbox" id="cat1" className="check-box" />
									Academic Centres<span>(5)</span>
								</label>
							</Link>
						</li>

						<li className="check-btn">
							<Link to="/projects-scholarship-and-prizes">
								<label htmlFor="cat2">
									<input type="checkbox" id="cat2" className="check-box" />
									Scholarships & Prizes<span>(2)</span>
								</label>
							</Link>
						</li>

						<li className="check-btn">
							<Link to="/projects-scholars-recognition">
								<label htmlFor="cat3">
									<input type="checkbox" id="cat3" className="check-box" />
									Scholar's Recognition<span>(2)</span>
								</label>
							</Link>
						</li>

						<li className="check-btn">
							<Link to="/projects-special-use">
								<label htmlFor="cat4">
									<input type="checkbox" id="cat4" className="check-box" />
									Special Use<span>(2)</span>
								</label>
							</Link>
						</li>
						<li className="check-btn">
							<Link to="/projects-others">
								<label htmlFor="cat5">
									<input type="checkbox" id="cat5" className="check-box" />
									Others<span>(3)</span>
								</label>
							</Link>
						</li>
						<li className="check-btn">
							<Link to="/projects-communal-use">
								<label htmlFor="cat5">
									<input type="checkbox" id="cat5" className="check-box" />
									Communal Use<span>(2)</span>
								</label>
							</Link>
						</li>
					</ul>
				</div>
			</Styles>
		);
	}
}

export default CourseCategory;
