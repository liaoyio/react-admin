import { App as AntdApp } from 'antd';
import Router from '@/router';
import AntdConfig from '@/theme/antd';
import { MotionLazy } from '@/components/animate/motion-lazy';

export default function App() {
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
