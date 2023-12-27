export enum TaskPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

export enum TaskTag {
  frontend = 'FrontEnd',
  backend = 'BackEnd',
  fullstack = 'FullStack',
  DevOps = 'DevOps',
  AI = 'AI',
  DBA = 'DBA',
  UI = 'UI',
  UE = 'UE',
  QA = 'QA',
}

export type TaskComment = {
  username: string;
  avatar: string;
  content: string;
  time: Date;
};

export type Task = {
  id: string;
  title: string;
  /** avatar */
  reporter: string;
  priority: TaskPriority;
  /** avatar array */
  assignee?: string[];
  tags?: string[];
  date?: Date;
  description?: string;
  comments?: TaskComment[];
  content?: string;
  attachments?: string[];
};

export type Tasks = Record<string, Task>;

export type Column = {
  id: string;
  title: string;
  taskIds: string[];
};

export type Columns = Record<string, Column>;

export type DndDataType = {
  tasks: Tasks;
  columns: Columns;
  columnOrder: string[];
};

export enum DragType {
  COLUMN = 'column',
  TASK = 'task',
}
