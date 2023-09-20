import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../src/components/language/en.json";
import ro from "../src/components/language/ro.json";
import it from "../src/components/language/it.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ro: {
      translation: ro,
    },
    it: {
      translation: it,
    },
  },
  lng: localStorage.getItem("language") || "it",
  fallbackLng: "it",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
