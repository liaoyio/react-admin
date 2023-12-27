import { Drawer } from 'antd';
import { useState, CSSProperties } from 'react';

import SettingIcon from './setting-icon';
import FullScreenButton from './full-screen-button';
import DarkModeToggle from './dark-mode-toggle';
import ThemeLayoutSettings from './theme-layout';
import ThemeContentStretch from './theme-stretch';
import ThemeColorPresetsToggle from './theme-color-presets-toggle';
import ThemePageConfig from './theme-page-config';

import { CloseOutlined } from '@ant-design/icons';
import { IconButton } from '@/components/icon';
import Color from 'color';

import CyanBlur from '@/assets/images/background/cyan-blur.png';
import RedBlur from '@/assets/images/background/red-blur.png';
import { useThemeToken } from '@/theme/hooks';

/** App Setting */
export default function SettingButton() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { colorBgContainer } = useThemeToken();

  const style: CSSProperties = {
    backdropFilter: 'blur(20px)',
    backgroundImage: `url("${CyanBlur}"), url("${RedBlur}")`,
    backgroundRepeat: 'no-repeat, no-repeat',
    backgroundColor: Color(colorBgContainer).alpha(0.9).toString(),
    backgroundPosition: 'right top, left bottom',
    backgroundSize: '50, 50%',
  };

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
        style={style}
        styles={{ body: { padding: 0 } }}
        extra={
          <IconButton onClick={() => setDrawerOpen(false)} className="h-9 w-9 hover:scale-105">
            <CloseOutlined className="text-gray-400" />
          </IconButton>
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
          {/* Page config  */}
          <ThemePageConfig />
        </div>
      </Drawer>
    </>
  );
}
