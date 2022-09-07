import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const [error, setError] = useState({
		email: "",
		password: "",
	});
	return (
		<div class="container-lg">
			<h3 class="text-center my-3">Sign up to DailyCare</h3>
			<small className="text-center d-block ">
				New to DailyCare with no account? Go ahead fill in the info and signup
			</small>

			<div class="row justify-content-center mt-4 ">
				<form class="col-11 col-sm-9 col-md-8 col-lg-6 border border-primary px-5 py-4 rounded-4">
					<div class="mb-1">
						<label for="first_name" class="form-label">
							First name:
						</label>
						<input
							name="first_name"
							type="text"
							class="form-control"
							id="first_name"
							value={user.first_name}
							required
						/>
						<div class="text-danger firstname">{error.first_name ? error.first_name : ""}</div>
					</div>
					<div class="mb-1">
						<label for="last_name" class="form-label">
							Last name:
						</label>
						<input name="last_name" value={user.last_name} type="text" class="form-control" id="last_name" />
						<div class="text-danger last_name">{error.last_name ? error.last_name : ""}</div>
					</div>
					<div class="mb-1">
						<label for="email" class="form-label">
							Email address:
						</label>
						<input name="email" value={user.email} type="email" class="form-control" id="email" required />
						<div class="text-danger email">{error.email ? error.email : ""}</div>
					</div>
					<div class="mb-1">
						<label for="number" class="form-label">
							Phone number:
						</label>
						<input name="number" type="number" value={user.number} class="form-control" id="number" required />
						<div class="text-danger number">{error.number ? error.number : ""}</div>
					</div>
					<div class="mb-1">
						<label for="password" class="form-label">
							Password:
						</label>
						<input name="password" value="user.password" type="password" class="form-control" id="password" required />
						<div class="text-danger password">{error.password ? error.password : ""}</div>
					</div>
					<div class="mb-1">
						<label for="vPassword" class="form-label">
							Enter password again:
						</label>
						<input name="vPassword" value="vPassword" type="password" class="form-control" id="vPassword" required />
						<div class="text-danger vPassword">{error.vPassword ? error.vPassword : ""}</div>
					</div>
					<div class="mb-1">
						<input name="radio" type="radio" id=""></input>
						remember me
					</div>
					<div class="text-center">
						<button class="btn btn-primary" style={{ width: "100%", borderRadius: 10 }}>
							Sign up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
