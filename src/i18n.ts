import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          current: 'Current',
          upcoming: 'Upcoming',
          past: 'Past',
        },
      },
      ru: {
        translation: {
          current: 'Текущие',
          upcoming: 'Будущие',
          past: 'Прошлые',
        },
      },
      uz: {
        translation: {
          current: 'Hozirgi',
          upcoming: 'Kevatkan',
          past: 'Otkan',
        },
      },
    },
  });
