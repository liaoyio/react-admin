import { SvgIcon } from '@/components/icon';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSettings } from '@/store/settingStore';

import { AppRouteObject } from '#/router';
import { ThemeLayout } from '#/enum';

/** routes -> menus */
export function useRouteToMenu() {
  const { t } = useTranslation();
  const { themeLayout } = useSettings();

  const routeToMenu = useCallback(
    (items: AppRouteObject[]) => {
      return items.map((item) => {
        const menuItem: any = [];
        const { meta, children } = item;
        if (meta) {
          const { key, label, icon, disabled, suffix } = meta;

          menuItem.key = key;
          menuItem.disabled = disabled;

          menuItem.label = (
            <div
              className={`inline-flex w-full items-center ${
                themeLayout === ThemeLayout.Horizontal ? 'justify-start' : 'justify-between'
              } `}
            >
              <span>{t(label!)}</span>
              {suffix}
            </div>
          );

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
    [t, themeLayout],
  );
  return routeToMenu;
}
