import { ItemType } from 'antd/es/menu/hooks/useItems';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { AppRouteObject } from '#/router';
import { SvgIcon } from '@/components/icon';

/** routes -> menus */
export function useRouteToMenu() {
  const { t } = useTranslation();
  const routeToMenu = useCallback(
    (items: AppRouteObject[]) => {
      return items.map((item) => {
        const menuItem: any = {};
        const { meta, children } = item;
        if (meta) {
          const { key, label, icon, disabled } = meta;
          menuItem.key = key;
          menuItem.label = t(label!);
          menuItem.disabled = disabled;
          if (icon) {
            if (typeof icon === 'string') {
              menuItem.icon = (
                <SvgIcon icon={icon} className="ant-menu-item-icon mr-2" size="24px" />
              );
            } else {
              menuItem.icon = icon;
            }
          }
        }
        if (children) {
          menuItem.children = routeToMenu(children);
        }
        return menuItem as ItemType;
      });
    },
    [t],
  );
  return routeToMenu;
}
