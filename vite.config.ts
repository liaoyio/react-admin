import path from 'path';

import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import UnoCSS from 'unocss/vite';
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  base: './',
  // esbuild: { drop: ['console', 'debugger'] },
  css: {
    // 开css sourcemap方便找css
    devSourcemap: true,
  },
  plugins: [
    UnoCSS(),
    viteMockServe(),
    react(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
    visualizer({
      open: false,
    }),
  ],
  resolve: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '#': path.resolve(__dirname, '/types'),
    },
  },
  server: {
    // 自动打开浏览器
    open: true,
    port: 3001,
    /*  proxy: {
       '/api': {
         target: 'http://localhost:3000',
         changeOrigin: true,
         rewrite: (path) => path.replace(/^\/api/, ''),
       },
     }, */
  },
});
