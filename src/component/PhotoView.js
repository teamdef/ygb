import React from "react";
import styled from "styled-components";
import {GrClose} from "react-icons/gr"
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PhotoView = ({ setShowImg, item }) => {
  const itemList = item.image;
  console.log(item);
  return (
    <PhotoViewEl>
      <div
        id="bg"
        onClick={() => {
          setShowImg(false);
        }}
      ></div>
      <div className="photo-area">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true, type: "fraction"}}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide !")}
        >
          {itemList.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} className="img-item" />
            </SwiperSlide>
          ))}
        </Swiper>
      <button className="close-btn"><GrClose size="24" onClick={() => {setShowImg(false)}}/></button>
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
  z-index: 999;
  .photo-area {
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    .swiper {
      width: 400px;
      height: 400px;
      .img-item {
        position: relative;
        display: block;
        padding:30px 50px;
        width:100%;
        height:100%;
        object-fit: contain;
      }
      .swiper-button-next, 
      .swiper-button-prev {
        color:#a6dbe1;
      } 
      .swiper-pagination {
        top: 0px;
        bottom: auto;
        font-size: 1.2rem;
        color: #a6dbe1;
      }
    }
  }
  .close-btn {
    position: absolute;
    z-index: 1;      
    bottom: -20%;
    right: 50%;
    transform:translateX(50%);
    path {
      stroke: white;
    }
  }
  #bg {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
export default PhotoView;
