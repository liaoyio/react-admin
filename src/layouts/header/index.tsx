import { Drawer } from 'antd';
import { useState } from 'react';
import { useSettings } from '@/store/settingStore';

import { AppLocalePicker } from '@/components/app';
import { SvgIcon } from '@/components/icon';

import Sidebar from '../sidebar';
import Settings from './settings';
import UserAvatar from './user-avatar';
import Logo from '@/components/app/logo';

import { ThemeLayout } from '#/enum';
import { BG_STYLE } from '@/styles/ui';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { themeLayout } = useSettings();

  return (
    <>
      <header className="sticky top-0 w-full">
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
            <AppLocalePicker />
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
        <Sidebar closeSideBarDrawer={() => setDrawerOpen(false)} />
      </Drawer>
    </>
  );
}
export default Header;
