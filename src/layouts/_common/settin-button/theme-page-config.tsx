import { Switch } from 'antd';
import { useSettings, useSettingActions } from '@/store/settingStore';
import { useThemeToken } from '@/theme/hooks';

export default function ThemePageConfig() {
  const { colorTextSecondary, colorTextTertiary } = useThemeToken();

  const settings = useSettings();
  const { breadCrumb, multiTab } = settings;
  const { setSettings } = useSettingActions();

  const setBreadCrump = (checked: boolean) => {
    setSettings({ ...settings, breadCrumb: checked });
  };

  const setMultiTab = (checked: boolean) => {
    setSettings({ ...settings, multiTab: checked });
  };

  return (
    <div>
      <div className="mb-3 text-base font-semibold" style={{ color: colorTextSecondary }}>
        Page
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between" style={{ color: colorTextTertiary }}>
          <div>BreadCrumb</div>
          <Switch
            size="small"
            checked={breadCrumb}
            onChange={(checked) => setBreadCrump(checked)}
          />
        </div>
        <div className="flex items-center justify-between" style={{ color: colorTextTertiary }}>
          <div>Multi Tab</div>
          <Switch size="small" checked={multiTab} onChange={(checked) => setMultiTab(checked)} />
        </div>
      </div>
    </div>
  );
}
