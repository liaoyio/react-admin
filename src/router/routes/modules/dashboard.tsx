import { Suspense, lazy } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AppRouteObject } from '#/router';
import { CircleLoading } from '@/components/loading';

const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;
const HomePage = lazy(() => import('@/pages/dashboard/workbench'));
const Analysis = lazy(() => import('@/pages/dashboard/analysis'));

const dashboard: AppRouteObject = {
  order: 1,
  path: 'dashboard',
  element: (
    <Suspense fallback={<CircleLoading />}>
      <Outlet />
    </Suspense>
  ),
  meta: { label: 'sys.menu.dashboard', icon: 'ic-analysis', key: '/dashboard' },
  children: [
    {
      index: true,
      element: <Navigate to="workbench" replace />,
    },
    {
      path: 'workbench',
      element: <HomePage />,
      meta: { label: 'sys.menu.workbench', key: HOMEPAGE },
    },
    {
      path: 'analysis',
      element: <Analysis />,
      meta: { label: 'sys.menu.analysis', key: '/dashboard/analysis' },
    },
  ],
};

export default dashboard;
