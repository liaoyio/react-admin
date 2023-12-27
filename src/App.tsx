import { App as AntdApp } from 'antd';
import { RouterProvider } from 'react-router-dom';
import AntdConfig from '@/theme/antd';
import { MotionLazy } from '@/components/animate/motion-lazy';
import router from '@/router';

export default function App() {
  return (
    <AntdConfig>
      <AntdApp>
        <MotionLazy>
          <RouterProvider router={router} />
        </MotionLazy>
      </AntdApp>
    </AntdConfig>
  );
}
