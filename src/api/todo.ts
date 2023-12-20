import http from '../utils/request';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

enum Api {
  Todos = '/api/todos',
}

const getTodos = () => http.get({ url: Api.Todos });
const addTodo = (params: Todo) => http.post({ url: Api.Todos, params });

export default {
  getTodos,
  addTodo,
};
