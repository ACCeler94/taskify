export type TaskStatus = 'todo' | 'inProgress' | 'done';

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  desc: string;
}

export interface Column {
  title: string;
  status: TaskStatus;
  dotColor: string;
}
