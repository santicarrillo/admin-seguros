import Header from "../components/header.jsx";
import "../styles/pages/home.css";

export default function Home({ setCurrentPage }) {
  return (
    <>
      <Header setCurrentPage={setCurrentPage} />

      <div className="home-page">
        <main className="home-main" aria-label="Inicio">
          <section className="home-hero" aria-label="Resumen principal">
            <div className="home-hero__text">
              <h1 className="home-hero__title">Panel de gestión</h1>
              <p className="home-hero__subtitle">
                Accesos rápidos y búsqueda general
              </p>
            </div>

            <div className="home-hero__actions">
              <button className="home-btn home-btn--primary" type="button">
                + Nuevo cliente
              </button>
              <button className="home-btn" type="button">
                + Nueva póliza
              </button>
            </div>
          </section>

          <div className="home-grid">
            {/* COLUMNA IZQUIERDA */}
            <section className="home-col">
              <div className="home-card home-card--enter">
                <h2 className="home-card__title">Búsqueda rápida</h2>

                <form className="home-search" role="search">
                  <label className="home-label" htmlFor="q">
                    Buscar por cliente, póliza o DNI
                  </label>

                  <div className="home-search__row">
                    <input
                      id="q"
                      name="q"
                      className="home-input"
                      placeholder="Ej: Juan Pérez / 30111222"
                      autoComplete="off"
                    />
                    <button
                      className="home-btn home-btn--primary"
                      type="submit"
                    >
                      Buscar
                    </button>
                  </div>
                </form>
              </div>

              <div
                className="home-card home-card--enter"
                style={{ animationDelay: "60ms" }}
              >
                <h2 className="home-card__title">Módulos</h2>

                <nav className="home-modules" aria-label="Accesos rápidos">
                  <button className="home-module" type="button">
                    <span className="home-module__title">Clientes</span>
                    <span className="home-module__desc">
                      Alta, baja y edición
                    </span>
                  </button>

                  <button className="home-module" type="button">
                    <span className="home-module__title">Empresas</span>
                    <span className="home-module__desc">
                      Compañías y planes
                    </span>
                  </button>

                  <button className="home-module" type="button">
                    <span className="home-module__title">Pólizas</span>
                    <span className="home-module__desc">
                      Vigencias y cuotas
                    </span>
                  </button>

                  <button className="home-module" type="button">
                    <span className="home-module__title">Pagos</span>
                    <span className="home-module__desc">
                      Deudas y vencimientos
                    </span>
                  </button>
                </nav>
              </div>
            </section>

            {/* ASIDE */}
            <aside className="home-aside">
              <div
                className="home-card home-card--enter"
                style={{ animationDelay: "120ms" }}
              >
                <h2 className="home-card__title">Resumen</h2>

                <div className="home-kpis">
                  <div className="home-kpi">
                    <p className="home-kpi__label">Clientes</p>
                    <p className="home-kpi__value">—</p>
                  </div>

                  <div className="home-kpi">
                    <p className="home-kpi__label">Pólizas activas</p>
                    <p className="home-kpi__value">—</p>
                  </div>

                  <div className="home-kpi">
                    <p className="home-kpi__label">Pagos pendientes</p>
                    <p className="home-kpi__value">—</p>
                  </div>
                </div>
              </div>

              <div
                className="home-card home-card--enter"
                style={{ animationDelay: "180ms" }}
              >
                <h2 className="home-card__title">Actividad</h2>

                <ul className="home-activity">
                  <li className="home-activity__item">
                    <span className="home-dot" aria-hidden="true" />
                    <span className="home-activity__text">
                      Sin actividad reciente
                    </span>
                  </li>
                </ul>

                <p className="home-muted">
                  (Luego lo conectamos con la API)
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
