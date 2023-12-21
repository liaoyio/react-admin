import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en_US from './lang/en_US';
import zh_CN from './lang/zh_CN';

// learn more: https://github.com/i18next/i18next-browser-languageDetector
i18n
  // 检测用户语言
  .use(LanguageDetector)
  // 将i18n实例传递给react-i18next
  .use(initReactI18next)
  // 初始化 i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // debug: true,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: { translation: en_US },
      zh: { translation: zh_CN },
    },
  });

export default i18n;
export const { t } = i18n;
