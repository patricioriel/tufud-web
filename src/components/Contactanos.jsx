import React from "react";
import { Link } from "react-router-dom";
import img3home from "../images/img3home.png"

const Contactanos = () => {
    return (
        <div className="container-fluid gradiente_verde">
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-6 text-start">
                        <h3 className="text-start titulo quicksand"><span className="morado">Mejora la gestión</span> de tus pedidos hoy<br/> mismo</h3>
                        <p className="my-3 text-start cuerpo ">Es hora de cambiar tu enfoque en la gestión de<br/> pedidos. Nuestro equipo de expertos esta<br/> siempre disponible para ayudarte a hacerlo de<br/> manera rápida y fácil. Contáctanos ahora mismo.</p>
                        <Link className="btn my-4 botones_info" to="/restaurante">Contáctanos</Link>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={img3home} width="800" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactanos;