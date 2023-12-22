import { RouterProvider } from 'react-router-dom';
import AntdThemeProvider from './common/theme';
import router from '@/router';

export default function App() {
  return (
    <AntdThemeProvider>
      <RouterProvider router={router} />
    </AntdThemeProvider>
  );
}
