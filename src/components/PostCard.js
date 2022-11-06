import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PostCard = ({ title, description, youtubeVideoUrl, imageUrl, types, created_at, width, index, maxNumber }) => {
	const navigate = useNavigate();

	const computeDimensions = () => {
		setTimeout(() => {
			const cardWidth = document.querySelectorAll(".postCard")[index]?.offsetWidth;
			console.log("cardWidth", cardWidth);
			const realWidth = cardWidth - 2;

			return {
				width: index == 0 && width > 768 ? width + width * 0.5 : realWidth,
				height: index == 0 && width > 768 ? realWidth / 3 : (realWidth * 9) / 16,
			};
		}, 1000);
	};

	console.log("index", index);

	const sliceBasedOnScreenWidth = (description) => {
		let shortenedString;
		if (width < 576) {
			shortenedString = description.slice(0, 50);
			return `${shortenedString} ${shortenedString.length != description.length ? "..." : ""}`;
		} else if (width < 768) {
			shortenedString = description.slice(0, 80);
			return `${shortenedString} ${shortenedString.length != description.length ? "..." : ""}`;
		} else if (width < 992) {
			shortenedString = description.slice(0, 110);
			return `${shortenedString} ${shortenedString.length != description.length ? "..." : ""}`;
		} else if (width < 1200) {
			shortenedString = description.slice(0, 150);
			return `${shortenedString} ${shortenedString.length != description.length ? "..." : ""}`;
		} else {
			shortenedString = description.slice(0, 170);
			return `${shortenedString} ${shortenedString.length != description.length ? "..." : ""}`;
		}
	};
	return (
		<div
			onClick={() => {
				navigate("/post_details", { state: { title, description, youtubeVideoUrl, imageUrl, types, created_at } });
			}}
			className={`${
				index == 0 || width < 768
					? "col-11"
					: (maxNumber < 4 && index == 1) || index == 2
					? "col-5 mx-2"
					: index == 1 || index == 2 || index == 3
					? "col-3"
					: "col-5"
			} card postCard border-0 border-dark-bottom  border-start-muted gy-5 gx-1 p-0 rounded-0  `}
			// style={{ backgroundColor: "#eee" }}
		>
			<div className={` ${index == 0 && "d-md-flex"}`}>
				{imageUrl ? (
					<img
						src={imageUrl}
						className={`card-img-top rounded-0 `}
						style={width > 768 && index == 0 ? { width: (width * 4) / 7 } : null}
						alt="..."
					/>
				) : (
					<iframe
						src={youtubeVideoUrl}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture"
						allowfullscreen
						style={computeDimensions()}
					></iframe>
				)}

				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<div className="card-text small">
						<p className="text-muted ">{new Date(created_at).toDateString()}</p>
						<p className={`${"small"}  `}>{sliceBasedOnScreenWidth(description)}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
