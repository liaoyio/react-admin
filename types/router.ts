import { RouteObject } from 'react-router-dom';

export type RouteMeta =
  | {
      // unique
      key: string;
      title: string;
      icon?: string;
      // show in tab
      hideTab?: boolean;
      // show in menu
      hideMenu?: boolean;
      // need to auth,
      auth?: boolean;
    }
  | {
      hideMenu: boolean;
    };

export type AppRouteObject = {
  index?: boolean;
  path?: RouteObject['path'];
  element?: RouteObject['element'];
  children?: AppRouteObject[];
  meta?: RouteMeta;
};
