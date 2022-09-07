import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
			<h3 class="text-center my-3">Log in to DailyHealth</h3>
			<small className="text-center d-block">Already created an account? Go ahead fill in the info and login</small>

			<div class="row justify-content-center mb-5 mt-4 ">
				<form class="col-11 col-sm-9 col-md-8 col-lg-6 border border-primary p-5 rounded-4">
					<div class="mb-3">
						<label for="email" class="form-label">
							Email address:
						</label>
						<input
							name="email"
							type="email"
							value={user.email}
							class="form-control"
							id="email"
							placeholder="name@example.com"
							required
						/>
						<div class="text-danger firstname">{error.email ? error.email : ""}</div>
					</div>
					<div class="mb-5">
						<label for="password" class="form-label">
							Password:
						</label>
						<input name="password" type="password" value={user.password} class="form-control" id="password" required />
						<div class="text-danger password">{error.password ? error.password : ""}</div>
					</div>
					<div class="mb-3">
						<Link to="/verify_email">forgotten password?</Link>
					</div>
					<div class="text-center">
						<button class="btn btn-primary" style={{ width: "100%", borderRadius: 10 }}>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
