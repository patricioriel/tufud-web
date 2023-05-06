import React from 'react'
import noti1 from "../images/noti1.png"
import noti2 from "../images/noti2.png"
import noti3 from "../images/noti3.png"

function UltimasNoticias() {
    return (
<div className='container mt-5'>
  <h3 className='fw-bold quicksand subtitulo mb-5 mt-5'>Últimas Noticias</h3>
  <div className="row flex-row justify-content-center align-items-center">
    <div className="col-md-3 col-sm-12 imagengrillanoticias h-100 mb-5">
      <img
        src={noti1}
        alt="ilustración noticias"
      />
    </div>
    <div className="col-md-3 col-sm-12 grillanoticias mb-5">
      <span className="titulocard d-block text-start">12/05/22</span>
      <span className="titulocard d-block text-start">TECNOLOGÍA</span>
      <h2 className="fw-bold quicksand titulos_cards text-start me-5">
        Tufud está revolucionando la industria gastronómica.
      </h2>
      <p className="cuerpocardnoticias text-start me-5">
        La industria gastronómica ha experimentado cambios significativos en los últimos años debido a la creciente demanda de opciones digitales...
      </p>
    </div>

        
    <div className="col-md-3 col-sm-12 imagengrillanoticias h-100 mb-5">
      <img
        src={noti2}
        alt="ilustración noticias"
      />
    </div>
    <div className="col-md-3 col-sm-12 grillanoticias mb-5">
      <span className="titulocard d-block text-start">12/05/22</span>
      <span className="titulocard d-block text-start">TECNOLOGÍA</span>
      <h2 className="fw-bold quicksand titulos_cards text-start me-5">
        La tecnología en la trazabilidad y seguimiento de pedidos.
      </h2>
      <p className="cuerpocardnoticias text-start me-5">
        El desperdicio de alimentos es un problema global que afecta a la cadena de suministro de frutas y verduras...
      </p>
    </div>


    <div className="col-md-3 col-sm-12 imagengrillanoticias h-100 mb-5">
      <img
        src={noti3}
        alt="ilustración noticias"
      />
    </div>
    <div className="col-md-3 col-sm-12 grillanoticias mb-5">
      <span className="titulocard d-block text-start">12/05/22</span>
      <span className="titulocard d-block text-start">TECNOLOGÍA</span>
      <h2 className="fw-bold quicksand titulos_cards text-start me-5">
        La tecnología en la trazabilidad y seguimiento de pedidos.
      </h2>
      <p className="cuerpocardnoticias text-start me-5">
        El desperdicio de alimentos es un problema global que afecta a la cadena de suministro de frutas y verduras...
      </p>
    </div>


    <div className="col-md-3 col-sm-12 imagengrillanoticias h-100 mb-5">
      <img
        src={noti2}
        alt="ilustración noticias"
      />
    </div>
    <div className="col-md-3 col-sm-12 grillanoticias mb-5">
      <span className="titulocard d-block text-start">12/05/22</span>
      <span className="titulocard d-block text-start">TECNOLOGÍA</span>
      <h2 className="fw-bold quicksand titulos_cards text-start me-5">
        La tecnología en la trazabilidad y seguimiento de pedidos.
      </h2>
      <p className="cuerpocardnoticias text-start me-5">
        El desperdicio de alimentos es un problema global que afecta a la cadena de suministro de frutas y verduras...
      </p>
    </div>
  </div>
</div>


    )
}

export default UltimasNoticias