import React from 'react'
import './Packages.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Packages = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  return (
    <div className="backgroun-image-data-connection-page-background">

        <div className='container' style={{paddingTop:'78px'}}>
            <div className='main-dev-packegs-data-lable'>
            <div>
            <div className="social-network-enrollment social-network-packeg-dta-social-icon">
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
            <div className='dev-card-packages-dev'>
                <div className='text-card1-page'>
                    <span>{t('introductory subscription')}</span>
                </div>
                <div className='text-depay-inside-card-proll'>
                    <span>{t('Message service for 10 days')}</span>
                </div>
                <div className='span-dev-space-on-card' style={{marginBottom:'20px'}}>
                    <span>
                   {t('Come and enjoy a 10-day introduction to the leading site by matchmakers and professionals and receive 10 days of messages free of charge (not including the matchmaker service)')}
                </span>
                <hr className='hr-line-width' style={{color:'white', marginTop:'27px'}}></hr>
                </div>
                <div className='nst-card-heading'>
                    <span>₪0</span>
                </div>
                <div className='dev-button-packegs-page'>
                <button className="connection-button-header">
          {t("Join now")}
        </button>
      </div>
            </div>
            <div className='dev-card-packages-dev dev-card2-pacges'>
                <div className='text-card1-page'>
                    <span style={{color:'black'}}>{t('Semi-annual track')}</span>
                </div>
                <div className='text-depay-inside-card-proll' style={{backgroundColor: '#f82626'}}>
                    <span style={{color:'white'}}>{t('Full matchmaking service')}</span>
                </div>
                <div className='span-dev-space-on-card'>
                    <span style={{color:'black'}}>
                  {t('The most recommended, semi-annual vip subscription of our matchmakers and consultants is at your service and searches for you while getting to know you in depth and your desires + message service open for a year.')}
                </span>
                <hr className='hr-line-width' style={{color:'black', marginTop:'27px'}}></hr>
                </div>
                <div className='nst-card-heading'>
                    <span style={{color:'black'}}>₪299</span>
                </div>
                <div className='dev-button-packegs-page'>
                <button className="connection-button-header">
                {t("Join now")}
        </button>
      </div>
            </div>
            <div className='dev-card-packages-dev'>
                <div className='text-card1-page'>
                    <span>{t('introductory subscription')}</span>
                </div>
                <div className='text-depay-inside-card-proll'>
                    <span>{t('Message service for 10 days')}</span>
                </div>
                <div className='span-dev-space-on-card' style={{marginBottom:'20px'}}>
                    <span>
                   {t('Come and enjoy a 10-day introduction to the leading site by matchmakers and professionals and receive 10 days of messages free of charge (not including the matchmaker service)')}
                </span>
                <hr className='hr-line-width' style={{color:'white', marginTop:'27px'}}></hr>
                </div>
                <div className='nst-card-heading'>
                    <span>₪0</span>
                </div>
                <div className='dev-button-packegs-page'>
                <button className="connection-button-header">
          {t("Join now")}
        </button>
      </div>
            </div>
            <div className='dev-card-packages-dev'>
                <div className='text-card1-page'>
                    <span>{t('introductory subscription')}</span>
                </div>
                <div className='text-depay-inside-card-proll'>
                    <span>{t('Message service for 10 days')}</span>
                </div>
                <div className='span-dev-space-on-card' style={{marginBottom:'20px'}}>
                    <span>
                   {t('Come and enjoy a 10-day introduction to the leading site by matchmakers and professionals and receive 10 days of messages free of charge (not including the matchmaker service)')}
                </span>
                <hr className='hr-line-width' style={{color:'white', marginTop:'27px'}}></hr>
                </div>
                <div className='nst-card-heading'>
                    <span>₪0</span>
                </div>
                <div className='dev-button-packegs-page'>
                <button className="connection-button-header">
          {t("Join now")}
        </button>
      </div>
            </div>
          
            </div>
        </div>
   
    </div>
  )
}

export default Packages