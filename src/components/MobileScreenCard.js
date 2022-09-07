import React from "react";
import MoreOptions from "./MoreOptions";

const MobileScreenCard = ({ image, name, price }) => {
	return (
		<div className="card mb-3 w-100 border-0">
			<div className="row g-0">
				<div className="col-4">
					<img src={image} className="img-fluid " alt={name}></img>
				</div>
				<div className="col-8">
					<div className="card-body p-0 ps-3">
						<div className="d-flex align-items-center justify-content-between">
							<h6 className="card-title mb-0">{name}</h6>
							<MoreOptions />
						</div>
						<p className="card-text">
							<small className="text-muted">{price}</small>
							<small className="text-muted ms-3">frs CFA</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileScreenCard;
