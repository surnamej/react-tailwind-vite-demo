// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources for English and Thai
const resources = {
  en: {
    translation: {
      welcome: 'Welcome to Focus Bear',
      description: 'This is an internationalized React application.'
    }
  },
  th: {
    translation: {
      welcome: 'ยินดีต้อนรับสู่ Focus Bear',
      description: 'นี่คือแอปพลิเคชัน React ที่รองรับหลายภาษา'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    }
  });

export default i18n;
