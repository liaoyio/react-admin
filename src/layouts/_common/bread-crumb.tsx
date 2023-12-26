import { Breadcrumb } from 'antd';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMatches, Link } from 'react-router-dom';
import { getMenuRoutes, flattenMenuRoutes } from '@/router/utils';
import { AppRouteObject, RouteMeta } from '#/router';

/**
 * 动态面包屑
 * 动态面包屑解决方案：https://github.com/MinjieChang/myblog/issues/29
 */
export default function BreadCrumb() {
  const { t } = useTranslation();
  const matches = useMatches();
  const [breadCrumbs, setBreadCrumbs] = useState<ItemType[]>([]);

  const flattenRoutes = useCallback(flattenMenuRoutes, []);

  const flattenedRoutes = useMemo(() => {
    const menuRoutes = getMenuRoutes();
    return flattenRoutes(menuRoutes);
  }, [flattenRoutes]);

  useEffect(() => {
    const menuRoutes = getMenuRoutes();
    const paths = matches.filter((item) => item.pathname !== '/').map((item) => item.pathname);

    console.log('🚀 BreadCrumb -> useEffect -> paths', paths);

    const pathRouteMetas = flattenedRoutes.filter((item: any) => paths.indexOf(item.key) !== -1);

    console.log('🚀 BreadCrumb -> useEffect -> pathRouteMetas', pathRouteMetas);

    let items: AppRouteObject[] | undefined = [...menuRoutes];

    const breadCrumbs = pathRouteMetas.map((routeMeta: any) => {
      const { key, title: label } = routeMeta;
      items = items!.find((item) => item.meta?.key === key)?.children;
      const result: ItemType = {
        key,
        title: t(label),
      };
      if (items) {
        result.menu = {
          items: items.map((item) => ({
            key: item.meta?.key,
            label: <Link to={item.meta!.key!}>{t(item.meta!.label as any)}</Link>,
          })),
        };
      }
      return result;
    });

    setBreadCrumbs(breadCrumbs);
    console.log('🚀 BreadCrumb -> useEffect -> after setBreadCrumbs ', breadCrumbs);
  }, [matches, flattenedRoutes, t]);

  return <Breadcrumb items={breadCrumbs} />;
}
