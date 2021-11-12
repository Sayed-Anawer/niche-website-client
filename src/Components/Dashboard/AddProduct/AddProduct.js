import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
const AddProduct = () => {
  document.title = "Dashboard | Add Product";
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://arcane-peak-21353.herokuapp.com/addProduct", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Added Successfully",
            showConfirmButton: false,
            timer: 1000,
          });
          reset();
        }
      });
  };
  return (
    <div
      className="container mt-5"
      style={{ height: "100vh", marginBottom: "200px" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label forhtml="exampleInputName" className="form-label">
            Name of Car
          </label>
          <input
            className="form-control"
            id="exampleInputName"
            {...register("name")}
          />
        </div>
        <div className="mb-3">
          <label forhtml="exampleInputPrice" className="form-label">
            Price
          </label>
          <input
            className="form-control"
            id="exampleInputPrice"
            {...register("price")}
          />
        </div>
        <div className="mb-3">
          <label forhtml="exampleInputDesc" className="form-label">
            Description
          </label>
          <input
            className="form-control"
            id="exampleInputDesc"
            {...register("desc")}
          />
        </div>
        <div className="mb-3">
          <label forhtml="exampleInputImg" className="form-label">
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
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
