import { Layout, theme } from 'antd';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import ProContent from './content';
import ProHeader from './header';
import ProSider from './sidebar';
import TopMenu from './sidebar/top-inline-menu';
import { ProgressBar } from '@/components/app';

import { useSettings } from '@/store/settingStore';
import { ThemeLayout } from '#/enum';

export default function BasicLayout() {
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();

  const {
    token: { colorBgElevated, colorTextBase },
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
      <ProgressBar />
      <Layout className="flex h-screen overflow-hidden">
        {themeLayout !== ThemeLayout.Horizontal ? (
          <div
            className="hidden h-full lg:block"
            style={{
              background: colorBgElevated,
            }}
          >
            <ProSider />
          </div>
        ) : null}

        <div
          className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"
          style={{ color: colorTextBase, background: colorBgElevated }}
        >
          <ProHeader />
          {themeLayout === ThemeLayout.Horizontal ? <TopMenu /> : null}
          <ProContent />
        </div>
      </Layout>
    </>
  );
}
