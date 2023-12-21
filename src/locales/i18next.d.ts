import 'i18next';
import zh from './lang/zh_CN';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'zh';
    resources: {
      zh: typeof zh;
    };
  }
}
