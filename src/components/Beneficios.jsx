import React from 'react';
import reloj from "../images/reloj.svg"
import pedidos from "../images/pedidos.svg"
import papel from "../images/papel.svg"

function Beneficios() {
  return (
    <div className="mt-5 text-center containerbeneficios">
  <div className="container-fluid my-2">
    <div className="row d-flex justify-content-center my-5">
      <div className="col-md-3">
        <div className="card border-0 h-100 cardbeneficios">
          <div className="card-body text-center pb-5">
            <img className="card-img-top rounded-circle imgbeneficios fluid w-50 mb-3" src={reloj} alt="ilustracion reloj" />
            <h5 className="card-title fw-bold morado titulos_cards">Gana Tiempo</h5>
            <p className="card-text cuerpocard">Gestionar los pedidos es más fácil y rápido. Ahorra más de 5 horas semanales.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card border-0 h-100 cardbeneficios">
          <div className="card-body text-center pb-5">
            <img className="card-img-top rounded-circle fluid w-50 mb-3" src={papel} alt="ilustracion papel" />
            <h5 className="card-title fw-bold morado titulos_cards mt-2">Olvídate del Papel</h5>
            <p className="card-text cuerpocard">Evita la generación de pilas de facturas o remitos que terminan perdiéndose.</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card border-0 h-100 cardbeneficios">
          <div className="card-body text-center pb-5">
            <img className="card-img-top rounded-circle fluid w-50 mb-3" src={pedidos} alt="ilustracion pedidos"/>
            <h5 className="card-title fw-bold morado titulos_cards">Mejora la Precisión</h5>
            <p className="card-text cuerpocard">Reduce la probabilidad de errores y malentendidos al realizar o recibir pedidos más detallados.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Beneficios;
