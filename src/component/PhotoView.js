import React from "react";
import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PhotoView = ({ setShowImg, item }) => {
  const itemList = item.image;
  return (
    <PhotoViewEl>
      <div className="photo-bar">
        <button className="close-btn">
          <GrFormClose
            size="30"
            onClick={() => {
              setShowImg(false);
            }}
          />
        </button>
      </div>
      <div className="photo-area">
        
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true, type: "fraction" }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide !")}
        >
          {itemList.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} className="img-item" />
            </SwiperSlide>
          ))}
        </Swiper>
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
  background-color: #eee;
  .photo-bar {
    position:relative;
    display:flex;
    justify-content: right;
    padding: 0 12.5%;
    height: 48px;
    background-color: #fff;
    .close-btn {
      position: relative;
      display:block;
      z-index: 1;
      background-color: transparent;
      z-index: 99;
      border: 0;
      path {
        stroke: #000;
      }
    }
  }
  .photo-area {
    position:relative;
    display: block;
    width:100%;
    height:calc(100% - 48px);
    .swiper-pagination {
      position:fixed;
      display:flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left:50%;
      transform: translateX(-50%);
      width: auto;
      height: 48px;
      z-index: 1;
      span {
        &:last-child {
          color: #00c2d6;
        }
        margin: 0 5px;
      }
    }
    .swiper {
      width: 100%;
      height: 100%;
      .img-item {
        position: relative;
        display: block;
        padding: 0 12.5%;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .swiper-button-next,
      .swiper-button-prev {
        color: #000;
      }
      .swiper-pagination {
        top: 0px;
        bottom: auto;
        font-size: 2rem;
        color: #000;
      }
    }
  }
  
`;
export default PhotoView;
