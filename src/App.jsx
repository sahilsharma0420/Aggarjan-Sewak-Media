import "./App.css";
import Firstpage from "./Firstpage/Firstpage";
import Secondpage from "./Secondpage/Secondpage";
import { Routes, Route, Navigate ,BrowserRouter} from "react-router-dom";
import { DEFAULT_BREAKPOINTS } from "react-bootstrap/esm/ThemeProvider";
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/Aggrajan-Sewak-Media" element={<Firstpage/>} />
        <Route path="/secondpage" element={<Secondpage/>} />
        <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;