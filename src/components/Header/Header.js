import React from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";
import engimage from '../../images/header/eng.png'
import { Link } from "react-router-dom";
import signatureimage from '../../images/header/header-logo.png'
const Header = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
        <div className= "heart"> </div>
        
      <div className="fixed-top">
        {/* <header className="topbar">
          <div className=" mx-background-top-linear">
            <div className="row">
              <div className="col-sm-12">
                <ul className="social-network">
                  <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-pinterest"></i></a></li>
                  <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-google-plus"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </header> */}
        <nav className=" navbar-expand-lg navbar-dark mx-background-top-linear">
          <div className="nav-header-class">
            <div className="headers-buttons-class">
              <div>
                <button className="connection-button-header"><Link to={`connection`}>{t("connection")}</Link></button>
              </div>
              <div>
                {" "}
                <button className="subscribe-button-header">
                  {" "}
               <Link to={`/packages`}>{t("subscribe-purchase")}</Link>   
                </button>
              </div>
              <div>
                <button className="english-button-header" onClick={() => changeLanguage("en")}>
                    <img src={engimage} />{' '}{' '}
                    English</button>
              </div>
              <div>
                {/* <button onClick={() => changeLanguage("he")}>עברית</button> */}
              </div>
            </div>
            <div>
              <div>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active nav-item-links-style">
                    <a className="nav-link" href="https://nusasatu.com">
                  <Link to={`/search-match`}>{t('search')}</Link>  
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item nav-item-links-style">
                    <a className="nav-link" >
                  
                   <Link to={`/contact`}>
                   {t('contact')}
                    </Link> 
                    </a>
                  </li>
                  <li className="nav-item nav-item-links-style">
                    <a className="nav-link" href="#">
                  <Link to={`thanks`}>{t('blog')}</Link> 
                    </a>
                  </li>
                  <li className="nav-item nav-item-links-style">
                    <a className="nav-link" href="#">
                   <Link to={`/content-page`}>{t('enrollment')}</Link>
                    </a>
                  </li>
                  <li className="nav-item nav-item-links-style">
                    <a className="nav-link" href="#">
                   <Link to={`/profile`}> {t('about')}</Link>
                    </a>
                  </li>
                  <li className="nav-item nav-item-links-style">
                    <a className="nav-link" href="#">
                   <Link to={`/`}> {t('Home')}</Link>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link image-link-header-logo" href="#">
                    <Link to={`/`}> <img src={signatureimage} /></Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    
    </div>
  );
};

export default Header;
