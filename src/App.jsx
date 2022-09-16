import "./App.css";
import Firstpage from "./Firstpage/Firstpage";
import Secondpage from "./Secondpage/Secondpage";
import { Routes, Route, Navigate ,BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/Aggrajan-Sewak-Media" element={<Firstpage/>} />
        <Route path="/secondpage" element={<Secondpage/>} />
        <Route path="/*" element={<Navigate to="/Aggrajan-Sewak-Media"/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;