import React from "react";
import Amelia from "../images/Amelia.png"
import MercadoSilvestre from "../images/MercadoSilvestre.png"
import Piccolina from "../images/Piccolina.png"
import SemillaViva from "../images/SemillaViva.png"
import SilvestreCafe from "../images/SilvestreCafe.png"
import Supersaludable from "../images/Supersaludable.png"
import TiendaNova from "../images/TiendaNova.png"



const Clientes = () => {

    return (
<div className="container">
  <div className="row">
    <h4 className="fw-semibold subtitulo quicksand">Descubre <span className="morado">quienes confían</span> en nosotros</h4>
  </div>
  <div className="row my-3 p-5">
    <div className="col">
      <img src={Amelia} className="img-fluid" alt="" />
    </div>
    <div className="col">
      <img src={MercadoSilvestre} className="img-fluid" alt="" />
    </div>
    <div className="col">
      <img src={Piccolina} className="img-fluid" alt="" />
    </div>
    <div className="col">
      <img src={SemillaViva} className="img-fluid" alt="" />
    </div>
    <div className="col">
      <img src={SilvestreCafe} className="img-fluid" alt="" />
    </div>
    <div className="col">
      <img src={Supersaludable} className="img-fluid" alt="" />
    </div>
    <div className="col">
      <img src={TiendaNova} className="img-fluid" alt="" />
    </div>
  </div>
</div>
    );
};

export default Clientes;
