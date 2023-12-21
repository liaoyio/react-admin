import { ThemeConfig } from 'antd';

export enum ThemeColorPresets {
  Default = 'default',
  Cyan = 'cyan',
  Purple = 'purple',
  Blue = 'blue',
  Orange = 'orange',
  Red = 'red',
}

const customAntdTheme: ThemeConfig = {
  token: {
    colorSuccess: '#22c55e',
    colorWarning: '#ffab00',
    colorError: '#ff5630',
    colorInfo: '#00b8d9',
    colorInfoBg: '#CAFDF5',
    wireframe: false,
    borderRadius: 4,
  },
};

const colorPrimarys: {
  [k in ThemeColorPresets]: string;
} = {
  default: '#00a76f',
  cyan: '#078DEE',
  purple: '#7635DC',
  blue: '#2065D1',
  orange: '#FDA92D',
  red: '#FF3030',
};

export { customAntdTheme, colorPrimarys };
