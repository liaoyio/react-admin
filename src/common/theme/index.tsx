import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, theme } from 'antd';
import { useSettings } from '@/store/settingStore';

import useLocale from '@/locales/useLocale';
import { customAntdTheme, baseColor, colorPrimarys } from './antd';
import { ThemeMode } from '#/enum';

type Props = { children: React.ReactNode };

export default function AntdConfig({ children }: Props) {
  const charAt = `
     ██╗   ██╗██╗     █████╗ ██████╗ ███╗   ███╗██╗███╗   ██╗
     ╚██╗ ██╔╝██║    ██╔══██╗██╔══██╗████╗ ████║██║████╗  ██║
      ╚████╔╝ ██║    ███████║██║  ██║██╔████╔██║██║██╔██╗ ██║
       ╚██╔╝  ██║    ██╔══██║██║  ██║██║╚██╔╝██║██║██║╚██╗██║
        ██║   ██║    ██║  ██║██████╔╝██║ ╚═╝ ██║██║██║ ╚████║
        ╚═╝   ╚═╝    ╚═╝  ╚═╝╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝
  `;
  console.info(`%c${charAt}`, 'color: #5BE49B');

  const { themeMode, themeColorPresets } = useSettings();
  const { language } = useLocale();

  const algorithm = themeMode === ThemeMode.Light ? theme.defaultAlgorithm : theme.darkAlgorithm;
  const colorPrimary = colorPrimarys[themeColorPresets];

  return (
    <ConfigProvider
      locale={language.antdLocal}
      theme={{
        token: { ...customAntdTheme.token, colorPrimary, ...baseColor[themeMode] },
        components: { ...customAntdTheme.components },
        algorithm,
      }}
    >
      <StyleProvider hashPriority="high">{children}</StyleProvider>
    </ConfigProvider>
  );
}
