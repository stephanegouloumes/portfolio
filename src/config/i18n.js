import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '../locale/en'
import fr from '../locale/fr'

i18n.use(initReactI18next).init({
    resources: {
        en,
        fr,
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: '.',
    interpolation: {
        escapeValue: false,
        formatSeparator: ',',
    },
    react: {
        wait: true,
    },
})

export default i18n
