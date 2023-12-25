import { Drawer } from 'antd';
import { CSSProperties, useState } from 'react';
import { useSettings } from '@/store/settingStore';

import Logo from '@/components/logo';
import { IconButton, SvgIcon } from '@/components/icon';

import AccountDropdown from '../_common/account-dropdown';
import BreadCrumb from '../_common/bread-crumb';
import LocalePicker from '@/components/locale-picker';
import SearchBar from '../_common/search-bar';
import SettingButton from '../_common/settin-button';
import ProSider from './nav';

import { ThemeLayout, ThemeMode } from '#/enum';
import { BG_STYLE } from '@/styles/ui';

type Props = { className?: string; offsetTop?: boolean };

export default function Header({ className, offsetTop = false }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { themeLayout, themeMode } = useSettings();

  const headerStyle: CSSProperties = {
    position: themeLayout === ThemeLayout.Horizontal ? 'relative' : 'absolute',
    borderBottom:
      themeLayout === ThemeLayout.Horizontal ? `1px dashed rgba(145, 158, 171, 0.2)` : '',
    backgroundColor:
      themeMode === ThemeMode.Light ? 'rgba(255, 255, 255, 0.8)' : 'rgba(22, 28, 36, 0.8)',
  };

  return (
    <>
      <header className={`z-20 w-full transition-height ${className}`} style={headerStyle}>
        <div
          className="shadow-2 flex flex-grow items-center justify-between px-4 text-gray backdrop-blur xl:px-6 2xl:px-10"
          style={{
            height: offsetTop ? '64px' : '80px',
          }}
        >
          <div className="flex items-center">
            {/* hidden when screen widht > lg, when click show Sidebar Drawer */}

            {themeLayout !== ThemeLayout.Horizontal ? (
              <IconButton onClick={() => setDrawerOpen(true)} className="h-10 w-10 lg:hidden">
                <SvgIcon icon="ic-menu" size="24" />
              </IconButton>
            ) : (
              <Logo />
            )}
            {/* 面包屑导航 */}
            <div className="hidden md:block">
              <BreadCrumb />
            </div>
          </div>

          <div className="flex">
            <SearchBar />
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
