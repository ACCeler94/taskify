import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { data } from '../../../API/data';
import type { EditTaskPayload, Task } from '../../../types/types';
import { v4 as uuid } from 'uuid';

const initialState: Task[] = data;

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, 'createdAt' | 'id'>>) => {
      state.push({
        ...action.payload,
        createdAt: new Date().toISOString(),
        id: uuid(),
      });
    },
    editTask: (state, action: PayloadAction<EditTaskPayload>) => {
      const { id, ...editData } = action.payload;
      const task = state.find((t) => t.id === id);
      if (task) {
        Object.assign(task, editData);
      }
    },
    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
