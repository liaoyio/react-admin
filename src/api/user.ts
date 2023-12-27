import http from '@/utils/request';
import { UserInfo, UserToken } from '#/entity';

export interface SignInReq {
  username: string;
  password: string;
}

export interface SignUpReq extends SignInReq {
  email: string;
}

export type SignInRes = UserToken & { user: UserInfo };

const sign = (data: SignInReq) => http.post<SignInRes>({ url: '/auth/signin', data });
const signup = (data: SignUpReq) => http.post<SignInRes>({ url: '/auth/signup', data });
const logout = () => http.get({ url: '/auth/logout' });
const findById = (id: string) => http.get<UserInfo[]>({ url: `/users/id` });

export default {
  sign,
  signup,
  findById,
  logout,
};
