import { Route, Routes } from "react-router";
import Navbar from "./components/layout/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import NewTask from "./pages/NewTask/NewTask";
import TaskDetails from "./pages/TaskDetails/TaskDetails";
import EditTask from "./pages/EditTask/EditTask";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="tasks">
          <Route path=":id/edit" element={<EditTask />} />
          <Route path=":id" element={<TaskDetails />} />
          <Route path="add" element={<NewTask />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
