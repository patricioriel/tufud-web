import React from 'react'
import {Link} from 'react-router-dom';
import img3resto from "../images/img3resto.png"

function EstasListo() {
  return (
    <div className="row mt-5 justify-content-center container-fluid gradiente_verde">
            <div className="col-md-5">
                <div>
                    <h1 className='fw-bold text-start quicksand titulo'>¿Estás listo para empezar a agilizar más rápido <span className='morado'>tus pedidos</span>?</h1>
                    <p className='text-start cuerpo'>Nuestra plataforma ofrece una solución completa para eliminar errores y mejorar la gestión de tus ordenes ¡No esperes más para conocer todas las ventajas que podemos ofrecerte!</p>
                    <div className="d-flex justify-content-start">
                        <Link className="btn my-4 fw-semibold cuerpofooter pe-4 ps-4" to="">Reserva un demo</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <img src={img3resto} alt="Descripción de la imagen" className='imginfo mt-3' />
            </div>
        </div>
  )
}

export default EstasListo