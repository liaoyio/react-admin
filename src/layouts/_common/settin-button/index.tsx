import { CloseOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import { useState } from 'react';
import { SvgIcon } from '@/components/icon';
import FullScreenButton from './full-screen-button';
import DarkModeToggle from './dark-mode-toggle';
import ThemeLayoutSettings from './theme-layout';
import ThemeColorPresetsToggle from './theme-color-presets-toggle';
import { BG_STYLE } from '@/styles/ui';

/** App Setting */
export default function SettingButton() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <div className="animate-spin-slow">
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex h-10 w-10 transform-none cursor-pointer items-center justify-center rounded-full hover:scale-105 hover:bg-hover"
        >
          <SvgIcon icon="ic-setting" size="24" />
        </button>
      </div>
      <Drawer
        placement="right"
        title="Settings"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        closable={false}
        width={280}
        maskStyle={{ backgroundColor: 'transparent' }}
        style={BG_STYLE}
        styles={{ body: { padding: 0 } }}
        extra={
          <button
            onClick={() => setDrawerOpen(false)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full hover:scale-105 hover:bg-hover"
          >
            <CloseOutlined className="text-gray-400" />
          </button>
        }
        footer={<FullScreenButton />}
      >
        <div className="flex flex-col gap-6 p-6">
          {/* 切换暗黑模式 */}
          <DarkModeToggle />
          {/* Layout 布局设置 */}
          <ThemeLayoutSettings />
          {/* 全局主题颜色选择 */}
          <ThemeColorPresetsToggle />
        </div>
      </Drawer>
    </>
  );
}
