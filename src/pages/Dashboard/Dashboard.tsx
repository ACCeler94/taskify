import SortMenu from "../../components/common/SortMenu/SortMenu";
import SearchBar from "../../components/features/filter/SearchBar/SearchBar";
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
      <div className="mt-5 mb-10 flex items-center justify-between">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <div className="flex gap-8">
          <SearchBar />
          <SortMenu />
        </div>
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
