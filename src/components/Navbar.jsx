import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/tufudhorizontal.png";
import menu from "../images/menu.svg";

const Navbar = () => {

  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <nav className="navbar navbar-expand-md fondo_secciones p-3 containernavbar">
      <div className="container-fluid d-flex align-items-center">
        <Link className="navbar-brand" to="/tufud-web">
          <img src={logo} width="185" alt="Tufud Logo" />
        </Link>
        <button
          className="navbar-toggler hamburguesa"
          type="button"
          onClick={() => setMenuAbierto(!menuAbierto)}
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <img src={menu} alt="" height={30}  />
        </button>
        <div
          className={`offcanvas offcanvas-end ${menuAbierto ? 'show' : ''}`}
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close ms-auto"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle itemnavbar"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-target="#navbarNavDropdown"
                  aria-expanded="false"
                >
                  Servicios
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item fw-bolder fade-in" to="/restaurante" onClick={cerrarMenu}>
                      Restaurantes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item fw-bolder fade-in" to="/proveedor" onClick={cerrarMenu}>
                      Proveedores
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle itemnavbar"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Comunidad
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item fw-bolder fade-in" to="/testimonios" onClick={cerrarMenu}>
                      Testimonios
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item fw-bolder fade-in" to="/noticias" onClick={cerrarMenu}>
                      Noticias
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-3 itemnavbar" to="/faq" onClick={cerrarMenu}>
                  Contacto
                </NavLink>
              </li>
              <li className="text-md-center text-start">
                <NavLink className="btn btniniciosesion" to="/iniciarsesion" onClick={cerrarMenu}>
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
