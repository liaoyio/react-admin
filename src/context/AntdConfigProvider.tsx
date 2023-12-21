import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';

import { theme } from '@/common/theme/antd-theme';

export function AntdConfigProvider({ children }: React.PropsWithChildren<unknown>) {
  return (
    <ConfigProvider theme={theme}>
      <StyleProvider hashPriority="high">{children}</StyleProvider>
    </ConfigProvider>
  );
}
