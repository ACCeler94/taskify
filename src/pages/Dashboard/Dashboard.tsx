import SortMenu from "../../components/common/SortMenu/SortMenu";
import TasksColumn from "../../components/features/tasks/TasksColumn/TasksColumn";
import type { Column } from "../../types/types";

const Dashboard = () => {
  const columns: Column[] = [
    { title: "TO DO", status: "todo", dotColor: "#1E88E5" },
    { title: "IN PROGRESS", status: "inProgress", dotColor: "#F5D04C" },
    { title: "DONE", status: "done", dotColor: "#24C57A" },
  ];

  return (
    <main className="flex flex-col">
      <div className="flex justify-between">
        <h1 className="my-5 text-4xl font-bold">Dashboard</h1>
        <SortMenu />
      </div>

      <div className="grid flex-1 grid-cols-3 gap-3">
        {columns.map(({ title, status, dotColor }) => (
          <TasksColumn
            key={status}
            title={title}
            dotColor={dotColor}
            status={status}
          />
        ))}
      </div>
    </main>
  );
};
export default Dashboard;
