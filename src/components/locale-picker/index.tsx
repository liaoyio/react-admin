import { Dropdown, type MenuProps } from 'antd';
import { IconButton, SvgIcon } from '../icon';

import useLocale, { LANGUAGE_MAP } from '@/locales/useLocale';
import { LocalEnum } from '#/enum';
type Locale = keyof typeof LocalEnum;

/** i8n 语言切换 */
export default function LocalePicker() {
  /** 获取当前语言 */
  const { setLocale, locale } = useLocale();

  const localeList: MenuProps['items'] = Object.values(LANGUAGE_MAP).map((item) => {
    return {
      key: item.locale,
      label: item.label,
      icon: <SvgIcon icon={item.icon} size="20" className="rounded-md" />,
    };
  });

  return (
    <Dropdown
      placement="bottomRight"
      trigger={['click']}
      key={locale}
      menu={{ items: localeList, onClick: (e) => setLocale(e.key as Locale) }}
    >
      <IconButton className="h-10 w-10 hover:scale-105">
        <SvgIcon icon={`ic-locale_${locale}`} size="24" className="rounded-md" />
      </IconButton>
    </Dropdown>
  );
}
