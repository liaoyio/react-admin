import ReactDOM from 'react-dom/client';
import { ReactQueryProvider } from '@/context/QueryClientProvider';
import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import App from '@/App';
import 'virtual:svg-icons-register';
import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';
import '@/styles/index.css';
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
