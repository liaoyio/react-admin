import { Drawer } from 'antd';
import { useState } from 'react';

import SettingIcon from './setting-icon';
import FullScreenButton from './full-screen-button';
import DarkModeToggle from './dark-mode-toggle';
import ThemeLayoutSettings from './theme-layout';
import ThemeContentStretch from './theme-stretch';
import ThemeColorPresetsToggle from './theme-color-presets-toggle';
import { CloseOutlined } from '@ant-design/icons';

import { BG_STYLE } from '@/styles/ui';

/** App Setting */
export default function SettingButton() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <SettingIcon onClick={() => setDrawerOpen(true)} drawerOpen={drawerOpen} />
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
          {/* 页面内容屏幕尺寸拉伸 */}
          <ThemeContentStretch />
          {/* 全局主题颜色选择 */}
          <ThemeColorPresetsToggle />
        </div>
      </Drawer>
    </>
  );
}
