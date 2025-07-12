import type { Task } from "../types/types";

interface Args {
  sortingOrder: "asc" | "desc";
  tasks: Task[];
}

export const sortTasksByDate = ({ sortingOrder, tasks }: Args) => {
  const direction = sortingOrder === "asc" ? 1 : -1;
  return tasks
    .slice()
    .sort(
      (a, b) => direction * (Date.parse(a.createdAt) - Date.parse(b.createdAt)),
    );
};
