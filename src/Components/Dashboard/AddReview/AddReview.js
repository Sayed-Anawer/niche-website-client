import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  document.title = "Dashboard | Add Review";

  const onSubmit = (data) => {
    axios
      .post("https://arcane-peak-21353.herokuapp.com/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Review has been  Added",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
    console.log(data);
  };
  return (
    <div
      className="container mt-5"
      style={{ height: "100vh", marginBottom: "200px" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label for="exampleInputName" className="form-label">
            Name of User
          </label>
          <input
            className="form-control"
            id="exampleInputName"
            {...register("name")}
          />
        </div>
        <p>Give us Rate</p>
        {/* rating */}
        {[1, 2, 3, 4, 5].map((e, index) => {
          return (
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id={`inlineRadio${index + 1}`}
                value={index + 1}
                {...register("rating")}
              />
              <label
                className="form-check-label"
                for={`inlineRadio${index + 1}`}
              >
                {index + 1}
              </label>
            </div>
          );
        })}
        <br />
        <br />
        <div className="mb-3">
          <label for="exampleInputReview" className="form-label">
            Write your Review
          </label>
          <textarea
            cols="10"
            rows="10"
            className="form-control"
            id="exampleInputReview"
            {...register("review")}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputImg" className="form-label">
            Image Url
          </label>
          <input
            className="form-control"
            id="exampleInputImg"
            {...register("img")}
          />
        </div>

        <input
          //   className="btn btn-primary"
          type="submit"
          className="btn btn-dark"
          value="Add a review"
        />
      </form>
    </div>
  );
};

export default AddReview;
