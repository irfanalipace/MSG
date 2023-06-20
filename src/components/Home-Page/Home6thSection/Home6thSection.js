import React from "react";
import "./Home6thSection.css";
import Componentimg1 from "../../../images/home/1.png";
import Componentimg2 from "../../../images/home/2.png";
import Componentimg3 from "../../../images/home/3.png";
import Componentimg4 from "../../../images/home/4.png";
import Componenthert from "../../../images/home/hert-presented-image.png";
import wineimage1 from "../../../images/home/wine1.png";
import wineimage2 from "../../../images/home/wine2.png";
import { useTranslation } from "react-i18next";
const Home6thSection = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div style={{background:'#dbd5d5'}}>
      <div className="container" style={{ padding: "10px" }}>
        <div class="row">
          <div class="col-6">
            <div class="top-image-with-image-data">
              <div className="image-dev-sectionfeth-image">
                <img src={Componentimg1} alt="Image 1" />
                <div className="image-home-dev-space-data-scrolling">
                  <span>{t("Wedding matches")}</span>
                </div>
                <div className="dev-span-text-set-space-home">
                  <span>
                    {t(
                      "If the relevant text does not yet exist in the design sketch phase, it is not recommended to place other real text. The reason is that when presenting"
                    )}
                  </span>
                </div>
              </div>
              <div className="image-dev-sectionfeth-image">
                <img src={Componentimg3} alt="Image 1" />
                <div className="image-home-dev-space-data-scrolling">
                  <span>{t("Dating for religious people chapter 2")}</span>
                </div>
                <div className="dev-span-text-set-space-home">
                  <span>
                    {t(
                      "If the relevant text does not yet exist in the design sketch phase, it is not recommended to place other real text. The reason is that when presenting"
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div class="top-image-with-image-data">
              <div className="image-dev-sectionfeth-image">
                <img src={Componentimg2} alt="Image 1" />
                <div className="image-home-dev-space-data-scrolling">
                  <span>{t("Dating for religious people chapter 2")}</span>
                </div>
                <div className="dev-span-text-set-space-home">
                  <span>
                    {t(
                      "If the relevant text does not yet exist in the design sketch phase, it is not recommended to place other real text. The reason is that when presenting"
                    )}
                  </span>
                </div>
              </div>
              <div className="image-dev-sectionfeth-image">
                <img src={Componentimg4} alt="Image 1" />
                <div className="image-home-dev-space-data-scrolling">
                  <span>{t("Religious dating online")}</span>
                </div>
                <div className="dev-span-text-set-space-home">
                  <span>
                    {t(
                      "If the relevant text does not yet exist in the design sketch phase, it is not recommended to place other real text. The reason is that when presenting"
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="image-home-dev-space-data-scrolling">
              <div>
                <h4>{t('our blog')}</h4>
              </div>
              <div className="home-last-dev-section-dev-trreing">
                <span>{t('Lorem Ipsum is a term for completely meaningless text - sometimes also called demi text or gibberish - and is intended to be placed in design sketches - of brochures, magazines, ads, websites, etc. - instead of the final real text - until there is real text. Why not put it in?')}</span>
              </div>

              <div className='subscribe-button-header-home-page-section-last'>
                {" "}
                <button >
                  {" "}
                  {t("subscribe-purchase")}
                </button>
              </div>
            </div>
            <div className="image-home-dev-space-data-scrolling">
  <div className="backgroung-image-dat-setin-glasses">
    <div className="image-container-glassespdata">
      <img src={wineimage1} className="wine-image" />
      <img src={wineimage2} className="wine-image" />
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home6thSection;
