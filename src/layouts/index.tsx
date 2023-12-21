import { theme } from 'antd';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import ProContent from './content';
import Header from './header';
import Sidebar from './sidebar';
import TopMenu from './sidebar/top-inline-menu';
import { Progress } from '@/components/app';

import { useSettings } from '@/store/settingStore';
import { ThemeLayout } from '#/enum';

export default function BasicLayout() {
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();

  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();

  const { themeLayout } = useSettings();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 50);
    return () => setIsLoading(true);
  }, [pathname]);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <>
      <Progress isAnimating={isLoading} />
      <div
        className="flex h-screen overflow-hidden"
        style={{ background: colorBgBase, color: colorTextBase }}
      >
        {themeLayout !== ThemeLayout.Horizontal ? (
          <div className="hidden lg:block">
            <Sidebar />
          </div>
        ) : null}

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header />
          {themeLayout === ThemeLayout.Horizontal ? <TopMenu /> : null}
          <ProContent />
        </div>
      </div>
    </>
  );
}
