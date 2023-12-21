import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';

import BreadCrumb from './BreadCrumb';

export default function ProContent() {
  return (
    <Content className="p-4">
      <BreadCrumb />
      <Outlet />
    </Content>
  );
}
