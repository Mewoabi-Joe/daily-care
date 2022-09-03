import React from "react";
import firstIllus from "../assets/illustrations/undraw_medicine_b-1-ol.svg";
import { Link } from "react-router-dom";

const FirstSection = () => {
	return (
		<section id="sectionOne" className="py-5 text-light" style={{ backgroundColor: "#055160" }}>
			<div className="container">
				<div className="d-lg-flex justify-content-between align-items-center text-center py-0 py-lg-5">
					<div className="text-center text-lg-start h4">
						<p>
							We carry out tests <span className="text-info">24</span> hours a day,{" "}
							<span className="text-info">365</span> days a year.
						</p>
						<p className="">
							Ensuring you get accurate results as fast possible is our priority at{" "}
							<span className=" text-info fw-bolder">Daily Health</span>
						</p>

						<Link to="/lab_tests" className="btn btn-outline-info btn-lg my-5">
							Book a lab exam
						</Link>
					</div>
					<img src={firstIllus} alt="first illustration" className="d-none img-fluid d-lg-inline-block w-50" />
					<img src={firstIllus} alt="first illustration" className="d-inline-block d-lg-none img-fluid w-75" />
				</div>
			</div>
		</section>
	);
};

export default FirstSection;
