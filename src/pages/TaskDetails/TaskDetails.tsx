import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router";
import BackButton from "../../components/common/BackButton/BackButton";
import TaskMenu from "../../components/features/tasks/TaskMenu/TaskMenu";
import type { RootState } from "../../types/types";

const TaskDetails = () => {
  const { id } = useParams();
  const task = useSelector((state: RootState) =>
    state.tasks.find((t) => t.id === id),
  );
  const statuses = {
    todo: { title: "TO DO", dotColor: "#1E88E5" },
    inProgress: { title: "IN PROGRESS", dotColor: "#F5D04C" },
    done: { title: "DONE", dotColor: "#24C57A" },
  };
  const navigate = useNavigate();

  if (!task) {
    return <Navigate to="/not-found" replace />;
  }

  const { title, dotColor } = statuses[task.status];

  return (
    <main className="relative flex h-full flex-col items-center justify-center px-4">
      <BackButton />
      <div className="task-details min-h-1/3 w-full max-w-2xl rounded-xl bg-neutral-800 p-8 text-xl">
        <div className="task-details__header relative flex items-center justify-between">
          <h3 className="task-details__title text-2xl font-bold break-words">
            {task.title}
          </h3>
          <TaskMenu taskId={id!} onDelete={() => navigate("/")} />
        </div>

        <h4 className="task-details__status mt-0.5 flex items-center gap-0.5 text-sm font-light">
          Status:
          <svg
            className="status-dot"
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill={dotColor}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              ></path>
            </g>
          </svg>
          {title}
        </h4>

        <div className="task-details__content mt-6">
          <p className="task-details__description break-words whitespace-pre-wrap">
            {task.desc}
          </p>
        </div>
      </div>
    </main>
  );
};

export default TaskDetails;
