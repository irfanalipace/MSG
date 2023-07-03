import React from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAngleDoubleLeft,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from "react-i18next";
import stockdata from "../../images/home/istock.png";
import imagedata from "../../images/home/content-image.png";
import { Link } from "react-router-dom";
const Profile2 = () => {
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

        {/* <div className="row header-profile-set-image" style={{ marginTop: "17px" }}>
          <div className="col-md-6">
            <div>
              <ul className="inline-flex li-item-style-data-items2-image" >
                <li>
                  <Link>{t('delete account')}</Link>
                </li>
                <li>
                  <Link>{t('disconnection')}</Link>
                </li>
                <li>
                  <Link>{t('privacy')}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="li-item-row-2-data-className inlie-display-my-items-data-style-item-data">
              <ul className="inline-flex  li-item-style-data-items2-image">
                <li>
                  <Link>{t('Private messages')}</Link>
                </li>
                <li>
                  <Link>{t('Change password')}</Link>
                </li>
                <li>
                  <Link>{t('Account Settings')}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="dev-spaxt-angle-dashord-profile dev-set2-profile-image-section">
          <span>
            {" "}
          {t('Home page » Israeli Israeli')}
           
          </span>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div style={{ background: "#80808026" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "11px",
                 
                }}
              >
                <div>
                <button style={{border:'none',background:'none'}}><FontAwesomeIcon icon={faEdit} /></button> 
                </div>
                <div>
                  <span>{t('A description of myself')}</span>
                </div>
              </div>
              <hr></hr>
              <div>
                <div
                  style={{
                    paddingLeft: "11px",
                    textAlign: "right",
                    padding: "11px",
                  }}
                >
                <span>{t('Serious, penitent, orthodox view. Honest, reliable, diligent, values, good heart. Works and sets times for Torah and prayer. Love the name and the Torah. It is not possible for a man without a woman and a woman without a man.')}</span>
                </div>
              </div>
            </div>

            <br></br>
            <div style={{ background: "#80808026" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingLeft: "11px",
                  paddingRight: "11px",
                }}
              >
                <div>
                <button style={{border:'none',background:'none'}}><FontAwesomeIcon icon={faEdit} /></button> 
                </div>
                <div>
                  <span>{t('What am I looking for in my partner?')}</span>
                </div>
              </div>
              <hr></hr>
              <div>
                <div
                  style={{
                    paddingLeft: "11px",
                    textAlign: "right",
                    padding: "11px",
                  }}
                >
                <span>{t('partner')}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="container mein-dev-grid-bar-sction">
              <div className="tab-content" id="pills-tabContent">
                <div className="container grid-class-data-profile-image">
                  <div className="my-gellery-data-photo-image">
                    <span>{t('my gallery')}</span>
                  </div>
                  <div className="row">
                    <div
                      className=" col-md-11 tab-pane fade show active"
                      id="showall"
                      role="tabpanel"
                      aria-labelledby="showall-tab"
                    >
                      <div className="Portfolio">
                        <a href="#!">
                          <img
                            className="card-img"
                            src="http://placehold.it/400x400"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Portfolio">
                        <a href="#!">
                          <img
                            className="card-img"
                            src="http://placehold.it/400x400"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Portfolio">
                        <a href="#!">
                          <img className="card-img" src={stockdata} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className=" col-md-11 tab-pane fade show active"
                      id="showall"
                      role="tabpanel"
                      aria-labelledby="showall-tab"
                    >
                      <div className="Portfolio">
                        <a href="#!">
                          <img
                            className="card-img"
                            src="http://placehold.it/400x400"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Portfolio">
                        <a href="#!">
                          <img
                            className="card-img"
                            src="http://placehold.it/400x400"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="Portfolio">
                        <a href="#!">
                          <img
                            className="card-img"
                            src="http://placehold.it/400x400"
                            alt=""
                          />
                        </a>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop:'22px'}}>
          <div className="col-md-6 col-sm-12">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
       
            </div>
            <div>
             <span>{t('Is there an excess living area?: Yes')}</span>
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          <div className="col-md-6 col-sm-12 ">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
       
    
            </div>
            <div>
            <span>{t('Education: Bachelor degree')}</span>
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          </div>
          <div className="row" >
          <div className="col-md-6 col-sm-12">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
      
    
            </div>
            <div>
              <span> {t('Marriage Chapter 2?: Yes')}</span>
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          <div className="col-md-6 col-sm-12">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
        
            </div>
            <div>
                {t('Body structure: shapely')}
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          </div>
          <div className="row" >
          <div className="col-md-6 col-sm-12">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>

           
       
            <div className="clik-buton-inside-edit-option-class-data-there">
           
            </div>
          
            <div>
              <span>{t('How long have you been divorced?: 7 years')}</span>
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          <div className="col-md-6 col-sm-12">
           <div >
           <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
        
            </div>
            <div>
            <span>{t('Smoker: No')}</span>
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          </div>
          <div className="row" >
          <div className="col-md-6 col-sm-12">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
        
            </div>
            <div>
              <span>{t('Children?: 1')}</span>
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          <div className="col-md-6 col-sm-12">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
       
    
            </div>
            <div>
              {t('Prayer habits: 3')}
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          </div>
          <div className="row" >
          <div className="col-md-6 col-sm-12">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
      
            </div>
            <div>
              <span>{t('Interested in mentoring grooms?: Yes')}</span>
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          <div className="col-md-6 col-sm-12">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
     
            </div>
            <div>
               <span>{t('Background from home: traditional')}</span>
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          </div>
          <div className="row" >
          <div className="col-md-6 col-sm-12">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
     
            </div>
            <div>
            <span>{t('Excess pastime: a trip')}</span>
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          <div className="col-md-6 col-sm-12">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
      
            </div>
            <div>
                <span>{t('Hobbies: studying Torah')}</span>
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          </div>
      </div>
    </div>
  );
};

export default Profile2;
