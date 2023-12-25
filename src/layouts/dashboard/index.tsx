import { useScroll } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import Color from 'color';

import Header from './header';
import Main from './main';
import Nav from './nav';
import NavHorizontal from './nav-horizontal';

import ProgressBar from '@/components/progress-bar';
import { useSettings } from '@/store/settingStore';
import { useThemeToken } from '@/common/theme/hooks';
import { ThemeLayout } from '#/enum';

export default function DashboardLayout() {
  const { colorBgElevated, colorTextBase, colorBorder } = useThemeToken();

  const { themeLayout } = useSettings();
  const mainEl = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({ container: mainEl });
  const [offsetTop, setOffsetTop] = useState(false);

  const onOffSetTop = useCallback(() => {
    scrollY.on('change', (scrollHeight) => {
      if (scrollHeight > 0) {
        setOffsetTop(true);
      } else {
        setOffsetTop(false);
      }
    });
  }, [scrollY]);

  useEffect(() => {
    onOffSetTop();
  }, [onOffSetTop]);

  const verticalLayout = (
    <>
      <div
        className="hidden h-full lg:block"
        style={{ borderRight: `1px dashed ${Color(colorBorder).alpha(0.6).toString()}` }}
      >
        <Nav />
      </div>

      <div className="relative flex flex-1 flex-col">
        <Header offsetTop={offsetTop} />
        <Main ref={mainEl} />
      </div>
    </>
  );

  const horizontalLayout = (
    <div className="relative flex flex-1 flex-col">
      <Header />
      <NavHorizontal />
      <Main />
    </div>
  );

  const layout = themeLayout !== ThemeLayout.Horizontal ? verticalLayout : horizontalLayout;

  return (
    <>
      <ProgressBar />
      <div
        className="flex h-screen overflow-hidden"
        style={{ color: colorTextBase, background: colorBgElevated }}
      >
        {layout}
      </div>
    </>
  );
}
