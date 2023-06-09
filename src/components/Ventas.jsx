import React from 'react'
import {Link} from 'react-router-dom';
import imagenPrincipal from '../images/imagenprincipalproveedores.png'

const handleEnlaceClick = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const targetPosition = scrollHeight * 0.75;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };

function Ventas() {
  return (
    <div className="row justify-content-center container-fluid containerventas">
            <div className="col-md-5 order-2 order-md-1">
                <div>
                    <h1 className='fw-bold text-start quicksand mb-5 mt-5'><span className= "morado">Aumenta tus ventas</span> e impulsa tu negocio hacia la cima.</h1>
                    <p className='text-start fs-4'>Con la plataforma de Tufud, llevar tu negocio a otro nivel nunca fue tan fácil. Podrás gestionar tus pedidos de manera eficiente, reduciendo costos y aumentando la productividad.</p>
                    <div className="d-flex justify-content-center justify-content-md-start">
                        <Link className="btn my-4 btnpedidos" onClick={handleEnlaceClick} to="">Solicitar Demo</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-5 order-1 order-md-2">
                <img src={imagenPrincipal} alt="Descripción de la imagen" className='imginfo mt-3 img-fluid' />
            </div>
        </div>
  )
}

export default Ventas