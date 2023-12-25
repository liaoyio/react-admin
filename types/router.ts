import { ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';

export type RouteMeta = {
  // unique
  key: string;
  title: string;
  /** 菜单栏图标，传入string时使用 SvgIcon 组件渲染   */
  icon?: ReactNode;
  // show in tab
  hideTab?: boolean;
  // show in menu
  hideMenu?: boolean;
  // need to auth,
  auth?: boolean;
};

export type AppRouteObject = {
  index?: boolean;
  path?: RouteObject['path'];
  element?: RouteObject['element'];
  children?: AppRouteObject[];
  meta?: RouteMeta;
  /* 菜单排序 */
  order?: number;
};
