import { useEffect, useState } from "react";
import SortMenu from "../../components/features/filter/SortMenu/SortMenu";
import SearchBar from "../../components/features/filter/SearchBar/SearchBar";
import TasksColumn from "../../components/features/tasks/TasksColumn/TasksColumn";
import type { Column } from "../../types/types";

const Dashboard = () => {
  const columns: Column[] = [
    { title: "TO DO", status: "todo", dotColor: "#1E88E5" },
    { title: "IN PROGRESS", status: "inProgress", dotColor: "#F5D04C" },
    { title: "DONE", status: "done", dotColor: "#24C57A" },
  ];

  const [isMobileView, setIsMobileView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1100);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleColumns = isMobileView ? [columns[activeIndex]] : columns;

  return (
    <main className="flex flex-col">
      <div className="mt-5 mb-10 flex flex-col flex-wrap items-start justify-between gap-4 md:flex-row md:items-center">
        <h1 className="text-3xl font-bold sm:text-4xl">Dashboard</h1>
        <div className="flex w-full flex-col gap-4 md:w-fit md:flex-row">
          <SearchBar />
          <SortMenu />
        </div>
      </div>

      {isMobileView && (
        <div className="mb-4 flex items-center justify-start gap-3">
          <label htmlFor="column-select" className="text-lg font-medium">
            Column:
          </label>
          <select
            id="column-select"
            className="rounded-md bg-neutral-800 px-3 py-2 text-sm"
            value={activeIndex}
            onChange={(e) => setActiveIndex(Number(e.target.value))}
          >
            {columns.map((column, index) => (
              <option key={column.status} value={index}>
                {column.title}
              </option>
            ))}
          </select>
        </div>
      )}

      <div
        className={`grid flex-1 gap-6 ${
          isMobileView ? "grid-cols-1" : "grid-cols-3"
        }`}
      >
        {visibleColumns.map(({ title, status, dotColor }) => (
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
