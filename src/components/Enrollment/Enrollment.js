import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@material-ui/core";
import { CheckBox } from "@mui/icons-material";
import "./Enrollment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const Enrollment = () => {
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
 
      <div className="container-dev">
        <div className="row">
          <div className="col-md-1">
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
          <div className="col-md-2">
            <h4>Instructions</h4>
            <p>
              Please fill out the form below to enroll in our program. Make sure
              to provide accurate information.
            </p>
          </div>
          <div className="col-md-9">
            <h5 style={{ textAlign: "end" }}>
              {t("..the site that works for you even when you are asleep")}
            </h5>
            <div></div>
            <form>
              <div className="row">
                <div className="col-md-1">
                  <div className="mb-3">
                   
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="mb-3">
                    <div>
                      <lable>{t("Job")}</lable>
                      <button className="dve-button2-enrollment">
                        {t("an employee")}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="email" className="form-label">
                        {t("Email")}
                      </label>
                    </div>
                    <input type="email" className="form-control" id="email" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="lastName" className="form-label">
                        {t("Last Name")}
                      </label>
                    </div>
                    <input type="text" className="form-control" id="lastName" />
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="firstName" className="form-label">
                        {t("First Name")}
                      </label>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <div className="mb-3">
                    <button className="dve-button2-enrollment">
                      {t("Female")}
                    </button>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="mb-3">
                    <div>
                      <div className="position-relative">
                        <div>
                          {" "}
                          <span
                            className="badge position-absolute top-0 start-0"
                            style={{
                              marginTop: "15px",
                              backgroundColor: "transparent",
                            }}
                          >
                            {t("Sex")}
                          </span>
                        </div>
                        <button className="dve-button-enrollment">
                          {t("Male")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="date" className="form-label">
                        {t("Date of birth")}
                      </label>
                    </div>
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      className="form-control"
                      id="firstName"
                      placeholderText="Select a date"
                      dateFormat="yyyy-MM-dd"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="name" className="form-label">
                        {t("personal situation")}
                      </label>
                    </div>
                    <input type="text" className="form-control" id="pv" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="name" className="form-label">
                        {t("religious view")}
                      </label>
                    </div>
                    <input type="text" className="form-control" id="rname" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="height" className="form-label">
                        {t("Height")}
                      </label>
                    </div>
                    <input type="number" className="form-control" id="height" />
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="number" className="form-label">
                        {t("Phone Number")}
                      </label>
                    </div>
                    <input type="number" className="form-control" id="number" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="name" className="form-label">
                        {t("Health Condition")}
                      </label>
                    </div>
                    <input type="text" className="form-control" id="hc" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="name" className="form-label">
                        {t("Hometown")}
                      </label>
                    </div>
                    <input type="text" className="form-control" id="home" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="name" className="form-label">
                        {t("Confirm Password")}
                      </label>
                    </div>
                    <input type="text" className="form-control" id="hometown" />
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="firstName" className="form-label">
                        {t("Password")}
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
                      <label htmlFor="name" className="form-label">
                        {t("What I woulde give up")}
                      </label>
                    </div>
                    <input type="text" className="form-control" id="lastName" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <div className="lable-dev">
                      <label htmlFor="name" className="form-label">
                        {t("Brief Self Description")}
                      </label>
                    </div>
                    <input type="text" className="form-control" id="email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <div className="mb-3">
                    <button className="dve-button-nav-button">
                      {t("enrollment")}
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <div className="my-button-enrollment">
                      <div>
                        <a>{t("Forget Password")}</a>
                      </div>
                      <div className="dev-data-section-privacy">
                        {" "}
                        <a>{t("Privacy Policy")}</a>
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
                        style={{ marginRight: "6px" }}
                      >
                        {t(
                          "Please confirm that you agree to our privacy policy"
                        )}{" "}
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
