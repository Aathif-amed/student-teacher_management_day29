import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Task</h1>
        </div>
        <div className="row ">
          <div className="col-12  d-flex justify-content-center ">
            <p className="text-center">
              ADMIN DASHBOARD TO IMPLEMENT THE CRUD WITH STUDENT & TEACHER
              MANAGEMENT
            </p>
          </div>
          <div className="col-12  d-flex justify-content-center gap-5 ">
            <Link
              to={"/portal/teachers_data"}
              className=" btn btn-lg btn-outline-dark shadow-sm "
            >
              View Teachers <i className="fas fa-arrow-right fa-sm"></i>
            </Link>
            <Link
              to={"/portal/students_data"}
              className=" btn btn-lg btn-outline-warning shadow-sm "
            >
              View Students <i className="fas fa-arrow-right fa-sm"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
