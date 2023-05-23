import React from 'react'
import reloj from "../images/reloj.svg"
import papel from "../images/papel.svg"
import pedidos2 from "../images/pedidos2.svg"
import check from "../images/check.svg"

function BeneficiosRestaurante() {
  return (
    <div className="container-fluid w-75 mt-5">
      <div className="row my-3 justify-content-center">
        <div className=" col-md-6 col-lg-3">
          <div className="card rounded border-0 h-100 cardbeneficios">
            <div className="card-body text-center altocard p-4">
              <img className="card-img-top rounded-circle imgbeneficios fluid w-50" src={papel} alt="avion de papel" />
              <h5 className="card-title fw-bold morado titulocard mt-4 mb-3">Olvídate del papel</h5>
              <p className="card-text cuerpocard">Evita la generación de pilas de facturas o remitos que terminan perdiéndose.</p>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-lg-3">
          <div className="card rounded border-0 h-100 cardbeneficios">
            <div className="card-body text-center p-4">
              <img className="card-img-top rounded-circle fluid w-50" src={reloj} alt="reloj" />
              <h5 className="card-title fw-bold morado titulocard mt-4 mb-3">Gana tiempo</h5>
              <p className="card-text cuerpocard">Hacer tus pedidos es más fácil y rápido. Ahorra más de 5 horas semanales.</p>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-lg-3">
          <div className="card rounded border-0 h-100 cardbeneficios">
            <div className="card-body text-center p-4">
              <img className="card-img-top rounded-circle  fluid w-50" src={pedidos2} alt="pedidos" />
              <h5 className="card-title fw-bold morado titulocard mt-4 mb-3">Pedidos eficaces</h5>
              <p className="card-text cuerpocard">Evita costos extras, con pedidos y catálogos digitales, reduce errores, inventario sobrante y costos.</p>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-lg-3">
          <div className="card rounded border-0 h-100 cardbeneficios">
            <div className="card-body text-center p-4">
              <img className="card-img-top rounded-circle fluid w-50" src={check} alt="check"/>
              <h5 className="card-title fw-bold morado titulocard mt-4 mb-3">Trabaja en equipo</h5>
              <p className="card-text cuerpocard">Todos están al tanto de todo. Olvídate de los malentendidos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeneficiosRestaurante