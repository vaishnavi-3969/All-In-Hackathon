import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import Homepage from "./components/Homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import EmployeeHomepage from "./components/employee/EmployeeHomepage";
import EmployerHomepage from "./components/employer/EmployerHomepage";
import EmployerProfile from "./components/employer/EmployerProfile";
import EmployeeProfile from "./components/employee/EmployeeProfile";
import UserType from "./components/UserType";
import Error from "./components/Error";

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
            <Route path="/" element={<Homepage />} />
            <Route path='*' element={<Error />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Homepage />} exact />
            <Route path="/user_type" element={<UserType />} exact />
            <Route path="/employee_homepage" element={<EmployeeHomepage />} exact />
            <Route path="/employer_homepage" element={<EmployerHomepage />} exact />
            <Route path="/employee_profile" element={<EmployeeProfile />} exact />
            <Route path="/employer_profile" element={<EmployerProfile />} exact />
          </Routes>
        </Auth0Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
