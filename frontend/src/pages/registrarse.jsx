
    import "../styles/pages/registro.css";

export default function Registro() {
  return (
    <div className="login-page">
      <main className="login-main">
        <div className="login-container">
          <section className="login-card">
            <header className="login-header">
              <div className="login-logo">SG</div>
              <h1 className="login-title">Registro</h1>
              <p className="login-subtitle">
                Creá tu cuenta de productor
              </p>
            </header>

            <form className="login-form">
              <div className="form-group">
                <label className="form-label" htmlFor="nombre">
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  className="form-input"
                  placeholder="Ingrese su nombre"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="codigo">
                  Código de productor
                </label>
                <input
                  id="codigo"
                  name="codigo"
                  className="form-input"
                  placeholder="Ingrese su código"
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
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="form-input"
                  placeholder="********"
                />
              </div>

              <button className="btn-login" type="submit">
                Registrarse
              </button>

              <div className="login-form-footer">
                <p>¿Ya tenés cuenta?</p>
                 <button type="button" className="link-recovery" onClick={() => setCurrentPage("login")}  >
                         Iniciar sesión
                  </button>
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
