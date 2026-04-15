// frontend/src/pages/login.jsx
import Header from "../components/header.jsx";
import { useState } from "react";
import * as authService from "../services/authserve.js";
import  "../styles/pages/login.css";

export default function Login({ setCurrentPage, setIsAuth, setUser }) {
  const [matricula, setMatricula] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorUsuario, setErrorUsuario] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setErrorUsuario(false);
    setErrorPassword(false);
    setLoading(true);

    const result = await authService.login(matricula, password);

    if (result.success) {
      // Redirigir al home
      setIsAuth(true);
      setUser(result.user);
      setCurrentPage("home");
    } else {
      setError(result.error);
      if (result.error === "Usuario incorrecto") {
        setErrorUsuario(true);
      } else if (result.error === "Contraseña incorrecta") {
        setErrorPassword(true);
      }
    }

    setLoading(false);
  };

  return (
    <div className="login-page">
      <Header />
      
      <main className="login-main">
        <div className="login-container">
          <div className="login-card">
            <div className="login-header">
              <h2 className="login-title">Iniciar Sesión</h2>
              <p className="login-subtitle">Sistema de Gestión de Seguros</p>
            </div>

            {error && (
              <div className="alert alert-error">
                {error}
              </div>
            )}

            <div className="login-form">
              <div className="form-group">
                <label htmlFor="matricula" className="form-label">
                  Número de Matrícula
                </label>
                <input
                  type="text"
                  id="matricula"
                  className={`form-input ${errorUsuario ? 'input-error' : ''}`}
                  value={matricula}
                  onChange={(e) => setMatricula(e.target.value)}
                  placeholder="Ingrese su matrícula"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  className={`form-input ${errorPassword ? 'input-error' : ''}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingrese su contraseña"
                  disabled={loading}
                />
              </div>

              <button
                onClick={handleLogin}
                className="btn-login"
                disabled={loading}
              >
                {loading ? "Iniciando sesión..." : "Iniciar sesión"}
              </button>

              <div className="login-form-footer">
                <a href="#" className="link-recovery">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}