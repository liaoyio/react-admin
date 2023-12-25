import ReactDOM from 'react-dom/client';
import { ReactQueryProvider } from '@/context/QueryClientProvider';
import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import 'virtual:uno.css';
// import '@unocss/reset/tailwind.css';
import '@unocss/reset/tailwind-compat.css';
import '@/styles/index.css';
import 'virtual:svg-icons-register';
import 'react-quill/dist/quill.snow.css'; /** 富文本 */
import 'simplebar-react/dist/simplebar.min.css'; /** 滚动条 */

import App from '@/App';
import '@/locales/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <HelmetProvider>
    <ReactQueryProvider>
      <Suspense>
        <App />
      </Suspense>
    </ReactQueryProvider>
  </HelmetProvider>,
);
