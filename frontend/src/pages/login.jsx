import "../styles/pages/login.css";

export default function Login({setCurrentPage}) {
  return (
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

            <form className="login-form">
              <div className="form-group">
                <label className="form-label" htmlFor="codigo">
                  Código productor
                </label>
                <input
                  id="codigo"
                  name="codigo"
                  className="form-input"
                  placeholder="Ingrese su código"
                  autoComplete="username"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  className="form-input"
                  type="password"
                  placeholder="Ingrese su contraseña"
                  autoComplete="current-password"
                />
              </div>

              <button className="btn-login" type="submit"  onClick={()=>setCurrentPage("home")}>
                Iniciar sesión
              </button>

              <div className="login-form-footer">
                <button className="link-recovery" type="button">
                  ¿No recordás tu mail?
                </button>
              </div>
              <div>
                <p className="registrarse-text">
                  ¿No tenés cuenta? 
                  <button type="button" className="link-recovery" onClick={() => setCurrentPage("registro")}  >
                        Registrate
                  </button>
                </p>
              </div>
            </form>

            <footer className="login-footer">
              <p className="login-footer-text">
                Sistema de Gestión de Seguros v1.0
              </p>
            </footer>
          </section>
        </div>
      </main>
    </div>
  );
}
