import React, { useRef } from "react";
import "../../App.css";
import logo from "../../logo.svg";
import LanguageSelector from "../LanguageSelector";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const scrollToImbianchino = () => {
    const imbianchinoElement = document.getElementById("imbianchino");
    imbianchinoElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToElettricista = () => {
    const elettricistaElement = document.getElementById("elettricista");
    elettricistaElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTransporti = () => {
    const transportiElement = document.getElementById("transporti");
    transportiElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    contactElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="homeComponent">
      <div className="navbar">
        <ul>
          {/** <li>
            <a href="/">{t("homePage.home")}</a>
          </li>
          <li>
            <a href="#">{t("homePage.about")}</a>
          </li> */}

          <li>
            <a href="#" onClick={scrollToContact}>
              {t("homePage.contact")}
            </a>
          </li>
        </ul>
        <LanguageSelector />
      </div>

      <div className="content">
        <h1>{t("homePage.homeTitle")}</h1>
        <p>{t("homePage.description")}</p>
        <div className="works">
          <h2>{t("homePage.works")}</h2>
          <div>
            <button className="buton" onClick={scrollToTransporti}>
              {t("homePage.transporter")}
            </button>
            <button className="buton" onClick={scrollToImbianchino}>
              {t("homePage.paint")}
            </button>
            <button className="buton" onClick={scrollToElettricista}>
              {t("homePage.flash")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
