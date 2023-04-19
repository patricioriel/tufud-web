import React from 'react';

function Beneficios() {
  return (
    <div className='mt-5 text-center containerbeneficios'>
      <h2 className="fw-bold quicksand">Mira como te podemos ayudar</h2>
      <div className="container-fluid my-2">
        <div className="row d-flex justify-content-center my-5">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body text-center">
                <img className="card-img-top rounded-circle imgbeneficios" src="https://w7.pngwing.com/pngs/115/901/png-transparent-question-mark-graphy-small-plastic-people-people-plastic-bottle-cartoon.png" alt="Card image cap" />
                <h5 className="card-title fw-bold">Gana Tiempo</h5>
                <p className="card-text">Gestionar los pedidos es mas fácil y rápido. Ahorra mas de 5 horas semanales.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body text-center">
                <img className="card-img-top rounded-circle imgbeneficios" src="https://w7.pngwing.com/pngs/115/901/png-transparent-question-mark-graphy-small-plastic-people-people-plastic-bottle-cartoon.png" alt="Card image cap" />
                <h5 className="card-title fw-bold">Olvídate del Papel</h5>
                <p className="card-text">Evita la generación de pilas de facturas o remitos que terminan perdiéndose.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body text-center">
                <img className="card-img-top rounded-circle imgbeneficios" src="https://w7.pngwing.com/pngs/115/901/png-transparent-question-mark-graphy-small-plastic-people-people-plastic-bottle-cartoon.png" alt="Card image cap"/>
                <h5 className="card-title fw-bold">Mejora la Precisión</h5>
                <p className="card-text">Reduce la probabilidad de errores y malentendidos al recibir pedidos detallados.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beneficios;
