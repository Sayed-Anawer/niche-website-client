import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import Banner from "../Banner/Banner";
import CarOperator from "../CarOperator/CarOperator";
import Reviews from "../Reviews/Reviews";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  document.title = "Home";
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios
      .get("https://arcane-peak-21353.herokuapp.com/allCars")

      .then((res) => setCars(res.data.slice(0, 6)));
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
  } else
    return (
      <>
        <div style={{ marginBottom: "370px" }}>
          <Navbar />

          <Banner />
          <div className="container my-5">
            <h2 className="text-center  py-2" style={{ fontSize: "2.8rem" }}>
              The <span className="text-danger "> Latest </span> New car{" "}
            </h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
              {cars.map((car) => {
                return (
                  <div className="col " key={car._id}>
                    <div className="card h-100">
                      <img
                        src={car.img}
                        className="img-fluid card-img-top h-100 "
                        alt="..."
                      />
                      <div className="card-body">
                        <h4 className="card-title">{car.name}</h4>
                        <h5 className="card-title my-4">
                          Price : ${car.price}
                        </h5>
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
          <Reviews />
          <CarOperator />
          <Subscribe />
        </div>
        <Footer />
      </>
    );
};

export default Home;
