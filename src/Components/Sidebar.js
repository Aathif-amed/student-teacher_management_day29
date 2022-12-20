import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="sb-sidenav accordion bg-info" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading text-dark">Panel</div>
          <Link
            to={"/portal/dashboard"}
            className="nav-link text-white"
            href="index.html"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Dashboard
          </Link>
          <Link
            className="nav-link collapsed text-white"
            to={"/portal/teachers_data"}
            data-bs-toggle="collapse"
            data-bs-target="#collapseLayouts"
            aria-expanded="false"
            aria-controls="collapseLayouts"
          >
            <div className="sb-nav-link-icon ">
              <i className="fas fa-columns"></i>
            </div>
            Teachers
          </Link>

          <Link
            className="nav-link collapsed text-white "
            to={"/portal/students_data"}
            data-bs-toggle="collapse"
            data-bs-target="#collapsePages"
            aria-expanded="false"
            aria-controls="collapsePages"
          >
            <div className="sb-nav-link-icon ">
              <i className="fas fa-columns"></i>
            </div>
            Students
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
