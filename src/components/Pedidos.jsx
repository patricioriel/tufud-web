import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';
import img1resto from "../images/img1resto.png"

function Pedidos() {
    return (
        <div className="row mt-4 justify-content-center container-fluid">
            <div className="col-md-5">
                <div>
                    <NavLink className="nav-link text-start mb-3" aria-current="page" to={"/tufud-web"}>
                        <FontAwesomeIcon icon={faAngleLeft} /> Volver al inicio
                    </NavLink>
                    <h1 className='fw-bold text-start quicksand titulo'><span className='morado'>Haz tus pedidos</span> de manera ágil y sin complicaciones</h1>
                    <p className='text-start cuerpo'>Nuestra plataforma centraliza todas tus órdenes y te permite ver el estado de cada una en tiempo real, optimizando el proceso de tus pedidos.</p>
                    <div className="d-flex justify-content-start">
                        <Link className="btn my-4 fw-semibold cuerpofooter" to="">Comienza ahora</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <img src={img1resto} alt="Descripción de la imagen" className='imginfo mt-3 img-fluid' />
            </div>
        </div>

    )
}

export default Pedidos