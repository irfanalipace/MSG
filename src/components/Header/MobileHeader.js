import React,{useState} from 'react'
import './MobileHeader.css'
import { useTranslation } from "react-i18next";
import engimage from "../../images/header/eng.png";
import { Link } from "react-router-dom";
import signatureimage from "../../images/header/header-logo.png";
const MobileHeader = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
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
    <div>
    <header className="header header-desktop-component">
      <nav className="navbar navebar-mobilescreen">
        
        <ul className={`menu-bar-formobile-screen ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
      <li> <Link
        className="english-button-header"
        onClick={() => changeLanguage("en")}
      >
        <img src={engimage} alt="English" /> English
      </Link></li> 
          <li> <Link to={`connection`}>{t("connection")}</Link></li>
          <li>  <Link to={`/packages`}>{t("subscribe-purchase")}</Link></li>
          <li> <Link to={`/search-match`}>{t("search")}</Link></li>
          <li> <Link to={`/contact`}>{t("contact")}</Link></li>
          <li><Link to={`thanks`}>{t("blog")}</Link></li>
          <li> <Link to={`/content-page`}>{t("enrollment")}</Link></li>
          <li> <Link to={`/profile`}>{t("about")}</Link></li>
          <li> <Link to={`/`}>{t("Home")}</Link></li>
        </ul>
        <div
          className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default MobileHeader