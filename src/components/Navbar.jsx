import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="">
          <img src="/react-gh-pages/static/media/tufudlogo.6dd2bb0b6aadb17a7f9b.png" width="150" alt="Tufud Logo" />
        </a>
        <button
          className="navbar-toggler hamburguesa"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flew-grow-0 " id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Servicios
              </a>
              <ul className="dropdown-menu fade-in">
                <li>
                  <a className="dropdown-item" href="">
                    Cliente
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Proveedor
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Comunidad
              </a>
              <ul className="dropdown-menu fade-in">
                <li>
                  <a className="dropdown-item" href="">
                    Testimonios
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Noticias
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="">
                Contacto
              </a>
            </li>
            <button className="btn fw-semibold">Iniciar Sesion</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;