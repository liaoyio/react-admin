import { MockMethod } from 'vite-plugin-mock';
import { USER_LIST } from './_db';

export default [
  {
    url: '/api/auth/signin',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body;
      const user = USER_LIST.find((item) => item.username === username);
      if (!user || user.password !== password) {
        return {
          status: 10001,
          message: 'Incorrect username or password.',
        };
      }
      return {
        status: 0,
        message: '',
        data: {
          user,
          accessToken: '@id',
          refreshToken: '@id',
        },
      };
    },
  },
  {
    url: '/api/users/id',
    method: 'get',
    response: () => {
      return {
        status: 0,
        message: '',
        data: {
          'rows|10-20': [
            {
              'id|+1': '1',
              fullname: '@cname',
              avatar: '@image(100x100)',
              email: '@email',
              'age|16-36': 18,
              address: '@county(true)',
              'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师'],
            },
          ],
        },
      };
    },
  },
] as MockMethod[];
