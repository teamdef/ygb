import React, { useState } from "react";
import styled from "styled-components";
import { RiMapPinLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { SkeletonCard, MapView, PhotoView } from "../room";

const Card = ({ item }) => {
  const [showMap, setShowMap] = useState(false);
  const [showImg, setShowImg] = useState(false);
  // 렌더링 전 후 구분 (스켈레톤 ui 출력을 위함)
  const [loading, setLoading] = useState(true);
  const isShowMap = () => {
    setShowMap(true);
  };
  const isShowImg = () => {
    setShowImg(true);
  };
  // 정수형 데이터 -> 문자열 변환 후 문자 사이 : 추가 ex) 10:10
  const time = (_num) => {
    if (_num != null) {
      let time = String(_num).replace(/(.{2})/, "$1:");
      return time;
    } else {
      return "없음";
    }
  };
  // 가격 정수형 데이터 반점 찍어주기
  const price = (_price) => {
    if (_price == null) return "가격 정보 없음";
    else return `${_price.toLocaleString("ko-KR")} 원 ~`;
  };
  return (
    <CardEl>
      {loading ? <SkeletonCard /> : ""}
      <div className="card-top" onClick={isShowImg}>
        <img
          className="card-img"
          src={item.image[0]}
          alt="thumbnail"
          onLoad={() => setLoading(false)}
        />
        <button className="img-btn">
          <img src="/img.png"></img>
        </button>
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
      <button className="move" onClick={() => window.open(item.url, "_blank")}>
        <span>숙소 정보 확인하기</span>
        <IoIosArrowForward size="22px" />
      </button>
    </CardEl>
  );
};

// styled-components
const CardEl = styled.div`
  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(100%);
    }
  }
  position: relative;
  display: block;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  height: 100%;
  box-shadow: 6px 12px 32px rgba(0, 0, 0, 0.08);
  @media screen and (max-width: 1024px) {
    .card-top,
    .skeleton-img {
      height: 218px !important;
    }
    .card-info {
      padding: 20px !important;
      .card-locate {
        margin: 0 0 0 auto !important;
        border: none !important;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .card-top,
    .skeleton-img {
      height: 200px !important;
    }
    .card-info {
      padding: 15px !important;
    }
  }
  .card-top {
    position: relative;
    display: block;
    width: 100%;
    height: 236px;
    overflow: hidden;
    cursor: pointer;
    .card-img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    button {
      position: absolute;
      display: block;
      right: 20px;
      bottom: 16px;
      width: 40px;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(4px);
      border-radius: 2px;
      height: 40px;
      border: 0;
      z-index: 1;
    }
  }
  .skeleton-img {
    position: absolute;
    display: block;
    width: 100%;
    height: 236px;
    background: linear-gradient(90deg, #e9e9ed 0%, #ffffffae 30%, #e9e9ed 60%);
    animation: loading 1.5s infinite linear;
  }

  .card-info {
    position: relative;
    display: block;
    padding: 24px;
    .card-name {
      position: relative;
      display: -webkit-box;
      margin-bottom: 3%;
      font-size: 2rem;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
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
