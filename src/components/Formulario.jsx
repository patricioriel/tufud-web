import React from "react";

const Formulario = () => {
  return (
    <div className="container-fluid gradiente_verde d-flex flex-column align-items-center my-5 fondo_form">
        <h4 className="quicksand fw-bolder display-4">¡Comunícate con nosotros!</h4>
      <div className="container m-5 form">
        <div className="row">     
            <div className="form">
              <form className="p-5">
                <div className="mb-3">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label text-light d-flex"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Escribe tu nombre"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label text-light d-flex"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telefono"
                    placeholder="Escribe un numero celular"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlInput1"
                    className="form-label text-light d-flex"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Escribe tu correo"
                  />
                </div>
                <div className="mb-3">
                    <label for="usuario" class="form-label text-light d-flex">¿Eres restaurante o proveedor?</label>
                    <select id="usuario" class="form-select text-body-secondary">
                        <option selected>Seleccione una opción</option>
                        <option>Restaurante</option>
                        <option>Proveedor</option>
                    </select>
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label text-light d-flex"
                  >
                    Mensaje
                  </label>
                  <textarea
                    className="form-control"
                    id="mensaje"
                    rows="3"
                    placeholder="Escribe tu mensaje aquí"
                  ></textarea>
                </div>
                <button className="btn_form fw-bolder p-2 mt-3" type="submit">
                  Enviar
                </button>
              </form>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Formulario;
