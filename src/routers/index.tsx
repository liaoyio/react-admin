import {
  createBrowserRouter,
  Navigate,
  Outlet,
  type RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { useUserToken } from '@/store/userStore';

import Blog from '@/pages/Blog';
import Dashboard from '@/pages/Dashboard';
import Page404 from '@/pages/Page404';
import Login from '@/pages/sys/login/Login';
import ReactQuery from '@/pages/test/ReactQuery';
import Zustand from '@/pages/test/Zustand';
import User from '@/pages/User';

function Routes() {
  const routesForPublic: RouteObject[] = [];

  const routesForAuthenticatedOnly: RouteObject[] = [
    {
      path: '/',
      element: <AuthenticatedRoute />,
      children: [
        { path: 'dashboard', element: <Dashboard />, index: true },
        { path: 'user', element: <User /> },
        { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: '/test',
      children: [
        { element: <Navigate to="/test/zustand" />, index: true },
        { path: 'zustand', element: <Zustand /> },
        { path: 'react-query', element: <ReactQuery /> },
      ],
    },
    {
      path: '*',
      element: <Page404 />,
    },
  ];

  // 仅用于未通过身份验证的路由
  const routesForNotAuthenticatedOnly: RouteObject[] = [
    {
      path: '/',
      element: <UnauthenticatedRoute />,
      children: [{ path: 'login', element: <Login />, index: true }],
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...routesForNotAuthenticatedOnly,
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
}

function AuthenticatedRoute() {
  const token = useUserToken();

  // 判断用户是否有权限
  if (!token?.accessToken) {
    // 如果没有授权，则跳转到登录页面
    return <Navigate to="/login" replace />;
  }

  // 如果已经授权，则直接渲染子组件
  return <Outlet />;
}

function UnauthenticatedRoute() {
  const token = useUserToken();

  // 判断用户是否有权限
  if (token.accessToken) {
    // 如果有授权，则跳转到首页
    return <Navigate to="/dashboard" replace />;
  }

  // 如果已经授权，则直接渲染子组件
  return <Outlet />;
}

export default Routes;
