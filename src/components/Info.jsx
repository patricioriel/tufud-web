import React from 'react'
import { Link } from "react-router-dom";
import img1home from "../images/img1home.png"

function Info() {
  return (
    <div className="row mt-4 justify-content-center container-fluid">
      <div className="col-md-5">
        <div>
          <h1 className='fw-bold text-start quicksand display-3 mb-5'>Somos la plataforma <br/>de <span className='morado'>pedidos</span> que<br/> revoluciona la <span className='morado'>industria gastronómica</span></h1>
          <p className='text-start cuerpo'>Tufud ayuda a restaurantes y proveedores a<br/> mejorar el envío y recepción de ordenes de<br/> compra, con el objetivo de ahorrar tiempo,<br/> disminuir costos y reducir el desperdicio de<br/> alimentos.</p>
        </div>
        <div className="row my-3">
          <div className="col-md-6">
            <Link to={"/restaurante"} className="btn my-4 fw-semibold fs-2 ps-5 pe-5 ">Soy Restaurante</Link>
          </div>
          <div className="col-md-6">
            <Link to={"/proveedor"} className="btn my-4 fw-semibold fs-2 ps-5 pe-5 ms-3">Soy Proveedor</Link>
          </div>         
        </div>        
      </div>
      <div className="col-md-5">
        <img src={img1home} alt="Descripción de la imagen" className='imginfo mt-3 img-fluid'/>
      </div>
    </div>
  )
}

export default Info

