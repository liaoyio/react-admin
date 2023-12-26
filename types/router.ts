import { ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';

export type RouteMeta = {
  /** antd menu selectedKeys */
  key: string;
  /** 菜单栏标题 */
  label?: string;
  /** 菜单栏图标，传入string时使用 SvgIcon 组件渲染   */
  icon?: ReactNode;
  // show in tab
  hideTab?: boolean;
  // show in menu
  hideMenu?: boolean;
  // disable in menu
  disabled?: boolean;
  // need to auth,
  auth?: boolean;
};

export type AppRouteObject = {
  /* 菜单排序 */
  order?: number;
  /** 路由源信息 */
  meta?: RouteMeta;
  /** 子路由数组 */
  children?: AppRouteObject[];
} & Omit<RouteObject, 'children'>;
