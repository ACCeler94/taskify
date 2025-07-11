import { Route, Routes } from "react-router";
import Navbar from "./components/layout/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import TaskDetails from "./pages/TaskDetails/TaskDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="tasks">
          <Route path=":id" element={<TaskDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
