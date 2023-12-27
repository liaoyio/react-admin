import { ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';

export type RouteMeta = {
  /** antd menu selectedKeys */
  key: string;
  /** 菜单栏标题 */
  label?: string;
  /** 菜单栏前缀图标，传入string时使用 SvgIcon 组件渲染 */
  icon?: ReactNode;
  /** 菜单栏后缀图标 */
  suffix?: ReactNode;
  /** hide in menu */
  hideMenu?: boolean;
  /** hide in multi tab  */
  hideTab?: boolean;
  // disable in menu
  disabled?: boolean;
  // react router outlet
  outlet?: any;
  // use to refresh tab
  timeStamp?: string;
  /** external link and iframe need */
  frameSrc?: string;
};

export type AppRouteObject = {
  /* 菜单排序 */
  order?: number;
  /** 路由源信息 */
  meta?: RouteMeta;
  /** 子路由数组 */
  children?: AppRouteObject[];
} & Omit<RouteObject, 'children'>;
