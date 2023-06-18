import React from 'react'
import './ManInformation.css'
import manimage from '../../../images/home/man.png'
import { useTranslation } from "react-i18next";
export const ManInformation = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  return (
    <div>
        <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='man-image-data-flow-image'>
                    <img src={manimage} />
                </div>
            </div>
            <div className='col-md-6'>
                <div style={{padding:'38px'}}>
                    <div style={{textAlign:'end'}}>
                        <h2 style={{fontSize:'25px'}}>{t('?How are we different from others?')}</h2>
                    </div >
                    <div style={{textAlign:'end'}}>
                        <span>{t('paragraph-home-page-section3')}</span>
                    </div>
                  <div className='diev-button-man-information-data'>
                  <div>
                        <button style={{marginRight:'24px'}}>{t('connection')}</button>
                    </div>
                    <div>
                        <button style={{background:'transparent', border:'1px solid grey', color:'black'}}>{t('enrollment')}</button>
                    </div>
                  </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
