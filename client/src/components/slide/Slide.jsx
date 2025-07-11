import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slide.scss";

const Slide = ({
  items = [],
  renderItem,
  slidesPerView = 4,
  slidesPerGroup = 2,
  spaceBetween = 20,
  showPagination = true,
  breakpoints = {
    1280: { slidesPerView: 4, slidesPerGroup: 2 },
    1024: { slidesPerView: 3, slidesPerGroup: 2 },
    768: { slidesPerView: 2, slidesPerGroup: 1 },
    480: { slidesPerView: 1.5, slidesPerGroup: 1 },
    0: { slidesPerView: 1, slidesPerGroup: 1 },
  },
}) => {
  return (
    <div className="slideComponentWrapper">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        navigation
        pagination={showPagination ? { clickable: true } : false}
        loop
        breakpoints={breakpoints}
        className="slide-swiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {renderItem(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;
