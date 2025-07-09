import type { Task, TaskStatus } from '../../../types/types';
import TaskCard from '../Task/TaskCard/TaskCard';

const TaskColumn = ({
  title,
  dotColor,
  tasks,
}: {
  title: string;
  dotColor: string;
  tasks: Task[];
  status: TaskStatus;
}) => {
  return (
    <section className='task-column bg-neutral-900 mx-4 rounded-xl p-5'>
      <h2 className='column-title flex gap-4 items-center text-lg font-semibold'>
        <svg
          className='status-dot'
          width='18px'
          height='18px'
          viewBox='0 0 24 24'
          fill={dotColor}
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
          <g id='SVGRepo_iconCarrier'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z'
            ></path>
          </g>
        </svg>
        {title}
      </h2>

      <ul className='task-list space-y-2'>
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskCard {...task} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TaskColumn;
