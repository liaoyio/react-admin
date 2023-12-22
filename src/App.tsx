import { RouterProvider } from 'react-router-dom';
import AntdThemeProvider from './common/theme';
import { MotionLazy } from '@/components/animate/motion-lazy';
import router from '@/router';

export default function App() {
  return (
    <AntdThemeProvider>
      <MotionLazy>
        <RouterProvider router={router} />
      </MotionLazy>
    </AntdThemeProvider>
  );
}
