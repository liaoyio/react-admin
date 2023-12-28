import { UserInfo, UserToken } from '#/entity';
import { USER_LIST } from './_db';
export interface SignInReq {
  username: string;
  password: string;
}

export interface SignUpReq extends SignInReq {
  email: string;
}

export type SignInRes = UserToken & { user: UserInfo };

export function usersLogin(body: SignInReq) {
  const { username, password } = body;
  const user = USER_LIST.find((item) => item.username === username);
  if (!user || user.password !== password) {
    return { status: 10001, message: 'Incorrect username or password.' };
  }
  return {
    status: 0,
    message: '',
    data: { user, accessToken: '@id_11123', refreshToken: '@id_67745454545jip' },
  };
}
