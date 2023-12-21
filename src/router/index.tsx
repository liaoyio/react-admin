import { RouteObject, createHashRouter } from 'react-router-dom';

import { asyncRoutes } from './routes';

const router = createHashRouter(asyncRoutes as RouteObject[]);

export default router;
