import React from "react";
import heartimage from "../../images/home/heart.png";
import heartimage1 from "../../images/home/heart-small.png";
import imagelogoheader from "../../images/header/header-logo.png";
import "./HomeSction.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import HomeFooterInfom from "./HomeFooterInfom/HomeFooterInfom";
import Home2ndSection from "./Home2ndSection/Home2ndSection";
import Enrollment from "../Enrollment/Enrollment";
import { ManInformation } from "./ManInformation/ManInformation";
import Home4rthSection from './Home4rthSection/Home4rthSection'
import Home5thSection from "./Home5thSection/Home5thSection";
import Home6thSection from "./Home6thSection/Home6thSection";
const HomeSction = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div >
    <div className="backgroun-image-data-connection-page-background">
    <div className="background-animation">
        <div className="heart"></div>
      </div>
      <div className="row">
  <div className="col-lg-2 col-md-3 col-sm-4 col-6">
    <div className="social-network">
      <ul className="">
        <div className="font-icon-social-icon">
          <li>
            <a className="waves-effect waves-dark" href="#">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </div>
        <div className="font-icon-social-icon">
          <li>
            <a className="waves-effect waves-dark" href="#">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
        </div>
        <div className="font-icon-social-icon">
          <li>
            <a className="waves-effect waves-dark" href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        </div>
        <div className="font-icon-social-icon">
          <li>
            <a className="waves-effect waves-dark" href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </div>
      </ul>
    </div>
  </div>
  <div className="col-lg-5 col-md-6 col-sm-8 col-6">
    <div className="heartimage-home-page">
      <img src={heartimage} />
    </div>
    <div className="heart-fixed-small1 image-animation">
      <img src={heartimage1} alt='' />
    </div>
    <div className="heart-fixed-small2 image-animation">
      <img src={heartimage1} alt='' />
    </div>
    <div className="heart-fixed-small3 image-animation">
      <img src={heartimage1} alt='' />
    </div>
  </div>
  <div className="col-lg-5 col-md-12">
    <div className="image-data-home-page">
      <img src={imagelogoheader} />
    </div>
    <div className="matchmaker-dev">
      <h3>{t("matchmakers and consultants")}</h3>
    </div>
    <div className="matchmaker-dev">
      <h2>{t("One of the leaders in the country")}</h2>
    </div>
    <div className="attribute-pe">
      <p>{t("attribute-pargaph")}</p>
    </div>
    <div className="home-page-button-color-data">
      <div>
        <button className="connection-button-header">
          {t("connection")}
        </button>
      </div>
      <div>
        {" "}
        <button className="subscribe-button-header">
          {" "}
          {t("enrollment")}
        </button>
      </div>
    </div>
  </div>
</div>
    </div>

<Home2ndSection />
<ManInformation />
<Home4rthSection />
<Home5thSection />
<Home6thSection />
  <HomeFooterInfom />
 
    </div>
  );
};

export default HomeSction;
