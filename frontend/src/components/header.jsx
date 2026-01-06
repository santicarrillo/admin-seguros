import "../styles/components/header.css";

export default function Header({ setCurrentPage }) {
  return (
    <header className="header">
      {/* LOGO = HOME */}
      <button
        type="button"
        className="header__left"
        onClick={() => setCurrentPage("home")}
        aria-label="Ir al inicio"
      >
        <div className="header__logo">SG</div>

        <div className="header__text">
          <p className="header__title">Admin Seguros</p>
          <p className="header__subtitle">Inicio</p>
        </div>
      </button>

      {/* ACCIONES USUARIO */}
      <div className="header__right">
        <button
          type="button"
          className="header__btn header__btn--ghost"
          onClick={() => setCurrentPage("login")}
        >
          cerrar sesión
        </button>
      </div>
    </header>
  );
}
