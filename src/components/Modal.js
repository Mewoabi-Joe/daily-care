import React, { useState } from "react";
import axiosInstance from "../utils/axios";

const Modal = ({ testId }) => {
	const [loading, setLoading] = useState(false);
	const deleteTest = async () => {
		try {
			setLoading(true);
			console.log("testId", testId);
			const res = await axiosInstance.delete(`/test/delete/${testId}`);
			window.location.href = "/lab_tests";
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">
							Delete Test
						</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">Are you sure you want to delete this test</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
							Cancel
						</button>
						<button type="button" class="btn btn-danger" onClick={deleteTest}>
							{!loading ? (
								"Delete"
							) : (
								<div class="spinner-border spinner-border-sm text-secondary" role="status">
									<span class="visually-hidden">Loading...</span>
								</div>
							)}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
