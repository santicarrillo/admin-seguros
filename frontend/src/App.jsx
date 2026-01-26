import { useState,useEffect } from "react";
import "./styles/index.css";

import Login from "./pages/login.jsx";
import Registro from "./pages/registrarse.jsx";
import Home from "./pages/home.jsx";

function App() {
  // Navegación
  const [currentPage, setCurrentPage] = useState("login");

  // Auth
  const [isAuth, setIsAuth] = useState(false);

  // Usuario logueado (productor)
  const [user, setUser] = useState(null);

  // Logout global
  const handleLogout = () => {
    setIsAuth(false);
    setUser(null);
    setCurrentPage("login");
  };
useEffect(() => {
  const saved = localStorage.getItem("productor");
  if (saved) {
    setUser(JSON.parse(saved));
    setIsAuth(true);
    setCurrentPage("home");
  }
}, []);
  return (
    <>
      {currentPage === "login" && (
        <Login
          setCurrentPage={setCurrentPage}
          setIsAuth={setIsAuth}
          setUser={setUser}
        />
      )}

      {currentPage === "registro" && (
        <Registro setCurrentPage={setCurrentPage} />
      )}

      {currentPage === "home" && isAuth && (
        <Home
          user={user}
          onLogout={handleLogout}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
}

export default App;
