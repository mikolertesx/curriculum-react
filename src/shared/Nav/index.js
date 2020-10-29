import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const createNavItems = (items) => {
  return items.map((item) => (
    <NavLink
      to={item.to}
      className="nav-item"
      activeClassName="nav-item--active"
      exact={true}
    >
      {item.text}
    </NavLink>
  ));
};

const Nav = () => {
  const items = [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/about-me",
      text: "About me",
    },
    {
      to: "/contact",
      text: "Contact",
    },
  ];

  return (
    <div className="nav-container">
      <nav className="nav">{createNavItems(items)}</nav>
    </div>
  );
};

export default Nav;
