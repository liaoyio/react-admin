import { Menu, MenuProps } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { useCallback, useState, useEffect, CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useMatches, useLocation } from 'react-router-dom';
import { useThemeToken } from '@/common/theme/hooks';
import { SvgIcon } from '@/components/icon';

import { getMenuRoutes } from '@/router/menus';
import { AppRouteObject } from '#/router';

/** layout 布局隐藏左侧竖向(列)菜单栏时，顶部显示横向(行)菜单栏 */
export default function NavHorizontal() {
  const navigate = useNavigate();
  const matches = useMatches();
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const { colorBgElevated } = useThemeToken();

  // router -> menu
  const routeToMenu = useCallback(
    (items: AppRouteObject[]) => {
      return items.map((item) => {
        const menuItem: any = {};
        const { meta, children } = item;
        if (meta) {
          const { key, title, icon } = meta;
          menuItem.key = key;
          menuItem.label = t(title as any);
          if (icon) {
            if (typeof icon === 'string') {
              menuItem.icon = (
                <SvgIcon icon={icon} className="ant-menu-item-icon mr-2" size="24px" />
              );
            }
            menuItem.icon = icon;
          }
        }
        if (children) {
          menuItem.children = routeToMenu(children);
        }
        return menuItem;
      });
    },
    [t],
  );

  /** state */
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['']);
  const [menuList, setMenuList] = useState<ItemType[]>([]);

  useEffect(() => {
    setSelectedKeys([pathname]);
  }, [pathname, matches]);

  useEffect(() => {
    const menuRoutes = getMenuRoutes();
    const menus = routeToMenu(menuRoutes);
    setMenuList(menus);
  }, [routeToMenu]);

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
  };

  const menuStyle: CSSProperties = {
    background: colorBgElevated,
  };
  const shadowStyle: CSSProperties = {
    margin: 'auto',
    height: '24px',
    borderRadius: '50%',
    opacity: 0.48,
    width: 'calc(100% - 48px)',
    boxShadow: `#919eab29 0px 8px 16px 0px`,
  };

  return (
    <div className="relative mx-6">
      <Menu
        mode="horizontal"
        items={menuList}
        className="!border-none"
        defaultOpenKeys={openKeys}
        defaultSelectedKeys={selectedKeys}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={onClick}
        style={menuStyle}
      />
      <div className="absolute bottom-[-2px] left-0 right-0" style={shadowStyle} />
    </div>
  );
}
