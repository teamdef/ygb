import React, { useState } from "react";
import styled from "styled-components";
import { HiLocationMarker } from "react-icons/hi";
import { BiImages, BiWalk } from "react-icons/bi";

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

  return (
    <CardEl>
      <span id="time">
        도보
        <em style={{ fontStyle: "normal", color: "red" }}> {item.time} </em>
        분 내 위치
        <BiWalk size="25" color="#000" />
      </span>
      <div className="info">
        <div className="info-left">
          <img src={item.image[0]} alt="thumbnail" onClick={isShowImg} />
          <BiImages size="30" color="#ccc" onClick={isShowImg} />
          <div className="check-time">
            <span className="tag">입실</span><span>{time(item.checkin)}</span>
          </div>
          <div className="check-time">
            <span className="tag">퇴실</span><span>{time(item.checkout)}</span>
          </div>
        </div>
        <div className="info-right">
          <strong id="name">{item.name}</strong>
          <span className="locate" onClick={isShowMap}>
            <HiLocationMarker />
            상세 위치 보기
          </span>
          {showMap ? (
            <MapView setShowMap={setShowMap} lat={item.lat} lng={item.lng} />
          ) : null}
          {showImg ? <PhotoView setShowImg={setShowImg} item={item} /> : null}
          <span className="price">
            <span className="tag" style={{fontSize:"1rem",marginRight:"10px"}}>최저가</span>
            <em style={{ fontStyle: "normal" }}>
              {item.price.toLocaleString("ko-KR")}
            </em>{" "}
            원~
          </span>
        </div>
      </div>

      <button className="move" onClick={() => window.open(item.url, "_blank")}>
        최저가 비교하기
      </button>
    </CardEl>
  );
};

// styled-components
const CardEl = styled.div`
  position: relative;
  font-weight: bold;
  padding: 10% 0;
  border-bottom: 1px solid #999;
  .tag {
    background-color: #eee;
    color: #777;
    padding: 2px 7px;
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
    margin-bottom: 5%;
    .info-left {
      flex-shrink: 0;
      position: relative;
      margin-right: 10%;
      > img {
        border-radius: 5px;
        width: 130px;
        height: 130px;
        margin-bottom: 10%;
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
        justify-content: space-around;
        font-size: 1rem;
        font-weight: bold;
        color: #777;
        align-items: center;
        margin-bottom: 5px;
        
      }
    }
    .info-right {
      flex-grow: 1;
      font-weight: bold;
      #name {
        margin-bottom: 20%;
        font-size: 1.5rem;
        display: block;
      }
      .locate {
        position: relative;
        display: block;
        padding-left: 30px;
        margin-bottom: 15%;
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
        white-space: nowrap;
      }
    }
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
  }
`;

export default Card;
