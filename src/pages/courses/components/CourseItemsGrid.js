/** @format */

import React, {useState} from "react";
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import Datas from "../../../data/course/item.json";

const CourseItemGrid = () => {
	const [visible, setVisible] = useState(4);

	const loadMoreData = () => {
		setVisible((prev) => prev + 4);
	};

	return (
		<>
			{/* Course Item */}
			{Datas.slice(0, visible).map((data, i) => (
				<Col lg="6" md="12" key={i}>
					<div className="course-item">
						<Link to={process.env.PUBLIC_URL + data.courseLink + data.id}>
							<div
								className="course-image"
								style={{
									backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${data.imgUrl})`,
								}}
							>
								{/* <div className="author-img d-flex">
                                            <div className="img">
                                                <img src={process.env.PUBLIC_URL + `/assets/images/${data.authorImg}`} alt="" />
                                            </div>
                                            <div className="title">
                                                <p>{data.authorName}</p>
                                                <span>{data.authorCourses}</span>
                                            </div>
                                        </div> */}
								<div className="course-price">
									<p>{data.price}</p>
								</div>
							</div>
						</Link>
						<div className="course-content">
							<h6 className="heading">
								<Link to={process.env.PUBLIC_URL + data.courseLink}>
									{data.courseTitle}
								</Link>
							</h6>
							<p className="desc">{data.courseDesc}</p>
							<div className="course-face d-flex justify-content-between">
								<button
									style={{
										fontSize: "14px",
										color: "#fff",
										background:
											"linear-gradient(90deg, #11B67A 0%, #009444 100%)",
										display: "inline-block",
										width: "110px",
										height: "40px",
										textAlign: "center",
										padding: "11px",
										borderRadius: "5px",
										marginTop: "0px",
									}}
								>
									Give Now
								</button>
								{/* <div className="duration">
										<p>
											<i className="las la-clock"></i>120
										</p>
									</div>
									<div className="rating">
										<ul className="list-unstyled list-inline">
											<li className="list-inline-item">
												<i className="las la-star"></i>
											</li>
											<li className="list-inline-item">
												<i className="las la-star"></i>
											</li>
											<li className="list-inline-item">
												<i className="las la-star"></i>
											</li>
											<li className="list-inline-item">
												<i className="las la-star"></i>
											</li>
											<li className="list-inline-item">
												<i className="las la-star-half-alt"></i>
											</li>
											<li className="list-inline-item">(4.5)</li>
										</ul>
									</div>
									<div className="student">
										<p>
											<i className="las la-chair"></i>60
										</p>
									</div> */}
							</div>
						</div>
					</div>
				</Col>
			))}

			<Col md="12" className="text-center">
				{/* <Pagination /> */}
				<button
					style={{
						fontSize: "14px",
						color: "#fff",
						background: "linear-gradient(90deg, #11B67A 0%, #009444 100%)",
						display: "inline-block",
						width: "110px",
						height: "40px",
						textAlign: "center",
						padding: "11px",
						borderRadius: "5px",
						marginTop: "0px",
					}}
					onClick={loadMoreData}
				>
					Load more
				</button>
			</Col>
		</>
	);
};

export default CourseItemGrid;
