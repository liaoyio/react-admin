import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';
import BreadCrumb from '../_common/bread-crumb';
import { useSettings } from '@/store/settingStore';

export default function Main() {
  const { themeStretch } = useSettings();
  return (
    <Content className="px-4">
      <BreadCrumb />
      <div className={`mx-auto h-full w-full sm:px-2 ${themeStretch ? '' : 'xl:max-w-screen-xl'}`}>
        <Outlet />
      </div>
    </Content>
  );
}
