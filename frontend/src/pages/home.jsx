import Header from "../components/header.jsx";
import "../styles/pages/home.css";

export default function Home({ user, onLogout, setCurrentPage }) {
  return (
    <div className="home-page">
      <Header
        user={user}
        onLogout={onLogout}
        setCurrentPage={setCurrentPage}
        showLogout={true}
      />

      <main className="home-main">
        <div className="home-container">
          <div className="home-welcome">
            <h2 className="home-title">Bienvenido al Sistema de Gestión de Seguros</h2>
            <p className="home-subtitle">
              Gestiona pólizas, clientes y más de manera eficiente.
            </p>
          </div>

          <div className="home-stats">
            <div className="stat-card">
              <h3 className="stat-number">150</h3>
              <p className="stat-label">Clientes Activos</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">320</h3>
              <p className="stat-label">Pólizas Vigentes</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">85%</h3>
              <p className="stat-label">Satisfacción</p>
            </div>
          </div>

          <div className="home-actions">
            <button
              className="btn-primary"
              onClick={() => setCurrentPage("carteraCliente")}
            >
              Ver Cartera de Clientes
            </button>
            <button
              className="btn-secondary"
              onClick={() => setCurrentPage("home")}
            >
              Ver Reportes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}