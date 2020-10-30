import React, { useState } from "react";
import Div100Vh from "react-div-100vh";
import Link from "../../shared/components/externalLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faStackOverflow,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

const Contact = () => {
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState(false);

  return (
    <Div100Vh className="contact-content">
      <div className="contact-options">
        <div
          className="contact-options-item"
          onClick={() => setEmail((prevEmail) => !prevEmail)}
        >
          {email ? (
            <p>mgangsal@outlook.com</p>
          ) : (
            <FontAwesomeIcon icon={faEnvelope} />
          )}
        </div>
        <div
          className="contact-options-item"
          onClick={() => setPhone((prevPhone) => !prevPhone)}
        >
          {phone ? <p>(899) 246-0292</p> : <FontAwesomeIcon icon={faPhone} />}
        </div>
        <div className="contact-options-item">
          <Link href="https://www.facebook.com/miguelangel.guerrerosalinas.716/">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </div>
        <div className="contact-options-item">
          <Link href="https://github.com/mikolertesx">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
        <div className="contact-options-item">
          <Link href="https://stackoverflow.com/users/12954960/miguel-angel-guerrero-salinas">
            <FontAwesomeIcon icon={faStackOverflow} />
          </Link>
        </div>
        <div className="contact-options-item">
          <Link href="https://www.linkedin.com/in/miguel-angel-guerrero-salinas-15aa76185">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
      </div>
    </Div100Vh>
  );
};

export default Contact;
