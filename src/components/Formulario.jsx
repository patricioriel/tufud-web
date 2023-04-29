import React from "react";
import { Form } from "react-router-dom";

const Formulario = () => {
    return (
        <div className="container-fluid">
            <div className="container m-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="fw-bold text-start display-3 quicksand"><span className="morado">Optimiza la gestion</span> de tus pedidos y lleva tu negocio al siguiente nivel</h3>
                        <p className="text-start fs-4">Al simplificar tus procesos de gestión y mejorar la eficiencia de tus operaciones, aumenta tu productividad y mejora la satisfacción del cliente. Que esperas? comunícate con nosotros ahora.</p>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Nombre Completo</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Escribe tu nombre"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Teléfono</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Escribe un numero celular"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Correo Electrónico</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Escribe tu correo"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escribe tu mensaje aquí"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formulario