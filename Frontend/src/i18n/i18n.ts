import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import trFile from "./tr.ts";
import enFile from "./en.ts";

const resources = {
  en: enFile,
  tr: trFile,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
