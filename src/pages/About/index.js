import React, { useContext } from "react";
import Div100Vh from "react-div-100vh";
import { LanguageContext } from "../../context/language";
import Translations from "../../constants/translations";
import "./About.css";
import Image from "../../static/me.jpg";

const About = () => {
  const [language] = useContext(LanguageContext);

  return (
    <Div100Vh className="about-content">
      <div className="about-div">
        <div className="about-image-container">
          <img className="about-image" src={Image} alt="me" />
        </div>
        <div className="about-details-container">
          <p>{Translations.aboutMe1[language]}</p>
          <p>{Translations.aboutMe2[language]}</p>
          <p>{Translations.aboutMe3[language]}</p>
          <p>{Translations.aboutMe4[language]}</p>
          <div className="skills-container">
            <ul className="ul-skills" id="backend">
              <li>Express</li>
              <li>Flask</li>
              <li>Django</li>
            </ul>
            <ul className="ul-skills" id="frontend">
              <li>React</li>
              <li>Flutter</li>
              <li>Vue</li>
            </ul>
            <ul className="ul-skills" id="styling">
              <li>CSS</li>
              <li>SASS</li>
              <li>Flutter</li>
              <li>WPF</li>
            </ul>
            <ul className="ul-skills" id="app">
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Python</li>
              <li>Dart</li>
              <li>C#</li>
              <li>Swift</li>
              <li>C</li>
            </ul>
            <ul className="ul-skills" id="database">
              <li>MongoDB</li>
              <li>FireBase</li>
            </ul>
          </div>
        </div>
      </div>
    </Div100Vh>
  );
};

export default About;
