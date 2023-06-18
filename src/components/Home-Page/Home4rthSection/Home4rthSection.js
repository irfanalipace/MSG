import React from 'react'
import './Home4rthSection.css'
import { useTranslation } from "react-i18next";
import comp from '../../../images/home/component.png'
const Home4rthSection = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  return (
    <div style={{background:'#ff5b5b', textAlign:'center', padding:'22px'}}>
    <div className='trenditional-home-page'>
    <span>{t('The leading dating site for religious and traditionalists')}</span>
    </div>
    <div className='trenditional-home-page1'>
        <span>{t('Join tens of thousands of success stories!')}</span>
    </div>
    <div>
        <img src={comp} alt='' style={{maxWidth:'100%'}}/>
    </div>
    <div className='diev-button-man-information-data'>
                
                    <div>
                        <button style={{background:'white', border:'1px solid grey', color:'black'}}>{t('enrollment')}</button>
                    </div>
                    <div>
                        <button style={{marginRight:'24px'}}>{t('connection')}</button>
                    </div>
                  </div>
    </div>
  )
}

export default Home4rthSection