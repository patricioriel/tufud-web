import React, { useState } from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div>
          <img className="logotipo" src="../../public/images/tufudlogo.png" alt="tufud"/>
        </div>
        <div className='row justify-content-end'>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Servicios
                </a>
                <ul className="dropdown-menu dropdown-menu-custom fade-in">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Comunidad
                </a>
                <ul className="dropdown-menu dropdown-menu-custom fade-in">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contacto</a>
              </li>
            </ul>
            <button type="button" class="btn btn-outline-primary">Iniciar sesión</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
