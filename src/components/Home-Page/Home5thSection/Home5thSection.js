import React from 'react'
import { useTranslation } from "react-i18next";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import meetingset1 from "../../../images/home/img1.png";
import './Home5thSection.css'
const Home5thSection = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  
    const smallImages = [
        meetingset1,meetingset1,meetingset1
      ];
  return (
    <div>
        <div style={{textAlign:'center', marginTop:'15px', marginBottom:'22px'}}>
            <div>
                <h4>{t('Join our site members')}</h4>
            </div>
            <div className='row'>
                
                <span>{t('Totally eliminated eXt - sometimes also called text fees or gibberish')}</span>
                <div className='slider-cur'>
                <Carousel>
                <img src={meetingset1}  />
                <img src={meetingset1}  />
                <img src={meetingset1}  />
          <img src={meetingset1}  />
       
    
    </Carousel>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home5thSection