import React from "react";

const Contactanos = () => {
    return (
        <div className="container-fluid">
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-start fs-1 ">Contactate con nosotros y podremos ayudarte en lo que necesites</h3>
                        <p className="my-3 text-start fs-3 ">Simplificamos y hacemos eficiente tu proceso de compras en la industria gastronómica. Reducimos tiempo, costo y desperdicio de alimentos.</p>
                        <a className="btn my-4 fs-5" href="">Contactanos por WhatsApp</a>
                    </div>
                    <div className="col-md-6">
                        <img src="https://static.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg" width="800" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactanos;