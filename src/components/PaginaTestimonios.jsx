import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import amelia from "../images/Amelia.png";
import semilla from "../images/SemillaViva.png";
import silvestre from "../images/SilvestreCafe.png";
import saludable from "../images/Supersaludable.png";
import picolina from "../images/Piccolina.png";
import tienda from "../images/TiendaNova.png";
import mercado from "../images/MercadoSilvestre.png";
import fondosaludable from "../images/fondo_supersaludable.png"
import { testimonios } from '../data/DataTestimonios';

const PaginaTestimonios = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <Link to={"/testimonios"} className='text-start btnatras'>
                    <FontAwesomeIcon icon={faArrowLeft} size="2xl" style={{ color: 'black' }} />
                </Link>
            </div>
            <div className="row">
                <h3 className="titulo quicksand">Historias que inspiran</h3>
                <p className="cuerpo">Te invitamos a conocer a nuestros Clientes</p>
                <div className="imagenes_testimonios mt-4">
                    <img className="img1" src={amelia} width="60" alt="" />
                    <img className="img2" src={semilla} width="60" alt="" />
                    <img className="img3" src={silvestre} width="60" alt="" />
                    <img className="img4" src={saludable} width="60" alt="" />
                    <img className="img5" src={picolina} width="60" alt="" />
                    <img className="img6" src={tienda} width="60" alt="" />
                    <img className="img7" src={mercado} width="60" alt="" />
                    <Link to={"#"} className="btn">Comienza ahora</Link>
                    <p className="text-center cuerpocard_testimonios mt-1">Mas de 200 empresas nos avalan</p>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-7 caja_testimonio">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" fill="currentColor" className="bi bi-quote d-flex" viewBox="0 0 16 16">
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/></svg>
                    </div>             
                    <h2 className="fw-bold titulos_testimonios text-start mb-4 me-5">
                    {testimonios[0].titulo}
                    </h2>
                    <p className="cuerpo_testimonios text-start me-5">
                    {testimonios[0].descripcion}
                    </p>
                    <p className="text-start titulos_testimonios mb-0 mt-5">{testimonios[0].persona}</p>
                    <p className="text-start quicksand puesto_testimonios">{testimonios[0].puesto}</p>
                </div>
                <div className="col-md-5 imagen_testimonio">
                    <img className="fondo_imagenes_testimonios" src={fondosaludable} alt="" />
                    <img className="fondo_logos_testimonios" src={saludable} alt="" />
                </div>
            </div>
        </div>
    )
}

export default PaginaTestimonios;