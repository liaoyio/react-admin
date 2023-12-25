import { Suspense, lazy } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Loading from '@/components/loading';
import { AppRouteObject } from '#/router';

const AnimatePage = lazy(() => import('@/pages/components/animate'));
const ScrollPage = lazy(() => import('@/pages/components/scroll'));
const MarkdownPage = lazy(() => import('@/pages/components/markdown'));
const EditorPage = lazy(() => import('@/pages/components/editor'));
const MultiLanguagePage = lazy(() => import('@/pages/components/multi-language'));
const IconPage = lazy(() => import('@/pages/components/icon'));
const UploadPage = lazy(() => import('@/pages/components/upload'));

const components: AppRouteObject = {
  order: 3,
  path: 'components',
  element: (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  ),
  meta: { title: 'sys.menu.components', icon: 'ic-management', key: '/components' },
  children: [
    {
      index: true,
      element: <Navigate to="icon" replace />,
    },
    {
      path: 'icon',
      element: <IconPage />,
      meta: { title: 'sys.menu.icon', key: '/components/icon' },
    },
    {
      path: 'animate',
      element: <AnimatePage />,
      meta: { title: 'sys.menu.animate', key: '/components/animate' },
    },
    {
      path: 'scroll',
      element: <ScrollPage />,
      meta: { title: 'sys.menu.scroll', key: '/components/scroll' },
    },
    {
      path: 'markdown',
      element: <MarkdownPage />,
      meta: { title: 'sys.menu.markdown', key: '/components/markdown' },
    },
    {
      path: 'editor',
      element: <EditorPage />,
      meta: { title: 'sys.menu.editor', key: '/components/editor' },
    },
    {
      path: 'i18n',
      element: <MultiLanguagePage />,
      meta: { title: 'sys.menu.i18n', key: '/components/i18n' },
    },
    {
      path: 'upload',
      element: <UploadPage />,
      meta: { title: 'sys.menu.upload', key: '/components/upload' },
    },
  ],
};

export default components;
