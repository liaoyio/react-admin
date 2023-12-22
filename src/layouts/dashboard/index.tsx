import { Layout } from 'antd';

import Header from './header';
import Main from './main';
import Nav from './nav';
import NavHorizontal from './nav-horizontal';

import ProgressBar from '@/components/progress-bar';
import { useSettings } from '@/store/settingStore';
import { useThemeToken } from '@/common/theme/hooks';
import { ThemeLayout } from '#/enum';

export default function DashboardLayout() {
  const { colorBgElevated, colorTextBase } = useThemeToken();
  const { themeLayout } = useSettings();
  return (
    <>
      <ProgressBar />
      <Layout className="flex h-screen overflow-hidden">
        {themeLayout !== ThemeLayout.Horizontal ? (
          <div
            className="hidden h-full lg:block"
            style={{
              background: colorBgElevated,
            }}
          >
            <Nav />
          </div>
        ) : null}

        <div
          className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"
          style={{ color: colorTextBase, background: colorBgElevated }}
        >
          <Header />
          {themeLayout === ThemeLayout.Horizontal ? <NavHorizontal /> : null}
          <Main />
        </div>
      </Layout>
    </>
  );
}
