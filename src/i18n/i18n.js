import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import enGB from './locales/en-GB';
import es from './locales/es';
import fr from './locales/fr';
import de from './locales/de';
import ar from './locales/ar';
import zh from './locales/zh';

i18n.use(initReactI18next).init({
  resources: {
    'en-US': { translation: en },
    'en-GB': { translation: enGB },
    'es-ES': { translation: es },
    'fr-FR': { translation: fr },
    'de-DE': { translation: de },
    'ar-AE': { translation: ar },
    'zh-CN': { translation: zh },
  },
  lng: 'en-US',
  fallbackLng: 'en-US',
  interpolation: { escapeValue: false },
});

export default i18n;
