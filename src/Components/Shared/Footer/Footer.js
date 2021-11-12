import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className=" footer">
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="text-warning"> Car's House</h1>
            </div>
            <div className="col-md-4 my-2">
              <h4>Customer Services</h4>
              <ul className="list-unstyled">
                <li>Customer Care</li>
                <li>Contact Us</li>
                <li>Dealerships</li>
              </ul>
            </div>
            <div className="col-md-4 my-2">
              <h4>Follow us On</h4>
              <ul className="list-unstyled">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Sayed Anawer | © All rights
              reserved | Terms Of Service || Privacy 2021.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
