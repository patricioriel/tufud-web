import React from "react";
import { Link } from "react-router-dom";

const Separador = () => {
    return (
        <div className="container-fluid containerbeneficios">
            <div className="container">
                <div className="row p-1 d-flex align-items-center">
                    <div className="col-md-10">
                        <h4 className="text-light fw-bold">Conoce como nuestra plataforma los ha ayudado en su gestion</h4>
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