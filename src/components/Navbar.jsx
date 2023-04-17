import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/tufudlogo.png"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/tufud-web"}>
          <img src={logo}  width="150" alt="Tufud Logo" />
        </Link>
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
                  <NavLink className="dropdown-item" activeclassname="page" to={"/restaurante"}>
                    Restaurante
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="">
                    Proveedor
                  </NavLink>
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
                  <NavLink className="dropdown-item" to="">
                    Testimonios
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="">
                    Noticias
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="">
                Contacto
              </NavLink>
            </li>
            <button className="btn fw-semibold">Iniciar Sesion</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;