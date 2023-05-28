import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import amelia from "../images/Amelia.png";
import semilla from "../images/SemillaViva.png";
import silvestre from "../images/SilvestreCafe.png";
import saludable from "../images/Supersaludable.png";
import picolina from "../images/Piccolina.png";
import sd from "../images/sd.png";
import tienda from "../images/TiendaNova.png";
import mercado from "../images/MercadoSilvestre.png";
import fondosd from "../images/fondo_sd.png";
import fondotienda from "../images/fondo_tienda.png";
import comillas from "../images/comillas.svg"
import fondosaludable from "../images/fondo_supersaludable.png";
import { testimonios } from "../data/DataTestimonios";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Clientes from "./Clientes";
import BtnSubir from './BtnSubir';

const PaginaTestimonios = () => {
  return (
    <div className="container-fluid">
      <div className="container mt-5">
        <div className="row">
          <Link
            to={"/testimonios"}
            className="text-start btnatras btnatrastest"
            style={{ display: "none" }}
          >
            <FontAwesomeIcon icon={faArrowLeft} size="2xl" style={{ color: "black" }} />
          </Link>

        </div>
        <div className="row">
          <h3 className="d-none testmobile">TESTIMONIOS</h3>
          <h3 className="titulo quicksand titulotest">Historias que inspiran</h3>
          <p className="cuerpo cuerpotest">Te invitamos a conocer a nuestros Clientes</p>
          <div className="imagenes_testimonios mt-4">
            <img className="img1" src={amelia} width="60" alt="" />
            <img className="img2" src={semilla} width="60" alt="" />
            <img className="img3" src={silvestre} width="60" alt="" />
            <img className="img4" src={saludable} width="60" alt="" />
            <img className="img5" src={picolina} width="60" alt="" />
            <img className="img6" src={tienda} width="60" alt="" />
            <img className="img7" src={mercado} width="60" alt="" />
            <p className="text-center cuerpocard_testimonios mt-1 d-none empresastest">
              Mas de 200 empresas nos avalan
            </p>
            <Link to={"/faq"} className="btn btntest order-2 order-md-1">
              Comienza ahora
            </Link>
            <p className="text-center cuerpocard_testimonios mt-1 empresastest2">
              Mas de 200 empresas nos avalan
            </p>
          </div>
        </div>

        {/* testimonio 1 */}

        <div className="row my-5 containertest">
          <div className="col-md-7 caja_testimonio order-2 order-md-1">
            <div className="d-flex">
              <img src={comillas} alt="" className="me-1 comillas ms-3" />
              <img src={comillas} alt="" className="comillas" />
            </div>
            <div className="ms-3 textostest">
              <img className="logocardtest d-none d-block" src={saludable} alt="" />
              <h2 className="fw-bold titulos_testimonios text-start mb-4 me-5">
                {testimonios[0].titulo}
              </h2>
              <p className="cuerpo_testimonios text-start me-5">
                {testimonios[0].descripcion}
              </p>
              <p className="text-start titulos_testimonios personatest mb-0 mt-5">
                {testimonios[0].persona}
              </p>
              <p className="text-start quicksand puesto_testimonios">
                {testimonios[0].puesto}
              </p>
            </div>
          </div>
          <div className="col-md-5 imagen_testimonio order-1 order-md-2">
            <img
              className="fondo_imagenes_testimonios"
              src={fondosaludable}
              alt=""
            />
            <img className="fondo_logos_testimonios" src={saludable} alt="" />
          </div>
          <Link
            className="morado conocelos quicksand fw-bold text-center my-5 order-3 order-md-3"
            to={`https://www.instagram.com/supersaludabletienda/?igshid=MzRlODBiNWFlZA%3D%3D`}
            target="_blank"
          >
            Conocelos
            <FontAwesomeIcon
              icon={faArrowRight}
              size="m"
              className="ms-3 flechatest"
              style={{ color: "#7858dd" }}
            />
          </Link>
        </div>

        {/* testimonio 2 */}

        <div className="row my-5 containertest">
          <div className="col-md-5 imagen_testimonio2">
            <img
              className="fondo_imagenes_testimonios"
              src={fondotienda}
              alt=""
            />
            <img className="fondo_logos_testimonios" src={tienda} alt="" />
          </div>
          <div className="col-md-7 caja_testimonio">
            <div className="d-flex">
            <img src={comillas} alt="" className="me-1 comillas ms-3" />
              <img src={comillas} alt="" className="comillas" />
            </div>
            <div className="ms-3 textostest">
            <img className="logocardtest d-none d-block" src={tienda} alt="" />
              <h2 className="fw-bold titulos_testimonios text-start mb-4 me-5">
                {testimonios[1].titulo}
              </h2>
              <p className="cuerpo_testimonios text-start me-5">
                {testimonios[1].descripcion}
              </p>
              <p className="text-start titulos_testimonios mb-0 mt-5">
                {testimonios[1].persona}
              </p>
              <p className="text-start quicksand puesto_testimonios">
                {testimonios[1].puesto}
              </p>
            </div>
          </div>
          <Link
            className="morado conocelos quicksand fw-bold text-center my-5"
            to={`https://www.instagram.com/tiendanova.ba/?igshid=MzRlODBiNWFlZA%3D%3D`}
            target="_blank"
          >
            Conocelos
            <FontAwesomeIcon
              icon={faArrowRight}
              size="m"
              className="ms-3 flechatest"
              style={{ color: "#7858dd" }}
            />
          </Link>
        </div>

        {/* testimonio 3 */}

        <div className="row my-5 containertest">
          <div className="col-md-7 caja_testimonio order-2 order-md-1">
            <div className="d-flex">
            <img src={comillas} alt="" className="me-1 comillas ms-3" />
              <img src={comillas} alt="" className="comillas" />
            </div>
            <div className="ms-3 textostest">
            <img className="logocardtest d-none d-block" src={sd} alt="" />
              <h2 className="fw-bold titulos_testimonios text-start mb-4 me-5">
                {testimonios[2].titulo}
              </h2>
              <p className="cuerpo_testimonios text-start me-5">
                {testimonios[2].descripcion}
              </p>
              <p className="text-start titulos_testimonios mb-0 mt-5">
                {testimonios[2].persona}
              </p>
              <p className="text-start quicksand puesto_testimonios">
                {testimonios[2].puesto}
              </p>
            </div>
          </div>
          <div className="col-md-5 imagen_testimonio order-1 order-md-2">
            <img className="fondo_imagenes_testimonios" src={fondosd} alt="" />
            <img className="fondo_logos_testimonios" src={sd} alt="" />
          </div>
          <Link
            className="morado conocelos quicksand fw-bold text-center my-5 order-3 order-md-3"
            to={`https://www.instagram.com/stories.deli/?igshid=MzRlODBiNWFlZA%3D%3D`}
            target="_blank"
          >
            Conocelos
            <FontAwesomeIcon
              icon={faArrowRight}
              size="m"
              className="ms-3 flechatest"
              style={{ color: "#7858dd" }}
            />
          </Link>
        </div>
      </div>
      <div className="row">
        <Clientes />
      </div>
      <BtnSubir />
    </div>
  );
};

export default PaginaTestimonios;
