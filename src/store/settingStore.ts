import { create } from 'zustand';
import { getItem, removeItem, setItem } from '@/utils/storage';
import { StorageEnum, ThemeColorPresets, ThemeLayout, ThemeMode } from '#/enum';

type SettingsType = {
  /** 主题色预设: 'default' ｜ 'cyan' ｜ 'purple', ｜ 'blue' ｜ 'orange' ｜ 'red' */
  themeColorPresets: ThemeColorPresets;
  /** 主题模式: 'light' | 'dark' */
  themeMode: ThemeMode;
  /** 布局模式:  'vertical' ｜ 'horizontal' ｜ 'mini' */
  themeLayout: ThemeLayout;
  /** 页面布局是否拉伸 */
  themeStretch: boolean;
  breadCrumb: boolean;
  multiTab: boolean;
};

type SettingStore = {
  settings: SettingsType;
  actions: {
    setSettings: (settings: SettingsType) => void;
    clearSettings: () => void;
  };
};

const useSettingStore = create<SettingStore>((set) => ({
  settings: getItem<SettingsType>(StorageEnum.Settings) || {
    themeColorPresets: ThemeColorPresets.Default,
    themeMode: ThemeMode.Light,
    themeLayout: ThemeLayout.Vertical,
    themeStretch: false,
    breadCrumb: false,
    multiTab: true,
  },
  actions: {
    setSettings: (settings) => {
      set({ settings });
      setItem(StorageEnum.Settings, settings);
    },
    clearSettings() {
      removeItem(StorageEnum.Settings);
    },
  },
}));

export const useSettings = () => useSettingStore((state) => state.settings);
export const useSettingActions = () => useSettingStore((state) => state.actions);
