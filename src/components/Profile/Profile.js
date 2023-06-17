import React from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAngleDoubleLeft,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

import stockdata from "../../images/home/istock.png";
import imagedata from "../../images/home/content-image.png";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div>
      <div className=" image-container-profile">
        <img src={imagedata} />
      </div>

      <div className="container image-continer-profile-dev-set-data-image-slider">
        <div className="row">
          <div className="col-md-4">
            <div className="button-dev-section-profile-page">
              <button className="profile-button-page-apple">Click</button>

              <button className="profile-button-page-apple1">Click</button>
            </div>
          </div>

          <div className="col-md-7">
            <div className="mein-dev-profile-page">
              <div>
                <ul className="inline-flex">
                  <li style={{ marginRight: "25px" }}>User-dashboard</li>
                  <li className="userdashoboard-2"> User-dashboard</li>
                </ul>
              </div>

              <span style={{ color: "white" }}>User-dashboard</span>
            </div>
          </div>
          <div className="col-md-1">
            <div className="">
              <span>
                <FontAwesomeIcon
                  icon={faUser}
                  className="profile-user-icon-data-dashbord" style={{color:'darkgrey'}}
                />
              </span>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "17px" }}>
          <div className="col-md-6">
            <div>
              <ul className="inline-flex li-item-style-data-items2-image">
                <li>
                  <Link>Link1</Link>
                </li>
                <li>
                  <Link>Link1</Link>
                </li>
                <li>
                  <Link>Link1</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="li-item-row-2-data-className inlie-display-my-items-data-style-item-data">
              <ul className="inline-flex  li-item-style-data-items2-image">
                <li>
                  <Link>Link1</Link>
                </li>
                <li>
                  <Link>Link1</Link>
                </li>
                <li>
                  <Link>Link1</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="dev-spaxt-angle-dashord-profile">
          <span>
            {" "}
            data profile{" "}
            <FontAwesomeIcon
              icon={faAngleDoubleLeft}
              style={{ fontSize: "12px" }}
            />{" "}
            teaxt event{" "}
          </span>
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-6 col-8">
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
                <div>text</div>
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
                  faucibus nisl faucibus vitae. Ut sit amet ligula non diam
                  rutrum varius vel id libero. Aenean mattis venenatis nulla, a
                  pulvinar augue vehicula eget. Sed eu efficitur enim.
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
                <div>text</div>
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
                  faucibus nisl faucibus vitae. Ut sit amet ligula non diam
                  rutrum varius vel id libero. Aenean mattis venenatis nulla, a
                  pulvinar augue vehicula eget. Sed eu efficitur enim.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-4">
            <div className="container mein-dev-grid-bar-sction">
              <div className="tab-content" id="pills-tabContent">
                <div className="container grid-class-data-profile-image">
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
          <div className="col-md-6 col-sm-6 col-6">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
         <button style={{border:'none',background:'none'}}><FontAwesomeIcon icon={faEdit} /></button> 
            </div>
            <div>
                text
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          <div className="col-md-6 col-sm-6 col-6">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
         <button style={{border:'none',background:'none'}}><FontAwesomeIcon icon={faEdit} /></button> 
    
            </div>
            <div>
                text
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          </div>
          <div className="row" >
          <div className="col-md-6 col-sm-6 col-6">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
         <button style={{border:'none',background:'none'}}><FontAwesomeIcon icon={faEdit} /></button> 
    
            </div>
            <div>
                text
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          <div className="col-md-6 col-sm-6 col-6">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
         <button style={{border:'none',background:'none'}}><FontAwesomeIcon icon={faEdit} /></button> 
    
            </div>
            <div>
                text
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          </div>
          <div className="row" >
          <div className="col-md-6 col-sm-6 col-6">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>

           
         <div>
         <button style={{border:'none',background:'none'}}><FontAwesomeIcon icon={faEdit} /></button> 
    
            </div>
            <div className="clik-buton-inside-edit-option-class-data-there">
            <button>click</button> 
            </div>
            <div className="input-fileds-inside-edit-option-data-dev-class-data-here">
                <input type="text" name='name' placeholder="enter name"/>
            </div>
            <div>
                text
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          <div className="col-md-6 col-sm-6 col-6">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
         <button style={{border:'none',background:'none'}}><FontAwesomeIcon icon={faEdit} /></button> 
            </div>
            <div>
                text
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          </div>
          <div className="row" >
          <div className="col-md-6 col-sm-6 col-6">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
         <button style={{border:'none',background:'none'}}><FontAwesomeIcon icon={faEdit} /></button> 
            </div>
            <div>
                text
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          <div className="col-md-6 col-sm-6 col-6">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
         <button style={{border:'none',background:'none'}}><FontAwesomeIcon icon={faEdit} /></button> 
    
            </div>
            <div>
                text
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          </div>
          <div className="row" >
          <div className="col-md-6 col-sm-6 col-6">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
         <button style={{border:'none',background:'none'}}><FontAwesomeIcon icon={faEdit} /></button> 
            </div>
            <div>
                text
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          <div className="col-md-6 col-sm-6 col-6">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
         <button style={{border:'none',background:'none'}}><FontAwesomeIcon icon={faEdit} /></button> 
            </div>
            <div>
                text
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          </div>
          <div className="row" >
          <div className="col-md-6 col-sm-6 col-6">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
         <button style={{border:'none',background:'none'}}><FontAwesomeIcon icon={faEdit} /></button> 
            </div>
            <div>
                text
            </div>
         </div>
            <hr></hr>
  
           </div>

     
          </div>
          <div className="col-md-6 col-sm-6 col-6">
           <div >
         <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'11px', paddingRight:'11px'}}>
         <div>
         <button style={{border:'none',background:'none'}}><FontAwesomeIcon icon={faEdit} /></button> 
            </div>
            <div>
                text
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

export default Profile;
