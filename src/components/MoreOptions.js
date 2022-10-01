import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteTestModal from "./DeleteTestModal";
import { connect } from "react-redux";

const MoreOptions = ({ testId, handleViewDetails, currentUser }) => {
	const [modal, setModal] = useState("");
	const navigate = useNavigate();

	const admin = currentUser ? currentUser.admin : null;

	return (
		<div>
			{modal}
			<div className="dropdown">
				<button
					onClick={() => setModal("")}
					className="btn btn-outline-info rounded-circle caret-off pt-2 border-0"
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					<span className="material-symbols-outlined fs-5" style={{ color: "black" }}>
						more_vert
					</span>
				</button>
				<ul className="dropdown-menu">
					<li onClick={handleViewDetails}>
						<div className="dropdown-item d-flex">
							<span class="material-symbols-outlined  me-2">visibility</span>
							<span>view details</span>
						</div>
					</li>
					{/* <li>
            <a className="dropdown-item d-flex" href="#a">
              <span class="material-symbols-outlined me-2">payments</span>
              Book test
            </a>
          </li> */}
					{admin ? (
						<>
							<li onClick={() => navigate("/edit_test/" + testId)}>
								<div className="dropdown-item d-flex" href={"/edit_test/" + testId}>
									<span class="material-symbols-outlined me-2">edit</span>
									Edit test
								</div>
							</li>
							<li
								onClick={() => {
									console.log("delete");
									console.log(modal);
									setModal(<DeleteTestModal testId={testId} />);
								}}
							>
								<a className="dropdown-item d-flex">
									<span class="material-symbols-outlined me-2">delete_forever</span>
									Delete test
								</a>
							</li>
						</>
					) : null}
				</ul>
			</div>
		</div>
	);
};

const mapStateToProps = ({ auth }) => {
	return {
		currentUser: auth.user,
	};
};

export default connect(mapStateToProps)(MoreOptions);
