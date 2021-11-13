import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Explore = () => {
  document.title = "Explore more";
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios
      .get("https://arcane-peak-21353.herokuapp.com/allCars")

      .then((res) => setCars(res.data));
  }, []);
  if (cars.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center ">
        <SpinnerCircular
          size={90}
          thickness={149}
          speed={107}
          color="rgba(57, 106, 172, 1)"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      </div>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="container" style={{ marginBottom: "550px" }}>
          <h2 className="text-center text-danger my-3">
            Exclusive Cars , Find Your Match
          </h2>
          <h5 className="text-center mb-3">We are here for you</h5>
          <div className="row row-cols-1 row-cols-md-3 g-4 ">
            {cars.map((car) => {
              return (
                <div className="col " key={car._id}>
                  <div className="card h-100">
                    <img
                      src={car.img}
                      className="card-img-top h-100"
                      alt="..."
                    />
                    <div className="card-body">
                      <h4 className="card-title">{car.name}</h4>
                      <h5 className="card-title my-4">Price : ${car.price}</h5>
                      <p className="card-text">{car.desc}</p>
                      <Link to={`/purchase/${car._id}`}>
                        <button className="w-100 btn btn-primary">
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default Explore;
