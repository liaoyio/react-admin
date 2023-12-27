import { Card } from 'antd';
import { SvgIcon } from '@/components/icon';
import { ThemeMode } from '#/enum';
import { useSettingActions, useSettings } from '@/store/settingStore';
import { useThemeToken } from '@/theme/hooks';

/** 暗黑模式切换 */
const DarkModeToggle = () => {
  const { colorPrimary, colorTextSecondary } = useThemeToken();

  const settings = useSettings();
  const { themeMode } = settings;

  const { setSettings } = useSettingActions();

  const setThemeMode = (themeMode: ThemeMode) => {
    setSettings({
      ...settings,
      themeMode,
    });
  };

  return (
    <div>
      <div className="mb-3 text-base font-semibold" style={{ color: colorTextSecondary }}>
        Mode
      </div>
      <div className="flex flex-row gap-4">
        <Card
          onClick={() => setThemeMode(ThemeMode.Light)}
          className="flex h-20 w-full cursor-pointer items-center justify-center"
        >
          <SvgIcon
            icon="ic-settings-mode-sun"
            size="24"
            color={themeMode === ThemeMode.Light ? colorPrimary : ''}
          />
        </Card>
        <Card
          onClick={() => setThemeMode(ThemeMode.Dark)}
          className="flex h-20 w-full cursor-pointer items-center justify-center"
        >
          <SvgIcon
            icon="ic-settings-mode-moon"
            size="24"
            color={themeMode === ThemeMode.Dark ? colorPrimary : ''}
          />
        </Card>
      </div>
    </div>
  );
};

export default DarkModeToggle;
