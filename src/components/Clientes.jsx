import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import amelia from "../images/Amelia.png";
import semilla from "../images/SemillaViva.png";
import silvestre from "../images/SilvestreCafe.png";
import saludable from "../images/Supersaludable.png";
import picolina from "../images/Piccolina.png";
import tienda from "../images/TiendaNova.png";
import mercado from "../images/MercadoSilvestre.png";
import sd from "../images/sd.png";

const Clientes = () => {
  const slidesPerView = window.innerWidth < 768 ? 3 : 5;

  return (
    <div className="container-fluid">
      <div className="row">
        <h2 className="quicksand tituloswiper mb-5">
          Descubre algunos de los<span className="morado"> que confían</span> en
          nosotros
        </h2> 
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={50}
          autoplay={{
            delay: 1000,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className="mySwiper p-4 w-75"
        >
          <SwiperSlide>
            <img src={amelia} className="img-fluid" alt="Amelia Logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={semilla} className="img-fluid" alt="Semilla Logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={silvestre} className="img-fluid" alt="Silvestre Logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={saludable} className="img-fluid" alt="Saludable Logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={picolina} className="img-fluid" alt="Picolina Logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={tienda} className="img-fluid" alt="Tienda Logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mercado} className="img-fluid" alt="Mercado Logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sd} className="img-fluid" alt="Stores Deli" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Clientes;
