import { createSelector } from "reselect";
import type { RootState, Task } from "../../../types/types";

// Custom selectors to select tasks by status
const selectTasks = (state: RootState): Task[] => state.tasks;
const selectStatus = (
  _state: RootState,
  status: Task["status"],
): Task["status"] => status;

export const selectTasksByStatus = createSelector(
  [selectTasks, selectStatus],
  (tasks, status) => tasks.filter((task) => task.status === status),
);
