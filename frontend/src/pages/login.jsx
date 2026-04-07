import "../styles/pages/registro.css";
import Header from "../components/header.jsx";
import { useState } from "react";
import * as mockApi from "../services/mockApi.js";

export default function Registro({ setCurrentPage }) {
  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await mockApi.registro(nombre, codigo, email, password);
      setSuccess(true);
      
      // Ir al login despues de 2 segundos
      setTimeout(() => {
        setCurrentPage("login");
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      <div className="login-page">
        <main className="login-main">
          <div className="login-container">
            <section className="login-card">
              <header className="login-header">
                <div className="login-logo">SG</div>
                <h1 className="login-title">Registro</h1>
                <p className="login-subtitle">Crea tu cuenta de productor</p>
              </header>

              {success ? (
                <div className="login-success">
                  <p>Cuenta creada exitosamente!</p>
                  <p className="login-success__sub">Redirigiendo al login...</p>
                </div>
              ) : (
                <form className="login-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="nombre">
                      Nombre completo
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      className="form-input"
                      placeholder="Ingresa tu nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="codigo">
                      Codigo de productor
                    </label>
                    <input
                      id="codigo"
                      name="codigo"
                      className="form-input"
                      placeholder="Ingresa tu codigo"
                      value={codigo}
                      onChange={(e) => setCodigo(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="ejemplo@mail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="password">
                      Contrasena
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="form-input"
                      placeholder="********"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  {error && <p className="login-error">{error}</p>}

                  <button
                    className="btn-login"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="loading-spinner" />
                    ) : (
                      "Registrarse"
                    )}
                  </button>

                  <div className="login-form-footer">
                    <p>Ya tienes cuenta?</p>
                    <button
                      type="button"
                      className="link-recovery"
                      onClick={() => setCurrentPage("login")}
                    >
                      Iniciar sesion
                    </button>
                  </div>
                </form>
              )}

              <footer className="login-footer">
                <p className="login-footer-text">
                  Sistema de Gestion de Seguros v1.0
                </p>
              </footer>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
