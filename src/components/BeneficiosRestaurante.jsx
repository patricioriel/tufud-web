import React from 'react'
import reloj from "../images/reloj.png"
import papel from "../images/papel.png"
import pedidos2 from "../images/pedidos2.png"
import check from "../images/check.png"

function BeneficiosRestaurante() {
  return (
    <div class="container-fluid w-75 mt-5">
      <div class="row my-3 justify-content-center">
        <div class="col-sm-6 col-md-3">
          <div class="card bg-transparent shadow rounded border-0 h-100">
            <div class="card-body text-center altocard">
              <img class="card-img-top rounded-circle imgbeneficios fluid w-50" src={papel} alt="avion de papel" />
              <h5 class="card-title fw-bold morado titulocard">Olvídate del papel</h5>
              <p class="card-text cuerpocard">Evita la generación de pilas de facturas o remitos que terminan perdiéndose.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="card bg-transparent shadow rounded border-0 h-100">
            <div class="card-body text-center">
              <img class="card-img-top rounded-circle imgbeneficios fluid w-50" src={reloj} alt="reloj" />
              <h5 class="card-title fw-bold morado titulocard">Gana tiempo</h5>
              <p class="card-text cuerpocard">Hacer tus pedidos es más fácil y rápido. Ahorra más de 5 horas semanales.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="card bg-transparent shadow rounded border-0 h-100">
            <div class="card-body text-center">
              <img class="card-img-top rounded-circle imgbeneficios fluid w-50" src={pedidos2} alt="pedidos" />
              <h5 class="card-title fw-bold morado titulocard">Pedidos eficaces</h5>
              <p class="card-text cuerpocard">Evita costos extras, con pedidos y catálogos digitales, reduce errores, inventario sobrante y costos.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="card bg-transparent shadow rounded border-0 h-100">
            <div class="card-body text-center">
              <img class="card-img-top rounded-circle imgbeneficios fluid w-50" src={check} alt="check" />
              <h5 class="card-title fw-bold morado titulocard">Trabaja en equipo</h5>
              <p class="card-text cuerpocard">Todos están al tanto de todo. Olvídate de los malentendidos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeneficiosRestaurante