import type { Task } from "../../../../types/types";
import TaskMenu from "../../../common/TaskMenu/TaskMenu";

const TaskCard = ({ id, desc, title }: Task) => {
  return (
    <div className="task-card mb-4 rounded-xl bg-neutral-800 p-5">
      <div className="task-card__header relative flex justify-between">
        <h3 className="task-card__title text-lg font-bold">{title}</h3>
        <TaskMenu taskId={id} />
      </div>
      <div className="task-card__content mt-2">
        <p className="task-card__description">{desc}</p>
      </div>
    </div>
  );
};

export default TaskCard;
