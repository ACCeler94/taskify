import { Link } from "react-router";
import type { Task } from "../../../../types/types";
import TaskMenu from "../../../common/TaskMenu/TaskMenu";

const TaskCard = ({ id, desc, title }: Task) => {
  return (
    <Link
      to={`/tasks/${id}`}
      className="task-card mb-4 block rounded-xl bg-neutral-800 p-5"
    >
      <div className="task-card__header relative flex justify-between text-lg">
        <h3 className="task-card__title font-bold break-words">{title}</h3>
        <TaskMenu taskId={id} />
      </div>
      <div className="task-card__content mt-2">
        <p className="task-card__description break-words whitespace-pre-wrap">
          {desc}
        </p>
      </div>
    </Link>
  );
};

export default TaskCard;
