import React from "react";
import { Link } from "react-router-dom";

const Separador = () => {
    return (
        <div className="container-fluid containerbeneficios">
            <div className="container">
                <div className="row p-1 d-flex align-items-center">
                    <div className="col-md-10">
                        <h4 className="text-light fs-3">Descubre como nuestra plataforma ha mejorado su gestión de pedidos</h4>
                    </div>
                    <div className="col-md-2">
                        <Link className="btn fw-semibold fs-5" to="">Ver Comunidad</Link>
                    </div>
                </div>
            </div>
        </div>      
    )
}

export default Separador