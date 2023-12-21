import { useNavigate } from 'react-router-dom';
import { create } from 'zustand';

import userApi, { SignInReq, SignInRes } from '@/api/user';
import { getItem, removeItem, setItem } from '@/utils/storage';

import { UserToken, UserInfo } from '#/entity';
import { StorageEnum } from '#/enum';
import { useMutation } from '@tanstack/react-query';

type UserStore = {
  userInfo: Partial<UserInfo>;
  userToken: UserToken;
  actions: {
    setUserInfo: (userInfo: UserInfo) => void;
    setUserToken: (token: UserToken) => void;
    clearUserInfoAndToken: () => void;
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
    clearUserInfoAndToken() {
      removeItem(StorageEnum.User);
      removeItem(StorageEnum.Token);
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
    // const res = await signInMutation.mutateAsync(data);
    const { user, accessToken, refreshToken } = res;
    setUserToken({ accessToken, refreshToken });
    setUserInfo(user);
    navigatge('/dashboard', { replace: true });
  };
  return signIn;
};
