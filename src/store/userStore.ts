import { useNavigate } from 'react-router-dom';
import { create } from 'zustand';

import userApi, { SignInReq, SignInRes } from '@/api/user';
import { getItem, setItem } from '@/utils/storage';

import { UserToken, UserInfo } from '#/entity';
import { StorageEnum } from '#/enum';
import { useMutation } from '@tanstack/react-query';

type UserStore = {
  userInfo: Partial<UserInfo>;
  userToken: UserToken;
  actions: {
    setUserInfo: (userInfo: UserInfo) => void;
    setUserToken: (token: UserToken) => void;
  };
};

const useUserStore = create<UserStore>((set) => ({
  userInfo: getItem<UserInfo>(StorageEnum.User) || {},
  userToken: getItem<UserToken>(StorageEnum.Token) || {},
  actions: {
    setUserInfo: (userInfo) => {
      set({ userInfo });
      setItem(StorageEnum.User, userInfo);
    },
    setUserToken: (userToken) => {
      set({ userToken });
      setItem(StorageEnum.Token, userToken);
    },
  },
}));

export const useUserInfo = () => useUserStore((state) => state.userInfo);
export const useUserToken = () => useUserStore((state) => state.userToken);
export const useUserActions = () => useUserStore((state) => state.actions);

export const useSignIn = () => {
  const { setUserToken, setUserInfo } = useUserActions();
  // const signInMutation = useMutation(userApi.signin);
  const navigatge = useNavigate();

  const signIn = async (data: SignInReq) => {
    const res = await userApi.signin(data);
    /* TODO: remove
      let res: SignInRes = {
        user: { id: '111', email: 'demo@admin.com', password: '123', username: 'admin' },
        accessToken: 'admin',
        refreshToken: 'admin',
      };
      try {
        res = await signInMutation.mutateAsync(data);
      } catch (error) {
        console.log(error);
      }
    */
    const { user, accessToken, refreshToken } = res;
    setUserToken({ accessToken, refreshToken });
    setUserInfo(user);

    navigatge('/dashboard', { replace: true });
    return res;
  };
  return signIn;
};
