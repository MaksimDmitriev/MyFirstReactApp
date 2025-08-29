import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './locales/en/common.json';
import ru from './locales/ru/common.json';

const resources = {
  en: { common: en },
  ru: { common: ru },
};

const deviceLang = RNLocalize.getLocales()?.[0]?.languageCode || 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: deviceLang,
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common', // <-- important so useTranslation() finds your keys
  interpolation: { escapeValue: false },
  returnNull: false,
  debug: true
});

export default i18n;
