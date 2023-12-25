import { Suspense, lazy } from 'react';
import { AppRouteObject } from '#/router';
import { Navigate, Outlet } from 'react-router-dom';
import { LineLoading } from '@/components/loading';
import { SvgIcon } from '@/components/icon';

const IndexPage = lazy(() => import('@/pages/management/user'));
const Blog = lazy(() => import('@/pages/management/blog'));

const management: AppRouteObject = {
  order: 2,
  path: 'management',
  element: (
    <Suspense fallback={<LineLoading />}>
      <Outlet />
    </Suspense>
  ),
  meta: {
    title: 'sys.menu.management',
    icon: <SvgIcon icon="ic-management" className="ant-menu-item-icon" size="24" />,
    key: '/management',
  },
  children: [
    {
      index: true,
      element: <Navigate to="user" replace />,
    },
    {
      path: 'user',
      element: <IndexPage />,
      meta: { title: 'sys.menu.user', key: '/management/user' },
    },
    {
      path: 'blog',
      element: <Blog />,
      meta: { title: 'sys.menu.blog', key: '/management/blog' },
    },
  ],
};

export default management;
