import React, { useState } from "react";
import styled from "styled-components";
import { RiMapPinLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

import MapView from "../pages/MapView";
import PhotoView from "./PhotoView";

const Card = ({ item }) => {
  const [showMap, setShowMap] = useState(false);
  const [showImg, setShowImg] = useState(false);
  const isShowMap = () => {
    setShowMap(true);
  };
  const isShowImg = () => {
    setShowImg(true);
  };
  // 정수형 -> 문자열 변환 후 문자 사이 : 추가 ex) 10:10
  const time = (_num) => {
    if (_num != null) {
      let time = String(_num).replace(/(.{2})/, "$1:");
      return time;
    } else {
      return "없음";
    }
  };
  const price = (_price) => {
    if (_price == null) return "가격 정보 없음";
    else return `${_price.toLocaleString("ko-KR")} 원 ~`;
  };
  return (
    <>
      <CardEl>
        <div className="card-img">
          <img src={item.image[0]} alt="thumbnail" onClick={isShowImg} />
        </div>
        <div className="card-info">
          <strong className="card-name">{item.name}</strong>
          <div className="card-check">
            <span className="tag">체크인</span>
            <span> : {time(item.checkin)}</span>
            {" | "}
            <span className="tag"> 체크아웃</span>
            <span> : {time(item.checkout)}</span>
          </div>
          <button className="card-locate" onClick={isShowMap}>
            <RiMapPinLine color="#205CFF" size="22px" />
            상세 위치 보기
          </button>
          <div className="price">
            <span className="tag">최저가 </span>
            <em style={{ fontStyle: "normal" }}>{price(item.price)}</em>{" "}
          </div>
        </div>

        <div className="info-right">
          {showMap ? (
            <MapView setShowMap={setShowMap} lat={item.lat} lng={item.lng} />
          ) : null}
          {showImg ? <PhotoView setShowImg={setShowImg} item={item} /> : null}
        </div>
        <button
          className="move"
          onClick={() => window.open(item.url, "_blank")}
        >
          <span>실시간 가격 보기</span>
          <IoIosArrowForward size="22px" />
        </button>
      </CardEl>
    </>
  );
};

// styled-components
const CardEl = styled.div`
  position: relative;
  display: block;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  height: 100%;
  box-shadow: 6px 12px 32px rgba(0, 0, 0, 0.08);
  @media screen and (max-width: 1024px) {
    .card-img {
      height: 218px !important;
    }
    .card-info {
      padding: 20px !important;
      .card-locate {
        margin: 0 0 0 auto !important;
        border: none !important;
      }
      .card-name {
        height: 40px !important;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .card-img {
      height: 200px !important;
    }
    .card-info {
      padding: 15px !important;
    }
  }
  .card-img {
    position: relative;
    display: block;
    width: 100%;
    height: 236px;
    overflow: hidden;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-info {
    position: relative;
    display: block;
    padding: 24px;
    .card-name {
      position: relative;
      display: block;
      margin-bottom: 3%;
      font-size: 2rem;
    }
    .card-check {
      position: relative;
      display: block;
      font-size: 1.6rem;
      font-family: "Pretendard-Regular";
      color: #e5e5ec;
      span {
        color: #767676;
      }
      .tag {
        color: #000;
      }
    }
    .card-locate {
      position: relative;
      display: flex;
      font-family: "Pretendard-SemiBold";
      align-items: center;
      height: 36px;
      padding: 0 10px;
      font-size: 1.4rem;
      margin: 3% 0 3% auto;
      border: 1px solid #e5e5ec;
      border-radius: 4px;
      background-color: transparent;
      color: #205cff;
      svg {
        margin-right: 8px;
      }
    }
    .price {
      text-align: right;
      font-size: 1.6rem;
      font-family: "Pretendard-Regular";
      em {
        font-family: "Pretendard-ExtraBold";
        font-size: 2.4rem;
      }
    }
  }
  .move {
    position: relative;
    display: flex;
    font-family: "Pretendard-Bold";
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 56px;
    border: 0;
    font-size: 1.6rem;
    color: #fff;
    background-color: #00c2d6;
    svg {
      margin-left: 5px;
    }
  }
`;

export default Card;
