import React from 'react'

function Info2() {
    return (
        <div className="row mt-5 justify-content-center container-fluid">
            <div className="col-md-5">
                <img src="https://static.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg" alt="Descripción de la imagen" className='imginfo mt-3 rounded-circle' />
            </div>
            <div className="col-md-5">
                <div>
                    <h2 className='text-start display-2'>Somos la plataforma que <span className="fw-bold">centraliza y digitaliza todos tus pedidos.</span></h2>
                    <p className='text-start fs-4'>Simplificamos y hacemos eficiente tu proceso de compras en la industria gastronómica. Reducimos tiempo, costo y desperdicio de alimentos.</p>
                </div>
            </div>
        </div>
    )
}

export default Info2