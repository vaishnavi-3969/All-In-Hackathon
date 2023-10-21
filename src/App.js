import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} exact/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
