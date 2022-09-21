import "./App.css";
import Firstpage from "./Firstpage/Firstpage";
import News from "./news/news"
import Service from "./Service/Service"
import { Routes, Route, Navigate ,BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/Aggrajan-Sewak-Media" element={<Firstpage/>} />
        <Route path="/News" element={<News/>} />
        <Route path="/Service" element={<Service/>} />
        <Route path="/*" element={<Navigate to="/Aggrajan-Sewak-Media"/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;