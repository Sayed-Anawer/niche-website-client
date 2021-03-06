import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "../Login/login.css";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import "./register.css";

const Register = () => {
  document.title = "Register";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();
  const { logInUsingGoogle, signUpWithEmailAndPassword } = useAuth();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signUpWithEmailAndPassword(email, password, name, history);
  };
  const handleGoogleLogIn = (e) => {
    e.preventDefault();
    logInUsingGoogle(history);
  };

  return (
    <>
      <Navbar />
      <div className="container  margin-bottom">
        <h1 className="text-center my-2">Register an account</h1>
        <div className="row align-items-md-center">
          <div className="col-md-6">
            <input
              type="text"
              placeholder="Name"
              id="name"
              onBlur={handleNameChange}
              required
              className="form-control w-75"
            />
            <br />
            <input
              type="email"
              name=""
              onBlur={handleEmailChange}
              id="email"
              placeholder="Email"
              required
              className="form-control w-75"
            />
            <br />
            <input
              type="password"
              name=""
              id="password"
              onBlur={handlePasswordChange}
              placeholder="Password"
              required
              className="form-control w-75"
            />
            <button
              className="btn btn-primary w-75 my-4"
              onClick={handleSubmit}
            >
              Register
            </button>
            <div className="mb-3">--------OR-----------</div>
            <button
              className="btn btn-danger w-75 "
              onClick={handleGoogleLogIn}
            >
              {" "}
              Register with google
            </button>
            <p className="lead my-2">
              Already have an account ? <Link to="/login">Login</Link>
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://i.ibb.co/FYdt88r/Mobile-login.jpg"
              className="w-75"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
