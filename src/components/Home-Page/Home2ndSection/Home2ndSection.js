import React from 'react'
import './Home2ndSection.css'
import { useTranslation } from "react-i18next";
import videoimage from '../../../images/home/home-video.png'
const Home2ndSection = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  return (
    <div className='Home2nd-Section-page'>
    <div className="container container-page-home-sction-dev">
      <div className="row">
        <div className="col-6">
    <div className='div-pagragrap-home-page-secound-dev'>
    <div className='nd-section-text-home-page-heading'>
            <h4>{t('The site that works for you')}</h4>
            <h3>{t('Even when you sleep')}</h3>
         </div>
         <div className='nd-section-text-home-page-p'>
            <p>{t('Lorem Ipsum is a term for completely meaningless text - sometimes also called demi text or gibberish - and is intended to be placed in design sketches - of brochures, magazines, ads, websites, etc. - instead of the final real text - until there is real text. Why not put it in?')}</p>
         </div>
    </div>
        
        </div>
        <div className="col-6">
    
          <img src={videoimage} alt="Image" className="img-fluid" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home2ndSection