import axios from "axios";
import React, { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";

const ManageAllOrders = () => {
  const [manageProducts, setManageProducts] = useState([]);

  document.title = "Dashboard | Manage Products";
  useEffect(() => {
    axios
      .get("https://arcane-peak-21353.herokuapp.com/allCars")
      .then((res) => setManageProducts(res.data));
  }, []);

  // Handle delete functionality
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete ?");
    if (proceed) {
      axios
        .delete(`https://arcane-peak-21353.herokuapp.com/allCars/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            const remaining = manageProducts.filter(
              (product) => product._id !== id
            );
            setManageProducts(remaining);
          }
        });
    }
  };

  if (!manageProducts) {
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
  } else if (manageProducts.length === 0) {
    return (
      <div className="container  text-center" style={{ marginBottom: "530px" }}>
        <div>
          <img
            className="img-fluid"
            src="https://i.ibb.co/277JQj1/nos-removebg-preview-1.png"
            alt=""
          />
        </div>
        <h2 className="text-danger">No Products available</h2>
      </div>
    );
  } else {
    return (
      <div
        style={{ marginBottom: "470px" }}
        className="container table-responsive "
      >
        <table className="table caption-top mt-3">
          <caption>List of users</caption>
          <thead>
            <tr>
              <th scope="col">Sr.</th>

              <th scope="col">Name of Car</th>

              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {manageProducts.map((product, index) => {
              return (
                <tr key={product._id}>
                  <th scope="row">{index + 1}</th>

                  <td>{product.name}</td>
                  <td>$ {product.price}</td>

                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ManageAllOrders;
