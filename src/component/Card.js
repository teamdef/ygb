import React, { useState } from "react";
import styled from "styled-components";
import { HiLocationMarker } from "react-icons/hi";
import { BiImages, BiWalk } from "react-icons/bi";

import MapView from "../pages/MapView";
import PhotoView from "./PhotoView";

const Card = ({ item, count_5m, count_10m, count_15m }) => {
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
    <CardEl>
      {/* <span id="time">
        도보
        <em style={{ fontStyle: "normal", color: "red" }}> {item.time} </em>
        분 내 위치
        <BiWalk size="25" color="#000" />
      </span> */}
      {count_5m ? (
        <h1>
          도보 <span>5</span> 분 내 위치
        </h1>
      ) : (
        ""
      )}
      {count_10m ? (
        <h1>
          도보 <span>10</span> 분 내 위치
        </h1>
      ) : (
        ""
      )}
      {count_15m ? (
        <h1>
          도보 <span>15</span> 분 내 위치
        </h1>
      ) : (
        ""
      )}
      <div className="info">
        <div className="info-left">
          <img src={item.image[0]} alt="thumbnail" onClick={isShowImg} />
          <BiImages size="30" color="#ccc" onClick={isShowImg} />
          <div className="check-time">
            <span className="tag">체크인</span>
            <span>{time(item.checkin)}</span>
          </div>
          <div className="check-time">
            <span className="tag">체크아웃</span>
            <span>{time(item.checkout)}</span>
          </div>
        </div>
        <div className="info-right">
          <strong id="name">{item.name}</strong>
          <span className="locate" onClick={isShowMap}>
            <HiLocationMarker />
            상세 위치 보기
            {/* 도보 {item.time} 분 도착 */}
          </span>
          {showMap ? (
            <MapView setShowMap={setShowMap} lat={item.lat} lng={item.lng} />
          ) : null}
          {showImg ? <PhotoView setShowImg={setShowImg} item={item} /> : null}
          <span className="price">
            <span
              className="tag"
            >
              최저가
            </span>
            <em style={{ fontStyle: "normal" }}>{price(item.price)}</em>{" "}
          </span>
          <button
            className="move"
            onClick={() => window.open(item.url, "_blank")}
          >
            실시간 가격 보기
          </button>
        </div>
      </div>
    </CardEl>
  );
};

// styled-components
const CardEl = styled.div`
  position: relative;
  font-weight: bold;
  padding-bottom: 10%;
  h1 {
    position:relative;
    padding: 10% 20px;
    padding-bottom: 0;
    text-align: center;
    border-top: 2px solid #eee;
    font-size: 1.5rem;
    color: #000;
    span {
      font-size: 2rem;
      color: #00baca;
      font-weight: bold;
    }
  }
  .tag {
    background-color: #eee;
    color: #777;
    padding: 2px 7px;
    font-size: 1rem;
    border-radius: 5px;
  }
  #time {
    position:relative;
    display:inline-block;
    padding: 10px 10px 10px 30px;
    border-radius: 10px;
    margin-bottom: 5%;
    svg {
      position:absolute;
      display:block;
      top:45%;
      left: 0px;
      transform:translateY(-50%);
    }
  }
  .info {
    display: flex;
    padding-top: 10%;
    margin-bottom: 5%;
    .info-left {
      flex-shrink: 0;
      position: relative;
      margin-right: 10%;
      > img {
        border-radius: 5px;
        width: 130px;
        height: 130px;
        margin-bottom: 20%;
        object-fit: cover;
      }
      > svg {
        position: absolute;
        display: block;
        top: 100px;
        right: 0;
        padding: 3px;
        border-radius: 5px;
        background-color: rgba(0,0,0,.5);
        &::before {
          content:''
          position:absolute;
          display:block;
          width: 24px;
          height: 24px;
        }
      }
      .check-time {
        position: relative;
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        color: #777;
        align-items: center;
        margin-bottom: 10px;
      }
    }
    .info-right {
      flex-grow: 1;
      font-weight: bold;
      #name {
        font-size: 1.7rem;
        height: 60px;
        overflow: hidden;
        margin-bottom: 10%;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .locate {
        position: relative;
        display: block;
        padding-left: 30px;
        margin-bottom: 10%;
        font-size: 0.8rem;
        font-family: auto;
        font-weight: 600;
        color: #007aff;
        svg {
          position: absolute;
          left: 0;
          top: -8px;
          width: 2em;
          height: 2em;
        }
      }
      .price {
        position: relative;
        margin-bottom: 10%;
        display: flex;
        justify-content: space-between;
        font-size: 1.6rem;
        align-items: center;
        white-space: nowrap;
      }
      .move {
        width: 100%;
        height: 50px;
        border: 0;
        border-radius: 5px;
        background-color: #00baca;
        color: #fff;
        font-weight: bold;
        font-size: 1.5rem;
        font-family: 'GangwonEdu_OTFBoldA';
      }
    }
  }
  
  
`;

export default Card;
