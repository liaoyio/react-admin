import { lazy } from 'react';
import lazyLoad from '@/components/app/lazyLoad';
import { AppRouteObject } from '#/router';

const User = lazy(() => import('@/pages/management/user'));
const Blog = lazy(() => import('@/pages/management/blog'));

const management: AppRouteObject = {
  path: '/management',
  meta: { title: 'sys.menu.management', icon: 'ic-dashboard' },
  children: [
    {
      index: true,
      path: 'user',
      element: lazyLoad(User),
      meta: { title: 'sys.menu.user', icon: 'ic-user' },
    },
    {
      path: 'blog',
      element: lazyLoad(Blog),
      meta: { title: 'sys.menu.blog', icon: 'ic-blog' },
    },
  ],
};

export default management;
