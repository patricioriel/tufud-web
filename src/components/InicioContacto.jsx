import React from 'react'
import {Link} from 'react-router-dom';
import imgcontacto from '../images/imgcontacto.png';

const handleEnlaceClick = () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const targetPosition = scrollHeight * 0.6;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
};

function InicioContacto() {
  return (
    <div className="row d-flex justify-content-center container-fluid containercontacto">
      <div className="col-md-5 colcontacto">
        <div>
          <h1 className='fw-bold text-start quicksand titulo mb-5'>Tenemos <span className='morado'>todas las respuestas </span>que necesitas</h1>
          <p className='text-start cuerpocontacto'>En esta sección encontrarás preguntas frecuentes tanto para Proveedores como para Restaurantes. Si aún tienes dudas después de leer estas preguntas, no dudes en contactarnos a través de correo electrónico u otros medios disponibles.</p>
        </div>
        <div className="row my-3 d-flex justify-content-center justify-content-md-start">
            <Link to={"#"} className="btn my-4 botones_info ms-2" onClick={handleEnlaceClick}>Contáctanos</Link>     
        </div>        
      </div>
      <div className="col-md-5 d-none d-md-block">
        <img src={imgcontacto} alt="Descripción de la imagen" className='imginfo img_ajustada mt-3 img-fluid'/>
      </div>
    </div>
  )
}

export default InicioContacto