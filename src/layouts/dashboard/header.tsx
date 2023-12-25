import { Drawer } from 'antd';
import { useState } from 'react';
import { useSettings } from '@/store/settingStore';

import Logo from '@/components/logo';
import { IconButton, SvgIcon } from '@/components/icon';

import AccountDropdown from '../_common/account-dropdown';
import LocalePicker from '@/components/locale-picker';
import SearchBar from '../_common/search-bar';
import SettingButton from '../_common/settin-button';
import ProSider from './nav';
import { useThemeToken } from '@/common/theme/hooks';

import { ThemeLayout } from '#/enum';
import { BG_STYLE } from '@/styles/ui';

export default function Header() {
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
              <IconButton onClick={() => setDrawerOpen(true)} className="h-9 w-9 lg:hidden">
                <SvgIcon icon="ic-menu" size="24" />
              </IconButton>
            ) : (
              <Logo />
            )}

            <SearchBar />
          </div>

          <div className="flex">
            <LocalePicker />
            <SettingButton />
            <AccountDropdown />
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
