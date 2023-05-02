import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/tufudhorizontal.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md fondo_secciones p-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/tufud-web">
          <img src={logo} width="185" alt="Tufud Logo" />
        </Link>
        <button
          className="navbar-toggler hamburguesa"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <img src={logo} width="100" alt="Tufud Logo" />
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Servicios
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/restaurante">
                      Restaurante
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/proveedor">
                      Proveedor
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Comunidad
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/restaurante">
                      Testimonios
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/noticias">
                      Noticias
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Contacto
                </NavLink>
              </li>
              <li>
                <NavLink className="btn" to="/iniciarsesion">
                  Iniciar Sesión
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
