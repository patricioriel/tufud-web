import React from 'react'
import { Link } from "react-router-dom";

function Info() {
  return (
    <div className="row mt-4 justify-content-center container-fluid">
      <div className="col-md-5">
        <div>
          <h1 className='fw-bold text-start display-3 quicksand'>Somos la plataforma de <span className='morado'>pedidos</span> que revoluciona la <span className='morado'>industria gastronómica.</span></h1>
          <p className='text-start fs-4'>Tufud ayuda a restaurantes y proveedores a mejorar el envío y recepción de ordenes de compra, con el objetivo de ahorrar tiempo, disminuir costos y reducir el desperdicio de alimentos.</p>
          <Link to={"/restaurante"} className="btn my-4 fw-semibold fs-2 ps-5 pe-5 btn-zoom me-5">Restaurantes</Link>
          <Link to={"/proveedor"} className="btn my-4 fw-semibold fs-2 ps-5 pe-5 btn-zoom me-5">Proveedores</Link>
        </div>
      </div>
      <div className="col-md-5">
        <img src="https://static.abc.es/media/familia/2018/05/23/Minevera_Pasta-k4KC--1240x698@abc.jpg" alt="Descripción de la imagen" className='imginfo mt-3 rounded-circle'/>
      </div>
    </div>
  )
}

export default Info

