import { Suspense, lazy } from 'react';
import { AppRouteObject } from '#/router';
import { Navigate, Outlet } from 'react-router-dom';
import { CircleLoading } from '@/components/loading';
import { SvgIcon } from '@/components/icon';

const IndexPage = lazy(() => import('@/pages/management/user'));
const Blog = lazy(() => import('@/pages/management/blog'));

const management: AppRouteObject = {
  order: 2,
  path: 'management',
  element: (
    <Suspense fallback={<CircleLoading />}>
      <Outlet />
    </Suspense>
  ),
  meta: {
    label: 'sys.menu.management',
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
      meta: { label: 'sys.menu.user', key: '/management/user' },
    },
    {
      path: 'blog',
      element: <Blog />,
      meta: { label: 'sys.menu.blog', key: '/management/blog' },
    },
  ],
};

export default management;
