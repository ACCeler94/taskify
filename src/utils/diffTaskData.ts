import type { EditTaskInput } from "../schemas/task.schema";
import type { Task } from "../types/types";

// Diffing the data might be overkill for Redux but partial updates allow for sending less data in case of a real API
export const diffTaskData = (editData: EditTaskInput, taskData: Task) => {
  const diffedData: Partial<EditTaskInput> = {};
  if (editData.title !== taskData.title) diffedData.title = editData.title;
  if (editData.desc !== taskData.desc) diffedData.desc = editData.desc;
  if (editData.status !== taskData.status) diffedData.status = editData.status;

  return diffedData;
};
