import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';

import { ItemType } from 'antd/es/menu/hooks/useItems';
import { useEffect, useState } from 'react';
import { useLocation, useMatches, useNavigate } from 'react-router-dom';

import Logo from '@/components/logo';
import { getMenuRoutes } from '@/router/utils';
import { ThemeLayout } from '#/enum';
import { useThemeToken } from '@/theme/hooks';
import { useRouteToMenu } from '@/router/hooks';
import { useSettingActions, useSettings } from '@/store/settingStore';
import Color from 'color';

type Props = { closeSideBarDrawer?: () => void };

export default function Nav(props: Props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const matches = useMatches();
  const { colorTextBase, colorBgElevated, colorBorder } = useThemeToken();

  const settings = useSettings();
  const { themeLayout } = settings;
  const { setSettings } = useSettingActions();

  const routeToMenu = useRouteToMenu();

  /** state */
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['']);
  const [menuList, setMenuList] = useState<ItemType[]>([]);
  const [menuMode, setMenuMode] = useState<MenuProps['mode']>('inline');

  useEffect(() => {
    if (themeLayout === ThemeLayout.Vertical) {
      const openKeys = matches
        .filter((match) => match.pathname !== '/')
        .map((match) => match.pathname);
      setOpenKeys(openKeys);
    }
    setSelectedKeys([pathname]);
  }, [pathname, matches, collapsed, themeLayout]);

  useEffect(() => {
    const menuRoutes = getMenuRoutes();
    const menus = routeToMenu(menuRoutes);
    setMenuList(menus);
  }, [routeToMenu]);

  useEffect(() => {
    if (themeLayout === ThemeLayout.Vertical) {
      setCollapsed(false);
      setMenuMode('inline');
    }
    if (themeLayout === ThemeLayout.Mini) {
      setCollapsed(true);
      setMenuMode('inline');
    }
  }, [themeLayout]);

  /** events */
  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey) {
      setOpenKeys(keys);
    } else {
      setOpenKeys([]);
    }
  };

  const onClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key);
    props?.closeSideBarDrawer?.();
  };

  const setThemeLayout = (themeLayout: ThemeLayout) => {
    setSettings({
      ...settings,
      themeLayout,
    });
  };

  const toggleCollapsed = () => {
    if (!collapsed) {
      setThemeLayout(ThemeLayout.Mini);
    } else {
      setThemeLayout(ThemeLayout.Vertical);
    }
    setCollapsed(!collapsed);
  };

  return (
    <div
      className="flex h-full flex-col "
      style={{
        width: collapsed ? '90px' : '260px',
        borderRight: `1px dashed ${Color(colorBorder).alpha(0.6).toString()}`,
      }}
    >
      <div className="relative flex h-20 items-center justify-center py-4">
        {themeLayout === ThemeLayout.Mini ? (
          <Logo className="text-lg" />
        ) : (
          <Logo className="text-4xl" />
        )}

        <button
          onClick={toggleCollapsed}
          className="absolute right-0 top-7 z-50 hidden h-6 w-6 translate-x-1/2 cursor-pointer select-none rounded-full text-center !text-gray lg:block"
          style={{ color: colorTextBase, borderColor: colorTextBase, fontSize: 16 }}
        >
          {collapsed ? <MenuUnfoldOutlined size={20} /> : <MenuFoldOutlined size={20} />}
        </button>
      </div>

      {/* Sidebar Menu  */}
      <div className="h-full overflow-y-scroll">
        <Menu
          mode={menuMode}
          items={menuList}
          className="h-full !border-none"
          defaultOpenKeys={openKeys}
          defaultSelectedKeys={selectedKeys}
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          onClick={onClick}
          style={{ background: colorBgElevated }}
          inlineCollapsed={collapsed}
        />
      </div>
    </div>
  );
}
