import React, { useState } from "react";
import styled from "styled-components";
import { HiLocationMarker } from "react-icons/hi";
import MapView from "../pages/MapView";

const Card = ({ folder, item }) => {
  const [showMap, setShowMap] = useState(false);
  const isShow = () => {
    setShowMap(true);
  };
  // 정수형 -> 문자열 변환 후 문자 사이 : 추가 ex) 10:10
  const time = (_num) => {
    if(_num != null){
      let time = String(_num).replace(/(.{2})/,"$1:")
      return time;
    } else {
      return '없음';
    }
  };
  return (
    <CardEl>
      <div className="info">
        <img
          src={`assets/img/main/064/${folder}/${item.image[0]}`}
          alt="thumbnail"
        />
        <div className="text">
          <strong>{item.name}</strong>
          <span className="locate" onClick={isShow}>
            <HiLocationMarker />
            상세 위치 보기
          </span>
          {showMap ? (
            <MapView
              setShowMap={setShowMap}
              lat={item.lat}
              lng={item.lng}
            />
          ) : null}
          <span className="price">
            <em style={{ fontStyle: "normal" }}>
              {item.price.toLocaleString("ko-KR")}
            </em>{" "}
            원 ~
          </span>
        </div>
      </div>
      <div className="check">
        <span>입실 시간 {time(item.checkin)}</span>
        <span>퇴실 시간 {time(item.checkout)}</span>
      </div>
      <button
        className="move"
        onClick={() => window.open(item.url, "_blank")}
      >
        최저가 비교하기
      </button>
    </CardEl>
  );
};

// styled-components
const CardEl = styled.div`
  position: relative;
  padding: 10% 0;
  border-bottom: 1px solid #999;
  .info {
    display: flex;
    margin-bottom: 10%;
    > img {
      margin-right: 10%;
      width: 130px;
      border-radius: 5px;
      background-color: #ccc;
      height: 130px;
    }
    .text {
      flex-grow: 1;
      font-weight: bold;
      strong {
        margin-bottom: 20%;
        font-size: 1.5rem;
        display: block;
      }
      .locate {
        position: relative;
        display: block;
        padding-left: 30px;
        margin-bottom: 10%;
        font-size: 0.8rem;
        color: #ccc;
        svg {
          position: absolute;
          left: 0;
          top: -8px;
          width: 2em;
          height: 2em;
        }
      }
      .price {
        display: block;
        font-size: 1.3rem;
        text-align: right;
      }
    }
  }
  .check {
    position: relative;
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
  }
  .move {
    width: 100%;
    height: 50px;
    border: 0;
    border-radius: 5px;
    background-color: #a6dbe1;
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export default Card;
