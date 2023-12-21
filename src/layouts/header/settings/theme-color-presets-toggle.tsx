import { Card, theme } from 'antd';
import { ThemeColorPresets } from '#/enum';
import { useSettingActions, useSettings } from '@/store/settingStore';
import { colorPrimarys } from '@/common/theme/antd-theme';
import { MdCircle } from 'react-icons/md';

const { useToken } = theme;

const ThemeColorPresetsToggle = () => {
  const colorTextSecondary = useToken().token.colorTextSecondary;
  const settings = useSettings();
  const { themeColorPresets } = settings;

  const { setSettings } = useSettingActions();
  const setThemeColorPresets = (themeColorPresets: ThemeColorPresets) => {
    setSettings({
      ...settings,
      themeColorPresets,
    });
  };

  return (
    <div>
      <div className="mb-3 text-xs font-semibold" style={{ color: colorTextSecondary }}>
        Presets
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-3">
        {Object.entries(colorPrimarys).map(([preset, color]) => (
          <Card
            key={preset}
            className="flex h-14 w-full cursor-pointer items-center justify-center"
            style={{ backgroundColor: themeColorPresets === preset ? `${color}14` : '' }}
            onClick={() => setThemeColorPresets(preset as ThemeColorPresets)}
          >
            <div style={{ color }}>
              <MdCircle style={{ fontSize: themeColorPresets === preset ? 24 : 12 }} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ThemeColorPresetsToggle;
