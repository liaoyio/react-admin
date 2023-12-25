import { Navigate } from 'react-router-dom';

import { authRoutes } from './auth';
import { mainRoutes } from './main';
import { moduleRoutes } from './module';

export const routes = [
  authRoutes,
  moduleRoutes,
  mainRoutes,
  { path: '*', element: <Navigate to="/404" replace /> },
];
