import axios from "axios";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "./reviews.css";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("https://arcane-peak-21353.herokuapp.com/reviews")
      .then((res) => setReviews(res.data));
  }, []);

  return (
    <>
      <section class="container my-5">
        <h1 class="text-center py-5" style={{ fontSize: "2.8rem" }}>
          <span>Happy</span>
          <span class="text-danger"> Clients says</span>
        </h1>
        <Carousel
          plugins={[
            "infinite",
            "arrows",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                "infinite",
                "arrows",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                "infinite",
                "arrows",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        >
          {reviews.map((review) => {
            return (
              <div class="card h-100 mx-2">
                <img
                  src={review.img}
                  class="card-img-top w-50 mx-auto mt-5"
                  style={{
                    height: "200px",
                    width: "100px",
                    borderRadius: "50%",
                  }}
                  alt="..."
                />
                <h4 class="text-center py-2 custom-user-name-color">
                  {review.name}
                </h4>
                <h4 className="text-center">
                  <Rating
                    initialRating={review.rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                  ></Rating>
                </h4>
                <div class="card-body">
                  <p class="card-text text-center pt-3">{review.review}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </section>
    </>
  );
};

export default Reviews;
