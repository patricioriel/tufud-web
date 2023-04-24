import React from "react";
import { Link } from "react-router-dom";

const Iniciarsesion = () => {
  return (
    <div className="container vh-100 my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card w-75">
            <img src="https://w7.pngwing.com/pngs/115/901/png-transparent-question-mark-graphy-small-plastic-people-people-plastic-bottle-cartoon.png" className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <Link to={"#"} className="btn my-4 fw-semibold fs-2 ps-5 pe-5 btn-zoom me-5">Soy Restaurante</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="card w-75">
            <img src="https://w7.pngwing.com/pngs/115/901/png-transparent-question-mark-graphy-small-plastic-people-people-plastic-bottle-cartoon.png" className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <Link to={"#"} className="btn my-4 fw-semibold fs-2 ps-5 pe-5 btn-zoom me-5">Soy Proveedor</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iniciarsesion;
