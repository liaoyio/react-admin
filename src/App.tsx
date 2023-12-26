import { App as AntdApp } from 'antd';
import { RouterProvider } from 'react-router-dom';
import AntdConfig from '@/theme/antd';
import { MotionLazy } from '@/components/animate/motion-lazy';
import router from '@/router';
import axios from 'axios';
export default function App() {
  axios.get('/api/getUsers').then((res) => {
    console.log(res);
  });

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
