import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axiosInstance from "../utils/axios"

const Signup = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    vPassword: "",
    phoneNo: "",
    dateOfBirth: "",
  })

  const [error, setError] = useState({
    email: "",
    password: "",
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser(user => {
      return { ...user, [name]: value }
    })
  }

  const register = async e => {
    e.preventDefault()
    if (user.password != user.vPassword) {
      setError(error => {
        return { ...error, password: "Passwords don't match" }
      })
      return
    }

    const { vPassword, ...rest } = user
    try {
      const res = await axiosInstance.post("/auth/register", rest)
      navigate("/login")
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <div class="container-lg">
      <h3 class="text-center my-2">Sign up to DailyCare</h3>
      <small className="text-center d-block ">
        New to DailyCare with no account? Go ahead fill in the info and signup
      </small>

      <div class="row justify-content-center mt-2 ">
        <form class="col-11 col-sm-9 col-md-8 col-lg-6 border border-primary px-5 py-4 rounded-4">
          <div class="mb-1">
            <label for="first_name" class="form-label">
              First name:
            </label>
            <input
              onChange={handleChange}
              name="firstName"
              type="text"
              class="form-control"
              id="first_name"
              value={user.firstName}
              required
            />
            <div class="text-danger firstname">
              {error.first_name ? error.first_name : ""}
            </div>
          </div>
          <div class="mb-1">
            <label for="last_name" class="form-label">
              Last name:
            </label>
            <input
              onChange={handleChange}
              name="lastName"
              value={user.lastName}
              type="text"
              class="form-control"
              id="last_name"
            />
            <div class="text-danger last_name">
              {error.last_name ? error.last_name : ""}
            </div>
          </div>
          <div class="mb-1">
            <label for="email" class="form-label">
              Email address:
            </label>
            <input
              onChange={handleChange}
              name="email"
              value={user.email}
              type="email"
              class="form-control"
              id="email"
              required
            />
            <div class="text-danger email">
              {error.email ? error.email : ""}
            </div>
          </div>
          <div class="mb-1">
            <label for="number" class="form-label">
              Phone number:
            </label>
            <input
              onChange={handleChange}
              name="phoneNo"
              type="number"
              value={user.phoneNo}
              class="form-control"
              id="number"
              required
            />
            <div class="text-danger number">
              {error.number ? error.number : ""}
            </div>
          </div>
          <div class="mb-1">
            <label for="password" class="form-label">
              Password:
            </label>
            <input
              onChange={handleChange}
              name="password"
              value={user.password}
              type="password"
              class="form-control"
              id="password"
              required
            />
            <div class="text-danger password">
              {error.password ? error.password : ""}
            </div>
          </div>
          <div class="mb-1">
            <label for="vPassword" class="form-label">
              Enter password again:
            </label>
            <input
              onChange={handleChange}
              name="vPassword"
              value={user.vPassword}
              type="password"
              class="form-control"
              id="vPassword"
              required
            />
            <div class="text-danger vPassword">
              {error.vPassword ? error.vPassword : ""}
            </div>
          </div>

          <div class="mb-1">
            <label for="vPassword" class="form-label">
              Date of birth:
            </label>
            <input
              onChange={handleChange}
              name="dateOfBirth"
              type="date"
              class="form-control"
              required
            />
            <div class="text-danger vPassword">
              {error.vPassword ? error.vPassword : ""}
            </div>
          </div>
          <br />

          {/* <div class="mb-1">
            <input name="radio" type="radio" id=""></input>
            remember me
          </div> */}
          <div class="text-center">
            <button
              onClick={register}
              class="btn btn-primary"
              style={{ width: "100%", borderRadius: 10 }}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
