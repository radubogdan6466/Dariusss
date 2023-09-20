import React, { useRef } from "react";
import "../../App.css";
import logo from "../../logo.svg";
import LanguageSelector from "../LanguageSelector";
import { useTranslation } from "react-i18next";
import { FaPeopleCarry, FaPaintRoller } from "react-icons/fa";
import { AiTwotoneThunderbolt } from "react-icons/ai";
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
            <a onClick={scrollToContact} style={{ cursor: "pointer" }}>
              {t("homePage.contact")}
            </a>
          </li>
        </ul>
        <div className="spacer"></div>
        <LanguageSelector />
      </div>

      <div className="content">
        <h1>{t("homePage.homeTitle")}</h1>
        <p>{t("homePage.description")}</p>
        <div className="works">
          <h2>{t("homePage.works")}</h2>
          <div>
            <button className="buton" onClick={scrollToTransporti}>
              <div className="button-content">
                <FaPeopleCarry
                  style={{
                    marginBottom: "5px",
                    color: "green",
                    fontSize: "2em",
                  }}
                />
                {t("homePage.transporter")}
              </div>
            </button>
            <button className="buton" onClick={scrollToImbianchino}>
              <div className="button-content">
                <FaPaintRoller
                  style={{
                    marginBottom: "5px",
                    color: "green",
                    fontSize: "2em",
                  }}
                />
                {t("homePage.paint")}
              </div>
            </button>
            <button className="buton" onClick={scrollToElettricista}>
              <div className="button-content">
                <AiTwotoneThunderbolt
                  style={{
                    marginBottom: "5px",
                    color: "green",
                    fontSize: "2em",
                  }}
                />
                {t("homePage.flash")}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
