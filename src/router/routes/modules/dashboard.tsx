import { Suspense, lazy } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AppRouteObject } from '#/router';
import { CircleLoading } from '@/components/loading';

const IndexPage = lazy(() => import('@/pages/dashboard/workbench'));
const Analysis = lazy(() => import('@/pages/dashboard/analysis'));

const dashboard: AppRouteObject = {
  order: 1,
  path: 'dashboard',
  element: (
    <Suspense fallback={<CircleLoading />}>
      <Outlet />
    </Suspense>
  ),
  meta: { title: 'sys.menu.dashboard', icon: 'ic-analysis', key: '/dashboard' },
  children: [
    {
      index: true,
      element: <Navigate to="workbench" replace />,
    },
    {
      path: 'workbench',
      element: <IndexPage />,
      meta: { title: 'sys.menu.workbench', key: '/dashboard/workbench' },
    },
    {
      path: 'analysis',
      element: <Analysis />,
      meta: { title: 'sys.menu.analysis', key: '/dashboard/analysis' },
    },
  ],
};

export default dashboard;
