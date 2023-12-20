import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/v1/me',
    method: 'get',
    response: () => {
      return {
        status: 0,
        message: '',
        data: {
          id: 1,
          name: 'Niki',
        },
      };
    },
  },
  {
    url: '/api/todos',
    method: 'get',
    response: () => {
      return {
        status: 0,
        message: '',
        data: [
          {
            userId: 123,
            id: 4324,
            title: 'ewrwerwe',
            completed: true,
          },
        ],
      };
    },
  },
] as MockMethod[];
