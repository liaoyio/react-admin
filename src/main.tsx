import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/App';
import 'virtual:svg-icons-register';
import './styles/index.css';
import 'virtual:uno.css';

// 创建一个 client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // 失败重试次数
      // cacheTime: 300_000, // 缓存有效期 5m
      staleTime: 10_1000, // 数据变得 "陈旧"（stale）的时间 10s
      refetchOnWindowFocus: false, // 禁止窗口聚焦时重新获取数据
      refetchOnReconnect: false, // 禁止重新连接时重新获取数据
      refetchOnMount: false, // 禁止组件挂载时重新获取数据
    },
  },
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* 提供 client 至 App */}
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
