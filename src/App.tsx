import { Route, Routes } from "react-router";
import Navbar from "./components/layout/Navbar/Navbar";
import Dashboard from "./components/pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
