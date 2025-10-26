import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

// Import translations directly for better reliability
import enTranslation from './locales/en/translation.json';
import nlTranslation from './locales/nl/translation.json';

const resources = {
  en: { translation: enTranslation },
  nl: { translation: nlTranslation }
};

i18n
  .use(HttpBackend) // Keep for fallback
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    resources, // Use imported resources primarily
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/translation.json`,
    },
  });

export default i18n;