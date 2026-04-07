import "../styles/components/header.css";

export default function Header({ setCurrentPage, user, onLogout, showLogout = false }) {
  return (
    <header className="header">
      <button
        className="header__left"
        onClick={() => setCurrentPage(user ? "home" : "login")}
        type="button"
        aria-label="Ir al inicio"
      >
        <div className="header__logo">SG</div>
        <div className="header__text">
          <h1 className="header__title">Seguros Gestion</h1>
          <p className="header__subtitle">Sistema de administracion</p>
        </div>
      </button>

      <div className="header__right">
        {user && (
          <span className="header__user">
            Hola, {user.nombre?.split(" ")[0] || "Usuario"}
          </span>
        )}
        {showLogout && onLogout && (
          <button
            className="header__btn--ghost"
            onClick={onLogout}
            type="button"
          >
            Cerrar sesion
          </button>
        )}
      </div>
    </header>
  );
}
