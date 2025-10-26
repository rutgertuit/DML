import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations directly for better reliability
import enTranslation from './locales/en/translation.json';
import nlTranslation from './locales/nl/translation.json';

const resources = {
  en: { translation: enTranslation },
  nl: { translation: nlTranslation }
};

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false, // Disable debug in production
    resources, // Use imported resources only
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;