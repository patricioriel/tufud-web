import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {NavLink, Link} from 'react-router-dom';

function Ventas() {
  return (
    <div className="row mt-4 justify-content-center container-fluid">
            <div className="col-md-5">
                <div>
                    <NavLink className="nav-link text-start mb-3" aria-current="page" to={"/tufud-web"}>
                        <FontAwesomeIcon icon={faAngleLeft} /> Volver al inicio
                    </NavLink>
                    <h1 className='fw-bold text-start display-3 quicksand'>Aumenta tus ventas e impulsa tu negocio hacia la cima.</h1>
                    <p className='text-start fs-4'>Con la plataforma de Tufud, llevar tu negocio a otro nivel nunca fue tan fácil. Podrás gestionar tus pedidos de manera eficiente, reduciendo costos y aumentando la productividad.</p>
                    <div className="d-flex justify-content-start">
                        <Link className="btn my-4 fw-semibold fs-4" to="">Solicitar Demo</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <img src="https://static.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg" alt="Descripción de la imagen" className='imginfo mt-3 rounded-circle' />
            </div>
        </div>
  )
}

export default Ventas