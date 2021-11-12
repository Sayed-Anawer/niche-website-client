import React from "react";
import { Link } from "react-router-dom";
import slider1 from "../../images/slider1.png";
import slider2 from "../../images/slider2.png";
import slider3 from "../../images/slider3.png";
import slider4 from "../../images/slider4.png";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="container mb-5 mt-2 " style={{ marginBottom: "400px" }}>
      <div
        id="carouselExampleInterval"
        className="carousel slide bg-custom-color"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <div className="row align-items-center justify-content-evenly">
              <div className="col-md-7">
                <h1 className="text-light text-start ps-3 pt-3">
                  Bayerische Motoren Werke AG (BMW)
                </h1>
                <p className="text-light text-start ps-3 pt-3">
                  Bayerische Motoren Werke AG, commonly referred to as BMW, is a
                  German multinational corporate manufacturer of luxury vehicles
                </p>

                <Link
                  to="/explore"
                  type="button"
                  className="btn  btn-primary text-light btn-lg px-5 py-2 mx-2  my-5"
                >
                  Explore More
                </Link>
              </div>
              <div className="col-md-5">
                <img src={slider1} className="d-block img-fluid" alt="..." />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className="row align-items-center justify-content-evenly">
              <div className="col-md-7">
                <h1 className="text-light text-start ps-3 pt-3">
                  Mercedes-AMG Hechback
                </h1>
                <p className="text-light text-start ps-3 pt-3">
                  Mercedes-AMG GmbH, commonly known as AMG, is the
                  high-performance subsidiary of Mercedes-Benz AG. AMG
                  independently hires engineers and contracts with manufacturers
                  to customize Mercedes-Benz AMG vehicles
                </p>

                <Link
                  to="/explore"
                  type="button"
                  className="btn  btn-primary text-light btn-lg  px-5 py-2 mx-2 my-5"
                >
                  Explore More
                </Link>
              </div>
              <div className="col-md-5">
                <img src={slider2} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <div className="row align-items-center justify-content-evenly">
              <div className="col-md-7">
                <h1 className="text-light text-start ps-3 pt-3">
                  Latest Ford Mustang Gt
                </h1>
                <p className="text-light text-start ps-3 pt-3">
                  Ford Mustang GT models has the same 5.0-liter V8 engine with
                  the same amount of torque, horsepower, top speed of 163 mph,
                  and 0-60 times. They do, however, have different transmissions
                </p>

                <Link
                  to="/explore"
                  type="button"
                  className="btn  btn-primary text-light  btn-lg mx-2 px-5 py-2  my-5"
                >
                  Explore More
                </Link>
              </div>
              <div className="col-md-5">
                <img src={slider4} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
