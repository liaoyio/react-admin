import { Dropdown } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SvgIcon } from '../icon';

import type { MenuProps } from 'antd';

type Locale = 'zh' | 'en';

function AppLocalePicker() {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState<Locale>(() => {
    // 获取当前语言
    return i18n.resolvedLanguage as Locale;
  });

  const localeList: MenuProps['items'] = [
    {
      key: 'zh',
      label: 'Chinese',
      icon: <SvgIcon icon="ic-locale_zh" className="mr-2" size="20" />,
    },
    {
      key: 'en',
      label: 'English',
      icon: <SvgIcon icon="ic-locale_en" className="mr-2" size="20" />,
    },
  ];
  const handleLocaleChange: MenuProps['onClick'] = ({ key }) => {
    setLocale(key as Locale);
    // 切换语言
    i18n.changeLanguage(key);
  };
  return (
    <Dropdown
      placement="bottomRight"
      trigger={['click']}
      key={locale}
      menu={{ items: localeList, onClick: handleLocaleChange }}
    >
      <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-hover">
        <SvgIcon icon={`ic-locale_${locale}`} size="24" />
      </button>
    </Dropdown>
  );
}

export default AppLocalePicker;
