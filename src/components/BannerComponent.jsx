import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BannerComponent = () => {
  return (
    <div id="banner">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="img/banner/slider-1.jpg" alt="" />
          <div className="title">
            <div className="line"></div>
            <h1>Green Plantation for Better Quality of Life PreviousNext</h1>
            <div>
              <a href="#" className="btn">
                Learn More
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/banner/slider-2.jpg" alt="" />
          <div className="title">
            <div className="line"></div>
            <h1>Mayong Merapun Forest Multifunctional Conservation Area</h1>
            <div>
              <a href="#" className="btn">
                Learn More
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerComponent;
