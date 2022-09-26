import "./App.css";
import Firstpage from "./Firstpage/Firstpage";
import News from "./news/news"
import Service from "./Service/Service"
import Fourthpage from "./Fourthpage/Fourthpage"
import User from "./User/User";
import { Routes, Route, Navigate ,BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/Aggrajan-Sewak-Media" element={<Firstpage/>} />
        <Route path="/News" element={<News/>} />
        <Route path="/Service" element={<Service/>} />
        <Route path="/Fourthpage" element={<Fourthpage/>} />
        <Route path="/User" element={<User/>} />
        <Route path="/*" element={<Navigate to="/Aggrajan-Sewak-Media"/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;