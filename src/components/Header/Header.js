// import React from "react";
// import "./Header.css";
// import { useTranslation } from "react-i18next";
// import engimage from '../../images/header/eng.png'
// import { Link } from "react-router-dom";
// import signatureimage from '../../images/header/header-logo.png'

// const Header = () => {
//   const { t } = useTranslation();
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div>
//       <div className="heart"></div>

//       <div className="fixed-top">
//         <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
//           <div className="nav-header-class container">
//             <div className="headers-buttons-class">
//               <div>
//                 <button className="connection-button-header">
//                   <Link to={`connection`}>{t("connection")}</Link>
//                 </button>
//               </div>
//               <div>
//                 <button className="subscribe-button-header">
//                   <Link to={`/packages`}>{t("subscribe-purchase")}</Link>
//                 </button>
//               </div>
//               <div>
//                 <button
//                   className="english-button-header"
//                   onClick={() => changeLanguage("en")}
//                 >
//                   <img src={engimage} alt="English" /> English
//                 </button>
//               </div>
//             </div>
//             <div>
//               <div>
//                 <ul className="navbar-nav ml-auto">
//                   <li className="nav-item active nav-item-links-style">
//                     <a className="nav-link">
//                       <Link to={`/search-match`}>{t("search")}</Link>
//                       <span className="sr-only">(current)</span>
//                     </a>
//                   </li>
//                   <li className="nav-item nav-item-links-style">
//                     <a className="nav-link">
//                       <Link to={`/contact`}>{t("contact")}</Link>
//                     </a>
//                   </li>
//                   <li className="nav-item nav-item-links-style">
//                     <a className="nav-link">
//                       <Link to={`thanks`}>{t("blog")}</Link>
//                     </a>
//                   </li>
//                   <li className="nav-item nav-item-links-style">
//                     <a className="nav-link">
//                       <Link to={`/content-page`}>{t("enrollment")}</Link>
//                     </a>
//                   </li>
//                   <li className="nav-item nav-item-links-style">
//                     <a className="nav-link">
//                       <Link to={`/profile`}>{t("about")}</Link>
//                     </a>
//                   </li>
//                   <li className="nav-item nav-item-links-style">
//                     <a className="nav-link">
//                       <Link to={`/`}>{t("Home")}</Link>
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link image-link-header-logo">
//                       <Link to={`/`}>
//                         <img src={signatureimage} alt="Logo" />
//                       </Link>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";
import engimage from "../../images/header/eng.png";
import { Link } from "react-router-dom";
import signatureimage from "../../images/header/header-logo.png";
import MobileHeader from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";
const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <>
      {isMobile ? (
        <div className="mobile-component">
          {/* Mobile-specific component */}
          <MobileHeader />
          
        </div>
      ) : (
        <div className="desktop-component">
          {/* Render the DesktopHeader component */}
          <DesktopHeader />
        </div>
      )}
    </>
  );
  
};

export default Header;
