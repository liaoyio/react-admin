import { Drawer } from 'antd';
import { useState } from 'react';
import { useSettings } from '@/store/settingStore';

import { LocalePicker } from '@/components/app';
import { SvgIcon } from '@/components/icon';

import Settings from './settings';
import UserAvatar from './user-avatar';
import ProSider from '../sidebar';
import Logo from '@/components/app/logo';
import { useThemeToken } from '@/common/theme/hooks';

import { ThemeLayout } from '#/enum';
import { BG_STYLE } from '@/styles/ui';

export default function ProHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { themeLayout } = useSettings();
  const { colorBgElevated } = useThemeToken();

  return (
    <>
      <header className="bg-white sticky top-0 h-20 w-full" style={{ background: colorBgElevated }}>
        <div className="shadow-2 flex flex-grow items-center justify-between px-4 py-4 text-gray md:px-6 2xl:px-11">
          <div className="flex items-center">
            {/* hidden when screen widht > lg, when click show Sidebar Drawer */}

            {themeLayout !== ThemeLayout.Horizontal ? (
              <button
                onClick={() => setDrawerOpen(true)}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full hover:bg-hover lg:hidden"
              >
                <SvgIcon icon="ic-menu" size="24" />
              </button>
            ) : (
              <Logo className="mr-4 h-10 w-10" />
            )}

            <button className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full hover:bg-hover">
              <SvgIcon icon="ic-search" size="20" />
            </button>
            <span className="flex h-6 cursor-pointer items-center justify-center rounded-md bg-hover px-2 py-0 text-xs font-bold">
              ⌘K
            </span>
          </div>

          <div className="flex">
            <LocalePicker />
            <Settings />
            <UserAvatar />
          </div>
        </div>
      </header>
      <Drawer
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        closeIcon={false}
        styles={{ body: { padding: 0 }, header: { display: 'none' } }}
        style={BG_STYLE}
        width="auto"
      >
        <ProSider closeSideBarDrawer={() => setDrawerOpen(false)} />
      </Drawer>
    </>
  );
}
