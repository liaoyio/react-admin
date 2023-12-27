import { App as AntdApp } from 'antd';
import Router from '@/router';
import AntdConfig from '@/theme/antd';
import { MotionLazy } from '@/components/animate/motion-lazy';
import axios from 'axios';
export default function App() {
  axios
    .post('/api/auth/signin', {
      username: 'admin@gmail.com',
      password: 'demo1234',
    })
    .then((res) => {
      console.log(res);
    });
  return (
    <AntdConfig>
      <AntdApp>
        <MotionLazy>
          <Router />
        </MotionLazy>
      </AntdApp>
    </AntdConfig>
  );
}
