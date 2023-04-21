import React from "react";
import { Link } from "react-router-dom";

const Contactanos = () => {
    return (
        <div className="container-fluid gradiente_verde">
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-start display-3 fw-bold quicksand"><span className="morado">Mejora la gestión</span> de tus pedidos hoy mismo</h3>
                        <p className="my-3 text-start fs-3 ">Es hora de cambiar tu enfoque en la gestión de pedidos. Nuestro equipo de expertos esta siempre disponible para ayudarte a hacerlo de manera rápida y fácil. Contáctanos ahora mismo.</p>
                        <Link className="btn my-4 fw-semibold fs-5" to="">Contáctanos</Link>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src="https://static.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg" width="800" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactanos;