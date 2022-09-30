import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { setUser } from "../redux/actions/authActions"
import axiosInstance from "../utils/axios"
import Navbar from "../components/Navbar"

const Login = props => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: "",
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

  const login = async e => {
    e.preventDefault()
    try {
      const res = await axiosInstance.post("/auth/login", user)
      console.log(res)
      localStorage.setItem("token", res.data.token)
      props.setUser(res.data.user)
      window.location.href = "/daily-care"
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <>
      {/* <Navbar /> */}
      <div class="container-lg">
        <h3 class="text-center my-3">Log in to DailyHealth</h3>
        <small className="text-center d-block">
          Already created an account? Go ahead fill in the info and login
        </small>

        <div class="row justify-content-center mb-5 mt-4 ">
          <form class="col-11 col-sm-9 col-md-8 col-lg-6 border border-primary p-5 rounded-4">
            <div class="mb-3">
              <label for="email" class="form-label">
                Email address:
              </label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                value={user.email}
                class="form-control"
                id="email"
                placeholder="name@example.com"
                required
              />
              <div class="text-danger firstname">
                {error.email ? error.email : ""}
              </div>
            </div>
            <div class="mb-5">
              <label for="password" class="form-label">
                Password:
              </label>
              <input
                onChange={handleChange}
                name="password"
                type="password"
                value={user.password}
                class="form-control"
                id="password"
                required
              />
              <div class="text-danger password">
                {error.password ? error.password : ""}
              </div>
            </div>
            <div class="mb-3">
              <Link to="/verify_email">forgotten password?</Link>
            </div>
            <div class="text-center">
              <button
                onClick={login}
                class="btn btn-primary"
                style={{ width: "100%", borderRadius: 10 }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    currentUser: auth.user,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
