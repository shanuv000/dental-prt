import React from "react";
import "./Footer.css";
import PrivacyModal from "../ModalView/PrivacyModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="item1">
          <PrivacyModal />
        </div>

        <div className="item2">
          {/* <span style={{ paddingRight: 5 }}>Copyright </span> */}
          {/* <FontAwesomeIcon icon={faCopyright} />{" "} */}
          <span style={{ paddingLeft: 5 }}>
            {/* {new Date().getFullYear()} */}
            <a
              href="https://portfolio-e6aa2.web.app/"
              target="_blank"
              className="myDesign"
            >
              Copyright &copy; 2021 VB
            </a>
          </span>
        </div>

        <a
          href="https://www.instagram.com/dental_junction?r=nametag"
          target="_blank"
          className="item3"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.facebook.com/pramod.raj.184"
          target="_blank"
          className="item4"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>

        <a
          href="https://youtube.com/c/LoveStatusForCouples"
          target="_blank"
          className="item5"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>

        {false && <PrivacyModal click={true} />}
      </div>
    </footer>
  );
};

export default Footer;
