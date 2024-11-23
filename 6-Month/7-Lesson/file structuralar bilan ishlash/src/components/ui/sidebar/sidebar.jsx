import React from "react";
import "./sidebar.css";
import { NavLink, useLocation } from "react-router-dom";
import Routes from "../../../router/routes";
import routes from "../../../router/routes";
const Sidebar = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="sidebar">
      {routes.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={
            pathname == item.path
              ? "bg-danger  p-2 my-2 text-white"
              : "bg-info p-2 my-2 text-primary"
          }
        >
          {item.content}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
