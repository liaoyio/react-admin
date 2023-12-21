import { lazy } from 'react';
import lazyLoad from '@/components/app/lazy-load';
import { Navigate } from 'react-router-dom';
import { AppRouteObject } from '#/router';

const Workbench = lazy(() => import('@/pages/dashboard/workbench'));
const Analysis = lazy(() => import('@/pages/dashboard/analysis'));

const dashboard: AppRouteObject = {
  path: '/dashboard',
  meta: { title: 'sys.menu.dashboard', icon: 'ic-dashboard', key: '/dashboard' },
  children: [
    {
      index: true,
      element: <Navigate to="workbench" replace />,
      meta: { hideMenu: true },
    },
    {
      path: 'workbench',
      element: lazyLoad(Workbench),
      meta: { title: 'sys.menu.workbench', icon: 'ic-workbench', key: '/dashboard/workbench' },
    },
    {
      path: 'analysis',
      element: lazyLoad(Analysis),
      meta: { title: 'sys.menu.analysis', icon: 'ic-analysis', key: '/dashboard/analysis' },
    },
  ],
};

export default dashboard;
