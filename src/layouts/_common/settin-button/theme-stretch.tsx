import { useState } from 'react';
import { Card, Tooltip } from 'antd';
import { LeftOutlined, QuestionCircleOutlined, RightOutlined } from '@ant-design/icons';
import { useSettingActions, useSettings } from '@/store/settingStore';
import { useThemeToken } from '@/theme/hooks';

export default function ThemeContentStretch() {
  const { colorPrimary, colorTextSecondary } = useThemeToken();
  const settings = useSettings();
  const { themeStretch } = settings;
  const { setSettings } = useSettingActions();

  const setThemeStretch = (themeStretch: boolean) => {
    setSettings({ ...settings, themeStretch });
  };

  return (
    <div>
      <div className=" mb-3 text-base font-semibold" style={{ color: colorTextSecondary }}>
        <span className="mr-2">Stretch</span>
        <Tooltip title="Only available at large resolutions > 1600px (xl)">
          <QuestionCircleOutlined />
        </Tooltip>
      </div>

      <Card
        onClick={() => setThemeStretch(!themeStretch)}
        className="flex h-20 w-full cursor-pointer items-center justify-center"
        bodyStyle={{
          width: '50%',
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {themeStretch ? (
          <div
            className="flex w-full items-center justify-between"
            style={{
              color: colorPrimary,
              transition: 'width 300ms 0ms',
            }}
          >
            <LeftOutlined />
            <div className="flex flex-grow border-b border-dashed" />
            <RightOutlined />
          </div>
        ) : (
          <div
            className="flex w-1/2 items-center justify-between"
            style={{
              transition: 'width 300ms 0ms',
            }}
          >
            <RightOutlined />
            <div className="flex-grow border-b border-dashed" />
            <LeftOutlined />
          </div>
        )}
      </Card>
    </div>
  );
}
