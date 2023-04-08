import React from 'react';

function Beneficios() {
  return (
    <div className='mt-5 text-center containerbeneficios'>
      <h2>Beneficios de la plataforma</h2>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body text-center">
                <img className="card-img-top rounded-circle imgbeneficios" src="https://w7.pngwing.com/pngs/115/901/png-transparent-question-mark-graphy-small-plastic-people-people-plastic-bottle-cartoon.png" alt="Card image cap" />
                <h5 className="card-title">Beneficio 1</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body text-center">
                <img className="card-img-top rounded-circle imgbeneficios" src="https://w7.pngwing.com/pngs/115/901/png-transparent-question-mark-graphy-small-plastic-people-people-plastic-bottle-cartoon.png" alt="Card image cap" />
                <h5 className="card-title">Beneficio 2</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body text-center">
                <img className="card-img-top rounded-circle imgbeneficios" src="https://w7.pngwing.com/pngs/115/901/png-transparent-question-mark-graphy-small-plastic-people-people-plastic-bottle-cartoon.png" alt="Card image cap"/>
                <h5 className="card-title">Beneficio 3</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beneficios;
