import React, { useEffect, useState } from "react";
import cbc from "../assets/photos/cbc.jpg";
// import useWindowDimensions from "../hooks/WindowsDimensionHook";
import { tests } from "../utils/testData.js";

const AddTest = () => {
	const [tagStates, setTagStates] = useState({});
	const [tags, setTags] = useState([]);
	// const { height, width } = useWindowDimensions();
	const [checkedTags, setCheckedTags] = useState([]);

	const [, updateState] = React.useState();
	const forceUpdate = React.useCallback(() => updateState({}), []);

	const [test, setTest] = useState({
		name: "",
		image: "",
		price: "",
		description: "",
		tags: "",
	});

	const initialTest = {
		name: "Complete Blood Count(CBC)",
		description:
			"A blood test used to evaluate your overall health and detect a wide range of disorders, including anemia, infection and leukemia. A complete blood count test measures several components and features of your blood, including: Red blood cells, which carry oxygen",
		image: cbc,
		tags: ["blood test", "screening test"],
		price: 50000,
	};

	const capitalizeFirstLetterOfTagsInTest = () => {
		return tests.map((test) => {
			const capitalisedTags = test.tags.map((tag) => capitalizeFirstLetter(tag));
			test.tags = capitalisedTags;
			return test;
		});
	};

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	useEffect(() => {
		const originalTestsWithCapitalisedTags = capitalizeFirstLetterOfTagsInTest();
		let labTestTags = [];
		originalTestsWithCapitalisedTags.forEach((test) => labTestTags.push(...test.tags));
		const setOflabTestTags = new Set(labTestTags);
		const theTags = Array.from(setOflabTestTags);
		// console.log("theTags", theTags);
		setTags(theTags);
		let localTagStates = {};
		theTags.forEach((tag) => (localTagStates[tag] = false));
		setTagStates(localTagStates);
	}, []);

	const handleCheckBoxChange = (e) => {
		let localTagStates = tagStates;
		localTagStates[e.target.id] = e.target.checked;
		setTagStates(localTagStates);
		updateCheckedTags();
		console.log("tagStates", tagStates);
		console.log("tags", tags);
		forceUpdate();
	};

	console.log("A rerender");
	const updateCheckedTags = () => {
		const tagKeys = Object.keys(tagStates);
		const localCheckedTags = tagKeys.filter((tagKey) => tagStates[tagKey] === true);
		console.log("checkedTags", localCheckedTags);
		setCheckedTags(checkedTags);
	};

	return (
		<div>
			<h2 className="text-center mt-3">Create a lab test</h2>
			<div className="mt-lg-3">
				<div className="row justify-content-center">
					<div className="py-2 px-4 pt-3 col-md-8 col-lg-5">
						<input
							className="text-center d-lg-none h2 form-control form-control-lg d-block mb-3"
							type="text"
							placeholder="Enter lab test name"
						/>
						<label
							style={{ height: 310 }}
							className="d-flex justify-content-center align-items-center d-block w-100 border  rounded-3"
							for="upload-photo"
						>
							<span class="d-flex material-symbols-outlined me-2 ">add</span>Test image
						</label>
						<input type="file" name="photo" id="upload-photo" />
					</div>
					<div className="col col-md-8 col-lg-6  py-3 px-4">
						<input
							className="d-none mb-3 d-lg-block text-center h2 form-control form-control-lg d-block "
							type="text"
							placeholder="Enter lab test name"
						/>

						<div class="input-group pb-3">
							<input
								type="text"
								class="form-control lead"
								placeholder="Enter cost"
								aria-label="Recipient's username"
								aria-describedby="basic-addon2"
							/>
							<span class="input-group-text lead" id="basic-addon2">
								frs CFA
							</span>
						</div>
						<textarea
							placeholder="Enter description"
							class="form-control mb-3"
							id="exampleFormControlTextarea1 "
							rows="3"
						></textarea>
						<div className="dropdown-center w-100 mb-3">
							<button
								type="button"
								className="btn btn-light border dropdown-toggle w-100 d-flex justify-content-between align-items-center"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								// data-bs-offset="10,20"
							>
								Select tags which describe the lab test
							</button>
							<ul className="dropdown-menu">
								{tags.map((tag, index) => (
									<li key={index}>
										<div class="dropdown-item">
											<div className="form-check ">
												<input
													class="form-check-input"
													type="checkbox"
													checked={tagStates[tag]}
													onChange={handleCheckBoxChange}
													value=""
													id={tag}
												></input>
												<label class="form-check-label" htmlFor={tag}>
													{tag}
												</label>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>

						<button className="d-flex justify-content-center align-items-center btn btn-primary btn-lg  w-100">
							<span class="material-symbols-outlined me-2">task_alt</span>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddTest;
