import { RouterProvider } from 'react-router-dom';
import AntdConfig from './common/theme';
import { MotionLazy } from '@/components/animate/motion-lazy';
import router from '@/router';

export default function App() {
  return (
    <AntdConfig>
      <MotionLazy>
        <RouterProvider router={router} />
      </MotionLazy>
    </AntdConfig>
  );
}
