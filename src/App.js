import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import Homepage from "./components/Homepage";

function App() {

  const domain="dev-8io25ngx3xtfx5n2.us.auth0.com"
  const clientId="JvjXdMrJMnGWtJNqsG5AKNzeNBkWhQNm"

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
          </Routes>
        </Auth0Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
