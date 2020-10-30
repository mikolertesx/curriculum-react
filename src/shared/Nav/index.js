import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../context/language";
import Translations from "../../constants/translations";
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
  const [language, setLanguage] = useContext(LanguageContext);

  const onLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const items = [
    {
      to: "/",
      text: Translations.links.Home[language],
    },
    {
      to: "/about-me",
      text: Translations.links.About[language],
    },
    {
      to: "/contact",
      text: Translations.links.Contact[language],
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
