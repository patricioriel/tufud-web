import React from "react";
import { Link } from "react-router-dom";
import proveedor from "../images/card_soyproveedor.png"
import restaurante from "../images/card_soyrestaurante.png"

const Iniciarsesion = () => {
  return (
    <div className="container-fluid bg-light d-flex align-items-center justify-content-center my-5">
      <div className="row p-5">
        <div className="col-md-6">
              <Link to={"/restaurante"}><img src={restaurante} className="img-fluid" alt="ilustracion restaurante" /></Link>
        </div>
        <div className="col-md-6">
              <Link to={"/proveedor"}><img src={proveedor} className="img-fluid" alt="ilustracion proveedor" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Iniciarsesion;
