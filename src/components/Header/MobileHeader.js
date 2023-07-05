// import React,{useState} from 'react'
// import './MobileHeader.css'
// import { useTranslation } from "react-i18next";
// import engimage from "../../images/header/eng.png";
// import { Link } from "react-router-dom";
// import signatureimage from "../../images/header/header-logo.png";
// const MobileHeader = () => {
//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//       setMobileMenuOpen(!isMobileMenuOpen);
//     };
//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//     const { t } = useTranslation();
//     const [isMenuOpen, setMenuOpen] = useState(false);
//     const { i18n } = useTranslation();
  

  
//     const toggleMenu = () => {
//       setMenuOpen(!isMenuOpen);
//     };
  
//     const changeLanguage = (lng) => {
//       i18n.changeLanguage(lng);
//     };
//   return (
//     <div>
//     <header className="header header-desktop-component">
//       <nav className="navbar navebar-mobilescreen">
        
//         <ul className={`menu-bar-formobile-screen ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
//       <li> <Link
//         className="english-button-header"
//         onClick={() => changeLanguage("en")}
//       >
//         <img src={engimage} alt="English" /> English
//       </Link></li> 
//           <li> <Link to={`connection`}>{t("connection")}</Link></li>
//           <li>  <Link to={`/packages`}>{t("subscribe-purchase")}</Link></li>
//           <li> <Link to={`/search-match`}>{t("search")}</Link></li>
//           <li> <Link to={`/contact`}>{t("contact")}</Link></li>
//           <li><Link to={`thanks`}>{t("blog")}</Link></li>
//           <li> <Link to={`/content-page`}>{t("enrollment")}</Link></li>
//           <li> <Link to={`/profile`}>{t("about")}</Link></li>
//           <li> <Link to={`/`}>{t("Home")}</Link></li>
//         </ul>
//         <div
//           className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`}
//           onClick={toggleMobileMenu}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </nav>
//     </header>
//     </div>
//   )
// }

// export default MobileHeader



import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import engimage from "../../images/header/eng.png";
import './MobileHeader.css'
const headersData = [
  {
    label: "Home",
    href: "/",
  },
  
  {
    label: "Profile",
    href: "/profile",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Enrollment",
    href: "/enrollment",
  },
  {
    label: "Thanks",
    href: "/thanks",
  },
  {
    label: "Search",
    href: "/search-match",
  },
  {
    label: "Message",
    href: "/message",
  },
  {
    label: "Secound Profile",
    href: "/second-profile",
  },
  {
    label: "Content",
    href: "/content-page",
  },
  {
    label: "Package",
    href: "/packages",
  },
  {
    label: "Connection",
    href: "/connection",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function MobileHeader() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  

  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));


  
    
    
    
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{t(label)}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
 

   
      <button
        className="english-button-header"
        style={{marginBottom:'12px'}}
        onClick={() => changeLanguage("en")}
      >
        <img src={engimage} alt="English" className="english-button-mobile-screen" /> English
      </button>
      

    </Typography>
    
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header className="header-desktop-component">
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}