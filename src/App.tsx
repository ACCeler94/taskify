import { Navigate, Route, Routes } from "react-router";
import Navbar from "./components/layout/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import NewTask from "./pages/NewTask/NewTask";
import TaskDetails from "./pages/TaskDetails/TaskDetails";
import EditTask from "./pages/EditTask/EditTask";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="tasks">
          <Route index element={<Navigate to="/" replace />} />
          <Route path=":id/edit" element={<EditTask />} />
          <Route path=":id" element={<TaskDetails />} />
          <Route path="add" element={<NewTask />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
