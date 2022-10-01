import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import axiosInstance, { baseURL } from "../utils/axios";
import { useNavigate } from "react-router-dom";

export default function DeleteTestModal({ testId }) {
	const navigate = useNavigate();
	const [show, setShow] = useState(true);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const deleteTest = async () => {
		try {
			setShow(false);
			const res = await axiosInstance.delete(`/test/delete/${testId}`);
			window.location.href = "/lab_tests";
		} catch (error) {
			console.log(error.response);
		}
	};
	return (
		<>
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Delete Test</Modal.Title>
				</Modal.Header>
				<Modal.Body>Are you sure you want to delete this test</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						cancel
					</Button>
					<Button variant="danger" onClick={deleteTest}>
						Delete
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
