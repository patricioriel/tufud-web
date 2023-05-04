import React from "react";
import tiendanova from "../images/TiendaNova.png"
import supersaludable from "../images/Supersaludable.png"
import semilla from "../images/SemillaViva.png"

const Testimonios = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <h2 className="fw-bold quicksand display-4">Que dicen de nosotros?</h2>
        <div className="container my-5">
          <div className="row">
            <div className="row d-flex justify-content-center my-5">
              <div className="col-md-4">
                <div className="card bg-transparent shadow rounded border-0 h-100">
                  <div className="card-body text-center">
                    <img
                      className="card-img-top rounded-circle imgbeneficios fluid w-50"
                      src={supersaludable}
                      alt="supersaludable logo"
                    />
                    <div> 
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-quote d-flex" viewBox="0 0 16 16">
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/></svg>
                    </div>
                    <p className="text-center fw-bolder fs-4">Logramos un mejor control<br/> de stock y organizamos los<br/> pedidos de manera mas agil.</p>
                    <p className="text-center fs-6">Ahorro de tiempo y recursos. Reducción<br/> de desperdicios. La plataforma es<br/> colaborativa y mejora la comunicación<br/> con el equipo de trabajo. Los pedidos se<br/> realizan de manera rápida y precisa.</p>
                    <p className="text-start fw-bolder fs-4 mb-0">Angel Suarez</p>
                    <p className="text-start">Dueño en SuperSaludable</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div className="card bg-transparent shadow rounded border-0 h-100">
                  <div className="card-body text-center">
                    <img
                      className="card-img-top rounded-circle imgbeneficios fluid w-50"
                      src={tiendanova}
                      alt="tienda logo"
                    />
                    <div> 
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-quote d-flex" viewBox="0 0 16 16">
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/></svg>
                    </div>
                    <p className="text-center fw-bolder fs-4">Logramos un mejor control<br/> de stock y organizamos los<br/> pedidos de manera mas agil.</p>
                    <p className="text-center fs-6">Ahorro de tiempo y recursos. Reducción<br/> de desperdicios. La plataforma es<br/> colaborativa y mejora la comunicación<br/> con el equipo de trabajo. Los pedidos se<br/> realizan de manera rápida y precisa.</p>
                    <p className="text-start fw-bolder fs-4 mb-0">Fernanda Iglesias</p>
                    <p className="text-start">Dueño en Tienda Nova</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div className="card bg-transparent shadow rounded border-0 h-100">
                  <div className="card-body text-center">
                    <img
                      className="card-img-top rounded-circle imgbeneficios fluid w-50"
                      src={semilla}
                      alt="semilla logo"
                    />
                    <div> 
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-quote d-flex" viewBox="0 0 16 16">
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/></svg>
                    </div>
                    <p className="text-center fw-bolder fs-4">Logramos un mejor control<br/> de stock y organizamos los<br/> pedidos de manera mas agil.</p>
                    <p className="text-center fs-6">Ahorro de tiempo y recursos. Reducción<br/> de desperdicios. La plataforma es<br/> colaborativa y mejora la comunicación<br/> con el equipo de trabajo. Los pedidos se<br/> realizan de manera rápida y precisa.</p>
                    <p className="text-start fw-bolder fs-4 mb-0">Sebastian Estebanez</p>
                    <p className="text-start">Dueño en Semilla Viva</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonios;

