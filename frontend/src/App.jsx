import "./styles/index.css";
import Login from "./pages/login.jsx";
import Registro from "./pages/registrarse.jsx";
import Home from "./pages/home.jsx";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <>
      {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
      {currentPage === "registro" && <Registro setCurrentPage={setCurrentPage} />}
      {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
    </>
  );
}

export default App;
