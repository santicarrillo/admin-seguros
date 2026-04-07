import Header from "../components/header.jsx";
import "../styles/pages/home.css";
import { useState, useEffect } from "react";
import * as mockApi from "../services/mockApi.js";

export default function Home({ user, onLogout, setCurrentPage }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [stats, setStats] = useState({
    clientes: 0,
    polizasActivas: 0,
    pagosPendientes: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await mockApi.getStats();
        setStats(data);
      } catch (err) {
        console.log("[v0] Error fetching stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("[v0] Searching for:", searchQuery);
  };

  return (
    <>
      <Header
        setCurrentPage={setCurrentPage}
        user={user}
        onLogout={onLogout}
        showLogout={true}
      />

      <div className="home-page">
        <main className="home-main" aria-label="Inicio">
          <section className="home-hero" aria-label="Resumen principal">
            <div className="home-hero__text">
              <h1 className="home-hero__title">Panel de gestion</h1>
              <p className="home-hero__subtitle">
                Bienvenido, {user?.nombre?.split(" ")[0] || "Usuario"}. Accesos
                rapidos y busqueda general.
              </p>
            </div>

            <div className="home-hero__actions">
              <button className="home-btn home-btn--primary" type="button">
                + Nuevo cliente
              </button>
              <button className="home-btn" type="button">
                + Nueva poliza
              </button>
            </div>
          </section>

          <div className="home-grid">
            {/* COLUMNA IZQUIERDA */}
            <section className="home-col">
              <div className="home-card home-card--enter">
                <h2 className="home-card__title">Busqueda rapida</h2>

                <form
                  className="home-search"
                  role="search"
                  onSubmit={handleSearch}
                >
                  <label className="home-label" htmlFor="q">
                    Buscar por cliente, poliza o DNI
                  </label>

                  <div className="home-search__row">
                    <input
                      id="q"
                      name="q"
                      className="home-input"
                      placeholder="Ej: Juan Perez / 30111222"
                      autoComplete="off"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
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
                <h2 className="home-card__title">Modulos</h2>

                <nav className="home-modules" aria-label="Accesos rapidos">
                  <button className="home-module" type="button">
                    <span className="home-module__icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </span>
                    <span className="home-module__title">Clientes</span>
                    <span className="home-module__desc">Alta, baja y edicion</span>
                  </button>

                  <button className="home-module" type="button">
                    <span className="home-module__icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </span>
                    <span className="home-module__title">Empresas</span>
                    <span className="home-module__desc">Companias y planes</span>
                  </button>

                  <button className="home-module" type="button">
                    <span className="home-module__icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                    </span>
                    <span className="home-module__title">Polizas</span>
                    <span className="home-module__desc">Vigencias y cuotas</span>
                  </button>

                  <button className="home-module" type="button">
                    <span className="home-module__icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                        <line x1="1" y1="10" x2="23" y2="10" />
                      </svg>
                    </span>
                    <span className="home-module__title">Pagos</span>
                    <span className="home-module__desc">Deudas y vencimientos</span>
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
                    <p className="home-kpi__value">
                      {loading ? "..." : stats.clientes}
                    </p>
                  </div>

                  <div className="home-kpi">
                    <p className="home-kpi__label">Polizas activas</p>
                    <p className="home-kpi__value">
                      {loading ? "..." : stats.polizasActivas}
                    </p>
                  </div>

                  <div className={`home-kpi ${stats.pagosPendientes > 0 ? 'home-kpi--warning' : ''}`}>
                    <p className="home-kpi__label">Pagos pendientes</p>
                    <p className="home-kpi__value">
                      {loading ? "..." : stats.pagosPendientes}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="home-card home-card--enter"
                style={{ animationDelay: "180ms" }}
              >
                <h2 className="home-card__title">Actividad reciente</h2>

                <ul className="home-activity">
                  <li className="home-activity__item">
                    <span className="home-dot home-dot--success" aria-hidden="true" />
                    <span className="home-activity__text">
                      Sesion iniciada correctamente
                    </span>
                  </li>
                  <li className="home-activity__item home-activity__item--muted">
                    <span className="home-dot" aria-hidden="true" />
                    <span className="home-activity__text">
                      Sin mas actividad reciente
                    </span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
