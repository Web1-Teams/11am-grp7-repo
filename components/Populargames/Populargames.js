import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import styles from './module.css';


function Populargames() {
  return (
    <section className="Popular-games">
      <h1>Most Popular</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}

        spaceBetween={30}
        loop={true}
        navigation={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      
      
      >
     <SwiperSlide>
          <img src="image/Rdr.jpg" alt="fifa"/>
          <div className="game-info">
            <h3 className="game-title">Fifa</h3>
            <p className="game-category">sport</p>
            <div className="game-rating">
              <span>7.7</span>
              <i className="bx bxs-star bx-tada bx-rotate-270"></i>
            </div>
          </div>
    </SwiperSlide>


   <SwiperSlide>
    <img src="image/battlefield.jpg" alt="Battlefield"/>
    <div className="game-info">
      <h3 className="game-title">Battlefield</h3>
      <p className="game-category">shooter</p>
      <div className="game-rating">
        <span>8.7</span>
        <i className="bx bxs-star bx-tada bx-rotate-270"></i>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <img src="image/fortnite.jpg" alt="Fortnite"/>
    <div className="game-info">
      <h3 className="game-title">Fortnite</h3>
      <p className="game-category">survival</p>
      <div className="game-rating">
        <span>8.3</span>
        <i className="bx bxs-star bx-tada bx-rotate-270"></i>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <img src="image/forza.jpg" alt="Forza"/>
    <div className="game-info">
      <h3 className="game-title">Forza</h3>
      <p className="game-category">Sport</p>
      <div className="game-rating">
        <span>9.2</span>
        <i className="bx bxs-star bx-tada bx-rotate-270"></i>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <img src="image/rdr2.jpg" alt="Red Dead Redemption 2"/>
    <div className="game-info">
      <h3 className="game-title">Red Dead Redemption 2</h3>
      <p className="game-category">open-world</p>
      <div className="game-rating">
        <span>8.7</span>
        <i className="bx bxs-star bx-tada bx-rotate-270"></i>
      </div>
    </div>
  </SwiperSlide>

      </Swiper>
    </section>
  );
}

export default Populargames;
