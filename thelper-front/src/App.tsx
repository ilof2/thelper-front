import { BrowserRouter, Route, Routes } from "react-router-dom";
import Documents from "./components/pages/documents/DocumentsList";
import NavBar from "./components/ui/NavBar/NavBar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import classNames from "classnames";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div
        className={classNames(
          "content",
          "transition-all",
          "ease-in",
          "duration-75"
        )}
      >
        <Routes>
          <Route path="/documents" element={<Documents />}></Route>

          <Route path="/home" element={<Home />}></Route>

          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
