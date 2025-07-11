import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../components/features/Tasks/tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
