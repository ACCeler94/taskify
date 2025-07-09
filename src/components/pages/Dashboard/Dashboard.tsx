import TaskColumn from '../../features/TaskColumn/TaskColumn';

const Dashboard = () => {
  return (
    <main className='flex flex-col'>
      <h1 className='font-bold text-4xl my-5'>Dashboard</h1>
      <div className='grid grid-cols-3 flex-1'>
        <TaskColumn title='TO DO' dotColor='#1E88E5' />
        <TaskColumn title='IN PROGRESS' dotColor='#F5D04C' />
        <TaskColumn title='DONE' dotColor='#24C57A' />
      </div>
    </main>
  );
};

export default Dashboard;
