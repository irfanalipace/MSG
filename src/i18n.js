// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationES from './locales/he.json';

// Add more language translations as needed

const resources = {
  en: {
    translation: translationEN,
  },
  he: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'he', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
