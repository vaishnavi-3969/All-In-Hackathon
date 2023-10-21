import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import Homepage from "./components/Homepage";
import EmployeeHomepage from "./components/employee/EmployeeHomepage";
import EmployeerHomepage from "./components/employeer/EmployeerHomepage";
import EmployeerProfile from "./components/employeer/EmployeerProfile";
import EmployeeProfile from "./components/employee/EmployeeProfile";

function App() {

  const domain = "dev-8io25ngx3xtfx5n2.us.auth0.com"
  const clientId = "JvjXdMrJMnGWtJNqsG5AKNzeNBkWhQNm"

  return (
    <div>
      <BrowserRouter>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          redirectUri={window.location.origin}
        >
          <Routes>
            <Route path="/" element={<Homepage />} exact />
            <Route path="/employee_homepage" element={<EmployeeHomepage />} exact />
            <Route path="/employeer_homepage" element={<EmployeerHomepage />} exact />
            <Route path="/employee_profile" element={<EmployeeProfile />} exact />
            <Route path="/employeer_profile" element={<EmployeerProfile />} exact />
          </Routes>
        </Auth0Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
