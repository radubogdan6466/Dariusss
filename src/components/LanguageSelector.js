import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ro from "./flags/ro.svg";
import en from "./flags/en.svg";
import it from "./flags/it.svg";

const LANGUAGES = [
  { code: "ro", label: "Română", flag: ro },
  { code: "en", label: "English", flag: en },
  { code: "it", label: "Italiano", flag: it },
];

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setAnchorEl(null);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={(e) => setAnchorEl(e.currentTarget)}>
        <img
          src={
            LANGUAGES.find((lang) => lang.code === i18n.language)?.flag || ro
          }
          alt="Flag"
          width="30"
          height="30"
          style={{ borderRadius: "50%" }}
        />
      </button>
      {anchorEl && (
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            onClick={() => setAnchorEl(null)}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            {LANGUAGES.map((lang) => (
              <div
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={lang.flag}
                  alt={`${lang.label} Flag`}
                  width="30"
                  height="30"
                  style={{ borderRadius: "50%" }}
                />
                <span style={{ paddingLeft: "8px" }}>
                  {t(`languageSelector.${lang.code}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
