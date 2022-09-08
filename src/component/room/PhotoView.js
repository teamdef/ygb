import React, { useState } from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
// swiper

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Thumbs,
  FreeMode,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const PhotoView = ({ setShowImg, item }) => {
  const itemList = item.image;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <PhotoViewEl>
      <div className="container">
        <div className="photo-bar">
          <button className="close-btn">
            <GrClose
              onClick={() => {
                setShowImg(false);
              }}
            />
          </button>
          <div className="swiper-pagination"></div>
        </div>
        <div className="photo-area">
          <h1>{item.name}</h1>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y, Thumbs, FreeMode]}
            slidesPerView={1}
            thumbs={{ swiper: thumbsSwiper }}
            navigation
            pagination={{
              clickable: true,
              type: "fraction",
              el: ".swiper-pagination",
            }}
            className="main-swiper"
            
          >
            {itemList.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} className="img-item" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={1}
            breakpoints={{
              768: {
                spaceBetween:8
              },
              1024: {
                spaceBetween:20
              },
            }}
            loopAdditionalSlides={10}
            draggable={false}
            touchRatio={0}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="nav-swiper"
          >
            {itemList.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} className="img-item" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </PhotoViewEl>
  );
};

const PhotoViewEl = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: block;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  padding: 0 12.5%;
  background: rgba(17, 17, 17, 0.9);
  .photo-bar {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 100px;
    .close-btn {
      position: relative;
      display: block;
      z-index: 1;
      background-color: transparent;
      z-index: 99;
      border: 0;
      svg {
        width: 40px;
        height: 40px;
        path {
          stroke: #fff;
        }
      }
    }
    .swiper-pagination {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      width: auto;
      bottom: auto;
      height: 100px;
      z-index: 1;
      color: #999 !important;
      span {
        &:first-child {
          color: #fff;
        }
        margin: 0 5px;
      }
    }
  }
  .photo-area {
    position: relative;
    display: block;
    h1 {
      margin-top: 2.2%;
      margin-bottom: 4.4%;
      padding: 0 7.5%;
      font-family: "Pretendard-Bold";
      color: #fff;
      font-size: 3.2rem;
    }
    .main-swiper {
      width: 100%;
      height: calc(100vh - 42vh);
      .img-item {
        position: relative;
        display: block;
        padding: 0 7.5%;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .swiper-button-next,
      .swiper-button-prev {
        color: #fff;
        width: 70px;
        height: 70px;
        background: rgba(17, 17, 17, 0.3);
      }
      .swiper-button-prev {
        left: 0;
      }
      .swiper-button-next {
        right: 0;
      }
    }
    .nav-swiper {
      margin-top: 4.4%;
      margin-left: 7.5%;
      width: 200px;
      height: 100px;
      overflow: visible;
      .swiper-slide {
        opacity: 0.3;
        overflow: hidden;
        cursor: pointer;
      }
      .swiper-slide-thumb-active {
        opacity: 1;
      }
      .img-item {
        position: relative;
        display: block;
        width: 100%;
        object-fit: contain;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    background: rgba(17, 17, 17, 1);
    .photo-bar {
      height: 56px;
      svg {
        width: 24px !important;
        height: 24px !important;
      }
      .swiper-pagination {
        height: 56px !important;
      }
    }
    .photo-area {
      h1 {
        padding: 0;
      }
      .main-swiper {
        .img-item {
          padding: 0;
        }
        .swiper-button-next,
        .swiper-button-prev {
          width: 56px;
          height: 56px;
          &::after {
            transform: scale(0.6);
          }
        }
      }
      .nav-swiper {
        margin-left: 0;
      }
    }
  }
  @media screen and (max-width: 480px) {
    padding: 0;
    .photo-bar {
      padding: 0 4%;
      
    }
    .photo-area {
      h1 {
        padding: 0 4%;
      }
      .nav-swiper {
        display: none;
      }
    }
  }
`;
export default PhotoView;
