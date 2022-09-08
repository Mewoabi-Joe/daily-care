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
						<a className="dropdown-item d-flex" href="#a">
							<span class="material-symbols-outlined  me-2">visibility</span>
							<span>view details</span>
						</a>
					</li>
					<li>
						<a className="dropdown-item d-flex" href="#a">
							<span class="material-symbols-outlined me-2">payments</span>
							Book test
						</a>
					</li>
					<li>
						<a className="dropdown-item d-flex" href="#a">
							<span class="material-symbols-outlined me-2">add_shopping_cart</span>Add to cart
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MoreOptions;
