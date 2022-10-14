import React from "react";
import { Link, useNavigate } from "react-router-dom";
import firstIllus from "../assets/illustrations/undraw_medicine_b-1-ol.svg";
import logo from "../assets/photos/spectrumLabSquareLogo.jpeg";
import { Collapse } from "bootstrap";

const Navbar = ({ setAuth, currentUser }) => {
	const handleLinkClick = (e) => {
		const links = document.querySelectorAll(".nav-link");
		const menuToggle = document.getElementById("navbarNavAltMarkup");
		const bsCollapse = new Collapse(menuToggle);
		bsCollapse.toggle();
		links.forEach((link) => {
			link.classList.remove("active");
		});
		e.target.classList.add("active");
	};

	console.log(currentUser);
	const navigate = useNavigate();
	return (
		<header style={{ paddingBottom: 70 }}>
			<nav className="navbar navbar-expand-lg fixed-top navbar-light bg-info p-0">
				<div className="container ">
					<Link className="navbar-brand" to="/daily-care">
						<img
							src={logo}
							alt="logo"
							width="60rem"
							style={{
								borderRadius: "16rem",
								marginRight: "1.5rem",
								backgroundColor: "white",
							}}
						/>
						Spectrum Lab
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse " id="navbarNavAltMarkup">
						<div className="navbar-nav ms-auto">
							<Link onClick={handleLinkClick} className="nav-link active" aria-current="page" to="/daily-care">
								Home
							</Link>
							{/* <a className="nav-link" href="#services">
								Our services
							</a> */}
							<Link onClick={handleLinkClick} className="nav-link  " to="/lab_tests">
								Lab tests
							</Link>
							{/* <a className="nav-link" href="#getInTouch">
								Get in touch
							</a> */}
							{currentUser.admin ? (
								<>
									<Link onClick={handleLinkClick} className="nav-link" to="/add_test">
										Add test
									</Link>

									<Link onClick={handleLinkClick} className="nav-link" to="/users">
										Users
									</Link>
								</>
							) : currentUser.userId ? (
								<Link onClick={handleLinkClick} className="nav-link" to={"/my_lab_tests/" + currentUser.userId}>
									My lab tests
								</Link>
							) : null}
							{JSON.stringify(currentUser) === JSON.stringify({}) ? (
								<>
									<Link onClick={handleLinkClick} className="nav-link" to="/signup">
										Signup
									</Link>
									<Link id="login" onClick={handleLinkClick} className="nav-link" to="/login">
										Login
									</Link>
								</>
							) : (
								<>
									<div
										onClick={() => {
											localStorage.setItem("token", "");

											window.location.href = "/login";
										}}
										className="nav-link"
										to="/signup"
									>
										Log out
									</div>
									<Link className="text-decoration-none" to={"/profile/" + currentUser.userId}>
										<div
											style={{
												width: "40px",
												height: "40px",
												verticalAlign: "middle",
												backgroundColor: "#2c387e",
											}}
											className="d-flex col-4 text-center rounded-circle text-light justify-content-center align-items-center  "
										>
											{currentUser.firstName.charAt(0).toUpperCase() +
												" " +
												currentUser.lastName.charAt(0).toUpperCase()}
										</div>
									</Link>
								</>
							)}
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
