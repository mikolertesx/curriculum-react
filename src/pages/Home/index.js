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
import "./Home.css";

const Home = () => {
  return (
    <main>
      <Div100Vh className="home-header">
        <h2 className="home-header-title">I'm Miguel Angel.</h2>
        <div className="home-header-presentation">
          <p className="home-header-description">
            I'm a Mexican based{" "}
            <span className="home-header-description--important">
              Web Developer
            </span>
            ,{" "}
            <span className="home-header-description--important">
              App Developer
            </span>{" "}
            and{" "}
            <span className="home-header-description--important">
              Mechatronic Engineer
            </span>
          </p>
          <p className="home-header-description">
            I'm creating{" "}
            <span className="home-header-description--important">
              Reactive apps
            </span>{" "}
            for the world to use.
          </p>
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
              <a href="https://www.facebook.com/miguelangel.guerrerosalinas.716/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
          </ul>
        </div>
      </Div100Vh>
    </main>
  );
};

export default Home;
