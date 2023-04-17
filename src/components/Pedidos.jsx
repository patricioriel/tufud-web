import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';

function Pedidos() {
    return (
        <div className="row mt-4 justify-content-center container-fluid">
    <div className="col-md-5">
        <div>
            <NavLink className="nav-link text-start mb-3" aria-current="page" to={"/tufud-web"}>
                <FontAwesomeIcon icon={faAngleLeft} /> Volver al inicio
            </NavLink>
            <h1 className='fw-bold text-start display-3'>Haz tus pedidos de manera ágil y sin complicaciones.</h1>
            <p className='text-start fs-4'>Nuestra plataforma centraliza todas tus órdenes y te permite ver el estado de cada una en tiempo real, optimizando el proceso de tus pedidos.</p>
            <div class="d-flex justify-content-start">
            <Link className="btn my-4 fw-semibold fs-4" to="">Comencemos ahora</Link>
            </div>
        </div>
    </div>
    <div className="col-md-5">
        <img src="https://static.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg" alt="Descripción de la imagen" className='imginfo mt-3 rounded-circle' />
    </div>
</div>

    )
}

export default Pedidos