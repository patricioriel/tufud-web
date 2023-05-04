import amelia from "../images/Amelia.png";
import semilla from "../images/SemillaViva.png";
import silvestre from "../images/SilvestreCafe.png";
import saludable from "../images/Supersaludable.png";
import picolina from "../images/Piccolina.png";
import tienda from "../images/TiendaNova.png";
import mercado from "../images/MercadoSilvestre.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Clientes = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Swiper
          slidesPerView={5}
          spaceBetween={50}
          autoplay={{
            delay: 1000,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className="mySwiper p-4"
        >
          <SwiperSlide><img src={amelia} className="img-fluid" alt="Amelia Logo" /></SwiperSlide>
          <SwiperSlide><img src={semilla} className="img-fluid" alt="Semilla Logo" /></SwiperSlide>
          <SwiperSlide><img src={silvestre} className="img-fluid" alt="Silvestre Logo" /></SwiperSlide>
          <SwiperSlide><img src={saludable} className="img-fluid" alt="Saludable Logo" /></SwiperSlide>
          <SwiperSlide><img src={picolina} className="img-fluid" alt="Picolina Logo" /></SwiperSlide>
          <SwiperSlide><img src={tienda} className="img-fluid" alt="Tienda Logo" /></SwiperSlide>
          <SwiperSlide><img src={mercado} className="img-fluid" alt="Mercado Logo" /></SwiperSlide>
        </Swiper>
      </div>    
    </div>
  );
}

export default Clientes;
