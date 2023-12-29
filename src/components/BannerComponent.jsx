import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BannerComponent = () => {
  return (
    <div id="banner">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="img/banner/NEWS-21-21.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/banner/WEBSITE_III_Bisnis_Indonesia-25-25.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/banner/WEBSITE_III_news-22.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerComponent;