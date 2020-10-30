import React from "react";
import Div100Vh from "react-div-100vh";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import Link from "../../shared/components/externalLink";
import Translations from "../../constants/translations";
import MdToHtml from "../../util/MdToHTML";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <Div100Vh className="home-header">
        {MdToHtml(Translations.presentation.En, "home-header-title", null, {
          containerClass: null,
        })}
        <div className="home-header-presentation">
          {MdToHtml(
            Translations.presentationP1.En,
            "",
            "home-header-description--important",
            { containerClass: "home-header-description" }
          )}
          {MdToHtml(
            Translations.presentationP2.En,
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
