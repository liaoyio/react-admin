import { AppRouteObject } from '#/router';
import { ascend } from 'ramda';

const modules = import.meta.glob('../routes/modules/**/*.tsx', { eager: true });
const menuModules: AppRouteObject[] = [];

Object.keys(modules).forEach((key) => {
  const mod = (modules as any)[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  menuModules.push(...modList);
});

/** 返回将在侧边栏菜单中展示的 routes，根据 order 排序 */
export function getMenuRoutes() {
  const menuFilter = (items: AppRouteObject[]) => {
    return items
      .filter((item) => {
        const show = !item.meta?.hideMenu && item.path;
        if (show && item.children) {
          item.children = menuFilter(item.children);
        }
        return show;
      })
      .sort(ascend((item) => item.order!));
  };
  return menuFilter(menuModules);
}
