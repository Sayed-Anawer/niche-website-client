import React, { useState } from "react";
import Swal from "sweetalert2";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    document.title = "Dashboard | Make an Admin";
    const user = { email };
    fetch("https://arcane-peak-21353.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Made admin successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <h3 className="text-center mt-4">Make an Admin</h3>
      <form className="container mt-5 d-flex" onSubmit={handleAdminSubmit}>
        <input
          type="email"
          className="form-control w-75"
          placeholder="Enter email"
          onBlur={handleOnBlur}
        />
        <button className="btn btn-primary ms-2 ">
          {" "}
          <small>Make Admin</small>{" "}
        </button>
      </form>
    </div>
  );
};

export default MakeAdmin;
