import Header from "../components/Header.jsx";
import "../styles/pages/home.css";

export default function Home({ setCurrentPage }) {
  return (
    <div className="home-page">
      <Header setCurrentPage={setCurrentPage} title="Inicio" />

      <main className="home-main" aria-label="Inicio">
        <section className="home-hero" aria-label="Resumen principal">
          <div className="home-hero__text">
            <h1 className="home-hero__title">Panel de gestión</h1>
            <p className="home-hero__subtitle">
              Accesos rápidos + búsqueda. Después lo conectamos con la API.
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
          <section className="home-col">
            <div className="home-card home-card--enter">
              <h2 className="home-card__title">Búsqueda rápida</h2>

              <form className="home-search" role="search">
                <label className="home-label" htmlFor="q">
                  Buscar por cliente, póliza, DNI o patente
                </label>

                <div className="home-search__row">
                  <input
                    id="q"
                    name="q"
                    className="home-input"
                    placeholder="Ej: Juan Pérez / 30111222 / ABC123"
                    autoComplete="off"
                  />
                  <button className="home-btn home-btn--primary" type="submit">
                    Buscar
                  </button>
                </div>
              </form>
            </div>

            <div className="home-card home-card--enter" style={{ animationDelay: "60ms" }}>
              <h2 className="home-card__title">Módulos</h2>

              <nav className="home-modules" aria-label="Accesos rápidos">
                <button className="home-module" type="button">
                  <span className="home-module__title">Clientes</span>
                  <span className="home-module__desc">Alta, baja, edición y filtros</span>
                </button>

                <button className="home-module" type="button">
                  <span className="home-module__title">Empresas</span>
                  <span className="home-module__desc">Compañías y planes asociados</span>
                </button>

                <button className="home-module" type="button">
                  <span className="home-module__title">Pólizas</span>
                  <span className="home-module__desc">Vigencia, cuotas y vencimientos</span>
                </button>

                <button className="home-module" type="button">
                  <span className="home-module__title">Pagos</span>
                  <span className="home-module__desc">Deudas, historial y alertas</span>
                </button>
              </nav>
            </div>
          </section>

          <aside className="home-aside">
            <div className="home-card home-card--enter" style={{ animationDelay: "120ms" }}>
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

            <div className="home-card home-card--enter" style={{ animationDelay: "180ms" }}>
              <h2 className="home-card__title">Actividad</h2>
              <ul className="home-activity">
                <li className="home-activity__item">
                  <span className="home-dot" aria-hidden="true" />
                  <span className="home-activity__text">Sin actividad por ahora</span>
                </li>
              </ul>
              <p className="home-muted">(Después conectamos al backend)</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
