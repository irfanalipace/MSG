import React from "react";
import "./Thanks.css";
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
import heartimage from "../../images/home/thanks-image.png";
const Thanks = () => {
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
        
          <div className="col-md-10">
   <div className="thanks-container-main-dev">
   <div className="thanks-image-layout-data-for-image">
                <img src={heartimage} />
            </div>
            <div className="thanks-heading-data">
                <h3>{t('Thanks for signing up')}</h3>
            </div>
            <div className="dev-space-container-text">
                <span>
                    {t('The route includes help from the site matchmakers')}
                </span>
            </div>
            <div className="account-uriel-gabay">
                <span>
                ovadian@012.net.il {t('Below are your subscription account details. Email welcome we will send the')}
                </span>
            </div>
            <div className='account-uriel-gabay'>
                <span>
                    {t('Account: Uriel Gabay')}
                </span>
            </div>
            <div className='account-uriel-gabay'>
                <span>
                    {t('Subscription level: VIP route subscription for one year')}
                </span>
            </div>
            <div className="button-click-subscribe-thanks">
                <div>
                    <button>{t('Go to the site')}</button>
                    <button>{t('Subscription upgrade')}</button>
                </div>
               
            </div>
   </div>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Thanks;
