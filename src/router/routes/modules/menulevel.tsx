import { Typography } from 'antd';
import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { SvgIcon } from '@/components/icon';
import { LineLoading } from '@/components/loading';

import { AppRouteObject } from '#/router';

function MenuLevel({ title }: { title: string }) {
  return <Typography.Title>Menu Level: {title}</Typography.Title>;
}

const menulevel: AppRouteObject = {
  order: 5,
  path: 'menu_level',
  element: (
    <Suspense fallback={<LineLoading />}>
      <Outlet />
    </Suspense>
  ),
  meta: {
    title: 'sys.menu.menulevel',
    icon: <SvgIcon icon="ic-menulevel" className="ant-menu-item-icon" size="24" />,
    key: '/menu_level',
  },
  children: [
    {
      path: 'menu_level_1a',
      element: <MenuLevel title="1a" />,
      meta: { title: 'sys.menu.menulevel_1a', key: '/menu_level/menu_level_1a' },
    },
    {
      path: 'menu_level_1b',
      meta: { title: 'sys.menu.menulevel_1b', key: '/menu_level/menu_level_1b' },
      children: [
        {
          index: true,
          element: <Navigate to="menu_level_2a" replace />,
        },
        {
          path: 'menu_level_2a',
          element: <MenuLevel title="2a" />,
          meta: { title: 'sys.menu.menulevel_2a', key: '/menu_level/menu_level_1b/menu_level_2a' },
        },
        {
          path: 'menu_level_2b',
          meta: { title: 'sys.menu.menulevel_2b', key: '/menu_level/menu_level_1b/menu_level_2b' },
          children: [
            {
              index: true,
              element: <Navigate to="menu_level_3a" replace />,
            },
            {
              path: 'menu_level_3a',
              element: <MenuLevel title="3a" />,
              meta: {
                title: 'sys.menu.menulevel_3a',
                key: '/menu_level/menu_level_1b/menu_level_2b/menu_level_3a',
              },
            },
            {
              path: 'menu_level_3b',
              element: <MenuLevel title="3b" />,
              meta: {
                title: 'sys.menu.menulevel_3b',
                key: '/menu_level/menu_level_1b/menu_level_2b/menu_level_3b',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default menulevel;
