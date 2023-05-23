import React from "react";

const Separador = () => {
    return (
        <div className="container-fluid separador">
            <div className="container">
                <div className="row p-1 d-flex align-items-center">
                    <div className="col-md-10">
                        <h4 className="quicksand titulos_cards tituloseparador">Descubre como nuestra plataforma <span className="morado">ha mejorado su gestión de pedidos</span></h4>
                    </div>
                    <div className="col-md-2">
                    <a className="btn botones_info" href="/testimonios#iniciotestimonios">Ver comunidad</a>
                    </div>
                </div>
            </div>
        </div>      
    )
}

export default Separador