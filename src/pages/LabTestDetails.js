import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useWindowDimensions from "../hooks/WindowsDimensionHook";
import axiosInstance, { baseURL } from "../utils/axios";

const LabTestDetails = () => {
	const { height, width } = useWindowDimensions();
	console.log("width", width);

	const { state } = useLocation();
	console.log(state);

	const initiatePayment = async (e) => {
		e.preventDefault();
		const res = await axiosInstance.post();
	};

	return (
		// If anything disturbs add container class
		<div className="mt-lg-3">
			<div className="row justify-content-center">
				<div className="py-2 pt-3 col-md-8 col-lg-5">
					<h2 className="text-center d-lg-none ">{state.name}</h2>
					<img
						style={{ height: 310, width: 482 }}
						src={baseURL + state.imagePath}
						alt="Test Image"
						className="img-fluid "
					/>
				</div>
				<div className="col col-md-8 col-lg-6  p-3 px-4">
					<h2 className="d-none d-lg-block">{state.name}</h2>
					<p className="lead pb-1">{state.price} frs CFA</p>
					<p className="pb-3">{state.description}</p>
					<div className="d-xl-flex justify-content-between">
						<button
							onClick={initiatePayment}
							style={width > 1200 ? { width: "47%" } : { width: "100%" }}
							className="d-flex justify-content-center mb-2 btn btn-info d-inline-block"
						>
							<span className="material-symbols-outlined me-2">payments</span>
							Book test
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LabTestDetails;
