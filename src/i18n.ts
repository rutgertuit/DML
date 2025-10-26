import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Loads translations from /public/locales
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    debug: true, // Log to console (helpful for development)
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to translation files
    },
  });

export default i18n;