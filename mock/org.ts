import { MockMethod } from 'vite-plugin-mock';
import { ORG_LIST } from './_db';

export default [
  {
    url: '/api/org',
    method: 'get',
    response: () => {
      return {
        status: 0,
        message: '',
        data: ORG_LIST,
      };
    },
  },
] as MockMethod[];
