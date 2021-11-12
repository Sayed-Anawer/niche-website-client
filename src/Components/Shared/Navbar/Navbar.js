import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span className="ms-2  h4 custom-style p-2 ">Car's House</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-1 mb-lg-0 align-items-center">
              <li className="nav-item">
                <Link to="/" className="nav-link text-dark h5">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/explore" className="nav-link text-dark h5">
                  Explore more cars
                </Link>
              </li>
              {/* CONDIOTIONAL RENDERING BASE ON THE AUNTHENTICATION STATUS OF USER */}
              {user.email ? (
                <>
                  <li className="nav-item">
                    <Link to={`/dashboard`} className="nav-link text-dark h5">
                      Dashboard
                    </Link>
                  </li>{" "}
                  {/* <li className="nav-item">
                  <Link to={`/manageAllTrips`} className="nav-link">
                    Manage All Trips
                  </Link>
                </li>{" "}
                <li className="nav-item">
                  <Link to={`/AddMoreTrips`} className="nav-link">
                    Add Trips
                  </Link>
                </li>{" "} */}
                  {user.displayName ? (
                    <span className="me-2 text-dark bg-warning  p-1 px-sm-3 my-sm-2 my-4 fw-bold ">
                      {user.displayName}
                    </span>
                  ) : (
                    <span className="me-2 text-white">Your account</span>
                  )}
                  <button className="btn btn-danger " onClick={logOut}>
                    {" "}
                    <i className="bi bi-box-arrow-right me-1 fw-bold "></i>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      <button className="btn btn-dark">Login</button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      <button className="btn btn-success">Register</button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
