import React from "react"
import { Link, useNavigate } from "react-router-dom"
import firstIllus from "../assets/illustrations/undraw_medicine_b-1-ol.svg"

const Navbar = ({ setAuth, currentUser }) => {
  console.log(currentUser)
  const navigate = useNavigate()
  return (
    <header style={{ paddingBottom: 70 }}>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-info">
        <div className="container ">
          <Link className="navbar-brand" to="/daily-care">
            <img
              src={firstIllus}
              alt="logo"
              width="65rem"
              style={{
                borderRadius: "16rem",
                marginRight: "1.5rem",
                backgroundColor: "white",
              }}
            />
            DailyHealth
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
              <Link
                className="nav-link active"
                aria-current="page"
                to="/daily-care"
              >
                Home
              </Link>
              {/* <a className="nav-link" href="#services">
								Our services
							</a> */}
              <Link className="nav-link" to="/lab_tests">
                Lab tests
              </Link>
              {/* <a className="nav-link" href="#getInTouch">
								Get in touch
							</a> */}
              {currentUser.admin ? (
                <>
                  <Link className="nav-link" to="/add_test">
                    Add test
                  </Link>

                  <Link className="nav-link" to="/users">
                    Users
                  </Link>
                </>
              ) : (
                <Link
                  className="nav-link"
                  to={"/my_lab_tests/" + currentUser.userId}
                >
                  My lab tests
                </Link>
              )}
              {JSON.stringify(currentUser) === JSON.stringify({}) ? (
                <>
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </>
              ) : (
                <div
                  onClick={() => {
                    localStorage.setItem("token", "")
                    window.location.href = "/login"
                  }}
                  className="nav-link"
                  to="/signup"
                >
                  Log out
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
