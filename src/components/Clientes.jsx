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
<div class="container">
  <div class="row">
    <h4 class="fw-semibold subtitulo quicksand">Descubre <span class="morado">quienes confían</span> en nosotros</h4>
  </div>
  <div class="row my-3">
    <div class="col">
      <img src={Amelia} class="img-fluid" alt="" />
    </div>
    <div class="col">
      <img src={MercadoSilvestre} class="img-fluid" alt="" />
    </div>
    <div class="col">
      <img src={Piccolina} class="img-fluid" alt="" />
    </div>
    <div class="col">
      <img src={SemillaViva} class="img-fluid" alt="" />
    </div>
    <div class="col">
      <img src={SilvestreCafe} class="img-fluid" alt="" />
    </div>
    <div class="col">
      <img src={Supersaludable} class="img-fluid" alt="" />
    </div>
    <div class="col">
      <img src={TiendaNova} class="img-fluid" alt="" />
    </div>
  </div>
</div>
    );
};

export default Clientes;
