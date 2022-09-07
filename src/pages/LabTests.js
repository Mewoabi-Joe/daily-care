import React, { useEffect, useState } from "react";
import { tests } from "../utils/testData.js";
import ShortCartNoBorder from "../components/ShortCartNoBorder.js";
import MobileScreenCard from "../components/MobileScreenCard.js";
const LabTests = () => {
	const [filter, setFilter] = useState("none");

	const [originalTests, setOriginalTests] = useState(tests);
	const [variableTests, setVariableTests] = useState(tests);
	const [searchTerm, setSearchTerm] = useState("");
	const [tags, setTags] = useState([]);
	console.log("originalTests", originalTests);
	console.log("variableTests", variableTests);
	switch (filter) {
		case "none":
			break;

		default:
			break;
	}

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	useEffect(() => {
		let labTestTags = [];
		originalTests.forEach((test) => labTestTags.push(...test.tags));
		labTestTags = labTestTags.map((test) => test.toLowerCase());
		const setOflabTestTags = new Set(labTestTags);
		const theTags = Array.from(setOflabTestTags).map((test) => capitalizeFirstLetter(test));
		// console.log("theTags", theTags);
		setTags(theTags);
	}, []);

	const handleSearchInputChange = (text) => {
		setSearchTerm(text);
		console.log("variableTests", variableTests);
		const testsCorrespondingToSearch = originalTests.filter((test) => {
			console.log("text", text);
			return test.name.toLowerCase().includes(text.toLowerCase());
		});
		console.log("testsCorrespondingToSearch", testsCorrespondingToSearch);
		setVariableTests(testsCorrespondingToSearch);
	};

	const handleEmptySearch = () => {
		setSearchTerm("");
		setVariableTests(originalTests);
	};

	return (
		<div className="container">
			{/* for mobile to sm screens */}
			<div className="pt-3 d-sm-none">
				<h2 className="text-center pb-2">Lab Tests</h2>
				<div className="d-flex justify-content-evenly mb-4">
					<div className="input-group w-75">
						<button className="btn btn-outline-info" type="button" id="button-addon2" disabled>
							<span className="material-symbols-outlined d-flex">search</span>
						</button>
						<input
							value={searchTerm}
							type="text"
							className="form-control"
							placeholder="search lab test"
							aria-label="Recipient's username"
							aria-describedby="button-addon2"
							onChange={(e) => handleSearchInputChange(e.target.value)}
						></input>
						{searchTerm && (
							<button className="btn btn-outline-info" type="button" id="button-addon2" onClick={handleEmptySearch}>
								<span className="material-symbols-outlined d-flex"> close </span>
							</button>
						)}
					</div>
					<div className="dropdown-center">
						<button
							type="button"
							className="btn btn-info dropdown-toggle"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							// data-bs-offset="10,20"
						>
							filter
						</button>
						<ul className="dropdown-menu">
							{tags.map((tag) => (
								<li>
									<div class="dropdown-item">
										<div className="form-check ">
											<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
											<label class="form-check-label" for="flexCheckDefault">
												{tag}
											</label>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
				{/* list of lab test */}
				{variableTests.map((test, index) => (
					<MobileScreenCard name={test.name} image={test.image} price={test.price} key={index} />
				))}
			</div>
			{/* to display from sm screens and above */}
			<div className="d-none d-sm-block">
				<div className="d-flex justify-content-around align-items-center my-4">
					<h2 className="mb-0">Lab tests</h2>
					<div className="input-group w-50">
						<button className="btn btn-outline-info" type="button" id="button-addon1">
							<span className="material-symbols-outlined d-flex"> search </span>
						</button>
						<input
							value={searchTerm}
							type="text"
							className="form-control"
							placeholder="search lab test"
							aria-label="Recipient's username"
							aria-describedby="button-addon1"
							onChange={(e) => handleSearchInputChange(e.target.value)}
						></input>
						{searchTerm && (
							<button className="btn btn-outline-info" type="button" id="button-addon2" onClick={handleEmptySearch}>
								<span className="material-symbols-outlined d-flex"> close </span>
							</button>
						)}
					</div>
					<div className="dropdown-center">
						<button
							type="button"
							className="btn btn-info dropdown-toggle"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							// data-bs-offset="10,20"
						>
							filter
						</button>
						<ul className="dropdown-menu">
							{tags.map((tag) => (
								<li>
									<small onClick={() => console.log("clicked")} className="dropdown-item">
										{tag}
									</small>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="row gy-md-2 gy-xl-5">
					{variableTests.map((test, index) => (
						<div className="col-sm-5 me-sm-4 mb-sm-4 me-md-0 mb-md-0 col-md-4 col-lg-3" key={index}>
							<ShortCartNoBorder image={test.image} name={test.name} price={test.price} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LabTests;
