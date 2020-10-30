import React, { useContext } from "react";
import Div100Vh from "react-div-100vh";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { LanguageContext } from "../../context/language";
import Link from "../../shared/components/externalLink";
import Translations from "../../constants/translations";
import { MdToHTMLLang } from "../../util/MdToHTML";
import "./Home.css";

const Home = () => {
  const [language,] = useContext(LanguageContext);

  return (
    <main>
      <Div100Vh className="home-header">
        {MdToHTMLLang(
          language,
          Translations.presentation,
          "home-header-title",
          null,
          {
            containerClass: null,
          }
        )}
        <div className="home-header-presentation">
          {MdToHTMLLang(
            language,
            Translations.presentationP1,
            "",
            "home-header-description--important",
            { containerClass: "home-header-description" }
          )}
          {MdToHTMLLang(
            language,
            Translations.presentationP2,
            "",
            "home-header-description--important",
            { containerClass: "home-header-description" }
          )}
        </div>
        <div className="home-header-separation" />
        <div className="home-header-media">
          <ul className="home-social-media">
            <li className="home-social-media-item">
              <Link href="https://github.com/mikolertesx">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </li>
            <li className="home-social-media-item">
              <Link href="https://stackoverflow.com/users/12954960/miguel-angel-guerrero-salinas">
                <FontAwesomeIcon icon={faStackOverflow} />
              </Link>
            </li>
            <li className="home-social-media-item">
              <Link href="https://www.linkedin.com/in/miguel-angel-guerrero-salinas-15aa76185">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </li>
            <li className="home-social-media-item">
              <Link href="https://www.facebook.com/miguelangel.guerrerosalinas.716/">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>
          </ul>
        </div>
      </Div100Vh>
    </main>
  );
};

export default Home;
