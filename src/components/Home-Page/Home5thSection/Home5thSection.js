import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import meetingset1 from '../../../images/home/img1.png';
import meetingset2 from '../../../images/home/img2.png';
import meetingset3 from '../../../images/home/img3.png';
import meetingset4 from '../../../images/home/img4.png';
import meetingset5 from '../../../images/home/img5.png';
import meetingset6 from '../../../images/home/img6.png';
import './Home5thSection.css';

const Home5thSection = () => {
  const { t, i18n } = useTranslation();

  const smallImages = [meetingset1, meetingset2, meetingset3,meetingset4, meetingset1, meetingset6,meetingset5];

  return (
    <div>
    <div style={{ textAlign: 'center', marginTop: '15px', marginBottom: '22px' }}>
      <div>
        <h4>{t('Join our site members')}</h4>
      </div>
      <div className='row'>
        <span>{t('Totally eliminated eXt - sometimes also called text fees or gibberish')}</span>
        <div className='scroller-container scroller-image-insectionfiver-image'>
          <div className='scroller'>
            {smallImages.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>

        <div className='subscribe-button-header-home-page-section-last'>
                {" "}
                <button >
                  {" "}
                  {t("subscribe-purchase")}
                </button>
              </div>
      </div>
    </div>
  </div>
  );
};

export default Home5thSection;
