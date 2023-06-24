
import React, { useState, useEffect } from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";
import engimage from "../../images/header/eng.png";
import { Link } from "react-router-dom";
import signatureimage from "../../images/header/header-logo.png";
export const DesktopHeader = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const { t } = useTranslation();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { i18n } = useTranslation();
  

  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  
  return (
    <div className="desktop-component">
    <div className="heart"></div>
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
<div className="nav-header-class container">
  <div className="headers-buttons-class">
    <div>
      <button className="connection-button-header">
        <Link to={`connection`}>{t("connection")}</Link>
      </button>
    </div>
    <div>
      <button className="subscribe-button-header">
        <Link to={`/packages`}>{t("subscribe-purchase")}</Link>
      </button>
    </div>
    <div>
      <button
        className="english-button-header"
        onClick={() => changeLanguage("en")}
      >
        <img src={engimage} alt="English" /> English
      </button>
    </div>
  </div>
  <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active nav-item-links-style">
        <a className="nav-link">
          <Link to={`/search-match`}>{t("search")}</Link>
          <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item nav-item-links-style">
        <a className="nav-link">
          <Link to={`/contact`}>{t("contact")}</Link>
        </a>
      </li>
      <li className="nav-item nav-item-links-style">
        <a className="nav-link">
          <Link to={`thanks`}>{t("blog")}</Link>
        </a>
      </li>
      <li className="nav-item nav-item-links-style">
        <a className="nav-link">
          <Link to={`/content-page`}>{t("enrollment")}</Link>
        </a>
      </li>
      <li className="nav-item nav-item-links-style">
        <a className="nav-link">
          <Link to={`/profile`}>{t("about")}</Link>
        </a>
      </li>
      <li className="nav-item nav-item-links-style">
        <a className="nav-link">
          <Link to={`/`}>{t("Home")}</Link>
        </a>
      </li>
    </ul>
  </div>
  <button className="navbar-toggler" onClick={toggleMenu}>
    <span className={`navbar-toggler-icon ${isMenuOpen ? "open" : ""}`} />
  </button>
  <div>
    <a className="nav-link image-link-header-logo">
      <Link to={`/`}>
        <img src={signatureimage} alt="Logo" />
      </Link>
    </a>
  </div>
</div>
</nav> 

    </div>
  </div>
  )
}
