import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import { PropsWithChildren } from 'react';
import BreadCrumb from './BreadCrumb';

const { Content } = Layout;

export default function ProContent() {
  return (
    <Content className="p-4">
      <BreadCrumb />
      <Outlet />
    </Content>
  );
}
