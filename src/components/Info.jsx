import React from 'react'

function Info() {
  return (
    <div className="row mt-4 justify-content-center container-fluid">
      <div className="col-md-5">
        <div>
          <h1 className='fw-bold text-start display-3'>Somos la plataforma de pedidos que revoluciona la industria gastronómica.</h1>
          <p className='text-start fs-4'>Tufud ayuda a restaurantes y proveedores a mejorar el envio y recepcion de ordenes de compra, con el objetivo de ahorrar tiempo, disminuir costos y reducir el desperdicio de alimentos.</p>
          <button type="button" className="btn btn-primary me-4 fs-4 btninfo btn-zoom">Restaurante</button>
          <button type="button" className="btn btn-primary fs-4 btninfo btn-zoom">Proveedor</button>
        </div>
      </div>
      <div className="col-md-5">
        <img src="https://static.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg" alt="Descripción de la imagen" className='imginfo mt-3 rounded-circle'/>
      </div>
    </div>
  )
}

export default Info

