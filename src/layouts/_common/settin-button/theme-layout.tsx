import { Card } from 'antd';
import { useSettingActions, useSettings } from '@/store/settingStore';
import { ThemeLayout } from '#/enum';
import { useThemeToken } from '@/theme/hooks';

/** 全局 Layout 布局设置 */
export default function ThemeLayoutSettings() {
  const { colorPrimary, colorBgBase, colorTextSecondary } = useThemeToken();

  const settings = useSettings();
  const { themeLayout } = settings;
  const { setSettings } = useSettingActions();

  const setThemeLayout = (themeLayout: ThemeLayout) => {
    setSettings({
      ...settings,
      themeLayout,
    });
  };

  const layoutBackground = (layout: ThemeLayout) =>
    themeLayout === layout
      ? `linear-gradient(135deg, ${colorBgBase} 0%, ${colorPrimary} 100%)`
      : '#919eab';

  return (
    <div>
      <div className="mb-3 text-base font-semibold" style={{ color: colorTextSecondary }}>
        Layout
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Card
          onClick={() => setThemeLayout(ThemeLayout.Vertical)}
          className="h-14 cursor-pointer"
          style={{ flexGrow: 1, flexShrink: 0 }}
          bodyStyle={{
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <div className="flex h-full w-7 flex-shrink-0 flex-col gap-1 p-1">
            <div
              className="h-2 w-2 flex-shrink-0 rounded"
              style={{ background: layoutBackground(ThemeLayout.Vertical) }}
            />
            <div
              className="h-1 w-full flex-shrink-0 rounded opacity-50"
              style={{ background: layoutBackground(ThemeLayout.Vertical) }}
            />
            <div
              className="h-1 max-w-[12px] flex-shrink-0 rounded opacity-20"
              style={{ background: layoutBackground(ThemeLayout.Vertical) }}
            />
          </div>
          <div className="h-full w-full flex-1 flex-grow p-1">
            <div
              className="h-full w-full rounded opacity-20"
              style={{ background: layoutBackground(ThemeLayout.Vertical) }}
            />
          </div>
        </Card>
        <Card
          onClick={() => setThemeLayout(ThemeLayout.Horizontal)}
          className="h-14 cursor-pointer"
          style={{ flexGrow: 1, flexShrink: 0 }}
          bodyStyle={{
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <div className="flex h-4 w-full items-center gap-1  p-1">
            <div
              className="h-2 w-2 flex-shrink-0 rounded"
              style={{ background: layoutBackground(ThemeLayout.Horizontal) }}
            />
            <div
              className="h-1 w-4 flex-shrink-0 rounded opacity-50"
              style={{ background: layoutBackground(ThemeLayout.Horizontal) }}
            />
            <div
              className="h-1 w-3 flex-shrink-0 rounded opacity-20"
              style={{ background: layoutBackground(ThemeLayout.Horizontal) }}
            />
          </div>
          <div className="h-full w-full flex-1 flex-grow p-1">
            <div
              className="h-full w-full rounded opacity-20"
              style={{ background: layoutBackground(ThemeLayout.Horizontal) }}
            />
          </div>
        </Card>
        <Card
          onClick={() => setThemeLayout(ThemeLayout.Mini)}
          className="h-14 cursor-pointer"
          style={{ flexGrow: 1, flexShrink: 0 }}
          bodyStyle={{
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <div className="flex h-full flex-shrink-0 flex-col gap-1 p-1">
            <div
              className="h-2 w-2 flex-shrink-0 rounded"
              style={{ background: layoutBackground(ThemeLayout.Mini) }}
            />
            <div
              className="h-1 w-full flex-shrink-0 rounded opacity-50"
              style={{ background: layoutBackground(ThemeLayout.Mini) }}
            />
            <div
              className="h-1 max-w-[12px] flex-shrink-0 rounded opacity-20"
              style={{ background: layoutBackground(ThemeLayout.Mini) }}
            />
          </div>
          <div className="h-full w-full flex-1 flex-grow p-1">
            <div
              className="h-full w-full rounded opacity-20"
              style={{ background: layoutBackground(ThemeLayout.Mini) }}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
