import http from '../utils/request';

import { UserInfo, UserToken } from '#/entity';

export interface SignInReq {
  username: string;
  password: string;
}

export interface SignUpReq extends SignInReq {
  email: string;
}

export type SignInRes = UserToken & { user: UserInfo };

enum Api {
  SignIn = '/auth/signin',
  SignUp = '/auth/signup',
  Logout = '/auth/logout',
  Refresh = '/auth/refresh',
  User = '/user/',
}

const signin = (data: SignInReq) => http.post<SignInRes>({ url: Api.SignIn, data });

const signup = (data: SignUpReq) => http.post<SignInRes>({ url: Api.SignUp, data });
const logout = () => http.get({ url: Api.Logout });
const findById = (id: string) => http.get({ url: `${Api.User}${id}` });

export default {
  signin,
  signup,
  findById,
  logout,
};
