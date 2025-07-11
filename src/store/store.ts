import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../components/features/tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
