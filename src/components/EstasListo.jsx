import React from 'react'
import {Link} from 'react-router-dom';
import img3resto from "../images/img3resto.png"

const handleEnlaceClick = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const targetPosition = scrollHeight * 0.75;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };

function EstasListo() {
  return (
    <div className="row mt-5 justify-content-center container-fluid margenestaslisto">
            <div className="col-md-5 order-2 order-md-1 py-md-5 margenestaslisto">
                <div>
                    <h1 className='fw-bold text-start quicksand titulo mb-4 mt-5'>¿Estás listo para empezar a agilizar <span className='morado'>tus pedidos</span>?</h1>
                    <p className='text-start cuerpo'>Nuestra plataforma ofrece una solución completa para eliminar errores y mejorar la gestión de tus ordenes ¡No esperes más para conocer todas las ventajas que podemos ofrecerte!</p>
                    <div className="d-flex justify-content-center justify-content-md-start">
                        <Link className="btn my-4 fw-semibold btnpedidos" onClick={handleEnlaceClick} to="">Reserva un demo</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-5 order-1 order-md-2">
                <img src={img3resto} alt="Descripción de la imagen" className='imginfo mt-3' />
            </div>
        </div>
  )
}

export default EstasListo