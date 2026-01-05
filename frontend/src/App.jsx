import "./styles/index.css";
import Login from "./pages/login.jsx";
import Registro from "./pages/registrarse.jsx";
import Home from "./pages/home.jsx";
import { useState } from "react";

function App() {
  const [currentPage] = useState("login");

  return (
    <>
      <p style={{ padding: 16 }}>App render OK</p>

      {currentPage === "login" && <Login />}
      {currentPage === "registro" && <Registro />}
      {currentPage === "home" && <Home />}
    </>
  );
}

export default App;
