import React from "react";

const MoreOptions = () => {
	return (
		<div>
			<div className="dropdown">
				<button
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
					<li>
						<a className="dropdown-item" href="#a">
							view details
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#a">
							Another action
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#a">
							Something else here
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MoreOptions;
