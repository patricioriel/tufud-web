import React from "react";
import { Link } from "react-router-dom";

const Contactanos = () => {
    return (
        <div className="container-fluid">
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-start fs-1 ">Contactate con nosotros y podremos ayudarte en lo que necesites.</h3>
                        <p className="my-3 text-start fs-3 ">Simplificamos y hacemos eficiente tu proceso de compras en la industria gastronómica. Reducimos tiempo, costo y desperdicio de alimentos.</p>
                        <Link className="btn my-4 fw-semibold fs-5" to="">Contactanos por WhatsApp</Link>
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