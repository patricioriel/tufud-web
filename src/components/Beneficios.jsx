import React from 'react';
import reloj from "../images/reloj.svg"
import pedidos from "../images/pedidos.svg"
import papel from "../images/papel.svg"

function Beneficios() {
  return (
    <div className="mt-5 text-center containerbeneficios">
  <div className="container-fluid my-2">
  <h2 className="fw-bold quicksand subtitulo">Mira como te podemos <span className='morado'>ayudar</span></h2>
    <div className="row d-flex justify-content-center my-5">
      <div className="col-md-3">
        <div className="card bg-transparent shadow rounded border-0 h-100">
          <div className="card-body text-center">
            <img className="card-img-top rounded-circle imgbeneficios fluid w-50" src={reloj} alt="Card image cap" />
            <h5 className="card-title fw-bold morado titulocard">Gana Tiempo</h5>
            <p className="card-text cuerpocard">Gestionar los pedidos es mas fácil y rápido. Ahorra mas de 5 horas semanales.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-transparent shadow rounded border-0 h-100">
          <div className="card-body text-center">
            <img className="card-img-top rounded-circle imgbeneficios fluid w-50" src={papel} alt="Card image cap" />
            <h5 className="card-title fw-bold morado titulocard">Olvídate del Papel</h5>
            <p className="card-text cuerpocard">Evita la generación de pilas de facturas o remitos que terminan perdiéndose.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-transparent shadow rounded border-0 h-100">
          <div className="card-body text-center">
            <img className="card-img-top rounded-circle imgbeneficios fluid w-50" src={pedidos} alt="Card image cap"/>
            <h5 className="card-title fw-bold morado titulocard">Mejora la Precisión</h5>
            <p className="card-text cuerpocard">Reduce la probabilidad de errores y malentendidos al recibir pedidos detallados.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Beneficios;
