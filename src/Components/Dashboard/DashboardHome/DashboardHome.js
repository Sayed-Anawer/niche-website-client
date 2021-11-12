import React from "react";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <div className="container mt-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-12">
          <div className="">
            <h3 className="text-center text-primary fw-bold">
              Hello <span className="text-success ">{user.displayName} </span>,
              Welcome to the Dashboard
            </h3>
          </div>
        </div>
        <div className="col-12 ">
          <img
            src="https://i.ibb.co/rF7sN8c/3556960.jpg"
            className="img-fluid w-50 center"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
