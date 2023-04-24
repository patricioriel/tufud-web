import React from 'react';
import reloj from "../images/reloj.png"
import pedidos from "../images/pedidos.png"
import papel from "../images/papel.png"

function Beneficios() {
  return (
    <div class="mt-5 text-center containerbeneficios">
  <div class="container-fluid my-2">
  <h2 className="fw-bold quicksand subtitulo">Mira como te podemos <span className='morado'>ayudar</span></h2>
    <div class="row d-flex justify-content-center my-5">
      <div class="col-md-3">
        <div class="card bg-transparent shadow rounded border-0">
          <div class="card-body text-center">
            <img class="card-img-top rounded-circle imgbeneficios fluid w-50" src={reloj} alt="Card image cap" />
            <h5 class="card-title fw-bold morado titulocard">Gana Tiempo</h5>
            <p class="card-text cuerpocard">Gestionar los pedidos es mas fácil y rápido. Ahorra mas de 5 horas semanales.</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card bg-transparent shadow rounded border-0">
          <div class="card-body text-center">
            <img class="card-img-top rounded-circle imgbeneficios fluid w-50" src={papel} alt="Card image cap" />
            <h5 class="card-title fw-bold morado titulocard">Olvídate del Papel</h5>
            <p class="card-text cuerpocard">Evita la generación de pilas de facturas o remitos que terminan perdiéndose.</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card bg-transparent shadow rounded border-0">
          <div class="card-body text-center">
            <img class="card-img-top rounded-circle imgbeneficios fluid w-50" src={pedidos} alt="Card image cap"/>
            <h5 class="card-title fw-bold morado titulocard">Mejora la Precisión</h5>
            <p class="card-text cuerpocard">Reduce la probabilidad de errores y malentendidos al recibir pedidos detallados.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Beneficios;
