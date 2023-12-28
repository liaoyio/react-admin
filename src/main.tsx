import ReactDOM from 'react-dom/client';
import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import 'virtual:uno.css';
import '@/styles/global.css';
import 'virtual:svg-icons-register';

import App from '@/App';
import '@/locales/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <HelmetProvider>
    <Suspense>
      <App />
    </Suspense>
  </HelmetProvider>,
);
