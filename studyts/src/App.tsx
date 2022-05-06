import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./home";
import Axios from "./routers/axios";
import Class from "./routers/class";
import TsFuction from "./routers/function";
import Interfaces from "./routers/interfaces";
import Polymorphism from "./routers/Polymorphism";
import TsType from "./routers/type";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/type" element={<TsType />} />
        <Route path="/fuction" element={<TsFuction />} />
        <Route path="/axios" element={<Axios />} />
        <Route path="/class" element={<Class />} />
        <Route path="/interfaces" element={<Interfaces />} />
        <Route path="/polymorphism" element={<Polymorphism />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
