import React from "react";
import amelia from "../images/Amelia.png"
import mercado from "../images/MercadoSilvestre.png"
import picolina from "../images/Piccolina.png"

const Testimonios = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <h2 className="fw-bold quicksand display-4">Que dicen de nosotros?</h2>
        <div className="container my-5">
          <div className="row">
            <div className="row d-flex justify-content-center my-5">
              <div className="col-md-3">
                <div className="card bg-transparent shadow rounded border-0 h-100">
                  <div className="card-body text-center">
                    <img
                      className="card-img-top rounded-circle imgbeneficios fluid w-50"
                      src={amelia}
                      alt="Card image cap"
                    />
                    <h5 className="card-title fw-bold morado titulocard">
                      Gana Tiempo
                    </h5>
                    <p className="card-text cuerpocard">
                      Gestionar los pedidos es mas fácil y rápido. Ahorra mas de
                      5 horas semanales.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-transparent shadow rounded border-0 h-100">
                  <div className="card-body text-center">
                    <img
                      className="card-img-top rounded-circle imgbeneficios fluid w-50"
                      src={mercado}
                      alt="Card image cap"
                    />
                    <h5 className="card-title fw-bold morado titulocard">
                      Olvídate del Papel
                    </h5>
                    <p className="card-text cuerpocard">
                      Evita la generación de pilas de facturas o remitos que
                      terminan perdiéndose.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-transparent shadow rounded border-0 h-100">
                  <div className="card-body text-center">
                    <img
                      className="card-img-top rounded-circle imgbeneficios fluid w-50"
                      src={picolina}
                      alt="Card image cap"
                    />
                    <h5 className="card-title fw-bold morado titulocard">
                      Mejora la Precisión
                    </h5>
                    <p className="card-text cuerpocard">
                      Reduce la probabilidad de errores y malentendidos al
                      recibir pedidos detallados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonios;
