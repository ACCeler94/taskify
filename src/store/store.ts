import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../components/features/tasks/tasksSlice";
import filterReducer from "../components/features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
});
