import React, { useState } from "react";
import cbc from "../assets/photos/cbc.jpg";
import useWindowDimensions from "../hooks/WindowsDimensionHook";

const AddTest = () => {
	const { height, width } = useWindowDimensions();

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
	//mobile: 490, 576: 576, 768: 503, 992: 399, 1200: 478
	//height: 300
	return (
		<div>
			<h2 className="text-center mt-3">Create a lab test</h2>
			<div className="mt-lg-3">
				<div className="row justify-content-center">
					<div className="py-2 px-4 pt-3 col-md-8 col-lg-5">
						<input
							className="text-center d-lg-none h2 form-control form-control-lg d-block mb-2"
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
							className="d-none mb-5 d-lg-block text-center h2 form-control form-control-lg d-block "
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
							class="form-control mb-4"
							id="exampleFormControlTextarea1 "
							rows="3"
						></textarea>

						<button className="d-flex justify-content-center btn btn-primary btn-lg  w-100">
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
