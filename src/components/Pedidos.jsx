import React from 'react'
import { Link } from 'react-router-dom';
import img1resto from "../images/img1resto.png"

function Pedidos() {
    return (
        <div className="row justify-content-center container-fluid mb-5 cajapedidos">
            <div className="col-md-5 pe-5">
                <div className="pedidos_responsive">
                    <h1 className='fw-bold text-start quicksand titulo mt-5'><span className='morado'>Haz tus pedidos</span> de manera ágil y sin complicaciones</h1>
                    <p className='text-start mt-3'>Nuestra plataforma centraliza todas tus órdenes y te permite ver el estado de cada una en tiempo real, optimizando el proceso de tus pedidos.</p>
                    <div className="d-flex justify-content-start">
                        <Link className="btn my-4 fw-semibold btnpedidos" to="">Comienza ahora</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <img src={img1resto} alt="Descripción de la imagen" className='imginfo mt-3 img-fluid' />
            </div>
        </div>

    )
}

export default Pedidos