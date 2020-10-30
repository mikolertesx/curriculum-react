import React, { useState } from "react";
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
  const [language, setLanguage] = useState("En");

  const onLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

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
      <nav className="nav">
        {createNavItems(items)}
        <div className="nav-language-container">
          <p
            className={`nav-language-container-p ${
              language === "En" ? "nav-language-container-p--active" : ""
            }`}
            onClick={() => onLanguageChange("En")}
          >
            En
          </p>
          <div className="nav-language-container-vertical-separator"></div>
          <p
            className={`nav-language-container-p ${
              language === "Es" ? "nav-language-container-p--active" : ""
            }`}
            onClick={() => onLanguageChange("Es")}
          >
            Es
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
