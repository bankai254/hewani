import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './en/translation.json'
import translationSW from './sw/translation.json'

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  sw: {
    translation: translationSW,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // initial language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
})

export default i18n
