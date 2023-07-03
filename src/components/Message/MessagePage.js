import React from "react";
import "./MessagePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faThumbsUp,faVolumeOff,faBeer,faFrown    } from '@fortawesome/free-solid-svg-icons';
import {
  faUser,
  faAngleDoubleLeft,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import stockdata from "../../images/home/istock.png";
import imagedata from "../../images/home/content-image.png";
import { Link } from "react-router-dom";
import { Message } from "@mui/icons-material";
const MessagePage = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
    <div className="row">
     <div className="col-lg-12">
       <div className="image-container-profile">
         <img src={imagedata} />
       </div>
     </div>
   </div>

   <div className="container image-continer-profile-dev-set-data-image-slider container-profile2-sction-image">
     <div className="row">
       <div className="col-md-4">
         <div className="button-dev-section-profile-page">
           <button className="profile-button-page-apple">{t('Connected')}</button>

           <FontAwesomeIcon icon={faThumbsUp} aria-hidden="true" className="profile2-thumb-image"/>
         </div>
       </div>

       <div className="col-md-7">
         <div className="mein-dev-profile-page">
           <div>
             <ul className="inline-flex">
               <li style={{ marginRight: "25px" }}>{t('Connected')}</li>
               <li className="userdashoboard-2"> {t('Israel is an Israeli')}</li>
             </ul>
           </div>

           <span style={{ color: "white" }}>{t('38 years old, Petah Tikva')}</span>
         </div>
       </div>
       <div className="col-md-1">
         <div className="profile-imaga-data-show-hide">
           <span>
             <FontAwesomeIcon
               icon={faUser}
               className="profile-user-icon-data-dashbord" style={{color:'darkgrey'}}
             />
           </span>
         </div>
       </div>
     </div>

  
     <div className="dev-spaxt-angle-dashord-profile dev-set2-profile-image-section">
       <span>
         {" "}
       {t('Home page » Israeli Israeli')}
        
       </span>

     
     </div>
    
    <div className="container container-message-data-area-sold">
    <div className="row">
    <div className="col-md-6">
 <div style={{margin:'12px'}}> 
 <span style={{marginRight:'16px'}} className="ferveting-dev-section-agert ferveting-dev-section-agert-display-nont">   <FontAwesomeIcon icon={faBeer} aria-hidden="true" /></span>

<span className="ferveting-dev-section-agert-display-nont"> <FontAwesomeIcon icon={faVolumeOff} aria-hidden="true" /></span>
 </div>
 </div>
<div className="col-md-6">
<div className="profile-wih-image">
 
 <h4>{t('Israel is an Israeli')}</h4>

 
<span>
        <FontAwesomeIcon
          icon={faUser}
          className="profile-user-icon-data-dashbord profile-data-dashboard-secound-image-profile" style={{color:'darkgrey'}}
        />
      </span>
      
</div>
</div>
    </div>
  
 


    <div>
    
    </div>
    </div>
    <div className="container message-section-container-dev">
    <div className="row">
    <div className="col-md-12">
    <div className="dev-section-areating-gelling">

      <div>
        <hr></hr>
        <div className="container-message-type-data">
         <div>
         <button className="connection-button-header connection-button-message-packege-data">
      {t("Send a message")}
      </button>
          <span>  <FontAwesomeIcon icon={faFrown} aria-hidden="true" /></span>
         </div>
         <div>
          <span>{t('...write a message')}</span>
         </div>
        </div>
      </div>
    </div>
    </div>
   </div>
    </div>
   </div>
 </div>
  );
};

export default MessagePage;
