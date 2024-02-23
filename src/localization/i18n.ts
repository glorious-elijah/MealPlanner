/* eslint-disable @typescript-eslint/no-floating-promises */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// English translations
import enTranslation from "./en/translation.json";

// French translations
import frTranslation from "./fr/translation.json";

// Configure i18n
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    fr: {
      translation: frTranslation,
    },
  },
  compatibilityJSON: "v3",
  lng: "en", // Set the default language to English
  fallbackLng: "en", // Fallback to English if translation for the current language is not available
  interpolation: {
    escapeValue: false, // React already escapes the values, so no need for additional escaping
  },
});

export default i18n;
