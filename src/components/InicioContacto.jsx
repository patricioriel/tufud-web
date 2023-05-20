import React from 'react'
import {Link} from 'react-router-dom';
import imgcontacto from '../images/imgcontacto.png';

function InicioContacto() {
  return (
    <div className="row d-flex justify-content-center container-fluid containercontacto">
      <div className="col-md-5">
        <div>
          <h1 className='fw-bold text-start quicksand titulo mb-5'>Tenemos <span className='morado'>todas las respuestas </span>que necesitas</h1>
          <p className='text-start cuerpocontacto'>En esta sección encontrarás preguntas frecuentes tanto para Proveedores como para Restaurantes. Si aún tienes dudas después de leer estas preguntas, no dudes en contactarnos a través de correo electrónico u otros medios disponibles.</p>
        </div>
        <div className="row my-3 text-start">
            <Link to={"#"} className="btn my-4 botones_info ms-2">Contáctanos</Link>     
        </div>        
      </div>
      <div className="col-md-5">
        <img src={imgcontacto} alt="Descripción de la imagen" className='imginfo mt-3 img-fluid'/>
      </div>
    </div>
  )
}

export default InicioContacto