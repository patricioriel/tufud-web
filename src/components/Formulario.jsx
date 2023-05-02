import React from "react";

const Formulario = () => {
    return (
        <div className="container-fluid gradiente_verde">
            <div className="container m-5 form">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="fw-bold text-start display-3 quicksand"><span className="morado">Optimiza la gestion</span> de tus pedidos y lleva tu negocio al siguiente nivel</h3>
                        <p className="text-start fs-4">Al simplificar tus procesos de gestión y mejorar la eficiencia de tus operaciones, aumenta tu productividad y mejora la satisfacción del cliente. Que esperas? comunícate con nosotros ahora.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="form">
                            <form className="p-5">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-light d-flex">Nombre Completo</label>
                                    <input type="text" className="form-control" id="nombre" placeholder="Escribe tu nombre"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-light d-flex">Teléfono</label>
                                    <input type="tel" className="form-control" id="telefono" placeholder="Escribe un numero celular"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-light d-flex">Correo Electrónico</label>
                                    <input type="email" className="form-control" id="email" placeholder="Escribe tu correo"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label text-light d-flex">Mensaje</label>
                                    <textarea className="form-control" id="mensaje" rows="3" placeholder="Escribe tu mensaje aquí"></textarea>
                                </div>
                                <button className="btn_form fw-bold p-2 mt-3" type="submit">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formulario