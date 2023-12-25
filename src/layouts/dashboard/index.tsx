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
      <div
        className="flex h-screen overflow-hidden"
        style={{ color: colorTextBase, background: colorBgElevated }}
      >
        {/* Sidebar Start*/}
        {themeLayout !== ThemeLayout.Horizontal ? (
          <div
            className="hidden h-full lg:block"
            style={{ borderRight: '1px dashed rgba(145, 158, 171, 0.2)' }}
          >
            <Nav />
          </div>
        ) : null}

        {/* Content Area Start  */}
        <div className="flex flex-1 flex-col">
          <Header />
          {themeLayout === ThemeLayout.Horizontal ? <NavHorizontal /> : null}
          <Main />
        </div>
      </div>
    </>
  );
}
