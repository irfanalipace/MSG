import React from "react";
import "./Connection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import Footer from '../Footer/Footer'
import heartimage from "../../images/home/copel-image.png";
const Connection = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="backgroun-image-data-connection-page-background">
    
      <div
        className="container"
        style={{ paddingTop: "70px" }}
      >
        <div className="row">
          <div className="col-2">
            <div className="social-network-enrollment">
              <ul className="">
                <div className="font-icon-social-icon1">
                  <li>
                    <a className="waves-effect waves-dark" href="#">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </li>
                </div>
                <div className="font-icon-social-icon1">
                  <li>
                    <a className="waves-effect waves-dark" href="#">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                  </li>
                </div>
                <div className="font-icon-social-icon1">
                  <li>
                    <a className="waves-effect waves-dark" href="#">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                </div>
                <div className="font-icon-social-icon1">
                  <li>
                    <a className="waves-effect waves-dark" href="#">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <div className="connection-data">
              <span>{t("connection")}</span>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <div className="lable-dev">
                  <label
                    htmlFor="name"
                    className="form-label connectionlabel-data"
                  >
                    {t("Username or email")}
                  </label>
                </div>
                <input
                  type="text"
                  className="form-control connectionlabel-data"
                  id="home"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <div className="lable-dev">
                  <label
                    htmlFor="password"
                    className="form-label connectionlabel-data"
                  >
                    {t("A password")}
                  </label>
                </div>
                <input
                  type="text"
                  className="form-control connectionlabel-data"
                  id="home"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <div className="connection-and-checkbox-data-solt">
                  <div>
                    <button className="">{t("connection")}</button>
                  </div>
                  <div className="checkbox-connection-checkbox">
                    <label
                      className="form-check-label"
                      htmlFor="exampleCheckbox"
                      style={{ marginRight: "6px" }}
                    >
                      {t("Keep me inside the site")}{" "}
                    </label>

                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="exampleCheckbox"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="heart-image-connection-page-layout">
                <img src={heartimage} />
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Connection;
