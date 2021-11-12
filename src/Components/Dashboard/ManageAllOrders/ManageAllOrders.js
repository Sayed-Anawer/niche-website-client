import axios from "axios";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  document.title = "Dashboard | Manage All Orders";
  const [manageAllOrders, setManageAllOrders] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    axios
      .get("https://arcane-peak-21353.herokuapp.com/manageAllOrders")
      .then((res) => setManageAllOrders(res.data));
  }, [status]);

  // Handle delete functionality
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to Delete !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: " #d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://arcane-peak-21353.herokuapp.com/deletePurchasedCars/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              const remaining = manageAllOrders.filter(
                (order) => order._id !== id
              );
              setManageAllOrders(remaining);
            }
          });
        Swal.fire("Deleted!", "Order has been deleted.", "success");
      }
    });
  };

  // Handle Edit Status
  const handleEditStatus = (id) => {
    axios
      .put(`https://arcane-peak-21353.herokuapp.com/updateStatus/${id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Car has been Shipped Succesfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setStatus(status + 1);
        }
      });
  };

  if (!manageAllOrders) {
    return (
      <div
        className=" spinner-border text-primary text-center"
        role="status"
      ></div>
    );
  } else if (manageAllOrders.length === 0) {
    return (
      <div className="container  text-center" style={{ marginBottom: "530px" }}>
        <div>
          <img
            className="img-fluid"
            src="https://i.ibb.co/277JQj1/nos-removebg-preview-1.png"
            alt=""
          />
        </div>
        <h2 className="text-danger">No Orders available</h2>
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
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Name of Car</th>
              <th scope="col">Status</th>
              <th scope="col" className="text-center">
                Edit
              </th>
              <th scope="col" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {manageAllOrders.map((user, index) => {
              return (
                <tr key={user._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.userName}</td>
                  <td>{user.userEmail}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>{user.name}</td>
                  <td>
                    <span className="fs-5">{user.status}</span>
                  </td>
                  <td>
                    {" "}
                    <i
                      className="btn btn-primary mx-4 bi "
                      onClick={() => handleEditStatus(user._id)}
                    >
                      {" "}
                      Approve
                    </i>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user._id)}
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
