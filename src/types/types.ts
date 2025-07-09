export type TaskStatus = 'todo' | 'inProgress' | 'done';

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  desc: string;
  createdAt: string; // ISO string
}

export interface Column {
  title: string;
  status: TaskStatus;
  dotColor: string;
}

// Only id is required to allow partial updates
export interface EditTaskPayload {
  id: string;
  title?: string;
  desc?: string;
  status?: TaskStatus;
}
