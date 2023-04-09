import React from 'react'

function Info2() {
    return (
        <div className="row mt-5 justify-content-center container-fluid">
            <div className="col-md-5">
                <img src="https://static.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg" alt="Descripción de la imagen" className='imginfo mt-3 rounded-circle' />
            </div>
            <div className="col-md-5">
                <div>
                    <h2 className='font-monospace h2info text-start'>Somos la plataforma que <b>centraliza y digitaliza todos tus pedidos.</b></h2>
                    <h3 className='text-start'>Simplificamos y hacemos eficiente tu proceso de compras en la industria gastronómica. Reducimos tiempo, costo y desperdicio de alimentos.</h3>
                </div>
            </div>
        </div>
    )
}

export default Info2