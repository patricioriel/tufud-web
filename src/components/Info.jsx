import React from 'react'
import { Link } from "react-router-dom";
import img1home from "../images/img1home.png"

function Info() {
  return (
    <div className="row mt-4 d-flex justify-content-center container-fluid cajainfo">
  <div className="col-md-5 order-md-2">
    <img src={img1home} alt="Descripción de la imagen" className='imginfo mt-3 img-fluid ps-5'/>
  </div>
  <div className="col-md-5 order-md-1">
    <div>
      <h1 className='fw-bold text-start quicksand titulo mb-4'>Somos la plataforma de <span className='morado'>pedidos</span> que revoluciona la <span className='morado'>industria gastronómica</span></h1>
      <p className='text-start cuerpo'>Tufud ayuda a Restaurantes y Proveedores a mejorar el envío y recepción de ordenes de compra, con el objetivo de ahorrar tiempo, disminuir costos y reducir el desperdicio de alimentos.</p>
    </div>
    <div className="row my-3 text-start cajabotones">
      <Link to={"/restaurante"} className="btn my-4 botones_info ms-2 btninfo1">Soy Restaurante</Link>
      <Link to={"/proveedor"} className="btn my-4 botones_info ms-5 btninfo1">Soy Proveedor</Link>       
    </div>        
  </div>
</div>

  )
}

export default Info

