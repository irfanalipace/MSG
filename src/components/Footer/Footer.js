import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import './Footer.css'
import { useTranslation } from "react-i18next";
import imagelogoheader from "../../images/header/header-logo.png";
const Footer = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  return (
    <div>
        <footer className="bg-dark text-light">
  <div className="container py-4">
<div className='row'>
<div className='col-md-7'>
<div style={{display:'flex', justifyContent:'end'}}>
<h4 className='links-footer-heading'>{t('Links')}</h4>
</div>
</div>

<div className='col-md-4'>
<h3 className='footer-text-mession-line'>{t('Your match is our mission')}</h3>
</div>
<div className='col-md-1'>
<div>
    <img src={imagelogoheader} className='footer-logo-image-style'/>
</div>
</div>
</div>
<div className='row'>
<div className='col-md-7'>
<hr></hr>
</div>

</div>
    <div className="row">
      <div className="col-md-3">
      
        <ul className="list-unstyled">
          <li><a href="#">{t('Weading Links')}</a></li>
          <li><a href="#">{t('Dating for religious nationals')}</a></li>
          <li><a href="#">{t('Dating for religious people chapter 2')}</a></li>
          <li><a href="#">{t('Dating for the religious sector')}</a></li>
          <li><a href="#"> {t('Tips patner')}</a></li>
        </ul>
      </div>
      <div className="col-md-3">
      
        <ul className="list-unstyled">
          <li><a href="#">{t('In this ring is dating for the religious')}</a></li>
          <li><a href="#">{t('Religious dating')}</a></li>
          <li><a href="#">{t('Religious dating online')}</a></li>
          <li><a href="#">{t('Dating for religious and traditionalists')}</a></li>
          <li><a href="#">{t('Free religious dating')}</a></li>
        </ul>
      </div>
      <div className="col-md-3">
       
        <ul className="list-unstyled">
          <li><a href="#">{t('User')}</a></li>
          <li><a href="#">{t('Inovice')}</a></li>
          <li><a href="#">{t('Password')}</a></li>
          <li><a href="#">{t('Output')}</a></li>
        <li><a href="#">{t('Accessibility statement')}</a></li>
        </ul>
      </div>
      <div className="col-md-2">
     
        <ul className="list-unstyled">
          <li><a href="#">{t('Anyone who helps matchmaking is a partner to the Holy One, blessed be He')}</a></li>
         
        </ul>
      </div>
      <div className="col-md-1">
      <div className="">
              <ul className="footer-social-footer">
           
                  <li>
                    <a className="waves-effect waves-dark" href="#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
              
                  <li>
                    <a className="waves-effect waves-dark" href="#">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                
               
                  <li>
                    <a className="waves-effect waves-dark" href="#">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
               
              </ul>
            </div>
    </div>
    </div>
  
   
  </div>
</footer>

    </div>
  )
}

export default Footer