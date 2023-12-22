import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, theme } from 'antd';

import { useSettings } from '@/store/settingStore';
import { colorPrimarys, customAntdTheme, baseColor } from '@/common/theme/antd-theme';

import { ThemeMode } from '#/enum';

export function AntdConfigProvider({ children }: React.PropsWithChildren<unknown>) {
  const charAt = `
     ██╗   ██╗██╗     █████╗ ██████╗ ███╗   ███╗██╗███╗   ██╗
     ╚██╗ ██╔╝██║    ██╔══██╗██╔══██╗████╗ ████║██║████╗  ██║
      ╚████╔╝ ██║    ███████║██║  ██║██╔████╔██║██║██╔██╗ ██║
       ╚██╔╝  ██║    ██╔══██║██║  ██║██║╚██╔╝██║██║██║╚██╗██║
        ██║   ██║    ██║  ██║██████╔╝██║ ╚═╝ ██║██║██║ ╚████║
        ╚═╝   ╚═╝    ╚═╝  ╚═╝╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝
  `;
  console.info(`%c${charAt}`, 'color: #5BE49B');

  const settings = useSettings();
  const { themeMode, themeColorPresets } = settings;

  const algorithm = themeMode === ThemeMode.Light ? theme.defaultAlgorithm : theme.darkAlgorithm;

  const colorPrimary = colorPrimarys[themeColorPresets];

  return (
    <ConfigProvider
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
