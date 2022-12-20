import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Portal_Layout() {
  return (    
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>        
        <div id="layoutSidenav_content">          
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Portal_Layout;