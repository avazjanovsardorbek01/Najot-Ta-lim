import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/main" className="Navlink">
        Cars
      </NavLink>
      <NavLink to="/main/brand" className="Navlink">
        Brand
      </NavLink>
    </div>
  );
};

export default Sidebar;
