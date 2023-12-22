import { Dropdown } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SvgIcon } from '../icon';

import type { MenuProps } from 'antd';

type Locale = 'zh' | 'en';

/** i8n 语言切换 */
export default function LocalePicker() {
  const { i18n } = useTranslation();

  /** 获取当前语言 */
  const [locale, setLocale] = useState<Locale>(() => i18n.resolvedLanguage as Locale);

  const localeList: MenuProps['items'] = [
    {
      key: 'zh',
      label: 'Chinese',
      icon: <SvgIcon icon="ic-locale_zh" className="mr-2" size="18" />,
    },
    {
      key: 'en',
      label: 'English',
      icon: <SvgIcon icon="ic-locale_en" className="mr-2" size="18" />,
    },
  ];

  /** 切换语言 */
  const handleLocaleChange: MenuProps['onClick'] = ({ key }) => {
    setLocale(key as Locale);
    i18n.changeLanguage(key);
  };

  return (
    <Dropdown
      placement="bottomRight"
      trigger={['click']}
      key={locale}
      menu={{ items: localeList, onClick: handleLocaleChange }}
    >
      <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-hover hover:scale-105">
        <SvgIcon icon={`ic-locale_${locale}`} size="22" />
      </button>
    </Dropdown>
  );
}
