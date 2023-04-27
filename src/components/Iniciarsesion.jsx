import React from "react";
import { Link } from "react-router-dom";
import imgproveedor from "../images/imgproveedor.jpg"
import imgrestaurante from "../images/imgrestaurante.jpg"

const Iniciarsesion = () => {
  return (
    <div className="container vh-100 my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card w-75">
            <img src={imgrestaurante} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <Link to={"#"} className="btn my-4 fw-semibold fs-2 ps-5 pe-5 btn-zoom me-5">Soy Restaurante</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="card w-75">
            <img src={imgproveedor} className="card-img-top img-fluid" alt="..." />
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
