import React from "react";
import { Button } from "@material-ui/core";
import { CheckBox } from "@mui/icons-material";
import "./Enrollment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Enrollment = () => {
  return (
    <div className="custom-background">
      <div className="container container-dev">
      
        <div className="row">
        <div className="col-md-2">
        <div className="social-network-enrollment">
      <ul className="">
        <div className="font-icon-social-icon">
          <li>
            <a className="waves-effect waves-dark" href="#">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </div>
        <div className="font-icon-social-icon">
          <li>
            <a className="waves-effect waves-dark" href="#">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
        </div>
        <div className="font-icon-social-icon">
          <li>
            <a className="waves-effect waves-dark" href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        </div>
        <div className="font-icon-social-icon">
          <li>
            <a className="waves-effect waves-dark" href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </div>
      </ul>
    </div>
    </div>
          <div className="col-md-2">
            <h4>Instructions</h4>
            <p>
              Please fill out the form below to enroll in our program. Make sure
              to provide accurate information.
            </p>
          </div>
          <div className="col-md-7">
            <h3>Form Heading data is here</h3>
            <div></div>
            <form>
              <div className="row">
                <div className="col-md-2">
                  <div className="mb-3">
                    <button className="dve-button-enrollment">click1</button>
                  </div>
                </div>
                <div className="col-md-1">
                  <div className="mb-3">
                    <button className="dve-button2-enrollment">click2</button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                    </div>
                    <input type="text" className="form-control" id="lastName" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="firstName" className="form-label">
                        Email
                      </label>
                    </div>
                    <input type="email" className="form-control" id="email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <div className="mb-3">
                    <button className="dve-button2-enrollment">click2</button>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="mb-3">
                    <button className="dve-button-enrollment">click1</button>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                    </div>
                    <input type="text" className="form-control" id="lastName" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                    </div>
                    <input type="email" className="form-control" id="email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                    />
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                    </div>
                    <input type="text" className="form-control" id="lastName" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                    </div>
                    <input type="email" className="form-control" id="email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                    />
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                    </div>
                    <input type="text" className="form-control" id="lastName" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                    </div>
                    <input type="email" className="form-control" id="email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <div className="mb-3">
                    <button className="dve-button-nav-button">click1</button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <div className="my-button-enrollment">
                      <div>
                        <a>Forget Password</a>
                      </div>
                      <div className="dev-data-section-privacy">
                        {" "}
                        <a>Privacy Policy</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="mb-3">
                    <div className="checkbox-enrollment">
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheckbox"
                      >
                        Check me
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="exampleCheckbox"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
