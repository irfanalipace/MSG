import React,{useState} from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";
import contactimage from '../../images/home/contact-page-image.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faWhatsapp,
    faInstagram,
    
  } from "@fortawesome/free-brands-svg-icons";
  import { faFax } from "@fortawesome/free-solid-svg-icons";
  import { faEnvelope,faPhone } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Contact = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
    const [selectedDate, setSelectedDate] = useState(null);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  return (
  <div className="backgroun-image-data-connection-page-background">
  
      <div className="contact-container">
      <div className="contact-header">
        <div className="container contact-data-image-cotact-container ">
          <div className="row">
            <div className="col-lg-2 col-md-2">
            <div className="social-network-contact-page-dtyel ">
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
            <div className="col-lg-6">
              <form className="contact-form-space">
               <div className="contact-form-heading-contact">
               <h3 >{t('contact')}</h3>
               </div>
                <div className="row">
                  <div className="col-md-5 col-lg-5 col-sm-6">
                    <div className="form-group text-group-input-contact">
                      <input
                        type="email"
                        className="form-control contact-field"
                        id="email"
                        name="email"
                        placeholder={t('Email')}
                        style={{
                          fontFamily: "Inter",

                          fontSize: "14px",

                          color: "#999999",
                       textAlign:'end',
                          paddingBottom: "12px",
                        }}
                      />
                    </div>
                    <div className="form-group text-group-input-contact">
                      <input
                        type="text"
                        className="form-control contact-field"
                        id="email"
                        name="email"
                        placeholder={t('message subject')}
                       
                        style={{
                          fontFamily: "Inter",

                          fontSize: "14px",

                          color: "#999999",
                         textAlign:'end',
                          paddingBottom: "12px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-3 col-sm-3">
                    <div className="form-group text-group-input-contact">
                      <input
                        type="text"
                        className="form-control contact-field"
                        id="name"
                        name="name"
                        placeholder={t('Full Name')}
                        style={{
                          fontFamily: "Inter",

                          fontSize: "14px",

                          color: "#999999",
                          textAlign:'end',
                          paddingBottom: "12px",
                        }}
                      />
                    </div>
                    <div className="form-group text-group-input-contact">
                      <input
                        type="text"
                        className="form-control contact-field"
                        id="name"
                        name="name"
                        placeholder={t('Phone Number')}
                        style={{
                          fontFamily: "Inter",

                          fontSize: "14px",

                          color: "#999999",
                       textAlign:'end',
                          paddingBottom: "12px",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10">
                    <div className="form-group text-group-input-contact-contact">
                      <textarea
                        className="form-control contact-field  contact-field-commits"
                        id="message"
                        name="message"
                        rows="5"
                      
                        style={{
                          fontFamily: "Inter",
                          paddingTop: "15px",
                          fontSize: "14px",

                          color: "#999999",
                         
                        }}
                      ></textarea>
                      <div className="dve-button-contact-page">
                      <button >
                      {t("send a message")}
                    </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
             <div>
             <img src={contactimage} className="image-fluid-contact" alt="Image" />
                </div>
            </div>
          </div>
          <div className="row">
           <div className="col-md-7 col-lg-7 col-sm-12">
           <div className="social-network-social-icon-contact">
              <ul className="display-flex-data-contaent-area display-flex-data-contaent-area-social-icon-area-srcoll">
            
                
              <li>
                  <span>050-000-0000</span>
                    <a className="waves-effect waves-dark" href="#">
                    <FontAwesomeIcon icon={faFax} />
                    </a>
                  </li>
               
               
                  <li>
                  <span>050-000-0000</span>
                    <a className="waves-effect waves-dark" href="#">
                      <FontAwesomeIcon icon={faPhone} />
                    </a>
                  </li>
              
                     
                  <li>
                  <span>support@itr.co.il</span>
                    <a className="waves-effect waves-dark" href="#">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </li>
                
              </ul>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
  );
};

export default Contact;
