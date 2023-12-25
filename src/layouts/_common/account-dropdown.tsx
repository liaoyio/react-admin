import { useMutation } from '@tanstack/react-query';
import { Divider, MenuProps } from 'antd';
import Dropdown, { DropdownProps } from 'antd/es/dropdown/dropdown';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@/components/icon';

import userService from '@/api/user';
import { useLoginStateContext } from '@/context/LoginStateProvider';
import { useUserInfo, useUserActions } from '@/store/userStore';
import { useThemeToken } from '@/common/theme/hooks';

/** 用户头像点击下拉菜单 */
export default function UserAvatar() {
  const token = useThemeToken();
  const { username, email } = useUserInfo();
  const { clearUserInfoAndToken } = useUserActions();
  const { backToLogin } = useLoginStateContext();
  const { t } = useTranslation();
  const logoutMutation = useMutation(userService.logout);

  const logout = () => {
    try {
      logoutMutation.mutateAsync();
    } catch (error) {
      console.log(error);
    }
    clearUserInfoAndToken();
    backToLogin();
  };

  const contentStyle: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menuStyle: React.CSSProperties = {
    boxShadow: 'none',
  };

  const dropdownRender: DropdownProps['dropdownRender'] = (menu) => (
    <div style={contentStyle}>
      <div className="flex flex-col items-start p-4">
        <div>{username}</div>
        <div className="text-gray">{email}</div>
      </div>
      <Divider style={{ margin: 0 }} />
      {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
    </div>
  );

  const items: MenuProps['items'] = [
    { label: <NavLink to="/dashboard">{t('sys.menu.dashboard')}</NavLink>, key: '0' },
    { type: 'divider' },
    {
      label: (
        <button onClick={logout} className="font-bold text-orange">
          {t('sys.login.logout')}
        </button>
      ),
      key: '3',
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']} dropdownRender={dropdownRender}>
      <IconButton className="h-10 w-10 transform-none px-0 hover:scale-105">
        <img
          className="h-8 w-8 rounded-full"
          src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg"
          alt=""
        />
      </IconButton>
    </Dropdown>
  );
}
