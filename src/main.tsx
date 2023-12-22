import ReactDOM from 'react-dom/client';
import { ReactQueryProvider } from '@/context/QueryClientProvider';
import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import 'virtual:uno.css';
import '@unocss/reset/tailwind.css';
import '@/styles/index.css';
import 'virtual:svg-icons-register';
import 'simplebar-react/dist/simplebar.min.css';

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
