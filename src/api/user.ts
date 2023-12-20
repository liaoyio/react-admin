import http from '../utils/request';

import { UserInfo, UserToken } from '#/entity';

export interface SignInReq {
  username: string;
  password: string;
}
export type SignInRes = UserToken & { user: UserInfo };

enum Api {
  SignIn = '/api/auth/signin',
  SignUp = '/auth/signup',
  LouOut = '/auth/logout',
  Refresh = '/auth/refresh',
  User = '/user/',
}

const signin = (data: SignInReq) => http.post<SignInRes>({ url: Api.SignIn, data });

const findById = (id: string) => http.get({ url: `${Api.User}${id}` });

export default {
  signin,
  findById,
};
