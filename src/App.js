import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import EmployeeHomepage from "./components/employee/EmployeeHomepage";
import EmployeerHomepage from "./components/employeer/EmployeerHomepage";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} exact/>
        <Route path="/employee_homepage" element={<EmployeeHomepage/>} exact/>
        <Route path="/employeer_homepage" element={<EmployeerHomepage/>} exact/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
