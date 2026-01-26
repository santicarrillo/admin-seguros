import "../styles/pages/login.css";
import Header from "../components/header.jsx";
import { useState } from "react";

export default function Login({ setCurrentPage, setIsAuth, setUser }) {
  const [codigo, setCodigo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          codigo,
          password,
        }),
      });

      if (!res.ok) {
        throw new Error("Código o contraseña incorrectos");
      }

      const data = await res.json();

      // Guardamos productor en estado global
      setUser(data.productor);
      setIsAuth(true);

      // (opcional) persistencia simple
      localStorage.setItem(
        "productor",
        JSON.stringify(data.productor)
      );

      // Navegamos al home
      setCurrentPage("home");
    } catch (err) {
      setError(err.message);
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
                <h1 className="login-title">Iniciar sesión</h1>
                <p className="login-subtitle">
                  Accedé con tu código de productor
                </p>
              </header>

              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Código productor</label>
                  <input
                    className="form-input"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {error && (
                  <p className="login-error">{error}</p>
                )}

                <button className="btn-login" type="submit">
                  Iniciar sesión
                </button>

                <p className="registrarse-text">
                  ¿No tenés cuenta?
                  <button
                    type="button"
                    className="link-recovery"
                    onClick={() => setCurrentPage("registro")}
                  >
                    Registrate
                  </button>
                </p>
              </form>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
