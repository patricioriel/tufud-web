import React from "react";
import { Link } from "react-router-dom";
import img3home from "../images/img3home.png"

const Contactanos = () => {
    return (
        <div className="container-fluid">
    <div className="container p-5">
        <div className="row ">
            <div className="col-md-6 order-1 order-md-2">
                <img className="img-fluid" src={img3home} alt="" />
            </div>
            <div className="col-md-6 order-2 order-md-1 text-start">
                <h3 className="text-start titulo quicksand titulocontactanos"><span className="morado">Mejora la gestión</span> de tus pedidos hoy mismo</h3>
                <p className="my-3 text-start cuerpo ">Es hora de cambiar tu enfoque en la gestión de pedidos. Nuestro equipo de expertos esta siempre disponible para ayudarte a hacerlo de manera rápida y fácil. Contáctanos ahora mismo.</p>
                <div className="text-center text-md-start mt-5"><Link className="btn my-4 botones_info" to="/restaurante">Contáctanos</Link></div>
            </div>
        </div>
    </div>
</div>

    )
}

export default Contactanos;