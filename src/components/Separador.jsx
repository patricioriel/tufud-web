import React from "react";
import { Link } from "react-router-dom";

const handleEnlaceClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

const Separador = () => {
    return (
        <div className="container-fluid separador">
            <div className="container">
                <div className="row p-1 d-flex align-items-center">
                    <div className="col-md-10">
                        <h4 className="quicksand titulos_cards tituloseparador">Descubre cómo nuestra plataforma <span className="morado">ha mejorado su gestión de pedidos</span></h4>
                    </div>
                    <div className="col-md-2">
                        <Link className="btn botones_info btncomunidad" onClick={handleEnlaceClick} to="/testimonios">Ver comunidad</Link>
                    </div>
                </div>
            </div>
        </div>      
    )
}

export default Separador