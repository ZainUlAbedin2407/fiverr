import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./Slide.scss";

const Slide = ({
  items = [], //  jo bhi array bhejna ho
  renderItem, // ek function jo har item ko render kare
  slidesPerView = 4, // kitni slides dikhein
  slidesPerGroup = 2, // ek arrow click pe kitni move hon
  spaceBetween = 20, // space between slides
  showPagination = true,
}) => {
  return (
    <div className="slide">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          slidesPerGroup={2}
          navigation
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            1280: { slidesPerView: 4, slidesPerGroup: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 2 },
            768: { slidesPerView: 2, slidesPerGroup: 1 },
            480: { slidesPerView: 1.3, slidesPerGroup: 1 }, 
            0: { slidesPerView: 1.1, slidesPerGroup: 1 }, 
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;
