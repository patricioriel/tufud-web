import React from "react";
import tiendanova from "../images/TiendaNova.png"
import supersaludable from "../images/Supersaludable.png"
import sd from "../images/sd.png"

const Testimonios = () => {
  return (
    <>
      <div className="container-fluid my-5" >
        <h2 className="quicksand subtitulo quedicen">Que dicen de nosotros</h2>
        <div className="container my-5">
          <div className="row centrartestimonios">
            <div className="row d-flex justify-content-center my-5 margentestimonios">
              <div className="col-md-4">
                <div className="card bg-white border-0 h-100 cardtestimonios">
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
                    <p className="text-start titulos_cards_testimonios">La plataforma es muy útil y efectiva a la hora de hacer muchos pedidos a la vez.</p>
                    <p className="text-start cuerpocard_testimonios">La inclusión de fotos de los productos nos ha ayudado significativamente a acelerar el proceso de compra. El uso de la plataforma es simple y práctico. El servicio técnico es excelente.</p>
                    <p className="text-start titulos_cards_testimonios mb-0">Pompi Huarte</p>
                    <p className="text-start subtitulos_cards">Dueña en SuperSaludable</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div className="card bg-white border-0 h-100 cardtestimonios">
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
                    <p className="text-start titulos_cards_testimonios">Facilitó enormemente la distribución de nuestra mercadería a otras tiendas.</p>
                    <p className="text-start cuerpocard_testimonios">La función para cargar imágenes en el catálogo es muy intuitiva. También es muy útil  la división de catálogos por Proveedor. Todas las operaciones se realizan con mayor eficacia y rapidez.</p>
                    <p className="text-start titulos_cards_testimonios mb-0">Jorge Jimenez</p>
                    <p className="text-start subtitulos_cards">Dueño en Tienda Nova</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div className="card bg-white border-0 h-100 cardtestimonios">
                  <div className="card-body text-center">
                    <img
                      className="card-img-top rounded-circle imgbeneficios fluid w-50"
                      src={sd}
                      alt="Stories Deli"
                    />
                    <div> 
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-quote d-flex" viewBox="0 0 16 16">
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/></svg>
                    </div>
                    <p className="text-start titulos_cards_testimonios">Logramos un mejor control de stock y organizamos los pedidos de manera mas ágil.</p>
                    <p className="text-start cuerpocard_testimonios">El tiempo que se dedica a hacer los pedidos bajo considerablemente. Es muy intuitiva y se aprende enseguida. Obtiene resultados en cuestión de clics. La recomiendo sin dudas!</p>
                    <p className="text-start titulos_cards_testimonios mb-0">Lucía Alvarez</p>
                    <p className="text-start subtitulos_cards">Dueña en Stories Deli</p>
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

