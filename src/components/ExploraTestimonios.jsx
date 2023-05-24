import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { testimonios } from "../data/DataTestimonios";

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
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="54"
                  fill="currentColor"
                  className="icono_testimonio bi bi-quote d-flex"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                </svg>
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
