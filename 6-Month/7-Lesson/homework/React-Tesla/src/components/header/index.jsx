import React from "react";
import "./index.css";
import routes from "@routes";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Person from "../../assets/person.png";
import Burger from "../../assets/burger-menu.png";
const Index = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <header className="header container-fluid ">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="nav-links d-flex gap-4 align-items-center ">
          {routes.map((item, index) => (
            <li key={index} className="list-unstyled еу">
              <NavLink
                to={item.path}
                className={
                  item.path === pathname
                    ? item.active
                    : "text-white py-2 px-4  text-decoration-none"
                }
                // activeClassName="active-link"
              >
                {item.content}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="header-right d-flex align-items-center gap-3">
          <div className="search d-flex align-items-center">
            <span>Search</span>
          </div>
          <img src={Person} alt="Person" className="icon" />
          <img src={Burger} alt="Menu" className="icon" />
        </div>
      </div>
    </header>
  );
};

export default Index;
