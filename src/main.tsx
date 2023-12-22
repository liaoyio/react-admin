import ReactDOM from 'react-dom/client';
import { ReactQueryProvider } from '@/context/QueryClientProvider';
import { AntdConfigProvider } from '@/context/AntdConfigProvider';
import { Suspense } from 'react';

import App from '@/App';
import 'virtual:svg-icons-register';
import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';
import '@/styles/index.css';
import '@/locales/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ReactQueryProvider>
    <AntdConfigProvider>
      <Suspense>
        <App />
      </Suspense>
    </AntdConfigProvider>
  </ReactQueryProvider>,
);
