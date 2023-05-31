import React from 'react'
import img2resto from "../images/img2resto.png"

function AgilizaPedidos() {
  return (
    <div className="row mt-5 justify-content-center container-fluid bg-white pt-5 pb-5 fondoagiliza">
            <div className="col-md-5 cajaagiliza agilizacol1">
                <img src={img2resto} alt="Descripción de la imagen" className='imginfo mt-3' />
            </div>
            <div className="col-md-5 pe-5 cajaagiliza agilizacol2">
                <div>
                <h2 className='fw-bold text-end quicksand titulo mb-5'><span className='morado'>Agiliza tus pedidos</span>, elimina errores y gestiona las compras de forma rápida</h2>
                    <p className='text-end cuerpo'>Ahorra tiempo en la gestión de tus pedidos, asegurándote de que todas las compras se registren de manera precisa y rápida. Podrás gestionar todo tu inventario de forma eficiente y tener un mayor control sobre tus procesos.</p>
                </div>
            </div>
        </div>
  )
}
export default AgilizaPedidos