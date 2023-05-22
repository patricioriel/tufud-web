import React from "react";
import tareas from "../images/tareas.svg";
import centraliza from "../images/centraliza.svg";
import aumenta from "../images/aumento.svg";
import experiencia from "../images/experiencia.svg";
import gestion from "../images/gestion.svg"

function BeneficiosProveedores() {
  return (
    <div className="container-fluid w-75 mt-5 cajabenefprov">
      <div className="row my-3 justify-content-center">
        <div className="col-sm-6 col-md-4">
          <div className="card rounded border-0 h-100 p-3 cardbeneficios">
            <div className="card-body text-center altocard">
              <img
                className="card-img-top rounded-circle imgbeneficios fluid w-50"
                src={tareas}
                alt="avion de papel"
              />
              <h5 className="card-title fw-bold morado titulocard mt-4 mb-3">
                Reduce las tareas manuales
              </h5>
              <p className="card-text cuerpocard">
                Basta de perder tiempo procesando pedidos ilegibles. Recibe ordenes limpias, 100% digitales.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="card rounded border-0 h-100 p-3 cardbeneficios">
            <div className="card-body text-center">
              <img
                className="card-img-top rounded-circle imgbeneficios fluid w-50"
                src={experiencia}
                alt="reloj"
              />
              <h5 className="card-title fw-bold morado titulocard mt-4 mb-3">Aumenta la experiencia de compra de tus clientes</h5>
              <p className="card-text cuerpocard">
                Mejora la experiencia de compra. Basta de planillas interminables o listados en PDF.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="card rounded border-0 h-100 p-3 cardbeneficios">
            <div className="card-body text-center">
              <img
                className="card-img-top rounded-circle imgbeneficios fluid w-50"
                src={centraliza}
                alt="pedidos"
              />
              <h5 className="card-title fw-bold morado titulocard mt-4 mb-3">
                Centraliza a todos tus clientes
              </h5>
              <p className="card-text cuerpocard">
                Encuentra a todos tus clientes en una sola app y recibe sus ordenes de manera sencilla y ordenada.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-6 col-md-4">
          <div className="card rounded border-0 h-100 p-3 cardbeneficios">
            <div className="card-body text-center">
              <img
                className="card-img-top rounded-circle imgbeneficios fluid w-50"
                src={aumenta}
                alt="check"
              />
              <h5 className="card-title fw-bold morado titulocard mt-4 mb-3">
                Optimiza tus procesos
              </h5>
              <p className="card-text cuerpocard">
                Tufud simplifica la gestión de los pedidos, dandole más tiempo a tu equipo para aumentar las ventas.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="card rounded border-0 h-100 p-3 cardbeneficios">
            <div className="card-body text-center">
              <img
                className="card-img-top rounded-circle imgbeneficios fluid w-50"
                src={gestion}
                alt="check"
              />
              <h5 className="card-title fw-bold morado titulocard mt-4 mb-3">
                Mejora la gestion de tu negocio
              </h5>
              <p className="card-text cuerpocard">
                Viendo las estadísticas y gestionando todas tus cuentas por cobrar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeneficiosProveedores;
