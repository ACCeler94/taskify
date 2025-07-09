import { data } from '../../../API/data';
import type { Column, Task } from '../../../types/types';
import TasksColumn from '../../features/Tasks/TasksColumn/TasksColumn';

const Dashboard = () => {
  // [TODO - Put data in a redux initial state]
  const tasks: Task[] = data;

  const columns: Column[] = [
    { title: 'TO DO', status: 'todo', dotColor: '#1E88E5' },
    { title: 'IN PROGRESS', status: 'inProgress', dotColor: '#F5D04C' },
    { title: 'DONE', status: 'done', dotColor: '#24C57A' },
  ];

  return (
    <main className='flex flex-col'>
      <h1 className='font-bold text-4xl my-5'>Dashboard</h1>
      <div className='grid grid-cols-3 flex-1 gap-4'>
        {columns.map(({ title, status, dotColor }) => (
          <TasksColumn
            key={status}
            title={title}
            dotColor={dotColor}
            status={status}
            tasks={tasks.filter((task) => task.status === status)}
          />
        ))}
      </div>
    </main>
  );
};
export default Dashboard;
