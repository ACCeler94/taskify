import { useMemo } from "react";
import { useSelector } from "react-redux";
import type { RootState, TaskStatus } from "../../../../types/types";
import { sortTasksByDate } from "../../../../utils/sortTasksByDate";
import TaskCard from "../TaskCard/TaskCard";
import { selectTasksByStatus } from "../tasksSelectors";

type TasksColumnProps = {
  title: string;
  dotColor: string;
  status: TaskStatus;
};

const TasksColumn = ({ title, dotColor, status }: TasksColumnProps) => {
  const tasks = useSelector((state: RootState) =>
    selectTasksByStatus(state, status),
  );
  const sortingOrder = useSelector(
    (state: RootState) => state.filter.sortingOrder,
  );
  const query = useSelector((state: RootState) => state.filter.query);

  // Sorting and filtering
  const displayedTasks = useMemo(() => {
    const sorted = sortTasksByDate({ sortingOrder, tasks });

    if (!query) return sorted;

    return sorted.filter(
      (task) =>
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.desc.toLowerCase().includes(query.toLowerCase()),
    );
  }, [tasks, sortingOrder, query]);

  return (
    <section className="task-column col-auto mx-4 rounded-xl bg-neutral-900 p-5">
      <h2 className="column-title mb-8 flex items-center gap-4 text-lg font-semibold">
        <svg
          className="status-dot"
          width="18px"
          height="18px"
          viewBox="0 0 24 24"
          fill={dotColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
          />
        </svg>
        {title} ({displayedTasks.length})
      </h2>

      <ul className="task-list space-y-2">
        {displayedTasks.map((task) => (
          <li key={task.id}>
            <TaskCard {...task} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TasksColumn;
