import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { testimonios } from "../data/DataTestimonios";
import comillas2 from "../images/comillas2.svg"

function ExploraTestimonios() {
  const [noticiaActual, setNoticiaActual] = useState(0);
  const esUltimaNoticia = noticiaActual === testimonios.length - 1;
  const esPrimeraNoticia = noticiaActual === 0;

  const avanzarNoticia = () => {
    if (!esUltimaNoticia) {
      setNoticiaActual(noticiaActual + 1);
    }
  };

  const retrocederNoticia = () => {
    if (!esPrimeraNoticia) {
      setNoticiaActual(noticiaActual - 1);
    }
  };

  return (
    <div>
      <div className="container containernoticias my-5">
        <div className="row justify-content-center align-items-center">
          <div className="container_historias row justify-content-center align-items-center">
            <div className="col-md-6 col-sm-12 card_testimonios">
              <div className="d-flex">
                <img src={comillas2} alt="" className="comillas2"/>
                <img src={comillas2} alt="" className="ms-2 comillas2"/>
              </div>
              <h2 className="fw-bold quicksand titulonoticia text-start mb-4 me-5">
                {testimonios[noticiaActual].titulo}
              </h2>
              <p className="cuerpo_mobile cuerpo text-start me-5">
                {testimonios[noticiaActual].descripcion}
              </p>
              <div className="d-flex align-items-center mt-4">
                <img
                  className="me-3"
                  width="100px"
                  src={testimonios[noticiaActual].imagen}
                  alt=""
                />
                <div ClassName="">
                  <p className="persona_mobile cuerpo text-start mb-0">
                    {testimonios[noticiaActual].persona}
                  </p>
                  <p className="puesto_mobile cuerpo text-start">
                    {testimonios[noticiaActual].puesto}
                  </p>
                </div>
              </div>
            </div>
            <div className="historias_mobile col-md-6 ps-5">
              <h3 className="titulos_cards text-start text-uppercase">
                Testimonios
              </h3>
              <h4 className="titulo text-start quicksand">
                Podemos hablarte sobre nuestros beneficios
              </h4>
              <p className="text-start cuerpo">
                Pero no hay mejor testimonio que el de nuestra comunidad.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-5">
            <button
              className="btn btn-outline-secondary rounded-circle me-3 btn-lg btnatrasnoti"
              disabled={esPrimeraNoticia}
              onClick={retrocederNoticia}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                size="xl"
                style={{ color: "#4819DC" }}
              />
            </button>
            <button
              className="btn btn-outline-secondary rounded-circle btn-lg btnadelante"
              disabled={esUltimaNoticia}
              onClick={avanzarNoticia}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                size="xl"
                style={{ color: "#4819DC" }}
              />
            </button>
          </div>
          <Link className="btn btnnoticia mt-5 pt-2 pb-2" to="/testimonios/all">
            Ver todas las Historias
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExploraTestimonios;
