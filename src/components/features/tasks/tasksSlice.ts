import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { data } from "../../../API/data";
import type {
  CreateTaskInput,
  EditTaskInput,
} from "../../../schemas/task.schema";
import type { Task } from "../../../types/types";

export const initialState: Task[] = data;
type EditTaskPayload = EditTaskInput & { id: string };

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<CreateTaskInput>) => {
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
    deleteTask: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((t) => t.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
