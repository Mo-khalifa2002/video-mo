import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./testemonials.scss";
import { testemonials } from "../../Data";
import { BsStarFill } from "react-icons/bs";

// import required modules
import { FreeMode, Pagination } from "swiper";

const Testemonilas = () => {
  return (
    <div className="testemonials">
      <h1 className="slider-header text-center mb-4">Testemonials</h1>
      <div className="container">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {testemonials.map((test) => (
            <div className="test-card">
              <SwiperSlide>
                <div className="slide-swiper-container">
                  <div className="slide-image-container">
                    <div className="slide-image text-center">
                      <img src={test.image} alt={test.name} />
                    </div>
                  </div>
                  <div className="slide-name text-center">{test.name}</div>
                  <div className="slide-country text-center">
                    {test.country}
                  </div>
                  <div className="slide-rating text-center">
                    <BsStarFill
                      style={{
                        color: "orange",
                        marginRight: "4px",
                        marginBottom: "9px",
                        marginTop: "9px",
                      }}
                      className="slide-rating-icon"
                    />
                    <BsStarFill
                      style={{
                        color: "orange",
                        marginRight: "4px",
                        marginBottom: "9px",
                        marginTop: "9px",
                      }}
                      className="slide-rating-icon"
                    />
                    <BsStarFill
                      style={{
                        color: "orange",
                        marginRight: "4px",
                        marginBottom: "9px",
                        marginTop: "9px",
                      }}
                      className="slide-rating-icon"
                    />
                    <BsStarFill
                      style={{
                        color: "orange",
                        marginRight: "4px",
                        marginBottom: "9px",
                        marginTop: "9px",
                      }}
                      className="slide-rating-icon"
                    />
                    <BsStarFill
                      style={{
                        color: "orange",
                        marginRight: "4px",
                        marginBottom: "9px",
                        marginTop: "9px",
                      }}
                      className="slide-rating-icon"
                    />
                  </div>
                  <div className="slide-swiper-content">
                    <div className="slide-desc">{test.desc}</div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testemonilas;
