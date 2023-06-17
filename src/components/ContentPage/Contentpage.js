import React,{useState} from 'react'
import './Contentpage.css'
import { useTranslation } from "react-i18next";
import Header from '../../components/Header/Header'
import imagedata from '../../images/home/content-image.png'
import image2contentdata from '../../images/home/conten-image2-data.png'
import image2content2 from '../../images/home/cople-image-sectionthree.png'
import imagedolllast from '../../images/home/Untitled-Project-Made-by-Headliner.png'
import HomeFooterInfom from '../Home-Page/HomeFooterInfom/HomeFooterInfom'
import Footer from '../../components/Footer/Footer'
const Contentpage = () => {
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
    <div>
  
        <div className='content-image-page-data'>
            
            <img src={imagedata} />
        </div>
        <div className='container' style={{marginTop:'20px'}}>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-sm-6'>
             <div>
             <div className='content-heading-text-page-content'>
                        <span>{t('Content page')}</span>
                    </div>
                    <div className='content-heading-text-page-content-paragraph'>
                        <span>{t('Lorem-page-text')}</span>
                    </div>
                    <div className='content-heading-text-page-content-paragraph'>
                        <span>{t('Lorem-page-text')}</span>
                    </div>
                    <div className='content-heading-text-page-content-paragraph'>
                        <span>{t('Lorem-page-text')}</span>
                    </div>
                    <div className='content-heading-text-page-content-paragraph'>
                        <span>{t('Lorem-page-text')}</span>
                    </div>
             </div>
                </div>
                <div className='col-md-6 col-lg-6 col-sm-6'>
                    <div className='content-imagesecoundimage'>
                      <img src={image2contentdata} />
                    </div>
                </div>
            </div>
            <div className='row'>
            <div className='col-md-6 col-lg-6 col-sm-6'>
                    <div className='content-imagesecoundimage'>
                      <img src={image2content2} />
                    </div>
                </div>
                <div className='col-md-6 col-lg-6 col-sm-6'>
             <div>
             <div className='content-heading-text-page-content'>
                        <span>{t('Content page')}</span>
                    </div>
                    <div className='content-heading-text-page-content-paragraph'>
                        <span>{t('Lorem-page-text')}</span>
                    </div>
                    <div className='content-heading-text-page-content-paragraph'>
                        <span>{t('Lorem-page-text')}</span>
                    </div>
                    <div className='content-heading-text-page-content-paragraph'>
                        <span>{t('Lorem-page-text')}</span>
                    </div>
                    <div className='content-heading-text-page-content-paragraph'>
                        <span>{t('Lorem-page-text')}</span>
                    </div>
             </div>
                </div>
                
            </div>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-sm-6'>
             <div>
             <div className='content-heading-text-page-content'>
                        <span>{t('Content page')}</span>
                    </div>
                    <div className='content-heading-text-page-content-paragraph'>
                        <span>{t('Lorem-page-text')}</span>
                    </div>
                    <div className='content-heading-text-page-content-paragraph'>
                        <span>{t('Lorem-page-text')}</span>
                    </div>
                    <div className='content-heading-text-page-content-paragraph'>
                        <span>{t('Lorem-page-text')}</span>
                    </div>
                    <div className='content-heading-text-page-content-paragraph'>
                        <span>{t('Lorem-page-text')}</span>
                    </div>
             </div>
                </div>
                <div className='col-md-6 col-lg-6 col-sm-6'>
                    <div className='content-imagesecoundimage'>
                      <img src={imagedolllast} />
                    </div>
                </div>
            </div>
        </div>
      <HomeFooterInfom />
 
    </div>
  )
}
export default Contentpage